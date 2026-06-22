import { Toaster } from "solid-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {
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
      <Footer />
    </div>
  )
}