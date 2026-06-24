import { createStore } from "solid-js/store";

export const [authStore, setAuthStore] = createStore({
  loading: true,
  isAuthenticated: false,
  user: null
});