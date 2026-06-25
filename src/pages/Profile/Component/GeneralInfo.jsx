import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { ROLES_TYPE } from "../../../shared/data/roleType";

export default function GeneralInfo() {
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

  const submitForm = async () => {

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
      <div class="mb-8 border-b border-muted-100">

        <div class="space-y-1">
          <h2>
            General Info
          </h2>

          <p class="text-sm font-normal text-muted-500">
            Let's sign up and enjoy your shopping with SEAPEDIA!
          </p>
        </div>

      </div>

      <form>

        <div class="mb-6">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}

          />
        </div>

        <div class="mb-6">
          <label>Username</label>

          <input
            type="text"
            name="username"
            value={formData.username}

          />
        </div>

        <div class="mb-6">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}

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


        </div>

        <div class="mb-6">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}

          />
        </div>

        <div class="mb-6">
          <label>Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}

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

    </>
  )
}