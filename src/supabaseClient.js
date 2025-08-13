import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_URL;
const anonKey = import.meta.env.VITE_ANON;

export const supabase = createClient(url, anonKey);
