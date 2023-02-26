// import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem'
import { ContactsList } from './ContactList.styled'

export const ContactList = ({ contacts }) => {
    return (
        <ContactsList>
            {contacts.map(contact => {
                return <ContactListItem contact={contact} key={contact.id} />;
            })}
        </ContactsList>
    );
};

// export class ContactList extends Component {
//     render() {
//         return (
//         <ContactList>
//             {this.state.contacts.map(contact => {
//                 return <ContactListItem contact={contact} key={contact.id} />;
//             })}
//         </ContactList>
//     );
//     }
// };

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}