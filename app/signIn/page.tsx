"use client";
import LandingNav from "@/components/landingNav";
import FormContainer from "@/components/auth/formContainer";
import LoginForm from "@/components/auth/loginForm";

const SignIn = () => {
  return (
    <div>
      <LandingNav></LandingNav>
      <FormContainer
        title="Welcome back"
        backButtonLabel="Don't have an account?"
        backButtonhref="/signUp"
      >
        <LoginForm></LoginForm>
      </FormContainer>
    </div>
  );
};

export default SignIn;
