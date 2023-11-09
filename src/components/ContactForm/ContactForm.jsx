import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormEl } from 'components/FormStyles/FormStyles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: yup
    .string()
    .required('Required!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      '        Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: validationSchema,
    onSubmit: (contact, actions) => {
      console.log('Hi');
      contact.name = contact.name.trim();
      if (checkIsPresent(contact)) {
        return alert(`${contact.name} is already in contacts.`);
      }
      dispatch(addContact(contact));
      actions.resetForm();
    },
  });

  const checkIsPresent = contact => {
    const isPresent = savedContact =>
      savedContact.name.toLowerCase() === contact.name.toLowerCase();

    return contacts.some(isPresent);
  };

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
        placeholder="Please enter the name"
        color="secondary"
        required
        sx={{
          marginBottom: '15px',
        }}
      />
      <TextField
        type="tel"
        name="number"
        label="Number"
        value={formik.values.number}
        variant="outlined"
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
        placeholder="Please enter the number"
        color="secondary"
        required
        sx={{
          marginBottom: '15px',
        }}
      />
      <Button type="submit" variant="contained" color="secondary">
        Create
      </Button>
    </FormEl>
  );
};
