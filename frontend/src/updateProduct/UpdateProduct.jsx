import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const [Brand, setBrand] = useState('');
    const [Model, setModel] = useState('');
    const [Version, setVersion] = useState('');
    const [Price, setPrice] = useState('');
    const [error, setError] = useState(false)
    const params = useParams();
    useEffect(()=>{
        getProductDetails();
    }, []);
    const getProductDetails = async () => {
        console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        setBrand(result.brand);
        setModel(result.model);
        setVersion(result.version);
        setPrice(result.price);
    }
    const handleUpdate = () => {
        if(!Brand || !Model || !Version || !Price) {
            setError(true);
            return false;
        }
        console.log(Brand, Model, Version, Price)
    }
  return (
    <div className="container">
        <h1>Update Product</h1>
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
        <button type="submit" className="button" onClick={handleUpdate}>Submit</button>
    </div>
  )
}
export default UpdateProduct