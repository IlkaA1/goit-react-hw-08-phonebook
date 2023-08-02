import { combineReducers } from 'redux';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const rootReducer = combineReducers({
  form: contactsReducer,
  filters: filterReducer,
});
