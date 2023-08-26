import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { FcPhoneAndroid } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addContact } from 'redux/sliceContacts';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };
  const generetedId = () => {
    return nanoid(5);
  };

  const handleChange = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      toast.error(`${data.name}is already in list!`);
      return;
    }
    dispatch(
      addContact({ id: generetedId, name: data.name, number: data.number })
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    handleChange({ values });
    resetForm();
  };

  return (
    <form
      className={css.form_wrapper}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      <FcPhoneAndroid size={'35px'} className={css.icon} />
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
