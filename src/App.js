import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";
import Section from "./сomponents/Section/Section";
import AddContactForm from "./сomponents/AddContactForm/AddContactForm";
import ContactList from "./сomponents/ContactsList/ContactList";
import Filter from "./сomponents/Filter/Filter";

import "./App.css";

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string,
  };

  static defaultProps = {
    filter: "",
    contacts: [],
  };

  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (name, number) => {
    const newContact = {
      id: uniqid(),
      name,
      number,
    };

    const existedContact = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    );

    if (existedContact) {
      return alert(`${newContact.name} already exist`);
    }

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  filterContacts = (e) => {
    this.setState({ filter: e.target.value });
  };

  filtredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));

    savedContacts && this.setState({ contacts: savedContacts });
    // savedContacts
    //   ? this.setState({ contacts: savedContacts })
    //   : localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  componentDidUpdate(prevState) {
    if (
      this.state.contacts !== prevState.contacts &&
      this.state.contacts.length > 0
    ) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const contactsList = this.filtredContacts();
    const { contacts, filter } = this.state;

    return (
      <div className="phoneBook">
        <Section title="Phonebook">
          <AddContactForm submitHandler={this.addNewContact} />
        </Section>
        {contacts.length === 0 ? null : (
          <Section title="Contacts">
            {contacts.length > 1 ? (
              <Filter value={filter} changeHandler={this.filterContacts} />
            ) : null}
            <ContactList
              list={contactsList}
              handleRemove={this.removeContact}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
