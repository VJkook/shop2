import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ShoppingCart from './ShoppingCart';

export default function Header2() {
 

  return (
    <Routes>
      <Route path="/" element={<Header2 />} />
      <Route path="/ShoppingCart" component={ShoppingCart} />
    </Routes>
  )






  function Header2() {
    return (
    <header>
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"></a>
    <div class="navbar bg-base-100 ">
<div >
  <a class="font-bold text-2xl ">Mebel on order</a>
</div>


<div class="flex-1">
  <ul class="menu menu-horizontal px-1">
    <li><a>Каталог</a></li>
    <li tabindex="0">
      <a>
        Категории
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
      </a>
      <ul class="p-2 bg-base-100">
        <li><a>Кухня</a></li>
        <li><a>Гардероб</a></li>
        <li><a>Офисная мебель</a></li>
        <li><a>Спальня</a></li>
        <li><a>Детская</a></li>
      </ul>
    </li>
    
  </ul>
</div>
<div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Товаров</span>
          <span class="text-info">Цена: 10000 руб</span>
          <div class="card-actions">
          <Link to="/ShoppingCart">
          <button class="btn btn-primary btn-block">Перейти в корзину</button>
          </Link>
           
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="/imgs/table.jpg" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Заказы
          </a>
        </li>
        <li><a>Личный кабинет</a></li>
        <li><a>Документы</a></li>
      </ul>
    </div>
  </div>
</div>



</div>


</header>
  );

}
}

