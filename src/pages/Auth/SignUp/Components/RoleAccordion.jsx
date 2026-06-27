import { mergeProps, Show } from "solid-js";
import { ROLES_TYPE } from "../../../../shared/data/roleType";

export default function RoleAccordion(props) {

  const mergedProps = mergeProps({
    role: {},
    roleIndex: 0,
    setRoles: () => { },
    setDefaultRole: () => { }
  }, props);

  const toggleRole = () => {
    mergedProps.setRoles(
      "roles",
      mergedProps.roleIndex,
      "isSelected",
      value => !value
    );
  };

  const handleAddressChange = (e) => {

    const { name, value } = e.target;

    mergedProps.setRoles(
      "roles",
      mergedProps.roleIndex,
      name,
      value
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleRole}
        class={`flex items-center justify-between w-full p-5 border gap-3
        ${mergedProps.role.isSelected
            ? "border-primary-300 bg-primary-50 text-primary-600"
            : "border-muted-200"
          }`}
      >
        <span class={
          mergedProps.role.isSelected
            ? "font-semibold"
            : "font-normal"
        }>

          <i class={
            ROLES_TYPE[mergedProps.role.key]
              == 'Buyer'
              ? "ph-bold ph-user text-2xl me-3"
              :
              ROLES_TYPE[mergedProps.role.key]
                == 'Seller' ?
                "ph-bold ph-storefront text-2xl me-3"
                :
                ROLES_TYPE[mergedProps.role.key]
                  == 'Driver' ?
                  "ph-bold ph-truck text-2xl me-3"
                  : ''

          }></i>
          {ROLES_TYPE[mergedProps.role.key]}
        </span>

        <i
          class={
            mergedProps.role.isSelected
              ? "ph-fill ph-check text-2xl"
              : "ph ph-square text-2xl"
          }
        />
      </button>

      <Show when={mergedProps.role.isSelected}>
        <div class="p-5 border border-t-0 border-primary-300">

          <div class="flex items-center gap-3 mb-3 flex-wrap">
            <div class="min-w-65 w-full shrink-0">
              <div class="flex">
                <div class="flex items-center h-5">
                  <input
                    type="radio"
                    name="default_role"
                    checked={mergedProps.role.is_default}
                    disabled={!mergedProps.role.isSelected}
                    onChange={() =>
                      mergedProps.setDefaultRole(
                        mergedProps.roleIndex
                      )
                    }
                    class="w-4 h-4 text-primary-600 bg-muted-100 border-muted-300 focus:ring-primary-500 focus:ring-2" />
                </div>
                <div class="ms-2 text-sm">
                  <label for="helper-radio" class="font-medium text-muted-900">
                    Set As Default Role
                  </label>
                  <p id="helper-radio-text" class="text-xs font-normal text-muted-500">
                    Set as default role make you loged in as this role everytime you sign in!
                  </p>
                </div>
              </div>
            </div>
            <Show when={ROLES_TYPE[mergedProps.role.key] == 'Seller'}>
            <div class="min-w-65 w-full shrink">
              <input
                name="store_name"
                value={mergedProps.role.store_name}
                onInput={handleAddressChange}
                placeholder="Store Name"
              />
            </div>
            </Show>
            <div class="min-w-65 flex-1">
              <input
                name="street_name"
                value={mergedProps.role.street_name}
                onInput={handleAddressChange}
                placeholder="Street Name"
              />
            </div>
            <div class="min-w-65 flex-1">
              <input
                name="house_number"
                value={mergedProps.role.house_number}
                onInput={handleAddressChange}
                placeholder="House Number"
              />
            </div>
          </div>

          <div class="flex items-center gap-3 mb-3 flex-">
            <div class="min-w-65 flex-1">
              <input
                name="subdistrict"
                value={mergedProps.role.subdistrict}
                onInput={handleAddressChange}
                placeholder="Subdistrict"
              />
            </div>
            <div class="min-w-65 flex-1">
              <input
                name="regency"
                value={mergedProps.role.regency}
                onInput={handleAddressChange}
                placeholder="Regency"
              />
            </div>
          </div>

          <div class="flex items-center gap-3 mb-3 flex-">
            <div class="min-w-65 flex-1">
              <input
                name="province"
                value={mergedProps.role.province}
                onInput={handleAddressChange}
                placeholder="Province"
              />
            </div>
            <div class="min-w-65 flex-1">
              <input
                name="postal_code"
                value={mergedProps.role.postal_code}
                onInput={handleAddressChange}
                placeholder="Postal Code"
              />
            </div>
          </div>

          <textarea
            name="additional_note"
            value={mergedProps.role.additional_note}
            onInput={handleAddressChange}
            placeholder="Additional Note"
          />
        </div>
      </Show>
    </>
  );
}