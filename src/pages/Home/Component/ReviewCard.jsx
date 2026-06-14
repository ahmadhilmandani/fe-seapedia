export default function ReviewCard() {
  return (
    <>
      <div class="bg-white border-l-[6px] border-y border-y-muted-100 border-r border-r-muted-100 border-primary-200 p-8 md:p-10 max-w-2xl w-full">

        <p class="text-lg md:text-xl italic leading-relaxed mb-6">
          "The logistics integration is seamless. As a seller, I can track my shipments and manage my inventory with zero friction. The best marketplace experience I've had."
        </p>


        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
            <span class="text-primary-700 font-bold text-lg tracking-wide">JD</span>
          </div>

          <div class="flex flex-col">
            <span class="text-primary-700 font-semibold text-lg leading-tight">James D.</span>
            <span class="text-muted-400 text-base">Seller</span>
          </div>
        </div>

      </div>
    </>
  )
}