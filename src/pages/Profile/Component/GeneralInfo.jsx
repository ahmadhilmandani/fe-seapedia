import { useAction, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { ROLES_TYPE } from "../../../shared/data/roleType";
import { useAuth } from "../../../stores/auth/auth-context";
import EditProfileModal from "./EditProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";

export default function GeneralInfo() {
  const navigate = useNavigate();

  const auth = useAuth();

  const [
    showEditProfileModal,
    setShowEditProfileModal
  ] = createSignal(false);

  const [
    showChangePasswordModal,
    setShowChangePasswordModal
  ] = createSignal(false);

  const [
    isUpdatingProfile,
    setIsUpdatingProfile
  ] = createSignal(false);

  const [
    isChangingPassword,
    setIsChangingPassword
  ] = createSignal(false);

  const [
    editProfileForm,
    setEditProfileForm
  ] = createStore({
    name: "",
    username: "",
    email: ""
  });

  const [
    passwordForm,
    setPasswordForm
  ] = createStore({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  return (
    <>
      <EditProfileModal
        open={showEditProfileModal()}
        onClose={() => setShowEditProfileModal(false)}
        isLoading={isUpdatingProfile}
        setIsLoading={(val) => {
          setIsUpdatingProfile(val)
        }}
      />

      <ChangePasswordModal
        open={showChangePasswordModal()}
        onClose={() => setShowChangePasswordModal(false)}
        isLoading={isChangingPassword}
        setIsLoading={(val) => {
          setIsChangingPassword(val)
        }}
      />

      <div class="mb-8 border-b border-muted-100 flex justify-between gap-4">

        <div class="space-y-1">
          <h2>
            General Info
          </h2>

          <p class="text-sm font-normal text-muted-500">
            A section that store all of your general information.
          </p>
        </div>

        <div className="w-48">
          <div
            class="btn btn-secondary"
            onClick={() => setShowEditProfileModal(true)}
          >
            Change General Info!
          </div>
        </div>

      </div>

      <form>

        <div class="mb-6">
          <label>Name</label>

          <input
            type="text"
            readonly
            value={auth?.authStore?.user?.name ?? ""}
          />

        </div>

        <div class="mb-6">
          <label>Username</label>

          <input
            type="text"
            readonly
            value={auth?.authStore?.user?.username ?? ""}
          />

        </div>

        <div class="mb-6">
          <label>Email</label>

          <input
            type="email"
            readonly
            value={auth?.authStore?.user?.email ?? ""}
          />

        </div>

        <div class="mb-6">
          <label>
            Your Role
          </label>
          <div className="mt-4">
            <For each={auth?.authStore?.user?.roles}>
              {(row) => {
                return (
                  <>
                    <span class="bg-muted-100 text-muted-800 font-medium me-2 px-4.5 py-2.5 rounded-sm">{row.role_name}</span>
                  </>
                )
              }}
            </For>

          </div>

        </div>


        {/* <button
          type="button"
          class="btn btn-primary"
          disabled={isLoading()}
          onClick={submitForm}
        >
          {
            isLoading()
              ? "Loading..."
              : "Sign Up!"
          }
        </button> */}

      </form>

      <div className="py-6 border-t border-muted-300">
        <div class="p-6 bg-white border border-muted-200 rounded-lg shadow-sm flex gap-4 flex-wrap items-center justify-between">
          <div>
            <i class="ph-fill ph-lock text-5xl text-muted-300"></i>
            <a href="#">
              <h5 class="mb-2 mt-4 text-2xl font-semibold tracking-tight text-muted-900">Want Change Password?</h5>
            </a>
            <p class="mb-3 font-normal text-muted-500 max-w-[640px]">
              Changing your password is a highly sensitive action. Please ensure you memorize or securely store your new password to avoid getting locked out.
            </p>
          </div>
          <div className="w-40">
            <div
              class="btn btn-light-danger"
              onClick={() => setShowChangePasswordModal(true)}
            >
              Change Password!
            </div>
          </div>
        </div>
      </div>
    </>
  )
}