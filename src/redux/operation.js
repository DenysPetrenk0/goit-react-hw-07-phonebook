/** @format */

import axios from "axios";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  getContactError,
  getContactRequest,
  getContactSuccess,
} from "./action";

axios.defaults.baseURL = "http://localhost:1111";

export const getContactOperation = () => async (dispatch) => {
  dispatch(getContactRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(getContactSuccess(data));
  } catch (error) {
    dispatch(getContactError(error));
  }
};

export const addContactOperation = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContactOperation = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
