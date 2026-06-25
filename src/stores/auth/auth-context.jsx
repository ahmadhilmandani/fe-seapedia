import {
  createContext,
  onMount,
  useContext
} from "solid-js";

import {
  authStore,
  setAuthStore
} from "./auth-store.js";

import { getUserInfo } from "../../pages/Auth/api/getUserInfo.js";
import toast from "solid-toast";

const AuthContext = createContext();

export function AuthProvider(props) {

  onMount(async () => {
    try {
      const res = await getUserInfo();

      setAuthStore({
        isAuthenticated: true,
        user: res.data
      });

    } catch (error) {

      setAuthStore({
        isAuthenticated: false,
        user: null
      });

    } finally {

      setAuthStore("loading", false);

    }
  });

  const logout = async () => {

    await authService.logout();

    setAuthStore({
      user: null,
      isAuthenticated: false
    });

  };

  const hasPermission = permission => {

    return authStore.user
      ?.permissions
      ?.includes(permission);

  };

  const value = {

    authStore,

    logout,

    hasPermission

  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}