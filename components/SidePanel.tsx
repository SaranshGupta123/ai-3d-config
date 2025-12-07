"use client";

import { usePCStore } from "@/store/usePCStore";

export default function SidePanel() {
  const { gpu, setGpu } = usePCStore();

  const parts = [
    { id: "gpu-rtx3060", name: "NVIDIA RTX 3060" },
    { id: "gpu-rtx4070", name: "RTX 4070 Ti Super" },
    { id: "gpu-rx7800", name: "AMD RX 7800 XT" },
  ];

  return (
    <div className="bg-[#111] border border-gray-700 rounded-xl p-4 h-full space-y-4">
      <h2 className="text-lg font-semibold">Components</h2>

      <div className="space-y-2">
        <div className="text-sm text-gray-400 uppercase tracking-wide">GPU</div>

        <select
          value={gpu ?? ""}
          onChange={(e) => setGpu(e.target.value || null)}
          className="w-full bg-black border border-gray-600 text-white rounded px-3 py-2"
        >
          <option value="">None</option>
          {parts.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
