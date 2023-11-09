import { AuthWrapper } from './AuthNav.styled';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <AuthWrapper>
      <Button variant="outlined" color="secondary" component={Link} to="/login">
        Sign In
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/register"
      >
        Sign Up
      </Button>
    </AuthWrapper>
  );
};
