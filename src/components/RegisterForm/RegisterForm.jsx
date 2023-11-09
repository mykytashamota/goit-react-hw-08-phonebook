import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { FormEl } from 'components/FormStyles/FormStyles.styled';
import { register } from 'redux/auth/operations';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    ),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (credentials, actions) => {
      dispatch(register(credentials));
      actions.resetForm();
    },
  });

  return (
    <FormEl onSubmit={formik.handleSubmit}>
      <TextField
        type="text"
        name="name"
        label="Name"
        value={formik.values.name}
        variant="outlined"
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        placeholder="Please enter your name"
        color="secondary"
        required
        sx={{
          marginBottom: '15px',
        }}
      />
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
        placeholder="Please enter your password"
        color="secondary"
        required
        sx={{
          marginBottom: '15px',
        }}
      />
      <Button type="submit" variant="contained" color="secondary">
        Sign Up
      </Button>
    </FormEl>
  );
};
