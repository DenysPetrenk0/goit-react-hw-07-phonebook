/** @format */
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  filterContacts,
  getContactError,
  getContactRequest,
  getContactSuccess,
} from "./action";

const itemsreducer = createReducer([], {
  [getContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
});

const errorReducer = createReducer(null, {
  [getContactError]: (error) => error,
  [addContactError]: (error) => error,
  [deleteContactError]: (error) => error,
});

const contactReducer = combineReducers({
  items: itemsreducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default contactReducer;
