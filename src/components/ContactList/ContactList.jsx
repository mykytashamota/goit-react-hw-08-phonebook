import { ContactListEl } from 'components/ContactListEl/ContactListEl';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/filter/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListEl key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
