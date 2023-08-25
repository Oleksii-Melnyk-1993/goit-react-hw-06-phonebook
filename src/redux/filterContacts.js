import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterContacts = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    createFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterContacts.reducer;
export const { createFilter } = filterContacts.actions;
