import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { FcPhone } from 'react-icons/fc';
import { deleteContact } from 'redux/sliceContacts';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item} key={contact.id}>
      <FcPhone size={'1.5em'} />
      {contact.name} : {contact.number}
      <button
        className={css.button_delete}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
