import { For, createSignal } from "solid-js";
import toast from "solid-toast";

import Modal from "./Modal";

import {
  closeModal,
  modalState,
} from "../stores/auth/selectRoleModal";

import { setActiveRole } from "../pages/Auth/api/setActiveRole";
import { useAuth } from "../stores/auth/auth-context";


export default function ModalSelectRole() {

  const [loading, setLoading] = createSignal(false);

  const auth = useAuth()

  async function submit(roleId) {

    if (loading()) return;

    try {

      setLoading(true);

      const { data } = await setActiveRole(roleId);

      localStorage.setItem("token", data.user.token);

      closeModal();

      toast.success("Changing role!");

      setTimeout(() => {
        window.location.href = '/home';
      }, 350)

    } catch (err) {

      toast.error(
        err.response?.data?.msg ??
        "Failed change active role"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <Modal
      open={modalState.isOpen}
      title="Select Active Role"
      onClose={closeModal}
    >

      <div class="space-y-3">

        <For each={auth?.authStore?.user?.roles}>

          {(role) => (

            <button
              onClick={() => submit(role?.role_id)}
              disabled={loading()}
              class={`
                w-full
                border
                rounded-lg
                p-4
                flex
                justify-between
                items-center
                transition

                ${auth?.authStore?.user?.activeRole === role.role_id
                  ? "border-primary-600 bg-primary-50"
                  : "border-muted-200 hover:border-primary-400"
                }
              `}
            >

              <div>

                <h3 class="font-semibold">
                  {role?.role_name}
                </h3>

              </div>

              {auth?.authStore?.user?.activeRole === role?.role_id && (
                <span
                  class="text-primary-600 font-semibold"
                >
                  Active
                </span>
              )}

            </button>

          )}

        </For>

      </div>

    </Modal>

  );

}