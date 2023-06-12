import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function CheckOut() {
  return (
    <div>
  <section
    class="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10"
  >
   
   <section class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 ">
    <section class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 ">
    <h2 class="text-lg font-medium text-gray-900 border-b" id="slide-over-title">Адрес доствки</h2>
      <div class="py-5">
        <form class="flex w-full flex-col gap-3" action="">
          <div class="flex w-full justify-between gap-2">
            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name"
                >ФИО<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                ></span
              ></label>
              <input
                class="w-full border px-4 py-2 outline-violet-900"
                type="text"
                placeholder="Иван Иванов"
              />
            </div>

            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name"
                >Email <span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                ></span
              ></label>
              <input
                class="w-full border px-4 py-2 outline-violet-900"
                type="text"
                placeholder="sarahj@maybell.com"
                name=""
                id=""
              />
            </div>
          </div>

          <div class="flex w-full justify-between gap-2">
            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name"
                >Улица<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                ></span
              ></label>
              <input
                class="w-full border px-4 py-2 outline-violet-900"
                type="text"
                placeholder="Ленина 45"
              />
            </div>

            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name"
                >Город<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                ></span
              ></label>
              <input
                class="w-full border px-4 py-2 outline-violet-900"
                type="text"
                placeholder="Киров"
                name=""
                id=""
              />
            </div>
          </div>

          <div class="flex w-full justify-between gap-2">
            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name"
                >Почтовый индекс<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                ></span
              ></label>
              <input
                class="w-full border px-4 py-2 outline-violet-900"
                type="text"
                placeholder="310000"
              />
            </div>

            <div class="flex w-1/2 flex-col">
              <label class="flex" for="name"
                >Получатель<span
                  class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
                ></span
              ></label>
              <input
                class="w-full border px-4 py-2 outline-violet-900"
                type="text"
                placeholder="Иван Иванов"
                name=""
                id=""
              />
            </div>
          </div>

          <div class="flex flex-col">
            <label for="">Комментарий</label>
            <textarea
              class="border px-4 py-2 outline-violet-900"
              type="text"
            ></textarea>
          </div>
        </form>
      </div>

      
    </section>





    <section
      class="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10"
    >
      
      
      <section class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
      <h2 class="text-lg font-medium text-gray-900 border-b" id="slide-over-title">Способ доставки</h2>

        <div class="py-5">
          <form class="grid w-full grid-cols-1 gap-3 lg:grid-cols-2" action="">
           
            <div class="flex w-full justify-between gap-2">
              <div class="flex w-full cursor-pointer flex-col border">
                <div class="flex bg-violet-500 px-4 py-2">
                  <input
                    class="outline-violet-900"
                    type="radio"
                    placeholder="Sarah Johnson"
                  />

                  <p class="ml-3 font-bold">Наша доставка</p>
                </div>

                <div class="px-4 py-3">
                  <p class="pb-3 font-bold text-violet-900">Бесплатно</p>
                  <p class="text-sm">
                   Доставим в течении недели. 
                  </p>
                </div>
              </div>
            </div>

          </form>
        </div>

       
      </section>
      </section>


      <section
      class="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10"
    >
      
     
      <section class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
      <h2 class="text-lg font-medium text-gray-900 border-b" id="slide-over-title">Способ оплаты</h2>

        <div class="py-5">
          <form class="flex w-full flex-col gap-3" action="">
            <div class="flex w-full flex-col">
              <label class="flex" for="name">Номер карты</label>
              <input
                class="w-full border px-4 py-2 lg:w-1/2"
                type="text"
                placeholder="1223 4568 7644 4839"
              />
            </div>

            <div class="flex w-full flex-col">
              <label class="flex" for="name">Владелец карты</label>
              <input
                class="w-full border px-4 py-2 lg:w-1/2"
                type="text"
                placeholder="IVAN IVANOV"
              />
            </div>

            <div class="flex items-center gap-5 lg:w-1/2">
              <div class="flex flex-col">
                <label class="flex" for="name">Срок</label>

                <div class="flex w-[150px] items-center gap-1">
                  <input
                    class="w-1/2 border px-4 py-2 text-center"
                    type="text"
                    name=""
                    id=""
                    placeholder="10"
                  />

                  <span>/</span>

                  <input
                    class="w-1/2 border px-4 py-2 text-center"
                    type="text"
                    name=""
                    id=""
                    placeholder="36"
                  />
                </div>
              </div>

              <div class="flex flex-col">
                <label class="flex" for="">CVV/CVC</label>
                <input
                  class="w-full border py-2 text-center lg:w-1/2"
                  type="password"
                  placeholder="&bull;&bull;&bull;"
                />
              </div>
            </div>

          </form>
        </div>

       
      </section> 
       </section>



    <div class="flex w-full items-center justify-between">
        <a href="catalog.html" class="text-sm text-violet-900"
          >&larr; Вернуться к покупкам</a
        >

        <a href="checkout-delivery.html" class="bg-violet-500 px-4 py-2"
          >Заказать</a
        >
      </div>
    </section>

    <section class="mx-auto w-full px-4 md:max-w-[400px]">
      <div class="">
        <div class="border py-5 px-4 shadow-md">
          <p class="font-bold">Заказ</p>

          <div class="flex justify-between border-b py-5">
            <p>Цена</p>
            <p>128000 руб</p>
          </div>

          <div class="flex justify-between border-b py-5">
            <p>Доставка</p>
            <p>Бесплатно</p>
          </div>

          <div class="flex justify-between py-5">
            <p>Итого</p>
            <p>128000 руб</p>
          </div>
        </div>
      </div>
    </section>
  </section>

 

  

  </div>
  )
}


