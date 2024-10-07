"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/texture/Scene"));

export default function Glass() {
  return (
    <main>
      <Scene />
    </main>
  );
}
