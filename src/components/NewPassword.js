import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function NewPassword() {
  return (
    
    <section class="mx-auto mt-10 mb-10 max-w-[1200px] px-5">
    <div class="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
      <div class="">
        <p class="text-4xl font-bold">Новый пароль</p>
       
      </div>

      <form class="mt-6 flex flex-col">
        

        <label class="mt-5" for="email">Новый пароль</label>
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

      

      <button class="my-5 w-full bg-violet-900 py-2 text-white">
       Подтвердить
      </button>

     

      <p class="text-center">
      
        <a href="login.html" class="text-violet-900">Войти в аккаунт</a>
      </p>
    </div>
  </section>
   
  )
}


