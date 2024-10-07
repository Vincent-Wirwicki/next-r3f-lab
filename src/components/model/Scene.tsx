"use client";
import {
  Center,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BustModel } from "./BustModel";

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 1, 5] }}>
      <color attach="background" args={["#FF13FF"]} />
      <fog attach="fog" args={["#FF13FF", 5, 20]} />

      <Suspense fallback={<div>Loading</div>}>
        <Center>
          <BustModel />
        </Center>
      </Suspense>
      <Ground />
      {/* <PlaneBG /> 8705E4*/}
      <ambientLight intensity={0.1} />
      {/* <Sky
        distance={450000}
        sunPosition={[0, 0, 5]}
        inclination={0}
        azimuth={0.25}
      /> */}
      <LightScene />
      <OrbitControls />
    </Canvas>
  );
}

function LightScene() {
  return (
    <>
      {" "}
      <pointLight
        castShadow
        intensity={2}
        position={[1, 1, 2]}
        color="#F9557B"
      />
      <pointLight
        castShadow
        intensity={2}
        position={[-1, 1, 2]}
        color="#F9C35E"
      />
      <pointLight
        castShadow
        intensity={2}
        position={[-1, 0.25, 1.5]}
        color="#F9C35E"
      />
      <pointLight
        castShadow
        intensity={2}
        position={[0, 0, 1.5]}
        color="#F9557B"
      />
      {/* <pointLight
        castShadow
        intensity={4}
        position={[0.5, 0, 0]}
        color="#F9557B"
      /> */}
    </>
  );
}

function Ground() {
  return (
    <mesh
      castShadow
      receiveShadow
      //   scale={[...ratio]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3, 0]}
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#F9C35E" metalness={1} />
    </mesh>
  );
}

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 128]} />
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
  );
}

// geometry={model.nodes.marble_bust_01_2k.}

// function Model() {
//   const model = useGLTF("/model/bust/marble_bust_01_2k.gltf");

//   return <primitive object={model.scene} />;
// }
{
  /* <MeshReflectorMaterial
  blur={[200, 100]} // Blur ground reflections (width, height), 0 skips blur
  mixBlur={0} // How much blur mixes with surface roughness (default = 1)
  mixStrength={1} // Strength of the reflections
  mixContrast={1} // Contrast of the reflections
  resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
  mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
  depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
  minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
  maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
  depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
  distortion={1} // Amount of distortion based on the distortionMap texture
  // The red channel of this texture is used as the distortion map. Default is null distortionMap={null}
  // Depending on the assigned value, one of the following channels is shown: debug={0}
  //0 = no debug
  //1 = depth channel
  //2 = base channel
  //3 = distortion channel
  //4 = lod channel (based on the roughness)
  //
  reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
/>; */
}
