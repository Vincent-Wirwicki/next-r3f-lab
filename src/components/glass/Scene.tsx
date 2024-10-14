"use client";

import {
  MeshTransmissionMaterial,
  OrbitControls,
  Image,
} from "@react-three/drei";
// import {
//   Bloom,
//   EffectComposer,
//   N8AO,
//   TiltShift2,
//   Noise,
// } from "@react-three/postprocessing";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight position={[0, 0, 10]} intensity={10} color="red" />
      <color attach="background" args={["#0D0D0D"]} />

      {/* <spotLight position={[1, 5, 5]} intensity={4} color="gray #e0e0e0" />
      <spotLight position={[-1, 5, 5]} intensity={4} color="gray" /> */}

      <Images />
      <CentralShape />
      {/* <Floor /> */}
      <OrbitControls />
    </Canvas>
  );
}

function Images() {
  const { width, height } = useThree(state => state.viewport);
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image position={[0, 0, 0]} url="/image/steven-wei-01.jpg" grayscale={1}>
      <planeGeometry args={[width * 0.5, height * 0.5, 1]} />
    </Image>
  );
}


function CentralShape() {
  const glassMesh = useRef<Mesh>(null!);
  const wireMesh = useRef<Mesh>(null!);
  useFrame(({ clock }) => {
    const g = glassMesh.current;
    const w = wireMesh.current;
    g.rotation.y = clock.getElapsedTime() * -0.2;
    g.rotation.x = clock.getElapsedTime() * -0.2;
    w.rotation.y = clock.getElapsedTime() * -0.2;
    w.rotation.x = clock.getElapsedTime() * -0.2;
  });

  return (
    <group>
      <mesh ref={glassMesh} position={[0, 0, 3]}>
        <icosahedronGeometry args={[1.5, 0]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={10}
          thickness={2}
          transmission={1}
          chromaticAberration={0.1}
          // ior={1}
        />
      </mesh>
      <mesh ref={wireMesh} position={[0, 0, 3]}>
        <icosahedronGeometry args={[0.75, 0]} />
        <meshBasicMaterial color="#404040" wireframe />
      </mesh>
    </group>
  );
}
