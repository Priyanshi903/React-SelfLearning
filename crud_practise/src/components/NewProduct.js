import { useRef } from 'react'
import useHttp from '../hooks/use-http';
import { addProduct } from '../lib/api';

const NewProduct = () => {

    const enteredId = useRef();
    const enteredName = useRef();
    const enteredPrice = useRef();
    const enteredDescription = useRef();

    const { sendRequest, status, error, data: products } = useHttp(addProduct, true);

    const submitFormHandler = (event) => {
        event.preventDefault();
        const prodObj = {
            product_id: enteredId.current.value,
            product_name: enteredName.current.value,
            product_price: enteredPrice.current.value,
            product_description: enteredDescription.current.value,
        };
        console.log(prodObj);
        sendRequest(prodObj);
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className='form-control'>
                <label htmlFor="id">ProductId:</label>
                <input type='text' id='id' ref={enteredId} />
            </div>
            <div className='form-control'>
                <label htmlFor="name">ProductName:</label>
                <input type='text' id='name' ref={enteredName} />
            </div>
            <div className='form-control'>
                <label htmlFor="price">ProductPrice:</label>
                <input type='text' id='price' ref={enteredPrice} />
            </div>
            <div className='form-control'>
                <label htmlFor="desc">ProductDesc:</label>
                <input type='text' id='desc' ref={enteredDescription} />
            </div>
            <button type='submit'>Add</button>
        </form>
    )

};

export default NewProduct;