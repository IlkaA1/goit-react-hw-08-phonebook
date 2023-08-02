import css from './Login.module.css';
import { Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
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
          LogIn
        </button>
      </form>
    </div>
  );
};

export default Login;
