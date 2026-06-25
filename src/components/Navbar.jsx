import { A, useLocation } from "@solidjs/router"
import SeaLogo from "../assets/sea-logo.png"
import { useAuth } from "../stores/auth/auth-context.jsx";
import { createSignal } from "solid-js";

export default function Navbar() {
  const [profileClicked, setProfileClicked] = createSignal(false)

  const location = useLocation();

  function setActiveLink(url = '') {
    return location.pathname.startsWith(`/${url}`) ? true : false
  }

  function toggleProfile() {
    setProfileClicked((val) => {
      return !val
    })
  }

  const auth = useAuth();

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
            <Show when={!auth?.authStore?.isAuthenticated}>
              <div class="flex gap-3 flex-1">
                <A href="/sign-in" class="btn btn-secondary">
                  Sign In
                </A>
                <A href="/sign-up" class="btn btn-primary">
                  Sign Up
                </A>
              </div>
            </Show>
            <Show when={auth?.authStore?.isAuthenticated}>
              <div class="flex items-center gap-2">
                <div class="btn btn-secondary p-2.5 relative">
                  <i class="ph-bold ph-bell text-xl"></i>
                </div>
                <div class="btn btn-secondary p-2.5 relative">
                  <div class="size-4 aspect-square rounded-full bg-rose-400 absolute -top-1 -right-1 text-[10px] text-white font-bold flex justify-center items-center mb-0 leading-none">
                    1
                  </div>
                  <i class="ph-bold ph-shopping-cart-simple text-2xl"></i>
                </div>
                <div onClick={toggleProfile} class="flex gap-3 flex-1 btn btn-secondary relative">
                  <i class="ph-bold ph-user-circle text-2xl"></i>
                  <div>
                    {auth?.authStore?.user?.name}
                  </div>
                  <div>
                    <i class="ph-bold ph-caret-down text-lg leading-none ml-1"></i>
                  </div>
                  <Show when={profileClicked()}>
                    <div class="w-[240px] absolute top-14 right-0 bg-white border border-muted-200 rounded-lg shadow-xl overflow-hidden">

                      <div class="px-4 py-3">
                        <p class="font-semibold text-sm text-primary-900 leading-none mb-1">
                          {auth?.authStore?.user?.name}
                        </p>
                        <p class="text-xs text-primary-500">
                          (Admin)
                        </p>
                      </div>

                      <div class="border-t border-primary-200" />

                      <ul class="py-2">
                        <li>
                          <A href={`/profile/${auth?.authStore?.user?.username}`}>
                            <button
                              type="button"
                              class="w-full px-4 py-2 text-left text-sm hover:bg-primary-100"
                            >
                              Profile
                            </button>
                          </A>
                        </li>
                        <li>
                          <A href={`/wallet/${auth?.authStore?.user?.username}`}>
                            <button
                              type="button"
                              class="w-full px-4 py-2 text-left text-sm hover:bg-primary-100"
                            >
                              Wallet
                            </button>
                          </A>

                        </li>
                        <li>
                          <A href={`/transaksi/${auth?.authStore?.user?.username}`}>
                            <button
                              type="button"
                              class="w-full px-4 py-2 text-left text-sm hover:bg-primary-100"
                            >
                              Transaksi
                            </button>
                          </A>
                        </li>
                      </ul>

                      {/* Divider */}
                      <div class="border-t border-primary-200" />

                      {/* Logout */}
                      <div class="py-2">
                        <button
                          type="button"
                          class="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                        >
                          Sign Out
                        </button>
                      </div>

                    </div>
                  </Show>
                </div>

              </div>
            </Show>
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
              {/* <li>
                <A href="/about" class="block py-2 px-3 rounded-sm" classList={{ "active": setActiveLink('/about') }}>About</A>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}