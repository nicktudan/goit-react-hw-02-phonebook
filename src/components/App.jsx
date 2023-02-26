import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';



export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  }

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value })
  }

  getFilteredConracts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
    })
  }


  render() {
    return (
      <Layout>
        <GlobalStyle />

        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={this.getFilteredConracts()} />
        {/* <ul contacts={this.state.contacts}>
          {this.state.contacts.map((contact, id) => {
            return (
              <li key={id}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul> */}
      </Layout>
    );
  }
}


