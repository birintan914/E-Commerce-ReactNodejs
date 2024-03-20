import React, { useState } from "react"
import '../App.css'

const AddProduct = () => {
    const [Brand, setBrand] = useState('');
    const [Model, setModel] = useState('');
    const [Version, setVersion] = useState('');
    const [Price, setPrice] = useState('');
    const [error, setError] = useState(false)
    const auth = localStorage.getItem('user')

    const handleAdd = async ()=> {
        if(!Brand || !Model || !Version || !Price) {
            setError(true)
            return false;
        }

        const userID = JSON.parse(auth)._id
        //console.log(Brand, Model, Version, Price, userID);
        let result = await fetch("http://localhost:5000/add-product", {
            method: 'post',
            body: JSON.stringify({brand: Brand, model: Model, version: Version, price: Price, userID}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
    }

    return (
        <div className="container">
            <h1>Add Product</h1>
            <div className="inputBox">
                <label htmlFor="email">Enter Brand</label>
                <input type="text" id="Brand" placeholder='Brand' value={Brand} 
                onChange={(e) => setBrand(e.target.value)}/>
                {error && !Brand && <span className="error-msg">Enter a valid brand</span>}
            </div>
            <div className="inputBox">
                <label htmlFor="Model">Enter Model</label>
                <input type="text" id="Model" placeholder='Model' value={Model} 
                onChange={(e) => setModel(e.target.value)}/>
                {error && !Model && <span className="error-msg">Enter a valid model</span>}
            </div>
            <div className="inputBox">
                <label htmlFor="Version">Enter Version</label>
                <input type="text" id="Version" placeholder='Version' value={Version} 
                onChange={(e) => setVersion(e.target.value)}/>
                {error && !Version && <span className="error-msg">Enter a valid version</span>}
            </div>
            <div className="inputBox">
                <label htmlFor="Price">Enter Price</label>
                <input type="text" id="Price" placeholder='Price' value={Price} 
                onChange={(e) => setPrice(e.target.value)}/>
                {error && !Price && <span className="error-msg">Enter a valid price</span>}
            </div>
            <button type="submit" className="button" onClick={handleAdd}>Submit</button>
        </div>
        
    )
}
export default AddProduct