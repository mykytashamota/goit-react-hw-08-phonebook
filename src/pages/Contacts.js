import { ContactList } from 'components/ContactList/ContactList.jsx';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactModal } from 'components/ContactModal/ContactModal';
import { Box, Typography } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ padding: '25px 0' }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
        Contacts
      </Typography>
      <ContactModal />
      <ContactFilter />
      <ContactList />
    </Box>
  );
};

export default Contacts;
