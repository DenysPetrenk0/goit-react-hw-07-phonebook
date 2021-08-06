/** @format */

import React from "react";
import { connect } from "react-redux";
import { deleteContactOperation } from "../../redux/operation";
import { ContactsLi } from "./ContactsStyles";

const Contacts = ({ contacts, deleteContactOperation, filter }) => {
  const findContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return findContacts.map((contact) => (
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
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

export default connect(mapStateToProps, {
  deleteContactOperation,
})(Contacts);
