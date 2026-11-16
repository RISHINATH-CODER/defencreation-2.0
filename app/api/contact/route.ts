import { NextRequest, NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase/server";

// Simple in-memory rate limiter: max 5 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown-ip";
    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, resetTime: now + 10 * 60 * 1000 };

    if (now > rateData.resetTime) {
      rateData.count = 0;
      rateData.resetTime = now + 10 * 60 * 1000;
    }

    if (rateData.count >= 5) {
      return NextResponse.json(
        { error: "Too many requests. Please try again after a few minutes." },
        { status: 429 }
      );
    }

    rateData.count += 1;
    rateLimitMap.set(ip, rateData);

    const body = await req.json();
    const { name, email, phone, organization, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Full Name is required (minimum 2 characters)." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid Email Address is required." }, { status: 400 });
    }

    if (!subject || typeof subject !== "string") {
      return NextResponse.json({ error: "Please select a valid subject." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ error: "Message is required (minimum 5 characters)." }, { status: 400 });
    }

    // Try storing in Supabase if configured
    try {
      const supabase = getServiceSupabase();
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        const { error: dbError } = await supabase.from("contact_enquiries").insert([
          {
            full_name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone ? phone.trim() : null,
            organization: organization ? organization.trim() : null,
            subject: subject.trim(),
            message: message.trim(),
            ip_address: ip,
            user_agent: req.headers.get("user-agent") || null,
          },
        ]);

        if (dbError) {
          console.warn("Supabase database insert notice:", dbError.message);
        }
      }
    } catch (dbErr) {
      console.warn("Database storage exception (fallback to verified submission):", dbErr);
    }

    console.log("Contact Enquiry Received:", {
      name,
      email,
      phone,
      organization,
      subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact API Exception:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
