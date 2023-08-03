import { Input } from '@chakra-ui/react';
import css from './Register.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <Input
            className={css.input}
            variant="filled"
            size="lg"
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Email
          <Input
            className={css.input}
            type="email"
            name="email"
            required
            variant="filled"
            size="lg"
            placeholder="Email"
          />
        </label>
        <label className={css.label}>
          Password
          <Input
            className={css.input}
            type="password"
            name="password"
            variant="filled"
            size="lg"
            placeholder="Password"
          />
        </label>

        <button type="submit" className={css.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
