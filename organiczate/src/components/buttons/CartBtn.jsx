import React from 'react'
import { NavLink } from 'react-router-dom'



function CartBtn() {
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-dark ms-auto">
        <span className='fa fa-shopping-cart me-1' /> Carrito
      </NavLink>
    </>
  )
}

export default CartBtn