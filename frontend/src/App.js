import React from 'react';
import Navbar from './navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Footer from './footer/Footer';
import Signup from './signup/Signup';
import PrivateComponent from './PrivateComponent';
import Login from './login/Login';
import AddProduct from './addProduct/AddProduct';
import Products from './products/Products';
import UpdateProduct from './updateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route element={<PrivateComponent/>}>
              <Route path='/' element= {<Products/>}/>
              <Route path='/add-product' element= {<AddProduct/>}/>
              <Route path='/update/:id' element= {<UpdateProduct/>}/>
              <Route path='/logout' element= {<h1>Logout</h1>}/>
              <Route path='/profile' element= {<h1>Profile</h1>}/>
            </Route>

            <Route path='/signup' element = {<Signup/>}/>
            <Route path='/login' element = {<Login/>}/>

          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
