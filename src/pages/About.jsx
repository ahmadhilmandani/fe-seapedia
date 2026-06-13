import { createSignal } from 'solid-js'


export default function About() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <h1 className='text-red-500'>About</h1>
      <i class="ph ph-address-book"></i>
    </>
  )
}

