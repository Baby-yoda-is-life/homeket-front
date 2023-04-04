import { createClient } from '@supabase/supabase-js';

export const dbInstance = createClient(import.meta.env.VITE_URL_SUPABASE, import.meta.env.VITE_API_KEY);
