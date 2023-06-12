import React from 'react'
import { Router } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import Header2 from './Header2';
import Footer1 from './Footer1';

export default function Category() {
  return (
<div>
<Header2/>
{/* <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-64 lg:max-w-7xl lg:px-8"> */}
<div class="mx-auto grid max-w-7xl px-4 py-16 sm:px-6 sm:py-64 rounded bg-[url('/src/img/pres1mebel1.jpg')] bg-cover bg-no-repeat bg-center text-primary-content   place-content-left ">
    <p class="text-5xl font-bold leading-snug">Лучшее решение </p>
    <p class="text-5xl font-bold leading-snug"> для вашего интерьера</p>
    <p class="text-l font-normal leading-snug"> для вашего интерьера</p>
    </div>
{/* </div> */}

    <div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Категории</h2>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      <a href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img  alt="Категория кухня." class="h-full w-full object-cover object-center group-hover:opacity-75 " src="/imgs/category/kitchen.jpg"/>
        </div>
        <h3 class="text-center mt-4 text-xl text-gray-700">Кухня</h3>
       
      </a>
      <a href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img  src="/imgs/category/wearhouse.jpg" alt="Категория гардероб." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 class="text-center mt-4 text-xl text-gray-700">Гардероб</h3>
       
      </a>
      <a href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="/imgs/category/office.jpg" alt="Категория офисная мебель." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 class="text-center mt-4 text-xl text-gray-700">Офисная мебель</h3>
       
      </a>
      <a href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="/imgs/category/bedroom.png" alt="Категория спальня." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 class="text-center mt-4 text-xl text-gray-700">Спальня</h3>
      
      </a>
      <a href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="/imgs/category/childrenroom.png" alt="Категория детская." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 class="text-center mt-4 text-xl text-gray-700">Детская</h3>
      
      </a>

     
    </div>
  </div>
</div>
<Footer1/>
</div>
  );
}
