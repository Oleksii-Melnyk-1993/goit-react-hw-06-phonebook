import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Oksana Ivanenko', number: '521-34-87' },
    { id: 'id-2', name: 'Vasyl Kovalchuk', number: '765-98-12' },
    { id: 'id-3', name: 'Nadia Hrytsenko', number: '332-56-71' },
    { id: 'id-4', name: 'Taras Petrenko', number: '126-54-87' },
    { id: 'id-5', name: 'Marina Shevchenko', number: '421-89-33' },
  ],
};

export const sliceContacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = sliceContacts.actions;
export const contactsReducer = sliceContacts.reducer;
