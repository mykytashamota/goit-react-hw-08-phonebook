import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Greeting = styled.p`
fontSize: '18px',
fontWeight: 'bold',
  color: #757575;
`;

export const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 7px;
`;

export const Redirect = styled.p`
  font-weight: 500;
`;

export const LinkStyled = styled(Link)`
  color: #01579b;
`;
