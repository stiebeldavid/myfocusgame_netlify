// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sahmtpgsfkzslobtzrqy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhaG10cGdzZmt6c2xvYnR6cnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MTAzNzcsImV4cCI6MjA1MTE4NjM3N30.JWcRisXx1tVBlqN8qE6YjnpGpDc5MbQZICCnTWB681o";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);