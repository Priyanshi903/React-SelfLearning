import { useState } from "react";
import ContactForm from "./ContactForm";
import './NewContact.css';

const NewContact = props => {

    const [showForm, setShowForm] = useState(false);

    const showContactForm = () => {
        setShowForm(true);
    }

    const onSaveContactHandler = (contactObj) => {
        console.log();
        props.addContact(contactObj);
        setShowForm(false);
    }

    const stopShowFormHandler = () => {
        setShowForm(false);
    }

    // const testHandler = (obj) => {
    //     console.log('inside newcontact');
    //     console.log(obj);
    // }

    const onSearchHandler = (event) => {
        props.onFilter(event.target.value);
    }

    return (
        <div className="box">
            <ul>
                <li>

                    {!showForm && (
                        <button type="button" className="addContact" onClick={showContactForm}>Add Contact</button>)}
                </li></ul>

            {showForm && <ContactForm
                onAddContact={onSaveContactHandler}
                onCancel={stopShowFormHandler}
            // test={testHandler} 
            />
            }
        </div>
    )
}

export default NewContact;