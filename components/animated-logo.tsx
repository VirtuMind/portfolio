"use client"

import { useEffect, useState } from "react"

export function AnimatedLogo() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative font-mono text-2xl font-bold">
      <svg width="60" height="40" viewBox="0 0 60 40" className="overflow-visible">
        {/* Y letter */}
        <path
          d="M 5 5 L 15 20 L 15 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={isAnimating ? "animate-draw-y" : ""}
          style={{
            strokeDasharray: isAnimating ? "50" : "none",
            strokeDashoffset: isAnimating ? "50" : "0",
          }}
        />
        <path
          d="M 5 5 L 15 20 L 25 5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={isAnimating ? "animate-draw-y" : ""}
          style={{
            strokeDasharray: isAnimating ? "35" : "none",
            strokeDashoffset: isAnimating ? "35" : "0",
            animationDelay: "0.3s",
          }}
        />

        {/* K letter */}
        <path
          d="M 35 5 L 35 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={isAnimating ? "animate-draw-k" : ""}
          style={{
            strokeDasharray: isAnimating ? "30" : "none",
            strokeDashoffset: isAnimating ? "30" : "0",
            animationDelay: "0.6s",
          }}
        />
        <path
          d="M 35 20 L 50 5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={isAnimating ? "animate-draw-k" : ""}
          style={{
            strokeDasharray: isAnimating ? "25" : "none",
            strokeDashoffset: isAnimating ? "25" : "0",
            animationDelay: "0.9s",
          }}
        />
        <path
          d="M 35 20 L 50 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={isAnimating ? "animate-draw-k" : ""}
          style={{
            strokeDasharray: isAnimating ? "25" : "none",
            strokeDashoffset: isAnimating ? "25" : "0",
            animationDelay: "1.2s",
          }}
        />
      </svg>
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw-y,
        .animate-draw-k {
          animation: draw 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
