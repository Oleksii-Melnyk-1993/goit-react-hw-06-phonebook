import css from './ContactForm.module.css';
import { FcPhoneAndroid } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { addContact } from 'redux/sliceContacts';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, name } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };
  // const initialValues = {
  //   name: '',
  //   number: '',
  // };
  const generetedId = () => {
    return nanoid(5);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      toast.error(`${name} is already in list!`);
      return;
    }
    dispatch(addContact({ id: generetedId(), name: name, number: number }));
    resetForm();
  };

  // const handleSubmit = (values, { resetForm }) => {
  //   formSubmitHandler(values);
  //   resetForm();
  // };

  return (
    <form
      className={css.form_wrapper}
      onSubmit={formSubmitHandler}
      // initialValues={initialValues}
    >
      <FcPhoneAndroid size={'35px'} className={css.icon} />
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Phone number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.button_add}>
        Add contact
      </button>
    </form>
  );
};
