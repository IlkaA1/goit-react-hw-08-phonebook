import css from './filter.module.css';

import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const startFilter = name => {
    const filterQvery = name.currentTarget.value;
    dispatch(filterContact(filterQvery));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input className={css.input} type="text" onChange={startFilter}></input>
      </label>
    </div>
  );
};
