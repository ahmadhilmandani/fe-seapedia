import { createStore } from "solid-js/store";

// Inisialisasi state awal
const [modalState, setModalState] = createStore({
  isOpen: false,
});

// Fungsi aksi untuk membuka dan menutup modal
export const openModal = () => setModalState("isOpen", true);
export const closeModal = () => setModalState("isOpen", false);

// Export state agar bisa di-consume oleh komponen
export { modalState };