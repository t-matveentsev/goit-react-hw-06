import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contact = state.contact.filter(
        (item) => item.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contact.push(action.payload);
    },
  },
});

export const contactReducer = slice.reducer;
export const { deleteContact, addContact } = slice.actions;
