export default function RoleAddress() {
  return (
    <>


      {/* KONTEN FORM DROPDOWN (YANG SEBELUMNYA DI DALAM <Show>) */}
      <div>
        <div class="flex items-center gap-3 mb-3 flex-wrap">
          {/* Radio Button Set As Default */}
          <div class="min-w-65 w-full shrink-0">
            <div class="flex">
              <div class="flex items-center h-5">
                <input
                  type="radio"
                  name="default_role"
                  checked={true}
                  class="w-4 h-4 text-primary-600 bg-muted-100 border-muted-300 focus:ring-primary-500 focus:ring-2"
                />
              </div>
              <div class="ms-2 text-sm">
                <label class="font-medium text-muted-900">
                  Set As Default Role
                </label>
                <p class="text-xs font-normal text-muted-500">
                  Set as default role make you loged in as this role everytime you sign in!
                </p>
              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div class="min-w-65 flex-1">
            <label class="font-medium text-muted-900">
              Street Name
            </label>
            <input
              name="street_name"
              value=""
              placeholder="Street Name"
            />
          </div>
          <div class="min-w-65 flex-1">
            <label class="font-medium text-muted-900">
              House Number
            </label>
            <input
              name="house_number"
              value=""
              placeholder="House Number"
            />
          </div>
        </div>

        <div class="flex items-center gap-3 mb-3">
          <div class="min-w-65 flex-1">
            <label class="font-medium text-muted-900">
              Subdistrict
            </label>
            <input
              name="subdistrict"
              value=""
              placeholder="Subdistrict"
            />
          </div>
          <div class="min-w-65 flex-1">
            <label class="font-medium text-muted-900">
              Regency
            </label>
            <input
              name="regency"
              value=""
              placeholder="Regency"
            />
          </div>
        </div>

        <div class="flex items-center gap-3 mb-3">
          <div class="min-w-65 flex-1">
            <label class="font-medium text-muted-900">
              Province
            </label>
            <input
              name="province"
              value=""
              placeholder="Province"
            />
          </div>
          <div class="min-w-65 flex-1">
            <label class="font-medium text-muted-900">
              Postal Code
            </label>
            <input
              name="postal_code"
              value=""
              placeholder="Postal Code"
            />
          </div>
        </div>

        <div>
          <label class="font-medium text-muted-900">
            Additional Note
          </label>
          <textarea
            name="additional_note"
            value=""
            placeholder="Additional Note"
          />
        </div>
      </div>
    </>
  )
}