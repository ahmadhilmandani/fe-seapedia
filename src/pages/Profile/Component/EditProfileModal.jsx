import { createSignal } from "solid-js";
import Modal from "../../../components/Modal";
import { useAuth } from "../../../stores/auth/auth-context";

export default function EditProfileModal(props) {

  const auth = useAuth();

  return (
    <>
      <Modal
        open={props.open}
        title={'Edit Profile'}
        onClose={props.onClose}
      >
        <form>

          <div class="mb-6">
            <label>Name</label>

            <input
              type="text"
              value={auth?.authStore?.user?.name ?? ""}
            />

          </div>

          <div class="mb-6">
            <label>Username</label>

            <input
              type="text"
              value={auth?.authStore?.user?.username ?? ""}
            />

          </div>

          <div class="mb-6">
            <label>Email</label>

            <input
              type="email"
              value={auth?.authStore?.user?.email ?? ""}
            />

          </div>

          <button
          type="button"
          class="btn btn-primary"
          disabled={props.isLoading()}
        >
          {
            props.isLoading()
              ? "Loading..."
              : "Edit"
          }
        </button>

        </form>
      </Modal>
    </>
  )
}