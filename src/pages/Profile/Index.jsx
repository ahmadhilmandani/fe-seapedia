import { createSignal, Match, Switch } from "solid-js";
import { useAuth } from "../../stores/auth/auth-context";

import ProfileAside from "./Component/ProfileAside";
import GeneralInfo from "./Component/GeneralInfo";
import UserRoleSection from "./Component/UserRoleSection";
import AddRoleSection from "./Component/AddRoleSection";
import { PROFILE_MENU } from "./shared/profileAsideData";


export default function Index() {
  const auth = useAuth();

  const [activeAside, setActiveAside] = createSignal(
    PROFILE_MENU.GENERAL_INFO
  );

  return (
    <div class="min-h-screen relative pt-32 max-w-screen-2xl mx-auto">
      <header class="flex gap-4 mb-8">
        <i class="ph ph-user-circle text-8xl"></i>

        <div>
          <h1 class="text-2xl mb-0">
            {auth?.authStore?.user?.name}
            <span class="text-muted-600 font-medium">
              (@{auth?.authStore?.user?.username})
            </span>
          </h1>

          <div class="w-fit px-4 py-1.5 text-success-700 bg-success-50 rounded-2xl">
            Buyer
          </div>
        </div>
      </header>

      <div class="flex gap-12 justify-center items-start">
        <ProfileAside
          activeAside={activeAside}
          setActiveAside={setActiveAside}
        />

        <div class="flex-1 bg-white border border-muted-200 px-6 py-8">
          <Switch>
            <Match when={activeAside() === PROFILE_MENU.GENERAL_INFO}>
              <GeneralInfo />
            </Match>

            <Match when={activeAside() === PROFILE_MENU.BUYER}>
              <UserRoleSection role="buyer" />
            </Match>

            <Match when={activeAside() === PROFILE_MENU.SELLER}>
              <UserRoleSection role="seller" />
            </Match>

            <Match when={activeAside() === PROFILE_MENU.DRIVER}>
              <UserRoleSection role="driver" />
            </Match>

            <Match when={activeAside() === PROFILE_MENU.ADD_ROLE}>
              <AddRoleSection />
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
}