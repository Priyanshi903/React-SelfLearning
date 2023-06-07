import { useState } from "react";

const useBasicFormInput = (validateInputMethod) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const validateInput = validateInputMethod(value);
    const inputHasError = !validateInput && isTouched;

    const inputChangeHandler = event => {
        setValue(event.target.value);
    }

    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setIsTouched(false);
        setValue('');
    }

    return {
        value,
        validateInput,
        inputHasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }

};

export default useBasicFormInput;