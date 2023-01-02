
import React from 'react'
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './PrivateRoute/PrivateRoute';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'

import ListClient from './Client/ListClient';
import Addclient from './Client/AddClient';
import UpdateClient from './Client/UpdateClient'


import Register from './Authentification/Register';
import Login from './Authentification/Login';

import Home from './Home';

import AddLivre from './Livres/AddLivre';
import UpdateLivre from './Livres/UpdateLivre';
import ListLivres from './Livres/ListLivres';




function App() {
  return (
    <div className="">
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    <Router>
      
      <Routes>
    <Route  path="/list-client" element={<ListClient/>}/>
      <Route  path="/Addclient" element={<Addclient/>}/>
      <Route  path="/UpdateClient/:id" element={<UpdateClient/>}/>

      <Route  path="/Register" element={<Register/>}/>
      <Route  path="/login" element={<Login/>}/>

      <Route  path="/AddLivre" element={<AddLivre/>}/>
      <Route  path="/UpdateLivre/:id" element={<UpdateLivre/>}/>
      <Route  path="/list-livres" element={<ListLivres/>}/>
     

      <Route path="*" name="Home" element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>} />
      
      


      </Routes>
    </Router>
  </div>
  );
}

export default App;
