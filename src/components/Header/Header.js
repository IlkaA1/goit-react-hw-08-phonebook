import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../useAuth';

import css from './Header.module.css';

export const Header = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={css.navContainer}>
      <nav className={css.nav}>
        <NavLink to="/" className={css.button}>
          Home
        </NavLink>

        {!isLoggedIn ? (
          <div className={css.btn}>
            <NavLink to="/register" className={css.button}>
              Register
            </NavLink>
            <NavLink to="/login" className={css.button}>
              LogIn
            </NavLink>
          </div>
        ) : (
          <div className={css.userMeny}>
            <p className={css.welcome}>Welcome, {user.name}</p>
            <div className={css.btn}>
              <NavLink to="/contacts" className={css.button}>
                Contacts
              </NavLink>
              <button
                type="button"
                onClick={() => dispatch(logOut())}
                className={css.button}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
