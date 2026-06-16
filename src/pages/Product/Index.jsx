import { createSignal } from "solid-js"
import ProductCard from "../../components/ProductCard"

export default function ProductIndex() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div class="min-h-screen relative pt-32">
        <header class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-grey-100">

          <div class="space-y-1">
            <h1 class="text-3xl font-bold tracking-tight text-primary-900 uppercase">
              Products
            </h1>
            <p class="text-sm font-normal text-muted-500">
              Temukan koleksi produk terbaik kami yang dirancang untuk kenyamanan dan estetika minimalis Anda.
            </p>
          </div>

          <div class="w-full sm:max-w-md">
            <form>
              <label for="search" class="mb-2 text-sm font-medium text-muted-900 sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-muted-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  class="block w-full px-3.5 py-2.5 ps-10 text-sm text-muted-900 border border-muted-300 rounded-lg bg-white focus:ring-primary-500 focus:border-primary-500 placeholder-muted-400"
                  placeholder="Search Product..."
                  required
                />
              </div>
            </form>
          </div>

        </header>
        <div className="flex gap-12">
          <div class="w-full max-w-[300px] sticky top-24 left-0 h-fit">
            <div class="mb-3 font-semibold">
              Filter :
            </div>

            <aside class="border border-muted-200  bg-white p-5">

              <div class="mb-6 pb-6 border-b border-grey-100">
                <div class="flex items-center justify-between mb-4 cursor-pointer">
                  <h3 class="text-base font-semibold text-primary-900 tracking-tight">Price</h3>
                  <svg class="w-4 h-4 text-primary-500 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                <div class="space-y-3">
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-sm font-medium text-muted-500">
                      Rp.
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      class="bg-muted-50 border border-muted-300 text-muted-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-11 p-2.5 placeholder-muted-400"
                      placeholder="Min. Price"
                    />
                  </div>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-sm font-medium text-muted-500">
                      Rp.
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      class="bg-muted-50 border border-muted-300 text-muted-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-11 p-2.5 placeholder-muted-400"
                      placeholder="Max. Price"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-6 pb-6 border-b border-grey-100">
                <div class="flex items-center justify-between mb-4 cursor-pointer">
                  <h3 class="text-base font-semibold text-primary-900 tracking-tight">Rating</h3>
                  <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" class="w-5 h-5 rounded border-grey-300 text-primary-700 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer accent-primary-700" />
                    <div class="flex items-center gap-1.5 text-sm text-primary-800 font-medium group-hover:text-primary-900">
                      <span class="text-warning-600 text-base leading-none">★</span>
                      <span>
                        4 <i class="ph-bold ph-arrow-up"></i>
                      </span>
                    </div>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" class="w-5 h-5 rounded border-grey-300 text-primary-700 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer accent-primary-700" />
                    <div class="flex items-center gap-1.5 text-sm text-primary-800 font-medium group-hover:text-primary-900">
                      <span class="text-warning-600 text-base leading-none">★</span>
                      <span>
                        3 <i class="ph-bold ph-arrow-up"></i>
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div class="mb-2">
                <div class="flex items-center justify-between mb-4 cursor-pointer">
                  <h3 class="text-base font-semibold text-primary-900 tracking-tight">Delivery Time</h3>
                  <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" class="w-5 h-5 rounded border-grey-300 text-primary-700 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer accent-primary-700" />
                    <span class="text-sm text-primary-800 font-medium group-hover:text-primary-900">Instant (3 Hours)</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" class="w-5 h-5 rounded border-grey-300 text-primary-700 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer accent-primary-700" />
                    <span class="text-sm text-primary-800 font-medium group-hover:text-primary-900">Same Day</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" class="w-5 h-5 rounded border-grey-300 text-primary-700 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer accent-primary-700" />
                    <span class="text-sm text-primary-800 font-medium group-hover:text-primary-900">Reguler (1-3 Days)</span>
                  </label>
                </div>
              </div>

            </aside>
          </div>

          <div className="flex flex-wrap gap-12">
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>
            <div className="min-w-[280px] xl:min-w-[320px] flex-1 xl:max-w-[400px]">

              <ProductCard />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

