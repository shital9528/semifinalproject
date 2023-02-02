import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


const Header = () => {
  const state = useSelector((state)=> state.handleCart)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="/">SHOPLANE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/products">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">contact</a>

        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About us</a>
        </li>
      </ul>
      <div className='buttons '>
      
         <a href='/login' className='btn btn-outline-dark'>
           <i className='fa fa-sign-in me-1'></i> Login
        </a>
        <a href='/register' className='btn btn-outline-dark ms-2'>
           <i className='fa fa-user-plus me-1'></i> Register
        </a>
        <a href='/fav/:id' className='btn btn-outline-dark ms-2'>
           <i className='fa fa-heart me-1'></i> Favorite 
        </a>
        
        <NavLink to="/cart" className="btn ms-2">
                                <i className="fa fa-shopping-cart me-1 "></i> ({state.length})</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
