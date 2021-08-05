// * we will be using a fuctional compnent and a class component becasue we are going to keep all of that on our sign and sign up components
import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = ()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
    </div>
)

export default SignInAndSignUpPage