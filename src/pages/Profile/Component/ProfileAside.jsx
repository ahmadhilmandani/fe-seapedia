import { For, mergeProps } from "solid-js";
import { PROFILE_MENU } from "../shared/profileAsideData";
import { useAuth } from "../../../stores/auth/auth-context";

export default function ProfileAside(props) {
  const mergedProps = mergeProps(
    {
      activeAside: () => PROFILE_MENU.GENERAL_INFO,
      setActiveAside: () => { },
    },
    props
  );

  const isActive = menu =>
    mergedProps.activeAside() === menu;

  const auth = useAuth()

  return (
    <aside class="w-72 transition-transform -translate-x-full sm:translate-x-0">
      <div class="overflow-y-auto py-5 px-3 h-full bg-white border border-muted-200">
        <ul class="space-y-2">
          <li>
            <button
              type="button"
              onClick={() =>
                mergedProps.setActiveAside(
                  PROFILE_MENU.GENERAL_INFO
                )
              }
              class={`flex items-center p-2 w-full rounded-lg hover:bg-muted-100 ${isActive(PROFILE_MENU.GENERAL_INFO)
                ? "bg-muted-100 font-semibold"
                : ""
                }`}
            >
              <i class="ph-bold ph-user text-2xl"></i>
              <span class="ml-3">General Info</span>
            </button>
          </li>

          <li>
            <div class="flex items-center p-2">
              <i class="ph-bold ph-address-book text-2xl"></i>
              <span class="ml-3">Roles</span>
            </div>

            <ul class="pl-10 py-2 space-y-2 list-disc">
              <For each={auth?.authStore?.user?.roles}>
                {(row) => {
                  return (
                    <>
                      <li>
                        <button
                          type="button"
                          onClick={() =>
                            mergedProps.setActiveAside(
                              PROFILE_MENU[row.role_name.toUpperCase()]
                            )
                          }
                          class={
                            isActive(PROFILE_MENU[row.role_name.toUpperCase()])
                              ? "font-semibold"
                              : ""
                          }
                        >
                          {row.role_name}
                        </button>
                      </li>
                    </>
                  )
                }}
              </For>
            </ul>
          </li>
        </ul>

        <ul class="pt-5 mt-5 space-y-2 border-t border-muted-200">
          <li>
            <button
              type="button"
              onClick={() =>
                mergedProps.setActiveAside(
                  PROFILE_MENU.ADD_ROLE
                )
              }
              class={`flex items-center p-2 w-full rounded-lg hover:bg-muted-100 ${isActive(PROFILE_MENU.ADD_ROLE)
                ? "bg-muted-100 font-semibold"
                : ""
                }`}
            >
              <i class="ph-bold ph-circles-three-plus text-2xl"></i>
              <span class="ml-3">Add Role</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}