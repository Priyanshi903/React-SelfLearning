import { Fragment } from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    return (
        <Fragment>
            <ul >
                {
                    props.productss.map(product => (
                        < ProductItem
                            key={product.product_id}
                            id={product.product_id}
                            name={product.product_name}
                            price={product.product_price}
                            description={product.product_description}
                            refresh={props.productPageRefresh}
                        />
                    ))
                }
            </ul>
        </Fragment>
    )
};

export default ProductList;
