import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from '../LayoutComponent/Layout.styled';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { CenterWrapper } from 'components/CenterWrapper/CenterWrapper';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense
          fallback={
            <CenterWrapper>
              <CircularProgress color="secondary" />
            </CenterWrapper>
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
