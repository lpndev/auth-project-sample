import { signIn } from '@/auth'
import { LogInIcon } from 'lucide-react'

import { Button } from '../ui/button'

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github', { redirectTo: '/dashboard' })
      }}
    >
      <Button
        variant='default'
        className='gap-2 bg-green-600 text-zinc-50 hover:bg-green-600/90'
        type='submit'
      >
        Sign In
        <LogInIcon size={16} />
      </Button>
    </form>
  )
}
