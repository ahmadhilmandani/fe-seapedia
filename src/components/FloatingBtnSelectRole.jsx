import { createMemo, createSignal, Match, Switch } from "solid-js";

import { openModal } from "../stores/auth/selectRoleModal";

import { useAuth } from "../stores/auth/auth-context";
import { ROLES_TYPE } from "../shared/data/roleType";

export default function FloatingBtnSelectRole() {

  const auth = useAuth()

  const activeRole = () => {
    const user = auth?.authStore?.user;
    return user?.roles?.find((r) => r.role_id === user.activeRole) || null;
  };

  return (

    <button
      onClick={openModal}
      class="fixed bottom-0 right-6 z-40 flex items-center gap-5 px-3 py-2 bg-primary-600 text-white hover:bg-primary-700 transition"
    >

      <Switch>

        <Match when={ROLES_TYPE[activeRole()?.role_id] == 'Buyer'}>
          <i class="ph-bold ph-users text-2xl text-white"></i>
        </Match>

        <Match when={ROLES_TYPE[activeRole()?.role_id] == 'Seller'}>
          <i class="ph-bold ph-storefront text-2xl text-white"></i>
        </Match>

        <Match when={ROLES_TYPE[activeRole()?.role_id] == 'Driver'}>
          <i class="ph-bold ph-truck text-2xl text-white"></i>
        </Match>

      </Switch>

      <div class="flex items-center gap-2">

        <span class="font-bold text-white leading-0 mb-0">

          {activeRole()?.role_name}

        </span>

        <span class="text-xs text-muted-100 leading-0 mb-0">

          (Active Role)

        </span>

      </div>

    </button>

  );

}