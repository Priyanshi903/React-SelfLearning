import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useHttp from "../hooks/use-http";
import { getProductById, updateProduct } from "../lib/api";

const EditProduct = () => {

    const params = useParams();
    const { id } = params;

    const { sendRequest, status, error, data: product } = useHttp(getProductById, true);
    const { sendRequest: sendReqUpdate } = useHttp(updateProduct, true);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('inside useeffect');
        sendRequest(id);
    }, [sendRequest, id]);

    console.log(product);

    const [enteredName, setEnteredName] = useState();
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    if (error) {
        return <h1>no product found</h1>
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        const prodObj = {
            product_id: id,
            product_name: enteredName || product.product_name,
            product_price: enteredPrice || product.product_price,
            product_description: enteredDescription || product.product_description,
        };
        console.log(prodObj);
        sendReqUpdate(prodObj);
        navigate('/');
    }

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }
    const priceChangeHandler = (e) => {
        setEnteredPrice(e.target.value);
    }
    const descChangeHandler = (e) => {
        setEnteredDescription(e.target.value);
    }

    if (status === 'completed') {

        return (
            <form onSubmit={submitFormHandler}>

                <div className='form-control'>
                    <label >ProductName:</label>
                    <input type='text' id='name' defaultValue={product.product_name} onChange={nameChangeHandler} />
                </div>
                <div className='form-control'>
                    <label >ProductPrice:</label>
                    <input type='number' id='price' defaultValue={product.product_price} onChange={priceChangeHandler} />
                </div>
                <div className='form-control'>
                    <label >ProductDesc:</label>
                    <input type='text' id='desc' defaultValue={product.product_description} onChange={descChangeHandler} />
                </div>
                <button type='submit'>Update</button>
            </form>
        )
    }
};

export default EditProduct;