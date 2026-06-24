import { createStore } from "solid-js/store";
import ProductCard from "../../../components/ProductCard"
import toast from "solid-toast";
import { createSignal } from "solid-js";
import { signIn } from "../api/signIn";
import {getUserInfo} from "../api/getUserInfo.js"
import { setAuthStore } from "../../../stores/auth/auth-store";
import { useNavigate } from "@solidjs/router";

export default function SignInIndex() {
  const [isLoading, setIsLoading] = createSignal()
  const [formData, setFormData] = createStore({
    identifier: "",
    password: "",
  });
  const navigate = useNavigate()

  function validateForm() {
    const data = formData

    if (!formData.identifier) {
      return 'Username or Email is Required';
    }
    if (!formData.password) {
      return 'Password is Required';
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(name, value)
  }

  const submitForm = async () => {

    const formError = validateForm();

    if (formError) {
      toast.error(formError);
      return;
    }

    try {

      setIsLoading(true);

      const payload = {
        identifier: formData.identifier,
        password: formData.password
      };

      const resSignIn = await signIn(payload)

      localStorage.setItem('token', resSignIn.data.user.token)

      const res = await getUserInfo()

      setAuthStore('isAuthenticated', true)
      setAuthStore('user', res.data)

      navigate('/home')
      toast.success("Welcome to SEAPEDIA!");

    } catch (error) {

      console.log(error)
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
      <div class="min-h-screen relative pt-32 flex justify-center items-center flex-row ">
        <div class="max-w-2xl flex-1 bg-white border border-muted-200 px-6 py-8">
          <header class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-grey-100">

            <div class="space-y-1">
              <h1 class="text-3xl font-bold tracking-tight text-primary-900 uppercase">
                Sign In!
              </h1>
              <p class="text-sm font-normal text-muted-500">
                Let's sign in and enjoy your shopping with SEAPEDIA!
              </p>
            </div>
          </header>

          <form>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-muted-900">Email</label>
              <input onInput={(e) => { handleChange(e) }} type="email" id="email" name="identifier" class="bg-muted-50 border border-muted-300 text-muted-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-muted-400" placeholder="•••••••••" required />
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-muted-900">Password</label>
              <input onInput={(e) => { handleChange(e) }} type="password" id="password" name="password" class="bg-muted-50 border border-muted-300 text-muted-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-muted-400" placeholder="•••••••••" required />
            </div>
            <button onClick={submitForm} type="button" class="btn btn-primary">
              Sign In!
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

