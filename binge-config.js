// BINGE Cloud Accounts — public browser configuration.
// 1. In Supabase, create a free project and run BINGE_Database_Setup.sql.
// 2. Replace the two placeholders below with your Project URL and PUBLIC publishable key.
// 3. NEVER paste a service_role key, secret API key, or database password here.
// The publishable key is public by design; your account data is protected by RLS policies.
window.BINGE_CONFIG = {
  supabaseUrl: "PASTE_SUPABASE_PROJECT_URL_HERE",
  supabasePublishableKey: "PASTE_PUBLIC_PUBLISHABLE_KEY_HERE"
};
