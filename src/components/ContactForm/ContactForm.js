import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContakts } from 'redux/contacts/selectors';

import css from './form.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContakts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;
    const newContact = {
      name: name.value,
      number: number.value,
    };

    const nameValue = name.value;

    const allName = items.find(contact => contact.name === nameValue);

    if (allName) {
      return alert(`${nameValue} is already in contacts`);
    }

    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.container}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
