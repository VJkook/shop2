import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function TwoVar() {
  return (
    <section class="mx-auto mt-10 mb-10 max-w-[1200px] px-5">
<div class="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
    <form class="my-10 space-y-6">
    <div class="text-center">
      <h2 class="mb-1 text-3xl font-semibold text-gray-700 dark:text-white">Двойная аунтификация</h2>
      <p class="text-sm text-gray-400 dark:text-night-200">Введите отправленый вам пароль на</p>
      <div class="mt-2 text-lg text-gray-600 dark:text-night-200">******2289</div>
    </div>
  
    <form class="mt-6 flex flex-col">
    <label for="email">Введите код </label>
    <input
      class="mb-3 mt-3 border px-4 py-2"
      type="text"
      
    />
  </form>
  
 
  <button class="my-5 w-full bg-violet-900 py-2 text-white">Войти</button>
  </form>
   </div>
   </section>

/* <section class="mx-auto mt-10 mb-10 max-w-[1200px] px-5">
<div class="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
  <div class="">
    <p class="text-4xl font-bold">Двойная аунтификация</p>
   
  </div>

  <form class="mt-6 flex flex-col">
    <label for="email">Введите код </label>
    <input
      class="mb-3 mt-3 border px-4 py-2"
      type="text"
      
    />
  </form>

  <button class="my-5 w-full bg-violet-900 py-2 text-white">Войти</button>

</div>
</section> */



   
  )
}


