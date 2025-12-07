"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { usePCStore } from "@/store/usePCStore";

function GPUModel({ type }: { type: string }) {
  const gpuMap: Record<string, string> = {
    "gpu-rtx3060ti": "/models/rtx-3060-ti.glb",
    "gpu-rtx3080": "/models/rtx3080.glb",
    "gpu-rtx3080ti": "/models/rtx-3080-ti.glb",
    "gpu-titan": "/models/titan-rtx.glb",
    "gpu-cover1": "/models/cover1.glb",
    "gpu-cover2": "/models/cover2.glb",
    "gpu-cover3": "/models/cover3.glb",
  };

  const file = gpuMap[type];

  if (!file) return null; // prevents crash if ID is unknown

  const { scene } = useGLTF(file);

  return (
    <primitive
      object={scene}
      scale={1.4}
      position={[0.3, -0.5, 0.55]}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
}

export default function ThreeDViewer() {
  const { gpu } = usePCStore();

  return (
    <div className="w-full h-[480px] rounded-xl overflow-hidden border border-gray-700">
      <Canvas camera={{ position: [3.5, 3, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1} position={[5, 5, 5]} />

        <Suspense fallback={null}>
          <Stage environment="warehouse" intensity={0.7}>
            {gpu && <GPUModel type={gpu} />}
          </Stage>
        </Suspense>

        <OrbitControls makeDefault enableZoom enableRotate />
      </Canvas>
    </div>
  );
}
