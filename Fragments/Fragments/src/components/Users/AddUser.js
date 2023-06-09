import React, { useRef, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
// import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {

    event.preventDefault();

    console.log(nameInputRef.current.value);
    const enteredNameRef = nameInputRef.current.value;
    const enteredAgeRef = ageInputRef.current.value;

    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: 'Invalid input',
    //     message: 'Please enter a valid name and age (non-empty values).',
    //   });
    //   return;
    // }
    // if (+enteredAge < 1) {
    //   setError({
    //     title: 'Invalid age',
    //     message: 'Please enter a valid age (> 0).',
    //   });
    //   return;
    // }

    if (enteredNameRef.trim().length === 0 || enteredAgeRef.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAgeRef < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    // props.onAddUser(enteredUsername, enteredAge);
    // setEnteredUsername('');
    // setEnteredAge('');

    props.onAddUser(enteredNameRef, enteredAgeRef);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {/* after importing fragment, u can omit React in the below */}
      {/* <React.Fragment> */}
      {/* <Wrapper> */}
      {/* <div> */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {/* </div> */}
      {/* </Wrapper> */}
      {/* </React.Fragment> */}
    </>
  );
};

export default AddUser;
