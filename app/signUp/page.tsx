import FormContainer from "@/components/auth/formContainer";
import RegisterForm from "@/components/auth/registerForm";
import LandingNav from "@/components/landingNav";
const SignUp = () => {
	return (
		<div>
			<LandingNav></LandingNav>
			<FormContainer
				title="Create an account"
				backButtonLabel="Already have an account?"
				backButtonhref="/signIn"
			>
				<RegisterForm></RegisterForm>
			</FormContainer>
		</div>
	);
};

export default SignUp;
