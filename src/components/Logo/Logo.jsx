import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { LinkStyled } from './Logo.styled';

export const Logo = () => {
  return (
    <LinkStyled to="/">
      <ContactPhoneIcon sx={{ fontSize: 35 }} />
      ContactBook
    </LinkStyled>
  );
};
