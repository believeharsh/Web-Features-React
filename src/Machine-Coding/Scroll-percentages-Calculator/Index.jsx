import React, { useEffect, useState } from "react";

// Hook to calculate scroll percentage
const useScrollPercentage = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrolled = window.scrollY;
      const totalScrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercentage = (currentScrolled / totalScrollableHeight) * 100;
      setScrollPercent(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPercent;
};

const ScrollCircle = () => {
  const scrollPercent = useScrollPercentage();
  const isComplete = Math.ceil(scrollPercent ) >= 100;

  return (
    <div>
      {/* Circle Progress */}
      <div className="fixed top-4 left-4 z-50 w-10 h-10">
        {/* Animated pulse ring on complete */}
        {isComplete && (
          <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping opacity-25"></div>
        )}

        {/* Progress Ring */}
        <div className="relative w-full h-full flex items-center justify-center rounded-full bg-white shadow-lg">
          {/* Circular Border */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#3b82f6 ${scrollPercent}%, #e5e7eb ${scrollPercent}% 100%)`,
              maskImage: "radial-gradient(white 55%, transparent 56%)",
              WebkitMaskImage: "radial-gradient(white 55%, transparent 56%)",
            }}
          />

          {/* Percentage Text */}
          <span className="z-10 text-xs font-semibold text-black">
            {Math.ceil(scrollPercent)}%
          </span>
        </div>
      </div>

      {/* Sample Scroll Content */}
      <div className="p-4 space-y-6">
        {[...Array(60)].map((_, i) => (
          <p key={i}>This is line {i + 1}. Scroll to see progress grow.</p>
        ))}
      </div>
    </div>
  );
};

export default ScrollCircle;
