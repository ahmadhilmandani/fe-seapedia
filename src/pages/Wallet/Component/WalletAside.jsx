import { For, mergeProps } from "solid-js";
import { PROFILE_MENU } from "../../Profile/shared/profileAsideData";
import { useAuth } from "../../../stores/auth/auth-context";

export default function WalletAside(props) {
  const auth = useAuth()

  const mergedProps = mergeProps(
    {
      activeAside: () => 'Buyer', //nanti ambil dari default_role_user
      setActiveAside: () => { },
    },
    props
  );

  const isActive = menu =>
    mergedProps.activeAside() === menu;

  return (
    <aside class="w-72 transition-transform -translate-x-full sm:translate-x-0">
      <div class="overflow-y-auto py-5 px-3 h-full bg-white border border-muted-200">
        <ul class="space-y-2 list-disc list-inside">
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
      </div>
    </aside>
  );
}