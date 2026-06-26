import { Toaster } from "solid-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingBtnSelectRole from "../components/FloatingBtnSelectRole";
import { modalState } from "../stores/auth/selectRoleModal";
import ModalSelectRole from "../components/ModalSelectRole";
import { createSignal } from "solid-js";
import { useAuth } from "../stores/auth/auth-context";

export default function MainLayout(props) {
  const auth = useAuth()


  return (
    <div class="w-full min-h-screen bg-base-white">
      <Toaster
        position="bottom-center"
        // Spacing between each toast in pixels
        gutter={8}
      />
      <Navbar />
      <div class="p-4">
        <main class="w-full max-w-screen-2xl mx-auto">
          {props.children}
        </main>
      </div>

      <Show when={auth.authStore.user}>
        <FloatingBtnSelectRole />

        <ModalSelectRole />
      </Show>


      <Footer />
    </div>
  )
}