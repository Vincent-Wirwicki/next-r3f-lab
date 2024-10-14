"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/sampler/Scene"));

export default function Page() {
  return (
    <main>
      <Scene />
    </main>
  );
}
