"use client";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/glass/Scene"));

export default function Glass() {
  return (
    <main>
      <Scene />
    </main>
  );
}
