import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {
  return (
    <div class="w-full min-h-screen bg-base-white">
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