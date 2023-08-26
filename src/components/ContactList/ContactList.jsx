import { ContactListItem } from './ContactItemList/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  console.log(filteredContacts);

  const getFilteredContacts = () => {
    const normalizedFilter = filteredContacts.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = getFilteredContacts();

  return (
    <ul className={css.list}>
      {filteredContactList.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
