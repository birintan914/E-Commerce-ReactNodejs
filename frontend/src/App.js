import React from 'react';
import Navbar from './navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element= {<h1>Product Component</h1>}/>
          <Route path='/add' element= {<h1>Add Product Component</h1>}/>
          <Route path='/update' element= {<h1>Update Component</h1>}/>
          <Route path='/logout' element= {<h1>Logout</h1>}/>
          <Route path='/profile' element= {<h1>Profile</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
