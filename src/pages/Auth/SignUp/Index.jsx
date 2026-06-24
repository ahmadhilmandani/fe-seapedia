import { createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";
import RoleAccordion from "./Components/RoleAccordion";
import { ROLES_TYPE } from "../../../shared/data/roleType";
import { signUp } from "../api/signUp";
import toast from "solid-toast";
import { useNavigate } from "@solidjs/router";
import { signIn } from "../api/signIn";
import { authStore, setAuthStore } from "../../../stores/auth/auth-store";

export default function SignUpIndex() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = createSignal(false);

  const [formData, setFormData] = createStore({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",

    roles: [
      {
        key: Object.keys(ROLES_TYPE)[1],
        isSelected: false,
        street_name: "",
        house_number: "",
        subdistrict: "",
        regency: "",
        province: "",
        postal_code: "",
        additional_note: "",
        is_default: false,
      },
      {
        key: Object.keys(ROLES_TYPE)[2],
        isSelected: false,
        street_name: "",
        house_number: "",
        subdistrict: "",
        regency: "",
        province: "",
        postal_code: "",
        additional_note: "",
        is_default: false,
      },
      {
        key: Object.keys(ROLES_TYPE)[3],
        isSelected: false,
        street_name: "",
        house_number: "",
        subdistrict: "",
        regency: "",
        province: "",
        postal_code: "",
        additional_note: "",
        is_default: false,
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(name, value);
  };

  const setDefaultRole = (roleIndex) => {

    formData.roles.forEach((_, index) => {

      setFormData(
        "roles",
        index,
        "is_default",
        index === roleIndex
      );

    });

  };

  const validateForm = () => {

    if (!formData.name.trim())
      return "Name is required";

    if (!formData.username.trim())
      return "Username is required";

    if (!formData.email.trim())
      return "Email is required";

    if (!formData.password)
      return "Password is required";

    if (!formData.confirmPassword)
      return "Password Confirmation is required";

    if (formData.password !== formData.confirmPassword)
      return "Password is not the same";

    const selectedRoles =
      formData.roles.filter(role => role.isSelected);

    if (selectedRoles.length === 0)
      return "Select Min. 1 Role";

    const selectedDefaultRoles =
      selectedRoles.filter(role => role.is_default);

    if (selectedDefaultRoles.length === 0)
      return "Select Default Role";

    if (selectedDefaultRoles.length > 1)
      return "Only 1 Default Role Allowed";

    return null;
  };

  const validateRoleAddress = () => {

    for (const role of formData.roles) {

      if (!role.isSelected)
        continue;

      if (!role.street_name.trim())
        return `${ROLES_TYPE[role.key]} Street Name is required`;

      if (!role.house_number.trim())
        return `${ROLES_TYPE[role.key]} House Number is required`;

      if (!role.subdistrict.trim())
        return `${ROLES_TYPE[role.key]} Subdistrict is required`;

      if (!role.regency.trim())
        return `${ROLES_TYPE[role.key]} Regency is required`;

      if (!role.province.trim())
        return `${ROLES_TYPE[role.key]} Province is required`;

      if (!role.postal_code.trim())
        return `${ROLES_TYPE[role.key]} Postal Code is required`;
    }

    return null;
  };

  const submitForm = async () => {

    const formError = validateForm();

    if (formError) {
      toast.error(formError);
      return;
    }

    const roleError = validateRoleAddress();

    if (roleError) {
      toast.error(roleError);
      return;
    }

    try {

      setIsLoading(true);

      const payload = {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password,

        roles: formData.roles
          .filter(role => role.isSelected)
          .map(role => ({
            role: role.key,
            street_name: role.street_name,
            house_number: role.house_number,
            subdistrict: role.subdistrict,
            regency: role.regency,
            province: role.province,
            postal_code: role.postal_code,
            additional_note: role.additional_note,
            is_default: role.is_default
          }))
      };

      const res = await signUp(payload);

      if (res) {
        const resSignIn = await signIn({
          identifier: formData.username,
          password: formData.password,
        })

        localStorage.setItem('token', resSignIn.data.user.token)

        toast.success("Account Created! Welcome to SEAPEDIA!");

        setTimeout(() => {
          window.location.href = '/home';
        }, 350)
      }


    } catch (error) {
      toast.error(
        error?.response?.data?.msg ||
        "Error!"
      );

    } finally {

      setIsLoading(false);

    }
  };

  return (
    <>
      <div class="min-h-screen relative pt-32 flex justify-center items-center flex-row">
        <div class="max-w-4xl flex-1 bg-white border border-muted-200 px-6 py-8">

          <header class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-grey-100">

            <div class="space-y-1">
              <h1 class="text-3xl font-bold tracking-tight uppercase">
                Sign Up
              </h1>

              <p class="text-sm font-normal text-muted-500">
                Let's sign up and enjoy your shopping with SEAPEDIA!
              </p>
            </div>

          </header>

          <form>

            <div class="mb-6">
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onInput={handleChange}
              />
            </div>

            <div class="mb-6">
              <label>Username</label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onInput={handleChange}
              />
            </div>

            <div class="mb-6">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onInput={handleChange}
              />
            </div>

            <div class="mb-6">

              <label>
                Select Your Role
                <sup class="text-danger-400 text-lg">*</sup>

                <br />

                <small class="text-muted-500 italic text-sm">
                  (Select minimal one!)
                </small>
              </label>

              <For each={formData.roles}>
                {(role, index) => (
                  <RoleAccordion
                    role={role}
                    roleIndex={index()}
                    setRoles={setFormData}
                    setDefaultRole={setDefaultRole}
                  />
                )}
              </For>

            </div>

            <div class="mb-6">
              <label>Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onInput={handleChange}
              />
            </div>

            <div class="mb-6">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onInput={handleChange}
              />
            </div>

            <button
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
            </button>

          </form>

        </div>
      </div>
    </>
  );
}