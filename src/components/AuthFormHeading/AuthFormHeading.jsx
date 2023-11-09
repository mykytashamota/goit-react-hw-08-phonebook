import {
  Greeting,
  Heading,
  LinkStyled,
  Redirect,
  Wrapper,
} from './AuthFormHeading.styled';
import { useLocation } from 'react-router-dom';

export const AuthHeading = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Greeting>Welcome! 👋</Greeting>
      <Heading>{children}</Heading>
      {pathname.includes('/login') ? (
        <Redirect>
          Don't have an account yet?{' '}
          <LinkStyled to="/register">Sign up</LinkStyled>
        </Redirect>
      ) : (
        <Redirect>
          Already have an account? <LinkStyled to="/login">Sign in</LinkStyled>
        </Redirect>
      )}
    </Wrapper>
  );
};
