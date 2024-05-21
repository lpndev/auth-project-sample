import Link from 'next/link'

import { auth } from '@/auth'
import { LogInIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SignIn } from '@/components/auth/sign-in'
import { ModeToggle } from '@/components/mode-toggle'

export default async function Home() {
  const session = await auth()

  return (
    <>
      <main className='flex h-screen w-full flex-col items-center justify-center'>
        <div>
          {!session ? (
            <SignIn />
          ) : (
            <Button asChild variant='default' className='gap-2'>
              <Link href='/dashboard'>
                Go to Dashboard
                <LogInIcon size={16} />
              </Link>
            </Button>
          )}
        </div>
      </main>
      <div className='absolute right-5 top-5'>
        <ModeToggle />
      </div>
    </>
  )
}
