/** @format */
import { createAction } from "@reduxjs/toolkit";

export const getContactRequest = createAction("getContactRequest");
export const getContactSuccess = createAction("getContactSuccess");
export const getContactError = createAction("getContactRequest");

export const addContactRequest = createAction("addContactRequest");
export const addContactSuccess = createAction("addContactSuccess");
export const addContactError = createAction("addContactRequest");

export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactError = createAction("deleteContactRequest");

export const filterContacts = createAction("filterContacts");
