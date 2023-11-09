import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';
import { Greeting, Wrapper } from './UserMenu.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Greeting>{email}</Greeting>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </Button>
    </Wrapper>
  );
};
