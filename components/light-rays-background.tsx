"use client";

import { useEffect, useState } from "react";
import LightRays from "./LightRays";

export function LightRaysBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none hidden dark:block">
      {/* Desktop */}
      <div className="hidden md:block w-full h-full">
        <LightRays
          raysOrigin="left"
          raysColor="#fff"
          raysSpeed={1.5}
          lightSpread={1.5}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.5}
          fadeDistance={1}
          noiseAmount={0.1}
          className="custom-rays"
        />
      </div>
      {/* Mobile */}
      <div className="block md:hidden w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#fff"
          raysSpeed={1.3}
          lightSpread={1.5}
          rayLength={5}
          followMouse={false}
          fadeDistance={0.8}
          className="custom-rays"
        />
      </div>
    </div>
  );
}
