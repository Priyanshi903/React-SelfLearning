import Contact from "./Contact";
import classes from "./ContactList.module.css";

const ContactList = props => {

    return (
        <>
            <table className={`${classes.tablee}`}>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>

                {props.contacts.map(
                    contact => {
                        return (
                            <tbody>
                                < Contact id={contact.id}
                                    name={contact.contactName}
                                    mobileno={contact.mobileNumber}
                                    onDeleteContact={props.onDelete}
                                />
                            </tbody>
                        )
                    }
                )
                }


                {/* {props.contacts.map(
                    contact => {
                        return (
                            <tr>
                                <td>{contact.contactName}</td>
                                <td>{contact.mobileNumber}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        )
                    }

                )
                } */}

            </table>
        </>
    )

};

export default ContactList;