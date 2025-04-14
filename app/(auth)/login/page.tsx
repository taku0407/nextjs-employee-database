import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import LoginForm from './components/login-form'

export default async function LoginPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (!error || data?.user) {
    redirect('/dashboard')
  }

  return <LoginForm />
}
