/** @format */

import React from "react";
import { connect } from "react-redux";
import { getVisibleContact } from "../../redux/contacts-selectors";
import { deleteContactOperation } from "../../redux/operation";
import { ContactsLi } from "./ContactsStyles";

const Contacts = ({ contacts, deleteContactOperation }) => {
  return contacts.map((contact) => (
    <ContactsLi key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => deleteContactOperation(contact.id)}>
        Delete
      </button>
    </ContactsLi>
  ));
};

const mapStateToProps = (state) => {
  return {
    contacts: getVisibleContact(state),
  };
};

export default connect(mapStateToProps, {
  deleteContactOperation,
})(Contacts);
