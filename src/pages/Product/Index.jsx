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
              Find the best product and for you!
            </p>
          </div>

          <div class="w-full sm:max-w-md">
            <form>
              <label for="search" class="mb-2 text-sm font-medium text-muted-900 sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                  <i class="ph-bold ph-magnifying-glass text-primary-500"></i>
                </div>
                <input
                  type="search"
                  id="search"
                  class="ps-10"
                  placeholder="Search Product..."
                  required
                />
              </div>
            </form>
          </div>

        </header>
        <div class="flex gap-12">
          <div class="w-full max-w-75 sticky top-24 left-0 h-fit">
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
                      class="ps-10"
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
                      class="ps-10"
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
                    <input type="checkbox" />
                    <div class="flex items-center gap-1.5 text-sm text-primary-800 font-medium group-hover:text-primary-900">
                      <span class="text-warning-600 text-base leading-none">★</span>
                      <span>
                        4 <i class="ph-bold ph-arrow-up"></i>
                      </span>
                    </div>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" />
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
                    <input type="checkbox" />
                    <span class="text-sm text-primary-800 font-medium group-hover:text-primary-900">Instant (3 Hours)</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" />
                    <span class="text-sm text-primary-800 font-medium group-hover:text-primary-900">Same Day</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" />
                    <span class="text-sm text-primary-800 font-medium group-hover:text-primary-900">Reguler (1-3 Days)</span>
                  </label>
                </div>
              </div>
            </aside>
          </div>

          <div class="flex flex-wrap gap-12">
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">

              <ProductCard />
            </div>
            <div class="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
              <ProductCard />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

