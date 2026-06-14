import { createSignal } from 'solid-js'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'


export default function About() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div class="h-screen flex justify-center items-center gap-30">
      </div>
    </>
  )
}

