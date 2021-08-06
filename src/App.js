/** @format */

import React from "react";
import Contacts from "./components/contacts/Contacts";
import Phonebook from "./components/phonebook/Phonebook";
import Section from "./components/section/Section";
import FindContact from "./components/findContact/FindContact";

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <FindContact />
        <ul>
          <Contacts />
        </ul>
      </Section>
    </>
  );
};

export default App;
