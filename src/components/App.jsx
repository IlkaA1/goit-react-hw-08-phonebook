// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

import css from './app.module.css';

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTasks } from 'redux/operations';
// import { selectContakts } from 'redux/selectors';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { items, isLoading, error } = useSelector(selectContakts);
  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);
  // return (
  //   <div className={css.container}>
  //     <h1>Phonebook</h1>
  //     <ContactForm />
  //     <h2>Contacts</h2>
  //     <p>{items && <Filter />}</p>
  //     <div>
  //       {isLoading && !error && <b>Request in progress...</b>}
  //       {error && <p>{error}</p>}
  //       {items && <ContactList />}
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <Header />
      <div className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
