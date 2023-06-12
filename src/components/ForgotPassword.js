import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <section class="mx-auto mt-10 mb-10 max-w-[1200px] px-5">
<div class="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
    <form class="my-10 space-y-6">
  <div class="text-center">
    <h2 class="mb-1 text-3xl font-semibold text-gray-700 dark:text-white">
     Забыли пароль <span class="text-primary-500">?</span>
    </h2>
    <p class="text-sm text-gray-400 dark:text-night-200">Введите email, чтобы создать новый пароль.</p>
  </div>

  <div class="space-y-3 text-left">
  <form class="mt-6 flex flex-col">
    <label for="email">Введите email </label>
    <input
      class="mb-3 mt-3 border px-4 py-2"
      type="text"
      
    />
  </form>
  </div>

  {/* <button class="my-5 w-full bg-violet-900 py-2 text-white">Войти</button> */}
  <div class="flex justify-between space-x-2">
    <button
      type="button"
      class="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-900 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-primary-400">
      Подтвердить
    </button>
    <button
      type="button"
      routerLink="/auth/sign-in"
      class="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-50 py-2 px-4 text-sm font-medium text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-gray-100 dark:bg-night-600 dark:text-night-200 dark:hover:bg-night-500">
      Отмена
    </button>
  </div>
</form>

</div>
</section>
   
  )
}


