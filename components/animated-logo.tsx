export function AnimatedLogo() {
  return (
    <div className="relative text-2xl">
      <svg
        width="80"
        height="50"
        viewBox="0 0 80 50"
        className="overflow-visible"
      >
        {/* Y letter */}
        <text
          x="10"
          y="35"
          fontSize="28"
          fill="none"
          stroke="currentColor"
          className="font-handwriting animate-draw-y"
        >
          Y
        </text>

        {/* K letter */}
        <text
          x="35"
          y="35"
          fontSize="28"
          fill="none"
          stroke="currentColor"
          className="font-handwriting animate-draw-k"
        >
          K
        </text>
      </svg>
    </div>
  );
}
