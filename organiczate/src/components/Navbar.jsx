/* Navbar de navegación */

import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './buttons/Login';
import Signup from './buttons/Signup';
import AdminBtn from './buttons/admin';
import CartBtn from './buttons/CartBtn';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            <img src="../assets/images/logo.png" alt="" width="120" height="30"/>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                        {/* Elementos del menú */}
              <li className="nav-item">
                <NavLink className="nav-link active fw-bold" aria-current="page" to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Productos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contacto</NavLink>
              </li>
            </ul>
              <Login/>
              <AdminBtn/>
              <Signup/>
              <CartBtn/>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar