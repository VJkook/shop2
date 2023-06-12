import React from 'react'
import { Router } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import Header2 from './Header2';
import Footer1 from './Footer1';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export default function Cartochka() {
  return (
    <div>
      <Header2/>
    <div className='cartochka'>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="\imgs\table.jpg"/>
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">Кухня</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Кухонный стол ala franc</h1>

                <p class="leading-relaxed">Стол выполнен из натурального дерева. Размеры 100х50х50</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div class="flex">
                    <span class="mr-3">Цвет</span>
                    <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div class="flex ml-6 items-center">
                    <span class="mr-3">Дерево</span>
                    <div class="relative">
                      <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                        <option>Сосна</option>
                        <option>Дуб</option>
                        <option>Клён</option>
                        <option>Пихта</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
               
              
             
             </div>
                </div>




   <div class="flex flex-col">
    
    <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Количество стульев</span> 
      <input type="number" id="tentacles" name="tentacles" min="4" max="30" class="border border-indigo-600 rounded-md"/>
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Количество столов</span> 
      <input type="number" id="tentacles" name="tentacles" min="1" max="20" class="border border-indigo-600 rounded-md"/>
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Количество шкавчиков</span> 
      <input type="number" id="tentacles" name="tentacles" min="8" max="50" class="border border-indigo-600 rounded-md"/>
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Вытежка</span> 
      <input type="checkbox" class="toggle toggle-primary" checked />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Посудомойка</span> 
      <input type="checkbox" class="toggle toggle-primary" checked />
    </label>
  </div>
  <div class="form-control w-52">
    <label class="cursor-pointer label">
      <span class="label-text">Холодильник</span> 
      <input type="checkbox" class="toggle toggle-primary" checked />
    </label>
  </div>
  
</div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">10000 руб</span>
                  <button class="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Купить</button>
                  <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>







              </div>
          </div>
        </div>
      </section>
    </div>


    <Footer1/>
    </div>


  );
}
