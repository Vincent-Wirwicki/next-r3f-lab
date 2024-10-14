"use-client";

import { Canvas } from "@react-three/fiber";
import { BustModel } from "./BustModel";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0.5, 0.5] }}>
      <BustModel />
      <ambientLight intensity={2} />
      <pointLight position={[0, 2, 0]} intensity={4} />
      <OrbitControls />
    </Canvas>
  );
}
