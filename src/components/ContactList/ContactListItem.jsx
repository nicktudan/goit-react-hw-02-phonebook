import PropTypes from 'prop-types';
import { ContactListItems, ContactListItemsData } from './ContactList.styled'

export const ContactListItem = ({ contact: { name, number } }) => {
    return <ContactListItems>
        <ContactListItemsData>{name}:</ContactListItemsData>
        <ContactListItemsData>{number}</ContactListItemsData>
    </ContactListItems>
}

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
}