import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function SingUp() {
  return (

 



    <section class="mx-auto mt-10 mb-10 max-w-[1200px] px-5">
    <div class="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
      <div class="">
        <p class="text-4xl font-bold">Создать аккаунт</p>
       
      </div>

      <form class="mt-6 flex flex-col">
        <label for="name">ФИО</label>
        <input
          class="mb-3 mt-3 border px-4 py-2"
          type="name"
          placeholder="Bogdan Bulakh"
        />

        <label class="mt-3" for="email">Email </label>
        <input
          class="mt-3 border px-4 py-2"
          type="email"
          placeholder="user@mail.com"
        />

        <label class="mt-5" for="email">Пароль</label>
        <input
          class="mt-3 border px-4 py-2"
          type="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        />

        <label class="mt-5" for="email">Повторите пароль</label>
        <input
          class="mt-3 border px-4 py-2"
          type="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        />
      </form>

      <div class="mt-4 flex justify-between">
        <form class="flex gap-2">
          <input type="checkbox" name="" id="" />
          <label for="checkbox">
            Я согласен с политикой компании
            <a href="#" class="text-violet-900">terms &amp; и обработкой персональных данных</a>
          </label>
        </form>
      </div>

      <button class="my-5 w-full bg-violet-900 py-2 text-white">
        Регестрация
      </button>

     

      <p class="text-center">
       Уже есть аккаунт?
        <a href="login.html" class="text-violet-900">Войти в аккаунт</a>
      </p>
    </div>
  </section>
   
  )
}


