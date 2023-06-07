// import classes from './Contacts.module.css';
import { useState } from 'react';
import ContactList from './ContactList';

const Contacts = props => {

    const [symbol, setSymbol] = useState('');

    const filterContactChangehandler = event => {
        setSymbol(event.target.value);
    }

    const filteredContactList =
        props.contacts.filter(
            contact => (contact.contactName.toLowerCase().startsWith(symbol) === true)
        )


    return (
        <>
            <input type="text" name="search" placeholder="Search.."
                onChange={filterContactChangehandler} />
            <ContactList
                contacts={filteredContactList}
                onDelete={props.onDeleteContact}

            />
        </>
    )
};

export default Contacts;