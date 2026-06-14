import { A, useLocation } from "@solidjs/router"
import SeaLogo from "../assets/sea-logo.png"

export default function Navbar() {
  const location = useLocation();

  function setActiveLink(url = '') {
    return location.pathname.startsWith(`/${url}`) ? true : false
  }

  return (
    <>
      <nav class="bg-white fixed w-full z-20 top-0 left-0 right-0 border-b border-muted-200">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <A href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={SeaLogo} class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-xl font-mono whitespace-nowrap tracking-wide">SEAPEADIA</span>
          </A>

          {/* < xl screen */}
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Get started</button>
            <button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-muted-500 rounded-lg md:hidden hover:bg-muted-100 focus:outline-none focus:ring-2 focus:ring-muted-200" aria-controls="navbar-sticky" aria-expanded="false">

              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* >= xl screen */}
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <A href="/home" class="block py-2 px-3 rounded-sm" classList={{ "active": setActiveLink('/') }}>Home</A>
              </li>
              <li>
                <A href="/product" class="block py-2 px-3 rounded-sm" classList={{ "active": setActiveLink('/product') }}>Product</A>
              </li>
              <li>
                <A href="/about" class="block py-2 px-3 rounded-sm" classList={{ "active": setActiveLink('/about') }}>About</A>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}