import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface ContactState {
  list: Contact[];
  editList: Contact | null;
}

const initialState: ContactState = {
  list: [],
  editList: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact[]>) => {
      state.list = action.payload;
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      state.editList = action.payload;
    },
    clearEditContent: (state) => {
      state.editList = null;
    },
  },
});

export const { addContact, clearEditContent, editContact } =
  contactSlice.actions;
export default contactSlice.reducer;
