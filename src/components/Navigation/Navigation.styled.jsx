import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  gap: 25px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
`;
