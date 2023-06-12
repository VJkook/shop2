import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import Header from './Header';
export default function ShoppingCart() {
  return (
<div>
{/* <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Корзина</h1>
     
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Название</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Цвет</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Матеиал</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Количество</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Цена</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">Стол кухонный ala franc</td>
            <td class="px-4 py-3">Белый</td>
            <td class="px-4 py-3">Дуб</td>
            <td class="px-4 py-3"> 
              
              <div>
               
              
                <div class="flex w-20 h-10 items-center border border-purple-200 rounded">
                  <button
                    type="button"
                    class="w-5 h-5 leading-5 text-purple-600 transition hover:opacity-75"
                  >
                    
                    <FaMinus className='minus' />
                 
                  
                  </button>
              
                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    class="h-5 w-9 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
              
                  <button
                    type="button"
                    class="w-5 h-10 leading-5 text-purple-600 transition hover:opacity-75"
                  >
                   <FaPlus className='plus'/>
                  </button>
                </div>
              </div>
          </td>
            <td class="px-4 py-3 text-lg text-gray-900">10000 руб</td>
            <td class="w-10 text-center">
            <button class="flex ml-auto text-white bg-purple-200 border-0 py-0.5 px-1 focus:outline-none hover:bg-purple-300 rounded">Убрать</button>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Стол кухонный ala korea</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">Пурпурный</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">Сакура</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">
              <div>
               
              
                <div class="flex w-20 h-10 items-center border border-purple-200 rounded">
                  <button
                    type="button"
                    class="w-5 h-5 leading-5 text-purple-600 transition hover:opacity-75"
                  >
                    <FaMinus className='minus' />
                  </button>
              
                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    class="h-5 w-9 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
              
                  <button
                    type="button"
                    class="w-5 h-10 leading-5 text-purple-600 transition hover:opacity-75"
                  >
                    <FaPlus className='plus'/>
                  </button>
                </div>
              </div>
            </td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">100000 руб</td>
            <td>
            <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
     
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
            </td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
            <button class="flex ml-auto text-white bg-purple-200 border-0 py-0.5 px-1 focus:outline-none hover:bg-purple-300 rounded">Убрать</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      
      <button class="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Оформить</button>
    </div>



    
  </div>
</section>



<details class="group py-4 marker:content-['']" open>
  <summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-purple-600 [&::- webkit-details-marker]:hidden">
Детали   
    <svg class="ml-4 mt-0.5 h-6 flex-none stroke-slate-700 group-open: stroke-purple-500 "  fill="none" xmlns='http://www.w3.org/2000/swg' stroke-width="2" stroke-linecap='round' stroke-linejoin='round' >
      <path d='M18 12H6'> </path>
      <path class="group-open: hidden" d='M12 6v12'></path>
    </svg>
  </summary>
  <div class="pb-6 pt-6">
    <div class="prose prose-slate max-w-none  prose-a: font-semibold prose-a: text-slate-700 hover:prose-a: text-slate-600 ">
 
<p>
  Наличие доп деталей
</p>
  </div>
  </div>

</details> */}




<section
      class="container mx-auto min-h-screen max-w-[1500px] border-b py-5 lg:flex lg:flex-row lg:py-10"
    >
   
     
      
      <section
        class="hidden h-[600px] w-full max-w-[1500px] grid-cols-1 gap-3 px-5 pb-10 md:grid"
      >
        <table class="table-fixed">
          <thead class="h-16 bg-neutral-100">
            <tr>
              <th>Товар</th>
              <th>Цена за один</th>
              <th>Количество</th>
              <th>Итог</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          

            <tr class="h-[100px] border-b">
              <td class="align-middle">
                <div class="flex">
                
                  <div class="ml-3 flex flex-col justify-center">
                    <p class="text-xl font-bold">Белая кухня в французском стиле</p>
                    <p class="text-sm text-gray-400">Размеры: 100х50х50, Цвет: белый, Материал: Кедр </p>
                    <p class="text-sm text-gray-400">Посудомойка:да, Халодильник: нет, Плита: да </p>
                  </div>
                </div>
              </td>
              <td class="mx-auto text-center">320000 руб</td>
              <td class="align-middle">
                <div class="flex items-center justify-center">
                  <button
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                  >
                    &minus;
                  </button>
                  <div
                    class="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
                  >
                    1
                  </div>
                  <button
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                  >
                    &#43;
                  </button>
                </div>
              </td>
              <td class="mx-auto text-center">320000</td>
              <td class="align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="m-0 h-5 w-5 cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </td>
            </tr>

          

            <tr class="h-[100px] border-b">
              <td class="align-middle">
                <div class="flex">
                
                  <div class="ml-3 flex flex-col justify-center">
                    <p class="text-xl font-bold">Гардероб европейский</p>
                    <p class="text-sm text-gray-400">Размеры: 100х50х50, Цвет: белый, Материал: Кедр </p>
                    <p class="text-sm text-gray-400">Маленькие ящики:8, Большие ящики: 5, Планки: 7 </p>
                  </div>
                </div>
              </td>
              <td class="mx-auto text-center">80000 руб</td>
              <td class="align-middle">
                <div class="flex items-center justify-center">
                  <button
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                  >
                    &minus;
                  </button>
                  <div
                    class="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
                  >
                    1
                  </div>
                  <button
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                  >
                    &#43;
                  </button>
                </div>
              </td>
              <td class="mx-auto text-center">80000</td>
              <td class="align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="m-0 h-5 w-5 cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </td>
            </tr>

          

            <tr class="h-[100px] border-b">
              <td class="align-middle">
                <div class="flex">
                  
                  <div class="ml-3 flex flex-col justify-center">
                    <p class="text-xl font-bold">Стол японский</p>
                    <p class="text-sm text-gray-400">Размеры: 100х10х10, Цвет: белый, Материал: Сакура </p>
                  
                  </div>
                </div>
              </td>
              <td class="mx-auto text-center">20000 руб</td>
              <td class="align-middle">
                <div class="flex items-center justify-center">
                  <button
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                  >
                    &minus;
                  </button>
                  <div
                    class="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
                  >
                    2
                  </div>
                  <button
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                  >
                    &#43;
                  </button>
                </div>
              </td>
              <td class="mx-auto text-center">40000</td>
              <td class="align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="m-0 h-5 w-5 cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </td>
            </tr>

        

          
          </tbody>
        </table>
      </section>
    

      <section class="mx-auto w-full px-4 md:max-w-[400px]">
        <div class="">
          <div class="border py-5 px-4 shadow-md">
            <p class="font-bold">ИТОГ ЗАКАЗА</p>

            <div class="flex justify-between border-b py-5">
              <p>Итого за товары</p>
              <p>440000 руб</p>
            </div>

            <div class="flex justify-between border-b py-5">
              <p>Доставка</p>
              <p>Бесплатно</p>
            </div>

            <div class="flex justify-between py-5">
              <p>Итго</p>
              <p>440000 руб</p>
            </div>

            <a href="checkout-address.html">
              <button class="w-full bg-violet-900 px-5 py-2 text-white">
                Оформить заказ
              </button>
            </a>
          </div>
        </div>
      </section>
    </section>
</div>
);
}
