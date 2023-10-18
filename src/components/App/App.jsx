import { useState, useEffect } from 'react';
import { Layout } from '../LayoutComponent/Layout.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { AppTitle, ContactsTitle } from './App.styled';

const key = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(key) ?? []);
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contacts));
  }, [contacts]);

  const onContactFormSubmit = contact => {
    const isPresent = savedContact =>
      savedContact.name.toLowerCase() === contact.name.toLowerCase();

    if (contacts.some(isPresent)) {
      return alert(`${contact.name} is already in contacts.`);
    }

    setContacts(contacts => [...contacts, contact]);
  };

  const onContactFilterChange = evt => {
    setFilter(evt.target.value.toLowerCase());
  };

  const onContactDelete = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Layout>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onSubmit={onContactFormSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactFilter onChange={onContactFilterChange} value={filter} />
      <ContactList contacts={filteredContacts} onDelete={onContactDelete} />
    </Layout>
  );
};
