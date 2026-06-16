import { createSignal } from "solid-js"
import ProductCard from "../../../components/ProductCard"

export default function SignInIndex() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div class="min-h-screen relative pt-32 flex justify-center items-center flex-row ">
        <div className="max-w-2xl flex-1 bg-white border border-muted-200 px-6 py-8">
          <header class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-grey-100">

            <div class="space-y-1">
              <h1 class="text-3xl font-bold tracking-tight text-primary-900 uppercase">
                Sign In!
              </h1>
              <p class="text-sm font-normal text-muted-500">
                Let's sign in and enjoy your shopping with SEAPEDIA!
              </p>
            </div>
          </header>

          <form>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-muted-900">Email</label>
              <input type="email" id="email" class="bg-muted-50 border border-muted-300 text-muted-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-muted-400" placeholder="•••••••••" required />
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-muted-900">Password</label>
              <input type="password" id="password" class="bg-muted-50 border border-muted-300 text-muted-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-muted-400" placeholder="•••••••••" required />
            </div>
            <button type="submit" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-colors flex justify-center items-center">
              Sign Up!
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

