import { createClient } from "@supabase/supabase-js";

//https://daazavmgqtxyrjxuifox.supabase.co/auth/v1/callback

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

//console.log("Supabase url:", supabaseURL);


export const Supabase = createClient(supabaseURL, supabaseAnonKey);