-- ====================================================================
-- DEFENCREATION 2.0: Supabase PostgreSQL Database Schema
-- Tables, Constraints, Indexes, and Row Level Security (RLS) Policies
-- ====================================================================

-- 1. Contact Enquiries Table
CREATE TABLE IF NOT EXISTS public.contact_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    organization TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'archived')),
    ip_address TEXT,
    user_agent TEXT
);

-- Index for querying contact inquiries by status and date
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_status ON public.contact_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created_at ON public.contact_enquiries(created_at DESC);

-- 2. Administrator Profiles Table
CREATE TABLE IF NOT EXISTS public.admin_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    display_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role TEXT DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin', 'moderator')),
    is_active BOOLEAN DEFAULT TRUE NOT NULL
);

-- 3. System Preferences / Settings Table
CREATE TABLE IF NOT EXISTS public.system_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 4. Audit Logs Table
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    admin_id UUID REFERENCES auth.users(id),
    action TEXT NOT NULL,
    resource TEXT NOT NULL,
    details JSONB
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at DESC);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS)
-- ====================================================================

ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous insert for contact form submissions only
DROP POLICY IF EXISTS "Allow public contact insert" ON public.contact_enquiries;
CREATE POLICY "Allow public contact insert" ON public.contact_enquiries
    FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Allow authenticated active admins full access to contact inquiries
DROP POLICY IF EXISTS "Admins full access on enquiries" ON public.contact_enquiries;
CREATE POLICY "Admins full access on enquiries" ON public.contact_enquiries
    FOR ALL TO authenticated USING (
        EXISTS (SELECT 1 FROM public.admin_profiles WHERE id = auth.uid() AND is_active = true)
    );

-- Allow active admins to view and manage admin profiles
DROP POLICY IF EXISTS "Admins manage profiles" ON public.admin_profiles;
CREATE POLICY "Admins manage profiles" ON public.admin_profiles
    FOR ALL TO authenticated USING (
        EXISTS (SELECT 1 FROM public.admin_profiles WHERE id = auth.uid() AND is_active = true)
    );

-- Allow active admins full access to audit logs
DROP POLICY IF EXISTS "Admins view audit logs" ON public.audit_logs;
CREATE POLICY "Admins view audit logs" ON public.audit_logs
    FOR ALL TO authenticated USING (
        EXISTS (SELECT 1 FROM public.admin_profiles WHERE id = auth.uid() AND is_active = true)
    );
