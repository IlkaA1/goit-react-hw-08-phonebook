import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/contacts/operations';
import { selectContakts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import css from './Contact.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContakts);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.containerBook}>
        <ContactForm />
        <h2 className={css.contact}>Contacts list</h2>
        <div>{items && <Filter />}</div>
        <div>
          {isLoading && !error && <b>Request in progress...</b>}
          {error && <p>{error}</p>}
          {items && <ContactList />}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
