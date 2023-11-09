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
      <Greeting>Welcome! 👋 Let ContactBook brighten your day!</Greeting>
      <Heading>{children}</Heading>
      {pathname.includes('/login') ? (
        <Redirect>
          Register now, no need for carrier pigeons!{' '}
          <LinkStyled to="/register">Sign up</LinkStyled>
        </Redirect>
      ) : (
        <Redirect>
          Already on board? 👋 Ready to dive back in?{' '}
          <LinkStyled to="/login">Sign in</LinkStyled>
        </Redirect>
      )}
    </Wrapper>
  );
};
