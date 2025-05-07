import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactState {
  list: Contact[];
}

const initialState: ContactState = {
  list: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.list.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;