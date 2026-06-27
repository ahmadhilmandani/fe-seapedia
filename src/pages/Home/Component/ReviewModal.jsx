import { createSignal, Show } from "solid-js";
import { useAuth } from "../../../stores/auth/auth-context";
import Modal from "../../../components/Modal";




export default function ReviewModal(props) {

  const auth = useAuth();

  return (
    <>
      <Modal
        open={props.open}
        title={'Edit Profile'}
        onClose={props.onClose}
      >
        <form>

          <Show when={!auth.authStore.isAuthenticated}>

            <div class="mb-6">

              <label>Name</label>

              <input
                type="text"
                value={props.form.reviewer_name}
                onInput={(e) =>
                  props.setForm("reviewer_name", e.currentTarget.value)
                }
              />

            </div>

          </Show>

          <div class="mb-6">

            <label>Rating</label>

            <select
              value={props.form.rating}
              onChange={(e) =>
                props.setForm("rating", Number(e.currentTarget.value))
              }
            >

              <option value="5">★★★★★</option>
              <option value="4">★★★★☆</option>
              <option value="3">★★★☆☆</option>
              <option value="2">★★☆☆☆</option>
              <option value="1">★☆☆☆☆</option>

            </select>

          </div>

          <div class="mb-6">

            <label>Comment</label>

            <textarea
              rows="5"
              value={props.form.comment}
              onInput={(e) =>
                props.setForm("comment", e.currentTarget.value)
              }
            />

          </div>

          <button
            type="button"
            class="btn btn-primary"
            disabled={props.isLoading()}
            onClick={props.handleSubmit}
          >
            {
              props.isLoading()
                ? "Loading..."
                : "Submit"
            }
          </button>

        </form>
      </Modal>
    </>
  )
}