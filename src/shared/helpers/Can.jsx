import { Show } from "solid-js";
import { useAuth } from "../../stores/auth/auth-context";


export default function Can(props) {

  const auth = useAuth();

  return (
    <Show
      when={auth.hasPermission(
        props.permission
      )}
    >
      {props.children}
    </Show>
  );
}