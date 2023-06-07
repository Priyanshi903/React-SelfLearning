import useBasicFormInput from '../hooks/useBasicFormInput';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  const { value: firstNameInput,
    inputHasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurhandler,
    validateInput: validateFirstName,
    reset: resetFirstNameInput
  } = useBasicFormInput(isNotEmpty);

  const { value: lastNameInput,
    inputHasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurhandler,
    validateInput: validateLastName,
    reset: resetLastNameInput
  } = useBasicFormInput(isNotEmpty);

  const { value: emailInput,
    inputHasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    validateInput: validateEmail,
    reset: resetEmailInput
  } = useBasicFormInput(isEmail);

  let formIsValid = false;
  if (validateFirstName && validateLastName && validateEmail) {
    formIsValid = true;
  }

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(firstNameInput, lastNameInput, emailInput);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control ';
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control ';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control ';

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='firstname'>First Name</label>
          <input type='text'
            id='firstname'
            value={firstNameInput}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurhandler}
          />
          {firstNameHasError && <p className="error-text">First Name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text'
            id='lastname'
            value={lastNameInput}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurhandler}
          />
          {lastNameHasError && <p className="error-text">Last Name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text'
          id='email'
          value={emailInput}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
