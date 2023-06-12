import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Cartochka from "./components/Cartochka";
import ShoppingCart from "./components/ShoppingCart";
import Header2 from "./components/Header2";
import Header from "./components/Header";
import Footer1 from "./components/Footer1";
import Items from "./components/Itemss";
import Category from "./components/Category";
import Profile from "./components/Profile"
import TOne from './components/t/t1'
import CheckOut from './components/CheckOut';
class App extends React.Component {
  constructor(props){
    super(props)
   
    this.state = {
      items: [
        {
        id: 1,
        title: 'белый стол',
        img: 'table.jpg',
        desc: 'стол из белого дерева',
        category:'kyhna',
        price: '1000'
        },
        {
        id: 2,
        title: 'белый стол',
        img: 'table.jpg',
        desc: 'стол из белого дерева',
        category:'kyhna',
        price: '1000'
        },
        {
        id: 3,
        title: 'белый стол',
        img: 'table.jpg',
        desc: 'стол из белого дерева',
        category:'kyhna',
        price: '1000'
        },
        {
          id: 4,
          title: 'белый стол',
          img: 'table.jpg',
          desc: 'стол из белого дерева',
          category:'kyhna',
          price: '1000'
          },
      ]
    }
  }
  
    render(){
    return (
    //   <div >
     
    //   <Items items={this.state.items}/>
      
    // </div>

   
    
      <div>
          <Layout/>
      <Routes>
        {/* <Route path="/" element={<Layout2 />} /> */}
        <Route index element={<ShowProfile/>} />
        <Route path="ShoppingCart" element={<ShowShoppingCart />} />
        <Route path="Itemss" element={<ShowItemss />} />
     
        <Route path="Category" element={<ShowCategory />} />
      </Routes>
      </div>
          
        
    // <div>
    //   <Profile/>
    // </div>
  //  <Cartochka/>
  // <ShoppingCart/>
  // <div className="wrapper">
  //   <Header2/>
 // <Category/>
   
  // </div>
   
    );





    function ShowShoppingCart()
    {
      return(
          <ShoppingCart />
      );
    }
   
    function ShowCategory()
    {
      return(
          <Category />
      );
    }
    function ShowItemss()
    {
      
      return(
          
          <Items items={this.state.items}/>
      );
    }
  
    function ShowProfile()
    {
      return(
          <div class="container px-5 py-8 mx-auto  items-center sm:flex-row flex-col">
<form>
<div class="space-y-12">
  

  <div class="border-b border-gray-900/10 pb-12">
    <h2 class="text-base font-semibold leading-7 text-gray-900">Личные данные</h2>
    <p class="mt-1 text-sm leading-6 text-gray-600">Спасибо, что выбираете нас.</p>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Фамилия</label>
        <div class="mt-2">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Имя</label>
        <div class="mt-2">
          <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-3">
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Отчество</label>
        <div class="mt-2">
          <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div class="sm:col-span-4">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email или телефон</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Страна</label>
        <div class="mt-2">
          <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>Россия</option>
            <option>Южная Корея</option>
            <option>Абхазия</option>
          </select>
        </div>
      </div>

      <div class="col-span-full">
        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Адрис улицы</label>
        <div class="mt-2">
          <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div class="sm:col-span-2 sm:col-start-1">
        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Город</label>
        <div class="mt-2">
          <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Область</label>
        <div class="mt-2">
          <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Почтовый индекс</label>
        <div class="mt-2">
          <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    </div>
  </div>

  
</div>

<div class="mt-6 flex items-center justify-end gap-x-6">
  <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Отмена</button>
  <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Сохранить</button>
</div>
</form>
</div>

      );
    }
  
    function Layout() {
return(
<div>
<header>
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"></a>
  <div class="navbar bg-base-100 ">
<div >
<a class="font-bold text-2xl ">Mebel on order</a>
</div>


<div class="flex-1">
<ul class="menu menu-horizontal px-1">
<Link to="/Category">
  <li><a>Каталог</a></li>
  </Link>
  <li tabindex="0">
    <a>
      Категории
      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
    </a>
    <ul class="p-2 bg-base-100">
    <Link to="/Itemss">
      <li><a>Кухня</a></li>
    </Link>
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
<Outlet/>
</div>
);

}


    }
  }
  
  export default App;
