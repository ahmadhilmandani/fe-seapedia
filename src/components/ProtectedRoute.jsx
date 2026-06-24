import { useAuth } from "../stores/auth/auth-context";

function ProtectedRoute(props) {
  const auth = useAuth();

  return (
    <Show
      when={auth.isAuthenticated}
      fallback={<Navigate href="/sign-in" />}
    >
      {props.children}
    </Show>
  );
}