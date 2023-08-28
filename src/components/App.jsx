import { useSelector } from 'react-redux';
import css from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContactsCount } from 'redux/selectors';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const totalCount = useSelector(getContactsCount);

  return (
    <div
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <p className={css.total}>
        Total contacts: <span className={css.total_count}>{totalCount}</span>
      </p>
      <Filter />
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};
