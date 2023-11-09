import { AppBar, Container, Toolbar } from '@mui/material';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Logo } from 'components/Logo/Logo';
import { useSelector } from 'react-redux';

export const Header = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar
      position="static"
      sx={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'revert',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', gap: '40px' }}>
        <Logo />
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: isLoggedIn ? 'space-between' : 'end',
          }}
        >
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
