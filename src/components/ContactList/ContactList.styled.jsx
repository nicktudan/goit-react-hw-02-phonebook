import styled from "styled-components";

export const ContactsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 64px;
`;

export const ContactListItems = styled.li`
    list-style: disc;
`;

export const ContactListItemsData = styled.span`
    :not(:first-child) {
    padding-left: 8px;
}
`;