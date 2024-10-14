import { MeshPhysicalMaterial } from "three";
import CustomShaderMaterial, {
  CustomShaderMaterialProps,
} from "three-custom-shader-material";
import { fragment } from "./shader/fragment";
import { vertex } from "./shader/vertex";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CustomSphere() {
  const ref =
    useRef<CustomShaderMaterialProps<typeof MeshPhysicalMaterial>>(null);
  useFrame(({ clock }) => {
    if (ref.current?.uniforms)
      ref.current.uniforms.uTime.value = clock.elapsedTime;
  });
  return (
    <mesh>
      <icosahedronGeometry args={[2.5, 64]} />
      <CustomShaderMaterial
        ref={ref}
        baseMaterial={MeshPhysicalMaterial}
        fragmentShader={fragment}
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={vertex}
      />
    </mesh>
  );
}
