import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function SingIn() {
  return (

  




<section class="mx-auto mt-10 mb-10 max-w-[1200px] px-5">
<div class="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
  <div class="">
    <p class="text-4xl font-bold">Вход в аккаунт</p>
    <p>С возвращением!</p>
  </div>

  <form class="mt-6 flex flex-col">
    <label for="email">Email </label>
    <input
      class="mb-3 mt-3 border px-4 py-2"
      type="text"
      placeholder="youremail@domain.com"
    />

    <label for="email">Пароль</label>
    <input
      class="mt-3 border px-4 py-2"
      type="password"
      placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
    />
  </form>

  <div class="mt-4 flex justify-between">
    <form class="flex gap-2">
      <input type="checkbox" name="" id="" />
      <label for="checkbox">Запомнить меня</label>
    </form>
    <a href="#" class="text-violet-900">Забыли пароль?</a>
  </div>

  <button class="my-5 w-full bg-violet-900 py-2 text-white">Войти</button>

  

  

  <p class="text-center">
   Ещё нет аккаунта?
    <a href="sign-up.html" class="text-violet-900">Регестрация</a>
  </p>
</div>
</section>
   
  )
}


