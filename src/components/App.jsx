import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/FormikContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout, TitlePhonebook, TitleContacts } from './Layout';



export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    // console.log(value);

    const newContact = {
      // id: nanoid(),
      name,
      number,
    }

    this.state.contacts.some(evt => (
      (evt.name === newContact.name &&
      evt.number === newContact.number) ||
      evt.number === newContact.number
    )) ? alert(`${name} or ${number} is already in contacts.`)
      : this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts]
      }))
  }

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value })
  }

  getFilteredConracts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
    })
  }

  deleteContact = id => {
    // console.log(contactId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  }


  render() {
    return (
      <Layout>
        <GlobalStyle />

        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <TitleContacts>Contacts</TitleContacts>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={this.getFilteredConracts()} onDelete={this.deleteContact} />

      </Layout>
    );
  }
}


