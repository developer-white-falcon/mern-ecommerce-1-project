import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';
import { AuthForm } from './Auth.styles';

const Auth = () => {
  return (
    <div>
      <AuthForm>
        <SignInForm />
        <SignUpForm />
      </AuthForm>
    </div>
  );
};

export default Auth;
