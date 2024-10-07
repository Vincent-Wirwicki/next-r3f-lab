"use client";

import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
  Text,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 20], fov: 50 }}>
      {/* <ambientLight position={[0, 3, 3]} color="red" /> */}
      <spotLight
        position={[20, 20, 10]}
        penumbra={1}
        castShadow
        angle={0.82}
        color="red"
      />
      {/* <color attach="background" args={["#e0e0e0"]} /> */}

      {/* <Environment
        background
        preset="warehouse"
        backgroundBlurriness={1}
        backgroundIntensity={0}
      /> */}
      <Environment preset="sunset" blur={0.8}>
        <Lightformer
          intensity={4}
          position={[10, 5, 0]}
          scale={[10, 50, 1]}
          color={"red"}
          // onUpdate={self => self.lookAt(0, 0, 0)}
        />
      </Environment>
      <ContactShadows
        scale={100}
        position={[0, -7.5, 0]}
        blur={0.75}
        far={100}
        opacity={0.75}
      />

      <Text color="white" fontSize={4} position={[0, 0, -15]}>
        A simple transmission
      </Text>
      <Float floatIntensity={3}>
        <mesh receiveShadow castShadow>
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <torusKnotGeometry args={[3, 1, 128, 32]} />
          {/* <MeshWobbleMaterial factor={10} speed={5} /> */}
          <MeshTransmissionMaterial
            transmission={1}
            roughness={0.3}
            metalness={0.15}
            chromaticAberration={0.2}
            backside={true}
            backsideThickness={1}
            thickness={2}
            ior={1}
            anisotropy={0.1}
          />
        </mesh>
      </Float>

      <OrbitControls />
    </Canvas>
  );
}
