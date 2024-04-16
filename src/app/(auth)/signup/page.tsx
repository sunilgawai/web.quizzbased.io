import RegisterForm from '@/components/auth/register-form';
import { NextPage } from 'next';
import React from 'react'

const SignUpPage: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>>
        <RegisterForm />
    </div>
  )
}

export default SignUpPage;