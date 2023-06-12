
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ShoppingCart from './ShoppingCart';

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/ShoppingCart" component={ShoppingCart} />
    </Routes>
  )

  function Header() {
    return (
      <header>
        <div>
          <span className='logo'>Mebel on order </span>
          <ul className='nav'>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Адресс</li>
          </ul>
          <Link to="/ShoppingCart">
            <FaShoppingCart  />
          </Link>
        </div>
        <Outlet />
        <div className='presentation'></div>
      </header>

    );

  }
}
