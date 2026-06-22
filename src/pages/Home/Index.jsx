import { createSignal } from 'solid-js'
import HeroImg from "../../assets/hero-img.png"
import FaqHero from "../../assets/faq-hero.png"
import ProductCard from '../../components/ProductCard'
import ReviewCard from './Component/ReviewCard'
import { createStore } from 'solid-js/store'


export default function Home() {
  const [count, setCount] = createSignal(0)
  const [reviews, setReviews] = createStore(
    [
      {
        "id": 1,
        "user_id": null,
        "reviewer_name": "Budi Santoso",
        "reviewer_role": "Seller",
        "rating": 5,
        "comment": "Aplikasi sangat membantu dan mudah digunakan.",
        "created_at": "2026-06-23 08:00:00"
      },
      {
        "id": 2,
        "user_id": 5,
        "reviewer_name": 'Andi Hermawan',
        "reviewer_role": 'Buyyer',
        "rating": 4,
        "comment": "UI cukup bagus, hanya perlu peningkatan performa.",
        "created_at": "2026-06-23 08:15:00"
      },
      {
        "id": 3,
        "user_id": null,
        "reviewer_name": "Siti Aminah",
        "reviewer_role": "Seller",
        "rating": 3,
        "comment": "Fitur sudah bagus, tetapi masih ada beberapa bug.",
        "created_at": "2026-06-23 08:30:00"
      }
    ]
  )

  return (
    <div class="mt-32">

      <section class='flex flex-wrap justify-between items-center gap-24 border-b border-primary-300'>
        <div class='max-w-2xl flex-1'>
          <h1 class='text-7xl'>
            Discover Everything You Need in One Place!
          </h1>
          <p class='mb-8'>
            From everyday necessities to your favorite brands, SEAPEDIA connects you to a world of endless choices right at your fingertips.
          </p>
          <div class='flex gap-8 items-center flex-wrap'>
            <div class='max-w-md'>
              <button class="group btn btn-primary">
                <span class="text-sm tracking-wide select-none text-white relative -right-2">
                  Start Shopping
                </span>
                <div class="shrink-0 flex items-center justify-center bg-yellow-300 text-primary-700 w-10 h-10 rounded-lg transition-transform group-hover:translate-x-0.5 relative -right-2">
                  <i class="ph-bold ph-arrow-up-right text-primary-700 text-2xl"></i>
                </div>
              </button>
            </div>
            <div class='group flex items-center font-semibold px-6 pb-4 pt-5 transition-all cursor-pointer border-b-2 border-primary-700 text-primary-700'>
              Read More !
            </div>
          </div>
        </div>
        <div class='relative flex justify-center items-end'>
          <div class='w-70 bg-white p-4 border border-muted-200 absolute top-24 right-0 z-2 shadow-2xl'>
            <div class="flex items-center gap-6">
              <div class="flex-shrink-0 flex items-center justify-center p-3 bg-primary-50 border border-primary-100 rounded-md">
                <i class="ph-bold ph-shopping-bag text-4xl text-primary-500/80"></i>
              </div>
              <div>
                <h5 class="text-2xl font-bold tracking-tight text-muted-900 mb-0">
                  10K+ Product!
                </h5>
                <small class="mb-3 font-normal text-muted-500 text-sm">
                  Find clothes, furniture, electronics, everything!
                </small>
              </div>
            </div>
          </div>
          <div class='w-85 bg-white p-4 border border-muted-200 absolute bottom-10 left-0 z-4 shadow-2xl'>
            <div class="flex items-center gap-6">
              <div class="shrink-0 flex items-center justify-center p-3 bg-success-50 border border-success-100 rounded-md">
                <i class="ph-bold ph-smiley text-4xl text-success-400"></i>
              </div>
              <div>
                <h5 class="text-2xl font-bold tracking-tight text-muted-900 mb-0">
                  5K+ Happy Customer!
                </h5>
                <small class="mb-3 font-normal text-muted-500 text-sm">
                  Be one of them too!
                </small>
              </div>
            </div>
          </div>
          <div class='w-[65%] bg-primary-100 aspect-11/16 z-1 absolute bottom-0 mx-auto'>
          </div>
          <img src={HeroImg} alt="" class='w-160 relative z-3' />
        </div>
      </section>


      <section class="my-20 pb-44">
        <h1 class='text-5xl'>
          Who are we?
        </h1>
        <p class='text-2xl mb-12'>
          Experience the next generation of commerce.
          SEAPEDIA is a multi-role ecosystem where precision logistics meets an accessible storefront, empowering buyers, sellers, and drivers in a single, transparent marketplace.
        </p>

        <h3 class='mb-5'>
          One Platform, Multiple Opportunities
        </h3>

        <div class='flex justify-between flex-wrap border border-muted-100'>
          <div class="bg-white max-w-xl flex-1 min-w-[280px] p-8">
            <div class="flex items-center gap-6 mb-5">
              <div class="flex items-center justify-center p-3 bg-primary-50 border border-primary-100 rounded-md">
                <i class="ph-bold ph-users text-4xl text-primary-400"></i>
              </div>
              <h5 class="text-2xl font-bold tracking-tight">
                Buyer
              </h5>
            </div>
            <p class='text-muted-500'>
              Find products from various sellers, manage your cart, checkout securely, and track your orders from purchase to delivery.
            </p>
          </div>
          <div class="bg-white max-w-xl flex-1 min-w-[280px] p-8">
            <div class="flex items-center gap-6 mb-5">
              <div class="flex items-center justify-center p-3 bg-primary-50 border border-primary-100 rounded-md">
                <i class="ph-bold ph-storefront text-4xl text-primary-400"></i>
              </div>
              <h5 class="text-2xl font-bold tracking-tight">
                Seller
              </h5>
            </div>
            <p class='text-muted-500'>
              Create your own store and start selling products to thousands of potential customers.
            </p>
          </div>
          <div class="bg-white max-w-xl flex-1 min-w-[280px] p-8">
            <div class="flex items-center gap-6 mb-5">
              <div class="flex items-center justify-center p-3 bg-primary-50 border border-primary-100 rounded-md">
                <i class="ph-bold ph-truck text-4xl text-primary-400"></i>
              </div>
              <h5 class="text-2xl font-bold tracking-tight">
                Driver
              </h5>
            </div>
            <p class='text-muted-500'>
              Join the delivery network and earn by completing delivery jobs.
            </p>
          </div>
        </div>
      </section>


      <section class="mt-20 min-h-screen">
        <h1 class='text-5xl mb-12'>
          Best Selling Product
        </h1>

        <div class='flex justify-between flex-wrap gap-12'>
          <div class='max-w-lg flex-1'>
            <ProductCard hotTag={true} />
          </div>
          <div class='max-w-lg flex-1'>
            <ProductCard hotTag={true} />
          </div>
          <div class='max-w-lg flex-1'>
            <ProductCard hotTag={true} />
          </div>
        </div>
      </section>



      <section class="mt-20 min-h-screen">
        <h1 class='text-5xl mb-12 text-center'>
          What Peolple Say About Us?
        </h1>

        <div class="flex items-center justify-center gap-1.5 mb-12">
          <span class="text-warning-600 text-3xl leading-none">★</span>
          <span class="text-warning-600 text-3xl leading-none">★</span>
          <span class="text-warning-600 text-3xl leading-none">★</span>
          <span class="text-warning-600 text-3xl leading-none">★</span>
          <span class="text-warning-600 text-3xl leading-none">★</span>
          <div class='text-xl'>
            4.9/5 Average
          </div>
        </div>

        <div class='flex justify-center inset-ring-base-cream flex-wrap gap-12'>
          <For each={reviews}>
            {(row, index) => {
              return (
                <>
                  <div class='max-w-lg flex-1 min-w-[320px] xl:min-w-135'>
                    <ReviewCard
                      reviewer_name={row.reviewer_name}
                      reviewer_role={row.reviewer_role}
                      rating={row.rating}
                      comment={row.comment}
                    />
                  </div>
                </>
              )
            }}
          </For>
        </div>
      </section>



      <section class="mt-80 min-h-screen bg-muted-100 flex gap-8">
        <div
          class="relative max-w-[40%] w-full aspect-4/5 bg-center bg-no-repeat bg-cover mx-auto"
          style={{
            "background-image":
              `url(${FaqHero})`,
          }}
        >
        </div>

        <div class='p-8'>
          <h1 class='text-5xl mb-4'>
            Have Any Question?
          </h1>
          <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white text-muted-900" data-inactive-classes="text-muted-500">
            <h2 id="accordion-flush-heading-1">
              <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-muted-500 border-b border-muted-200 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                <span>What is Flowbite?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
              <div class="py-5 border-b border-muted-200">
                <p class="mb-2 text-muted-500">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                <p class="text-muted-500">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-primary-600 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-2">
              <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-muted-500 border-b border-muted-200 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                <span>Is there a Figma file available?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
              <div class="py-5 border-b border-muted-200">
                <p class="mb-2 text-muted-500">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                <p class="text-muted-500">Check out the <a href="https://v3.flowbite.com/figma/" class="text-primary-600 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-3">
              <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-muted-500 border-b border-muted-200 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                <span>What are the differences between Flowbite and Tailwind UI?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
              <div class="py-5 border-b border-muted-200">
                <p class="mb-2 text-muted-500">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                <p class="mb-2 text-muted-500">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                <p class="mb-2 text-muted-500">Learn more about these technologies:</p>
                <ul class="ps-5 text-muted-500 list-disc">
                  <li><a href="https://v3.flowbite.com/pro/" class="text-primary-600 hover:underline">Flowbite Pro</a></li>
                  <li><a href="https://tailwindui.com/" rel="nofollow" class="text-primary-600 hover:underline">Tailwind UI</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

