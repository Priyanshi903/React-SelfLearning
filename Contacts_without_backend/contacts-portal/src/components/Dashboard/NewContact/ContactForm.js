import { useRef, useState } from "react";
import './ContactForm.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
// import { css } from "glamor";

// npm i react-toastify@8.2.0
toast.configure();
const ContactForm = props => {

    const errorToastEmptyInput = () => toast.error("Please enter a valid name and age (non-empty values).",
        {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
            // autoClose: false,
        },
        // {
        //     className: css({
        //         background: "#00FF00 !important"
        //     })
        // }
    );

    const errorToastInvalidAge = () => toast.error("Please enter a valid age (> 0).",
        {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        },

    );

    const nameInputRef = useRef();
    const mobileInputRef = useRef();
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        // console.log(nameInputRef.current.value);
        // console.log(mobileInputRef.current.value);
        if (nameInputRef.current.value.trim().length === 0 || mobileInputRef.current.value.trim().length === 0) {
            // setError({
            //     title: 'Invalid input',
            //     message: 'Please enter a valid name and age (non-empty values).',
            // });
            errorToastEmptyInput();
            return;
        }
        if (+mobileInputRef.current.value.length !== 10) {
            // setError({
            //     title: 'Invalid age',
            //     message: 'Please enter a valid age (> 0).',
            // });
            errorToastInvalidAge();
            return;
        }
        let contactObj = {
            id: Math.random().toString(),
            contactName: nameInputRef.current.value,
            mobileNumber: mobileInputRef.current.value
        }
        props.onAddContact(contactObj);
        // console.log(contactObj);
        nameInputRef.current.value = '';
        mobileInputRef.current.value = '';
        // props.test(contactObj);
    }

    return (
        <>
            {/* {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )} */}
            <form onSubmit={submitFormHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text"
                    id="name"
                    ref={nameInputRef}
                />
                <label htmlFor="mobile">Mobile:</label>
                <input type="number"
                    id="mobile"
                    // min="10"
                    ref={mobileInputRef}
                />
                <button type="button" className="cancelButton" onClick={props.onCancel}>Cancel</button>
                <button type="submit" className="saveButton">Save</button>
            </form>
        </>
    )
};

export default ContactForm;