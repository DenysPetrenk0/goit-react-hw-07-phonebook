/** @format */

import React from "react";
import Contacts from "./components/contacts/Contacts";
import Phonebook from "./components/phonebook/Phonebook";
import Section from "./components/section/Section";
import FindContact from "./components/findContact/FindContact";
import { connect } from "react-redux";
import { getLoading } from "./redux/contacts-selectors";

const App = (loading) => {
  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <FindContact />
        {loading.loading && <p> Loading... </p>}
        <ul>
          <Contacts />
        </ul>
      </Section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: getLoading(state),
  };
};

export default connect(mapStateToProps)(App);
