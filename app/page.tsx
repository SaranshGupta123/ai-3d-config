"use client";

import ThreeDViewer from "@/components/ThreeDViewer";
import SidePanel from "@/components/SidePanel";
import { useState } from "react";

export default function Home() {
  const [gpu, setGpu] = useState<string | null>(null);

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 3D Viewer */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-2xl font-bold">
            AI 3D PC Builder (UI Prototype)
          </h1>
          <ThreeDViewer />
        </div>

        {/* UI Side Panel */}
        <SidePanel selected={gpu} onSelect={setGpu} />
      </div>
    </main>
  );
}
