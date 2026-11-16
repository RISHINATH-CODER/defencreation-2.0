import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ServiceCard, { ServiceItemProps } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Other Services - Cybersecurity for Every Sector - Defencreation",
  description: "Tailored security solutions for diverse industries across India: banking, startups, healthcare, retail, education, NGOs, and more.",
};

export default function ServicesPage() {
  const services: ServiceItemProps[] = [
    {
      id: "banks",
      icon: "🏦",
      title: "Small Banks",
      description: "Protect online banking platforms and safeguard customer financial data.",
      detailsTitle: "Comprehensive Banking Security",
      features: [
        { name: "Online Banking Protection", description: "Multi-layer security for internet banking portals with real-time threat detection" },
        { name: "Transaction Monitoring", description: "AI-powered fraud detection for suspicious transactions and unauthorized access" },
        { name: "Customer Data Encryption", description: "End-to-end encryption of sensitive financial and personal information" },
        { name: "Compliance Support", description: "RBI guidelines compliance and regular security audits" },
        { name: "Mobile Banking Security", description: "Secure authentication and session management for banking apps" },
        { name: "ATM Network Protection", description: "Safeguard ATM systems against skimming and malware attacks" },
      ],
    },
    {
      id: "startups",
      icon: "🚀",
      title: "Startups",
      description: "Affordable cybersecurity packages designed for new businesses, ensuring secure growth.",
      detailsTitle: "Startup Security Essentials",
      features: [
        { name: "Scalable Solutions", description: "Security infrastructure that grows with your business needs" },
        { name: "Budget-Friendly Packages", description: "Affordable monthly plans with no hidden costs" },
        { name: "Cloud Security", description: "Protection for AWS, Azure, and Google Cloud deployments" },
        { name: "Code Security Audits", description: "Vulnerability assessment of your applications and APIs" },
        { name: "Employee Training", description: "Cybersecurity awareness programs for your team" },
        { name: "Incident Response", description: "24/7 support for security incidents and breaches" },
      ],
    },
    {
      id: "apps",
      icon: "📱",
      title: "Startup Apps & Websites",
      description: "Data security solutions to prevent breaches and maintain customer trust.",
      detailsTitle: "Application & Web Security",
      features: [
        { name: "Penetration Testing", description: "Comprehensive security testing to identify vulnerabilities" },
        { name: "API Security", description: "Protection against API abuse, injection attacks, and data leaks" },
        { name: "SSL/TLS Implementation", description: "Secure communication channels with proper certificate management" },
        { name: "DDoS Protection", description: "Shield your services from distributed denial-of-service attacks" },
        { name: "Database Security", description: "Encryption and access control for sensitive data storage" },
        { name: "Regular Updates", description: "Continuous monitoring and patching of security vulnerabilities" },
      ],
    },
    {
      id: "retail",
      icon: "🛒",
      title: "Retail Shops",
      description: "Point-of-sale (POS) and billing system protection against fraud and cyber threats.",
      detailsTitle: "Retail Security Solutions",
      features: [
        { name: "POS System Security", description: "Protection against card skimming and payment fraud" },
        { name: "Inventory Management", description: "Secure systems to prevent data manipulation and theft" },
        { name: "Customer Data Protection", description: "Safeguard loyalty program and customer information" },
        { name: "Network Security", description: "Secure WiFi and internal networks from unauthorized access" },
        { name: "CCTV Integration", description: "Secure storage and access control for surveillance footage" },
        { name: "Payment Gateway Security", description: "PCI-DSS compliant payment processing" },
      ],
    },
    {
      id: "education",
      icon: "🎓",
      title: "Schools & Colleges",
      description: "Secure management of student records, examination portals, and online learning platforms.",
      detailsTitle: "Educational Institution Security",
      features: [
        { name: "Student Data Protection", description: "Secure storage of academic records and personal information" },
        { name: "Examination Portal Security", description: "Prevent cheating, data leaks, and unauthorized access" },
        { name: "Learning Management Systems", description: "Secure online classrooms and e-learning platforms" },
        { name: "Campus Network Security", description: "WiFi security and content filtering for safe browsing" },
        { name: "Parent Portal Protection", description: "Secure communication channels between parents and institutions" },
        { name: "Cyberbullying Prevention", description: "Monitoring tools to detect and prevent online harassment" },
      ],
    },
    {
      id: "medical",
      icon: "🏥",
      title: "Medical Labs & Clinics",
      description: "Protection of sensitive patient health records and compliance with health data regulations.",
      detailsTitle: "Healthcare Data Security",
      features: [
        { name: "Patient Record Protection", description: "HIPAA-compliant encryption of medical records" },
        { name: "Lab Management Systems", description: "Secure test results and diagnostic data" },
        { name: "Appointment System Security", description: "Protection of patient scheduling and contact information" },
        { name: "Medical Device Security", description: "IoT security for connected medical equipment" },
        { name: "Telemedicine Protection", description: "Secure video consultations and remote diagnosis" },
        { name: "Regulatory Compliance", description: "Meet healthcare data protection standards and audits" },
      ],
    },
    {
      id: "servers",
      icon: "🖥️",
      title: "Personal Servers",
      description: "Safeguard private backups and hosted data against unauthorized access.",
      detailsTitle: "Personal Server Protection",
      features: [
        { name: "Server Hardening", description: "Configure and secure your server against common attacks" },
        { name: "Backup Security", description: "Encrypted backups with secure off-site storage" },
        { name: "Access Control", description: "Multi-factor authentication and role-based permissions" },
        { name: "Firewall Configuration", description: "Custom firewall rules to block malicious traffic" },
        { name: "Intrusion Detection", description: "Real-time monitoring for suspicious activities" },
        { name: "Regular Audits", description: "Periodic security assessments and vulnerability scans" },
      ],
    },
    {
      id: "ngos",
      icon: "🤝",
      title: "NGOs",
      description: "Secure donor and social data to maintain trust and confidentiality.",
      detailsTitle: "NGO Data Security",
      features: [
        { name: "Donor Database Protection", description: "Secure storage of donor information and contribution records" },
        { name: "Beneficiary Data Security", description: "Protect sensitive information of program beneficiaries" },
        { name: "Financial Transparency", description: "Secure accounting systems and audit trails" },
        { name: "Communication Security", description: "Encrypted email and messaging for sensitive discussions" },
        { name: "Website Protection", description: "Secure donation portals and volunteer registration systems" },
        { name: "Affordable Pricing", description: "Special discounted rates for non-profit organizations" },
      ],
    },
    {
      id: "ecommerce",
      icon: "🛍️",
      title: "E-commerce Sellers",
      description: "Fraud prevention and secure handling of payment and customer data.",
      detailsTitle: "E-commerce Security Solutions",
      features: [
        { name: "Payment Security", description: "PCI-DSS compliant payment processing and fraud detection" },
        { name: "Customer Data Protection", description: "Secure storage of addresses, contact details, and preferences" },
        { name: "Order Management Security", description: "Prevent order manipulation and unauthorized access" },
        { name: "Marketplace Integration", description: "Secure API connections with Amazon, Flipkart, etc." },
        { name: "Inventory Protection", description: "Safeguard product data and pricing information" },
        { name: "Review System Security", description: "Prevent fake reviews and rating manipulation" },
      ],
    },
    {
      id: "freelancers",
      icon: "💼",
      title: "Freelancers",
      description: "Protection of client files and confidential business data.",
      detailsTitle: "Freelancer Security Package",
      features: [
        { name: "Client Data Protection", description: "Secure storage and sharing of client projects and files" },
        { name: "Secure Communication", description: "Encrypted email and file transfer for confidential work" },
        { name: "Device Security", description: "Protection for laptops and mobile devices used for work" },
        { name: "Cloud Storage Security", description: "Secure Dropbox, Google Drive, and OneDrive integration" },
        { name: "Contract Protection", description: "Secure storage of agreements and legal documents" },
        { name: "Personal Branding", description: "Website and portfolio security to maintain professional image" },
      ],
    },
    {
      id: "government",
      icon: "🏛️",
      title: "Government Offices",
      description: "Secure rural and urban data, communication, and official records.",
      detailsTitle: "Government Data Security",
      features: [
        { name: "Citizen Data Protection", description: "Secure storage of public records and personal information" },
        { name: "E-Governance Security", description: "Protection for online portals and digital services" },
        { name: "Document Management", description: "Secure archival and retrieval of official documents" },
        { name: "Communication Security", description: "Encrypted channels for inter-departmental communication" },
        { name: "Compliance", description: "Meet government data protection standards and regulations" },
        { name: "Disaster Recovery", description: "Backup and recovery plans for critical government data" },
      ],
    },
    {
      id: "financial",
      icon: "💰",
      title: "Financial Advisors",
      description: "Protection of sensitive contracts and investment-related information.",
      detailsTitle: "Financial Advisory Security",
      features: [
        { name: "Client Portfolio Protection", description: "Secure storage of investment portfolios and financial plans" },
        { name: "Contract Security", description: "Encrypted storage of agreements and legal documents" },
        { name: "Communication Encryption", description: "Secure channels for discussing sensitive financial matters" },
        { name: "Regulatory Compliance", description: "Meet SEBI and financial data protection requirements" },
        { name: "Transaction Security", description: "Secure processing of client transactions and transfers" },
        { name: "Client Portal Protection", description: "Secure online access for clients to view their portfolios" },
      ],
    },
    {
      id: "realestate",
      icon: "🏘️",
      title: "Real Estate Agencies",
      description: "Secure property documents, transactions, and client records.",
      detailsTitle: "Real Estate Data Security",
      features: [
        { name: "Property Document Protection", description: "Secure storage of deeds, agreements, and legal papers" },
        { name: "Client Database Security", description: "Protection of buyer and seller information" },
        { name: "Transaction Security", description: "Secure handling of property deals and financial transactions" },
        { name: "CRM Protection", description: "Secure customer relationship management systems" },
        { name: "Virtual Tour Security", description: "Protection of property images and virtual walkthroughs" },
        { name: "Listing Portal Security", description: "Secure integration with property listing websites" },
      ],
    },
    {
      id: "legal",
      icon: "⚖️",
      title: "Legal Firms",
      description: "Safeguard case files, legal documents, and confidential communications.",
      detailsTitle: "Legal Practice Security",
      features: [
        { name: "Case File Protection", description: "Encrypted storage of sensitive case documents and evidence" },
        { name: "Client Confidentiality", description: "Attorney-client privilege protection with secure communication" },
        { name: "Document Management", description: "Secure archival and retrieval of legal documents" },
        { name: "Court Filing Security", description: "Secure e-filing and digital signature management" },
        { name: "Research Database Protection", description: "Secure access to legal research and precedents" },
        { name: "Compliance", description: "Meet legal industry data protection and confidentiality standards" },
      ],
    },
    {
      id: "events",
      icon: "🎉",
      title: "Event Managers",
      description: "Protect client, vendor, and event-related data from cyber threats.",
      detailsTitle: "Event Management Security",
      features: [
        { name: "Client Data Protection", description: "Secure storage of event details and client preferences" },
        { name: "Vendor Database Security", description: "Protection of vendor contacts and contract information" },
        { name: "Payment Security", description: "Secure handling of deposits and event payments" },
        { name: "Guest List Protection", description: "Confidential management of attendee information" },
        { name: "Booking System Security", description: "Secure online booking and registration portals" },
        { name: "Media Protection", description: "Secure storage of event photos and videos" },
      ],
    },
    {
      id: "manufacturing",
      icon: "🏭",
      title: "Manufacturing SMEs",
      description: "Protection of IoT systems and trade secrets critical to operations.",
      detailsTitle: "Manufacturing Security Solutions",
      features: [
        { name: "IoT Device Security", description: "Protection of connected machinery and sensors" },
        { name: "Trade Secret Protection", description: "Secure storage of proprietary designs and processes" },
        { name: "Supply Chain Security", description: "Secure communication with suppliers and distributors" },
        { name: "Production Data Protection", description: "Safeguard manufacturing data and quality records" },
        { name: "Industrial Control Systems", description: "Security for SCADA and automation systems" },
        { name: "Intellectual Property", description: "Protection of patents, designs, and innovations" },
      ],
    },
    {
      id: "hotels",
      icon: "🏨",
      title: "Hotels & Lodges",
      description: "Security for booking systems and customer identification data.",
      detailsTitle: "Hospitality Security Solutions",
      features: [
        { name: "Booking System Security", description: "Protection of online reservations and payment data" },
        { name: "Guest Data Protection", description: "Secure storage of ID proofs and personal information" },
        { name: "PMS Security", description: "Protection of property management systems" },
        { name: "WiFi Security", description: "Secure guest internet access with proper isolation" },
        { name: "Payment Processing", description: "PCI-DSS compliant payment gateway security" },
        { name: "Review Management", description: "Protection against fake reviews and reputation attacks" },
      ],
    },
    {
      id: "logistics",
      icon: "🚚",
      title: "Logistics Companies",
      description: "Secure GPS tracking, delivery data, and client information.",
      detailsTitle: "Logistics Security Solutions",
      features: [
        { name: "GPS Tracking Security", description: "Protection of vehicle tracking and route data" },
        { name: "Delivery Data Protection", description: "Secure handling of shipment and delivery information" },
        { name: "Client Database Security", description: "Protection of customer and consignee details" },
        { name: "Fleet Management", description: "Secure fleet management and driver communication systems" },
        { name: "Warehouse Security", description: "Protection of inventory management systems" },
        { name: "API Security", description: "Secure integration with e-commerce and tracking platforms" },
      ],
    },
    {
      id: "agritech",
      icon: "🌾",
      title: "Agri-Tech Startups",
      description: "Protection of farm data and IoT sensor networks.",
      detailsTitle: "Agricultural Technology Security",
      features: [
        { name: "Farm Data Protection", description: "Secure storage of crop data, yield information, and analytics" },
        { name: "IoT Sensor Security", description: "Protection of soil sensors, weather stations, and monitoring devices" },
        { name: "Farmer Database Security", description: "Secure management of farmer profiles and land records" },
        { name: "Supply Chain Protection", description: "Secure tracking from farm to market" },
        { name: "Mobile App Security", description: "Protection of farmer-facing mobile applications" },
        { name: "Drone Security", description: "Secure operation and data collection from agricultural drones" },
      ],
    },
    {
      id: "creative",
      icon: "🎨",
      title: "Creative Studios",
      description: "Protection of design files, intellectual property, and project data.",
      detailsTitle: "Creative Industry Security",
      features: [
        { name: "Design File Protection", description: "Secure storage of graphics, videos, and creative assets" },
        { name: "Intellectual Property", description: "Protection against theft and unauthorized use of designs" },
        { name: "Client Project Security", description: "Secure collaboration and file sharing with clients" },
        { name: "Version Control Security", description: "Protected backup of project iterations and revisions" },
        { name: "Rendering Farm Security", description: "Protection of cloud rendering and processing systems" },
        { name: "Portfolio Protection", description: "Secure showcase of work with watermarking and access control" },
      ],
    },
  ];

  const trustPillars = [
    {
      icon: "🔄",
      title: "Holistic Coverage",
      desc: "From training to tools, we handle cybersecurity at every level.",
    },
    {
      icon: "❤️",
      title: "Mission-Driven",
      desc: "We’re committed to public safety, not just profits.",
    },
    {
      icon: "💰",
      title: "Affordable & Accessible",
      desc: "Designed with small institutions and middle-class families in mind.",
    },
    {
      icon: "💡",
      title: "Technology + Awareness",
      desc: "Combines world-class protection with impactful education.",
    },
    {
      icon: "🇮🇳",
      title: "Built for India",
      desc: "Local language support, rural outreach, and India-specific solutions.",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-6">
        <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white light:text-slate-900 tracking-tight">
          Cybersecurity Services for Every Sector
        </h1>
        <p className="text-base sm:text-xl text-[#00F0FF] max-w-2xl mx-auto font-medium">
          Tailored security solutions for diverse industries across India
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white light:text-slate-900">
          Protecting Businesses Across All Sectors
        </h2>
        <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg leading-relaxed">
          Our cybersecurity startup serves a diverse range of sectors, tailoring solutions to their unique
          security needs. From small banks to creative studios, we provide comprehensive protection that grows
          with your business.
        </p>
      </section>

      {/* All 20 Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Why Clients Trust Our Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Why Clients Trust Our Model
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustPillars.map((tp, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 text-center space-y-3 hover:border-[#00F0FF]/40 transition-all"
            >
              <div className="text-3xl mb-2">{tp.icon}</div>
              <h4 className="font-orbitron font-bold text-sm text-white light:text-slate-900">
                {tp.title}
              </h4>
              <p className="text-slate-400 light:text-slate-600 text-xs leading-relaxed">
                {tp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
          Ready to Secure Your Business?
        </h2>
        <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg">
          Get a customized security solution tailored to your industry
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl font-orbitron font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] text-black shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:opacity-95 transition-all"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
