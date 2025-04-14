import { redirect } from 'next/navigation'
import SignUpForm from './components/signup-form'
import { createClient } from '@/lib/supabase/server'

export default async function LoginPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (!error || data?.user) {
    redirect('/dashboard')
  }

  return <SignUpForm />
}
