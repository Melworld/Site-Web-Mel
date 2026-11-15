// Sicarios — Configuration Database
window.SICARIOS_SUPABASE_URL = 'https://TON-PROJET.supabase.co';
window.SICARIOS_SUPABASE_KEY = 'TA_CLE_PUBLIQUE';

window.vorySupabaseConfigured = function () {
  return typeof window.SICARIOS_SUPABASE_URL === 'string' &&
         typeof window.SICARIOS_SUPABASE_KEY === 'string' &&
         window.SICARIOS_SUPABASE_URL.includes('.supabase.co') &&
         !window.SICARIOS_SUPABASE_KEY.includes('TA_CLE');
};

const supabase = window.vorySupabaseConfigured()
  ? window.supabase.createClient(
      window.SICARIOS_SUPABASE_URL,
      window.SICARIOS_SUPABASE_KEY
    )
  : null;
