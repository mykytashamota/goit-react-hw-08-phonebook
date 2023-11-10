import { Button, Modal, Box, Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const modalBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 465,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
};

export const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setIsOpen(true)}
        sx={{
          marginTop: '20px',
        }}
      >
        <GroupAddIcon sx={{ marginRight: '7px' }} />
        Add
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={modalBoxStyle}>
          <Button
            onClick={() => setIsOpen(false)}
            variant="contained"
            color="secondary"
            sx={{
              marginLeft: '365px',
              marginBottom: '10px',
              '& ': { minWidth: '0px', padding: '3px 5px' },
            }}
          >
            <CloseIcon />
          </Button>
          <Typography variant="h4" gutterBottom align="center">
            Add New Contact
          </Typography>
          <ContactForm />
        </Box>
      </Modal>
    </>
  );
};
