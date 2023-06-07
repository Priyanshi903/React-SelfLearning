import './Contact.css';

const Contact = props => {

    const onDeleteHandler = () => {
        // console.log('del clicked');
        props.onDeleteContact(props.id)
    }

    const onEditHandler = () => {

    }

    return (
        < tr>
            <td>{props.name}</td>
            <td>{props.mobileno}</td>
            <td>
                <ul>
                    <li><button className="edit" type="button" onClick={onEditHandler}>Edit</button></li>
                    <li><button id='delete' type="button" onClick={onDeleteHandler}>Delete</button></li>
                </ul>
            </td>
        </tr >

    );
}

export default Contact;