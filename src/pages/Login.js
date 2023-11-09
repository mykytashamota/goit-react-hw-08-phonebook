import { AuthHeading } from 'components/AuthFormHeading/AuthFormHeading';
import { CenterWrapper } from 'components/CenterWrapper/CenterWrapper';
import { FormWrapper } from 'components/FormStyles/FormStyles.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <CenterWrapper>
      <FormWrapper>
        <AuthHeading>Login to your account</AuthHeading>
        <LoginForm />
      </FormWrapper>
    </CenterWrapper>
  );
};

export default Login;
