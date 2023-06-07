import { useCallback, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getAllProducts } from "../lib/api";
import ProductList from './ProductList';

const Products = () => {

    const { sendRequest, status, error, data: products } = useHttp(getAllProducts, true);

    const refreshProducts = useCallback(() => {
        sendRequest();
    }, [sendRequest]);

    useEffect(() => {
        console.log('inside useeffect');
        sendRequest();
    }, [sendRequest]);



    console.log('inside products');
    console.log(products);
    if (status === 'completed') {
        return <ProductList productss={products} productPageRefresh={refreshProducts} />
    }

    // return (
    //     <ProductList productss={products} />
    //     // <h1>Products page</h1>
    // );
};

export default Products;