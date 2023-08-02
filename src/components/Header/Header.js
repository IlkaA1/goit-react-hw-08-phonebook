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
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}

        {!isLoggedIn ? (
          <div className={css.auto}>
            <NavLink to="/register" className={css.register}>
              Register
            </NavLink>
            <NavLink to="/login">LogIn</NavLink>
          </div>
        ) : (
          <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};
