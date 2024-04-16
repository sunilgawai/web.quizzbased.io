import LoginForm from '@/components/auth/login-form';
import { NextPage } from 'next';
import React from 'react'

const SignInPage: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <LoginForm />
    </div>
  )
}

export default SignInPage;