import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { login } from 'redux/auth/operations';
import { Button, TextField } from '@mui/material';
import { FormEl } from 'components/FormStyles/FormStyles.styled';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (credentials, actions) => {
      dispatch(login(credentials));
      actions.resetForm();
    },
  });

  return (
    <FormEl onSubmit={formik.handleSubmit}>
      <TextField
        type="email"
        name="email"
        label="Email"
        value={formik.values.email}
        variant="outlined"
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        placeholder="Please enter your email"
        color="secondary"
        required
        sx={{ marginBottom: '15px' }}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        variant="outlined"
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        placeholder="Please enter your email"
        color="secondary"
        required
        sx={{
          marginBottom: '15px',
        }}
      />
      <Button type="submit" variant="contained" color="secondary">
        Sign In
      </Button>
    </FormEl>
  );
};
