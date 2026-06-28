import { createSignal, onMount } from "solid-js"
import { createStore } from "solid-js/store"
import { useNavigate, useParams } from "@solidjs/router"
import { useAuth } from "../../stores/auth/auth-context"
import toast from "solid-toast"
import { getStoreById } from "./api/getStoreById"
import { putStore } from "./api/putStore"
// import { postStore } from "../../services/store-service"

export default function StoreEdit() {
  const [isLoading, setIsLoading] = createSignal(false)
  const [errorMessage, setErrorMessage] = createSignal("")
  const auth = useAuth()
  const navigate = useNavigate()

  const user = () => auth?.authStore?.user
  const sellerRole = () => user()?.roles?.find(r => r.role_name === "Seller" || r.role_id === 2)

  const urlParams = useParams();

  const [form, setForm] = createStore({
    name: user()?.name || "",
    street_name: "",
    house_number: "",
    subdistrict: "",
    regency: "",
    province: "",
    postal_code: "",
    additional_note: "",
    address_id: null
  })

  const handleInput = (e) => {
    const { name, value } = e.currentTarget
    setForm(name, value)
  }

  async function submitForm(e) {
    e.preventDefault()
    setErrorMessage("")

    const requiredFields = [
      'name', 'street_name', 'house_number',
      'subdistrict', 'regency', 'province', 'postal_code'
    ]

    for (const field of requiredFields) {
      if (!form[field] || form[field].trim() === "") {
        toast.error(`Field ${field.replace('_', ' ')} wajib diisi!`)
        return
      }
    }

    try {
      setIsLoading(true)

      const payload = {
        name: form.name,
        user_role_id: sellerRole()?.user_role_id || null,
        street_name: form.street_name,
        house_number: form.house_number,
        subdistrict: form.subdistrict,
        regency: form.regency,
        province: form.province,
        postal_code: form.postal_code,
        additional_note: form.additional_note,
        address_id: form.address_id
      }

      await putStore(urlParams.id, payload)
      toast.success('Update Store Success!')
      navigate(`/store/${urlParams.id}`)

    } catch (error) {
      toast.error(error?.response?.data?.message || "Error!")
    } finally {
      setIsLoading(false)
    }
  }

  onMount(async () => {
    try {
      setIsLoading(true)

      const res = await getStoreById(urlParams.id)

      const store = res.data.data

      setForm({
        name: store.name ?? "",
        street_name: store.street_name ?? "",
        house_number: store.house_number ?? "",
        subdistrict: store.subdistrict ?? "",
        regency: store.regency ?? "",
        province: store.province ?? "",
        postal_code: store.postal_code ?? "",
        additional_note: store.additional_note ?? "",
        address_id: store.address_id ?? null,
      })

    } catch (error) {
      console.error(error)
      toast.error(error?.response?.data?.message || "Error!")
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <>
      <div class="min-h-screen relative pt-32 flex justify-center items-center flex-row">
        {/* MENAMBAHKAN class rounded-lg pada card container utama */}
        <div class="max-w-6xl flex-1 bg-white border border-muted-200 px-6 py-8 rounded-lg">

          {/* --- UX IMPROVEMENT: BUTTON BACK --- */}
          <div class="mb-4">
            <button
              type="button"
              onClick={() => navigate(`/store/${urlParams.id}`)}
              class="inline-flex items-center gap-2 text-sm font-medium text-muted-500 hover:text-primary-600 transition-colors cursor-pointer hover:bg-muted-50 rounded-md px-3 py-1.5 transition-all"
            >
              <i class="ph ph-arrow-left text-base"></i>
              Back to Store
            </button>
          </div>

          <header class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-muted-100">
            <div class="space-y-1">
              <h1 class="text-3xl font-bold tracking-tight uppercase mb-0 ">
                Edit Store
              </h1>
            </div>
          </header>

          {errorMessage() && (
            <div class="mb-4 p-3 bg-red-50 text-red-600 border border-red-200 rounded text-sm">
              {errorMessage()}
            </div>
          )}

          <form onSubmit={submitForm}>
            <div class="flex items-center gap-3 mb-3 flex-wrap">

              <div class="min-w-65 w-full">
                <label class="font-medium text-muted-900">Store Name <span class="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onInput={handleInput}
                  class="w-full p-2 border border-muted-200 rounded"
                />
              </div>

              <div class="min-w-65 flex-1">
                <label class="font-medium text-muted-900">
                  Street Name <span class="text-red-500">*</span>
                </label>
                <input
                  name="street_name"
                  value={form.street_name}
                  onInput={handleInput}
                  placeholder="Street Name"
                  class="w-full p-2 border border-muted-200 rounded"
                />
              </div>

              <div class="min-w-65 flex-1">
                <label class="font-medium text-muted-900">
                  House Number <span class="text-red-500">*</span>
                </label>
                <input
                  name="house_number"
                  value={form.house_number}
                  onInput={handleInput}
                  placeholder="House Number"
                  class="w-full p-2 border border-muted-200 rounded"
                />
              </div>
            </div>

            <div class="flex items-center gap-3 mb-3">
              <div class="min-w-65 flex-1">
                <label class="font-medium text-muted-900">
                  Subdistrict <span class="text-red-500">*</span>
                </label>
                <input
                  name="subdistrict"
                  value={form.subdistrict}
                  onInput={handleInput}
                  placeholder="Subdistrict"
                  class="w-full p-2 border border-muted-200 rounded"
                />
              </div>

              <div class="min-w-65 flex-1">
                <label class="font-medium text-muted-900">
                  Regency <span class="text-red-500">*</span>
                </label>
                <input
                  name="regency"
                  value={form.regency}
                  onInput={handleInput}
                  placeholder="Regency"
                  class="w-full p-2 border border-muted-200 rounded"
                />
              </div>
            </div>

            <div class="flex items-center gap-3 mb-3">
              <div class="min-w-65 flex-1">
                <label class="font-medium text-muted-900">
                  Province <span class="text-red-500">*</span>
                </label>
                <input
                  name="province"
                  value={form.province}
                  onInput={handleInput}
                  placeholder="Province"
                  class="w-full p-2 border border-muted-200 rounded"
                />
              </div>

              <div class="min-w-65 flex-1">
                <label class="font-medium text-muted-900">
                  Postal Code <span class="text-red-500">*</span>
                </label>
                <input
                  name="postal_code"
                  value={form.postal_code}
                  onInput={handleInput}
                  placeholder="Postal Code"
                  class="w-full p-2 border border-muted-200 rounded"
                />
              </div>
            </div>

            <div class="mb-5">
              <label class="font-medium text-muted-900">
                Additional Note
              </label>
              <textarea
                name="additional_note"
                value={form.additional_note}
                onInput={handleInput}
                placeholder="Additional Note"
                class="w-full p-2 border border-muted-200 rounded"
              />
            </div>

            <div class="flex items-center gap-3">
              <button
                type="submit"
                class="btn btn-primary"
                disabled={isLoading()}
              >
                {isLoading() ? "Loading..." : "Save!"}
              </button>
            </div>

          </form>

        </div>
      </div>
    </>
  )
}