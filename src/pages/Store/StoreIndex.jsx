import ProductCard from "../../components/ProductCard"
import { useAuth } from "../../stores/auth/auth-context"
import { A, useLocation, useParams } from "@solidjs/router"
import { getStoreById } from "./api/getStoreById";
import { createSignal, onMount } from "solid-js";
import { createStore } from "solid-js/store";


export default function StoreIndex() {
  const params = useParams();

  const auth = useAuth()

  const storeInfo = {
    address: auth?.authStore?.user?.address || "Virtual", // Jika tidak ada alamat, otomatis tertulis "Virtual"
    totalProducts: 42,
    totalSold: 1250,
    rating: 4.8
  }

  const [isLoading, setIsLoading] = createSignal(true);

  const [store, setStore] = createStore({
    id: null,
    name: "",
    username: "",
    address: "",
    street_name: "",
    house_number: "",
    subdistrict: "",
    regency: "",
    province: "",
    postal_code: "",

    // dummy sementara
    totalProducts: 42,
    totalSold: 1250,
    rating: 4.8
  });


  const activeRole = () => {
    const user = auth?.authStore?.user;
    return user?.roles?.find((r) => r.role_id === user.activeRole) || null;
  };

  const ownStoreId = () =>
    activeRole()?.store?.id;

  const isMyStore = () =>
    ownStoreId() === store.id;

  const fullAddress = () =>
    [
      store.subdistrict,
      store.regency,
      store.province
    ]
      .filter(Boolean)
      .join(", ");

  const detailAddress = () =>
    [
      store.street_name,
      store.house_number
    ]
      .filter(Boolean)
      .join(" ");

  onMount(async () => {

    try {

      setIsLoading(true);

      const res = await getStoreById(params.id);

      setStore({
        ...store,
        ...res.data.data
      });

    } finally {

      setIsLoading(false);

    }

  });

  return (
    <>
      <div className="min-h-screen relative pt-32 max-w-screen-2xl mx-auto">
        <header className="flex gap-4 mb-8 bg-white border border-muted-200 px-6 py-8 rounded-lg">
          <i className="ph ph-storefront text-8xl"></i>

          <div className="flex-1">
            <div className="flex justify-between gap-3">
              <h1 className="text-2xl mb-0 flex items-center gap-1">
                {store?.name}
                <span className="text-muted-600 font-medium">
                </span>
              </h1>
            </div>

            <p className="mt-2 text-muted-600 font-medium">
              {fullAddress()}
            </p>

            {/* --- START: STORE INFO SECTION --- */}
            <div className="mt-3 grid grid-cols-2 sm:flex sm:gap-6 text-sm text-muted-500 border-t border-muted-100 pt-3">
              <div className="flex items-center gap-1.5">
                <i className="ph ph-map-pin text-base text-muted-400"></i>
                <span>Alamat: <strong className="text-muted-800">
                  {detailAddress()}
                </strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="ph ph-package text-base text-muted-400"></i>
                <span>Total Produk: <strong className="text-muted-800">{storeInfo.totalProducts}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="ph ph-shopping-bag-open text-base text-muted-400"></i>
                <span>Total Terjual: <strong className="text-muted-800">{storeInfo.totalSold}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="ph-fill ph-star text-base text-warning-400 fill-warning-400"></i>
                <span>Rating: <strong className="text-muted-800">{storeInfo.rating} / 5.0</strong></span>
              </div>
            </div>
            {/* --- END: STORE INFO SECTION --- */}

            <Show when={isMyStore()}>

              <div className="flex gap-3 items-center">
                <div className="w-40">
                  <A href={`/`}

                    className="btn btn-primary mt-4"
                  >
                    Add Product
                  </A>
                </div>

                <div className="w-40">
                  <A href={`/edit-store/${store.id}`}
                    className="btn btn-secondary mt-4"
                  >
                    Manage Store
                  </A>
                </div>
              </div>
            </Show>

          </div>
        </header>

        <div className="flex justify-between items-center mb-8 pb-3 border-b border-muted-200">
          <strong>Product</strong>

          <div className="flex gap-2 items-center">
            <div>Sorted by</div>
            <input type="text" className="max-w-[160px]" />
          </div>
        </div>

        <div className="flex gap-12">
          <div className="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
            <ProductCard />
          </div>

          <div className="min-w-70 xl:min-w-[320px] flex-1 xl:max-w-100">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  )
}