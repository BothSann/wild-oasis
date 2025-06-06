import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ysgkhdpsrxfkfymchjwy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzZ2toZHBzcnhma2Z5bWNoand5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxOTkyNDQsImV4cCI6MjA2NDc3NTI0NH0.XnV72Qq1SlUqvPyCnbpgfxrj9Ay0xkZR8VaKCI2bxJA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
