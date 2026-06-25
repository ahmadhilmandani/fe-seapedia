import RoleAddress from "./RoleAddress";

export default function UserRoleSection() {
  return (
    <>
      <div class="mb-8 border-b border-muted-100">

        <div class="space-y-1">
          <h2>
            Judul Role.
          </h2>

          <p class="text-sm font-normal text-muted-500">
            jelaskan ringkas peran dari role ini apa
          </p>
        </div>

      </div>

      <RoleAddress />
    </>
  )
}