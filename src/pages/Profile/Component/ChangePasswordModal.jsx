import { createSignal } from "solid-js";
import Modal from "../../../components/Modal";
import { useAuth } from "../../../stores/auth/auth-context";

export default function ChangePasswordModal(props) {
  
  const auth = useAuth();

  return (
    <>
      <Modal
        open={props.open}
        title={'Change Password'}
        onClose={props.onClose}
      >
        <form>

          <div class="mb-6">
            <label>Old Password</label>

            <input
              type="password"
            />

          </div>

          <div class="mb-6">
            <label>New Password</label>

            <input
              type="password"
            />

          </div>

          <div class="mb-6">
            <label>Confrim Password</label>

            <input
              type="password"
            />

          </div>

          <button
            type="button"
            class="btn btn-danger"
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