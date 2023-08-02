import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        {/* {isLoggedIn && (<NavLink to="/contacts">Contacts</NavLink>)} */}
      </nav>
    </div>
  );
};
