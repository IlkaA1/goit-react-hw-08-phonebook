import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/contacts/operations';
import { selectContakts } from 'redux/contacts/selectors';
import { useEffect } from 'react';

const Contacts = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContakts);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p>{items && <Filter />}</p>
      <div>
        {isLoading && !error && <b>Request in progress...</b>}
        {error && <p>{error}</p>}
        {items && <ContactList />}
      </div>
    </div>
  );
};

export default Contacts;
