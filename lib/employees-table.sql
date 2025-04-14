-- Create employees table
CREATE TABLE IF NOT EXISTS public.employees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  gender TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  department TEXT NOT NULL,
  employment_type TEXT NOT NULL,
  position TEXT NOT NULL,
  hire_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()) NOT NULL
);

-- ここまで実行済み

-- Enable Row Level Security
ALTER TABLE public.employees ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users
CREATE POLICY "Authenticated users can CRUD employees"
  ON public.employees
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
