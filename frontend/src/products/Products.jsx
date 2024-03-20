import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result)
    }
    const deleteProduct = async (item) => {
        console.log(item._id);
        let result = await fetch(`http://localhost:5000/product/${item._id}`, {
            method: 'delete'})
        result = await result.json();
        if(result) {
            getProducts();
        }
    }
    const updateProduct = async (item) => {
        console.log(item._id)
    }

    console.warn(products)

    return (
        <div className="centered-container">
            <ul>
                <li>Serial Number</li>
                <li>Brand</li>
                <li>Model</li>
                <li>Version</li>
                <li>Price</li>
                <li id="empty-head"></li>
            </ul>
            {products.map((item, index) =>
                    <ul key={index} id="item">
                        <li>{index+1}</li>
                        <li>{item.brand}</li>
                        <li>{item.model}</li>
                        <li>{item.version}</li>
                        <li>{item.price}</li>
                        <li>
                            <button id="delete" onClick={() => deleteProduct(item)}>Delete</button>
                            <button id="update" onClick={() => updateProduct(item)}>
                                <Link to={`/update/${item._id}`}>Update</Link>
                            </button>
                        </li>
                        {/* <li id="delete" onClick={() => deleteProduct(item)}>Delete</li> */}
                    </ul>
                    
            )}
        </div>
    )
}
export default Products