import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/LayoutComponent/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/auth/operations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { ThemeProvider, createTheme } from '@mui/material';

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      dark: 'rgba(127, 86, 217, 0.04)',
      contrastText: '#7F56D9',
    },
    secondary: {
      main: '#1976d2',
      dark: '#1565c0',
      contrastText: '#FFFFFF',
    },
  },
});

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user...'
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
