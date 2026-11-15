// Sicarios — Configuration Database
window.VORY_SUPABASE_URL = 'https://snsbatpmygkkmfughtmn.supabase.co';
window.VORY_SUPABASE_KEY = 'sb_publishable_sHhPrks-w6z43PZdjcRDJA_c9m-ySif';

window.vorySupabaseConfigured = function () {
  return !window.SICARIOS_SUPABASE_URL.includes('TON-PROJET') &&
         !window.SICARIOS_SUPABASE_KEY.includes('TA_CLE');
};
