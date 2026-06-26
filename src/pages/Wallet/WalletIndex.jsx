import { createSignal, Show } from "solid-js";

const tabs = [
  {
    id: "buyer",
    label: "Buyer",
    title: "Real Wallet Balance",
    amount: "$12,850.25",
    color: "text-primary-600",
  },
  {
    id: "seller",
    label: "Seller",
    title: "Seller Income",
    amount: "$48,420.10",
    color: "text-emerald-600",
  },
  {
    id: "driver",
    label: "Driver",
    title: "Driver Earnings",
    amount: "$7,285.50",
    color: "text-amber-600",
  },
];

export default function WalletIndex() {
  const [activeTab, setActiveTab] = createSignal("buyer");

  const current = () =>
    tabs.find((tab) => tab.id === activeTab());

  return (
    <>
      <div class="min-h-screen relative pt-32 max-w-screen-2xl mx-auto">
        <section class="border border-muted-200 bg-white p-6">

          {/* Heading */}
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-900">
              Wallet Overview
            </h2>

            <p class="mt-1 text-sm text-muted-500">
              View your balance based on your current role.
            </p>
          </div>

          {/* Tabs */}
          <div class="mb-6 flex gap-2 rounded-xl bg-muted-100 p-1">

            {tabs.map((tab) => (
              <button
                onClick={() => setActiveTab(tab.id)}
                class={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition

            ${activeTab() === tab.id
                    ? "bg-primary-600 text-white shadow"
                    : "text-muted-600 hover:bg-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}

          </div>

          {/* Content */}

          <div class="rounded-xl border border-muted-200 bg-muted-50 p-6">

            <p class="text-sm text-muted-500">
              {current().title}
            </p>

            <h3 class={`mt-2 text-4xl font-bold ${current().color}`}>
              {current().amount}
            </h3>

            <p class="mt-4 text-sm text-muted-500">
              Last Updated : 27 May 2002 . 10:20 PM
            </p>

          </div>

        </section>
      </div>
    </>
  );
}