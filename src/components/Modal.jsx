import { Show } from "solid-js";

export default function Modal(props) {
  return (
    <Show when={props.open}>
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div class="relative w-full max-w-2xl p-4">
          <div class="relative bg-white rounded-lg shadow">

            <div class="flex items-center justify-between p-4 border-b border-muted-200">
              <h3 class="text-xl font-semibold">
                {props.title}
              </h3>

              <button
                type="button"
                onClick={props.onClose}
              >
                <i class="ph ph-x text-xl"></i>
              </button>
            </div>

            <div class="p-6">
              {props.children}
            </div>

          </div>
        </div>
      </div>
    </Show>
  );
}