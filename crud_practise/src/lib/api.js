const PRODUCTS_URL = 'http://localhost:9000/product';

export async function getAllProducts() {
    const response = await fetch(`${PRODUCTS_URL}`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
    const products = [];

    for (let i in data) {
        const productObj = { ...data[i] };
        products.push(productObj);
    }
    console.log(products);
    return products;
}

export async function getProductById(productId) {
    const response = await fetch(`${PRODUCTS_URL}/searchProductById/${productId}`);
    const product = await response.json();
    console.log(product);
    console.log(response.status);
    if (product.message === 'Product Not Found') {
        console.log('inside if');
        throw new Error(product.message);
    }
    return product;
}

export async function addProduct(requestData) {
    const response = await fetch(`${PRODUCTS_URL}`, {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

export async function deleteProduct(productId) {
    const response = await fetch(`${PRODUCTS_URL}/${productId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
}

export async function updateProduct(productObj) {
    const response = await fetch(`${PRODUCTS_URL}`, {
        method: 'PUT',
        body: JSON.stringify(productObj),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

