import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {
  return (
    <div className="w-full min-h-screen bg-base-white ">
      <Navbar />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}