import { NavLinkStyled, NavStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
    </NavStyled>
  );
};
