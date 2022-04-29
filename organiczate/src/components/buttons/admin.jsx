import React from 'react'
import { NavLink } from 'react-router-dom'



function AdminBtn() {
  return (
    <>
      <NavLink to="/admin" className="btn btn-outline-dark ms-auto">
        <span className="fa fa-lock" aria-hidden="true" /> Admin
      </NavLink>
    </>
  )
}

export default AdminBtn