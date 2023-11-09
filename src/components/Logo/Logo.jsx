import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { LinkStyled } from './Logo.styled';

export const Logo = () => {
  return (
    <LinkStyled to="/">
      <AccountBoxIcon sx={{ fontSize: 35 }} />
      ContactBook
    </LinkStyled>
  );
};
