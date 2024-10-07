import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Group, MeshStandardMaterial } from "three";

export default function Scene() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Canvas camera={{ position: [0, 0, 3.5] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={5} position={[0, 0, 3]} />
        <fog attach={"fog"} args={["black", 0, 5]} />
        <Plane />
      </Canvas>
    </Suspense>
  );
}

function Plane() {
  const matRefBig = useRef<MeshStandardMaterial>(null);
  const matRefSmall = useRef<MeshStandardMaterial>(null);
  const groupRef = useRef<Group>(null);

  // ARM texture
  // A => Ambiant Occlusion => Red Channel
  // R => Roughness => Green Channel
  // M => Metalness => Blue Channel
  const textures = useTexture({
    map: "/texture/mud/diff_2k.jpg",
    displacementMap: "/texture/mud/disp_2k.png",
    aoMap: "/texture/mud/arm_2k.jpg",
    roughnessMap: "/texture/mud/arm_2k.jpg",
    metalnessMap: "/texture/mud/arm_2k.jpg",
  });

  function easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 2);
  }

  function easeInQuad(x: number): number {
    return x * x;
  }

  function mapRange(val: number, min: number, max: number) {
    return (val + 1) * 0.5 * (max - min) + min;
  }

  useFrame(({ clock }) => {
    const sineWave = Math.sin(clock.elapsedTime);

    const scale = mapRange(sineWave, 1, 1.5);
    const scale2 = mapRange(sineWave, 0.75, 1);

    if (matRefBig.current)
      matRefBig.current.displacementScale = easeInQuad(scale);
    if (matRefSmall.current)
      matRefSmall.current.displacementScale = easeInQuad(scale2);
    if (groupRef.current) {
      groupRef.current.rotation.y += easeOutQuart(0.0015);
      groupRef.current.rotation.x -= easeOutQuart(0.0025);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1, 128]} />
        {/* <planeGeometry args={[10, 10, 64]} /> */}
        <meshStandardMaterial
          ref={matRefSmall}
          displacementScale={0}
          {...textures}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[4, 128]} />
        <meshStandardMaterial
          ref={matRefBig}
          displacementScale={0}
          roughness={1}
          {...textures}
          wireframe={true}
        />
      </mesh>
    </group>
  );
}
