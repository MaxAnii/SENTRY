import FormContainer from "@/components/auth/formContainer";
import RegisterForm from "@/components/auth/registerForm";

const SignUp = () => {
	return (
		<div>
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
