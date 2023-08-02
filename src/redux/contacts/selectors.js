import { createSelector } from '@reduxjs/toolkit';

export const selectContakts = state => state.form;

export const selectStatusFilter = state => state.filter.serchName;

export const selectIsLoading = state => state.form.isLoading;

export const selectError = state => state.form.error;

export const selectContacts = state => {
  return state.form.items;
};

export const selectVisibleContact = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filterQwery) => {
    console.log(contacts);
    const qwery = filterQwery.toLowerCase().toString();

    switch (filterQwery) {
      case filterQwery:
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(qwery)
        );
      default:
        return contacts;
    }
  }
);
