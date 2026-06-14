import { mergeProps } from "solid-js";

export default function ProductCard(props) {
  const merged = mergeProps({
    titleProp: 'A Nice Product',
    thumbnail: '',
    onClickProp: () => { console.log('Product clicked'); },
    categoryProp: 'Category',
    rating: 10,
    reviews: 20,
    price: 30,
    hotTag: false,
    cardSizeProp: 'md',
  }, props);

  // const renderStars = (rating) => {
  //   const stars = [];
  //   const roundedRating = Math.round(rating * 2) / 2;

  //   for (let i = 1; i <= 5; i++) {
  //     if (i <= roundedRating) {
  //       stars.push(
  //         <span class="text-warning-600">★</span>
  //       );
  //     } else if (i - 0.5 === roundedRating) {
  //       stars.push(<span class="text-warning-600">☆</span>);
  //     } else {
  //       stars.push(<span class="text-muted-300">☆</span>);
  //     }
  //   }
  //   return stars;
  // };

  return (
    <div
      class="border border-muted-200 cursor-pointer transition-all hover:scale-[1.01] hover:shadow-sm bg-muted-100 w-full p-4"
      onClick={merged.onClickProp}
    >
      <div class="">
        <div class="flex items-center justify-between gap-4 mb-5">
          {merged.hotTag ? (
            <div
              class="px-3 py-1.5 rounded-sm shadow-inner bg-warning-200"
            >
              <span
                class="text-xs font-medium tracking-tight uppercase text-primary-900"
              >
                Hot item
              </span>
            </div>
          ) : (
            <div
              class="px-3 py-1.5 rounded-sm shadow-inner bg-warning-100 text-warning-100">
              Hot item
            </div>
          )
          }

          {/* Rating */}
          <div class="flex items-center gap-1.5">
            <span class="text-warning-600 text-lg leading-none">★</span>
            <span
              class="text-sm font-medium text-primary-900"
            >
              {merged.rating.toFixed(1)}
              <span class="text-muted-500 font-normal ml-1">
                ({merged.reviews} Reviews)
              </span>
            </span>
          </div>

        </div>

        {/* Gambar Produk */}
        {/* <div class="flex items-center justify-center"> */}
        <div
          class="relative w-full aspect-square bg-center bg-no-repeat bg-contain mx-auto rounded-md"
          style={{
            "background-image":
              "url('https://www.footstepfootwear.com/wp-content/uploads/2023/10/2-1.jpg')",
          }}
        >
        {/* </div> */}
        </div>


      </div>

      <div class="p-6">


        {/* Info Produk */}
        <div class="mb-1">
          <p
            class="text-xs font-medium uppercase tracking-wider text-primary-500"
          >
            {merged.categoryProp}
          </p>

        </div>

        {/* Harga */}
        <div class="flex items-center justify-between gap-3">
          <h3
            class="text-2xl font-semibold tracking-tight leading-tight text-primary-900 max-w-[85%] flex-1 text-wrap"
          >
            {merged.titleProp}
          </h3>

          <p
            class="text-2xl font-bold tracking-tighter text-primary-900"
          >
            £{merged.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}