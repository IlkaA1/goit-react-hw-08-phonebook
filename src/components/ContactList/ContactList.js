import css from './list.module.css';

import { selectVisibleContact } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const list = useSelector(selectVisibleContact);
  const dispatch = useDispatch();
  const toDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {list.map(contact => (
        <li key={contact.id} className={css.li}>
          <p className={css.name}>{contact.name}:</p>
          <div className={css.phone}>{contact.number}</div>
          <button className={css.button} onClick={() => toDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
