import { Show } from "solid-js";
import { Navigate } from "@solidjs/router";
import { useAuth } from "../stores/auth/auth-context";

export default function ProtectedRoute(props) {

  const { authStore } = useAuth();

  return (
    <Show
      when={!authStore.loading}
      fallback={<div>Loading...</div>}
    >
      <Show
        when={authStore.isAuthenticated}
        fallback={<Navigate href="/sign-in" />}
      >
        {props.children}
      </Show>
    </Show>
  );
}