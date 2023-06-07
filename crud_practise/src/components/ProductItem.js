import { useEffect } from 'react';
import { Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { deleteProduct } from "../lib/api";

const Product = (props) => {

    const { sendRequest, status, error } = useHttp(deleteProduct, true);
    const { refresh } = props;

    useEffect(() => {
        if (status === 'completed' && !error) {
            refresh();
        }
    }, [refresh, status, error])

    const deleteProductHandler = () => {
        sendRequest(props.id);
    }

    return (
        <li>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <Link to={`/${props.id}`} >
                Edit
            </Link>
            <br />
            <button onClick={deleteProductHandler}>Delete</button>
        </li>
    );
};

export default Product;