// src/supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://twqlryehzsopzlssnszd.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cWxyeWVoenNvcHpsc3Nuc3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMzUwNDgsImV4cCI6MjA2MDYxMTA0OH0.fX6a6to-NhjRbA1rDAqxW9JW4aOyGrsEWSFgkqql1BY';

export const supabase = createClient(supabaseUrl, supabaseKey);
