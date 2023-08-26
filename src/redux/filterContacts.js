import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterContacts = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    createFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { createFilter } = filterContacts.actions;
export const filterReducer = filterContacts.reducer;
