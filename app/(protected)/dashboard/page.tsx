import { redirect } from 'next/navigation'

import { auth } from '@/auth'

import { SignOut } from '@/components/auth/sign-out'
import { ModeToggle } from '@/components/mode-toggle'

export default async function Dashboard() {
  const session = await auth()

  if (!session) {
    redirect('/')
  }

  return (
    <>
      <div className='relative flex h-screen w-full flex-col items-center justify-center'>
        <div className='flex flex-col gap-4'>
          <pre className='rounded-lg border border-foreground/10 bg-foreground/[2%] p-4 text-foreground/85'>
            {JSON.stringify(session, null, 2)}
          </pre>
          <SignOut />
        </div>
      </div>
      <div className='absolute right-5 top-5'>
        <ModeToggle />
      </div>
    </>
  )
}
