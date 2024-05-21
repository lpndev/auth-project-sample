import { signOut } from '@/auth'
import { LogOutIcon } from 'lucide-react'

import { Button } from '../ui/button'

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <Button variant='destructive' className='gap-2' type='submit'>
        Sign Out
        <LogOutIcon size={16} />
      </Button>
    </form>
  )
}
