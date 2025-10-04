"use client";

import { useRouter } from "next/navigation";

export function BackLink() {
  const router = useRouter();

  return (
    <>
      &gt;{" "}
      <button
        onClick={() => router.back()}
        className="mb-8 cursor-pointer hover:underline underline-offset-4 decoration-1 transition-all"
      >
        cd . .
      </button>
    </>
  );
}
