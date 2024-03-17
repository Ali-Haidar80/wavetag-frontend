import { FacebookIcon, GoogleIcon } from '@/icons'
import { useRouter } from 'next/navigation';
import React from 'react'

const SignUpOptions = () => {
  const router = useRouter();

  const goToSignIn = () => {
    router.push('/login')
  }

  return (
    <>
    <p className="text-secondary-200 mt-4 text-center"> or</p>
    <div className="flex items-center gap-2 xl:w-[80%] mx-auto my-2">
            <button className="flex items-center justify-center gap-1 py-1 text-primary-100 border-primary-100 border rounded-md w-[50%]">
             <GoogleIcon /> <span className='text-sm'> Google</span>
            </button>
            <button className="flex items-center justify-center gap-1 py-1 text-primary-100 border-primary-100 border rounded-md w-[50%]">
              <FacebookIcon /> <span className='text-sm'>Facebook</span>
            </button>
          </div>
          <p className="text-secondary-200 text-sm my-1 text-center">Have no account yet?</p>
          <div className="flex justify-center">
          <button className="border-primary-100 border text-primary-100 mt-2 mb-12 xl:w-[80%] xl:mx-auto xl:my-0 w-full rounded-md py-2" onClick={goToSignIn}>
            Sign In
          </button>
          </div>
    </>
  )
}

export default SignUpOptions