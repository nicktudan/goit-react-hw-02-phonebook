import { Component } from 'react';
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
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />

        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>

          <h2>Contacts</h2>
          <ul contacts={this.state.contacts}>
            {this.state.contacts.map((contact, id) => {
              return (
                <li key={id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
            
          </ul>

        </form>
      </Layout>
    );
  }
}


