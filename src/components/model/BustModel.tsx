/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/model/bust/marble_bust_01_2k.gltf -t -r public 
*/

import * as THREE from "three";
import React from "react";
import { Outlines, useGLTF, Wireframe } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    marble_bust_01: THREE.Mesh;
  };
  materials: {
    marble_bust_01: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};
export function BustModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/model/bust/marble_bust_01_2k.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        scale={10}
        castShadow
        geometry={nodes.marble_bust_01.geometry}
        material={materials.marble_bust_01}
        position={[0, 0.2, 0.15]}
      >
        {/* <Wireframe stroke={"red"} strokeOpacity={1} /> */}
        <Outlines />
        {/* <MeshTransmissionMaterial
          transmission={1}
          roughness={0.3}
          metalness={0.15}
          chromaticAberration={0.85}
          backside={true}
          backsideThickness={1}
          thickness={2}
          ior={1}
          anisotropy={0.1}
        /> */}
      </mesh>
    </group>
  );
}

useGLTF.preload("/model/bust/marble_bust_01_2k.gltf");
