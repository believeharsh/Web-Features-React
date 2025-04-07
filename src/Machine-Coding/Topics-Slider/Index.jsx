import { useRef, useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const topics = [
  "React", "JavaScript", "Web Development", "Node.js", "CSS", "MongoDB", "Frontend",
  "Backend", "Design", "Database", "DevOps", "TypeScript", "Express", "API", "Next.js"
];

export default function TopicSlider({ onTopicClick }) {
  const scrollRef = useRef();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 100;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1); // allow for small floating point diff
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollPosition(); // initial check

    container.addEventListener("scroll", checkScrollPosition);
    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <div className="flex items-center w-full px-4 py-3 gap-2">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <span className="text-sm font-medium">‹</span>
        </button>
      )}

      {/* Scrollable Topics */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar space-x-3 flex-1 max-w-[600px] py-1"
      >
        {topics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => onTopicClick(topic)}
            className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition font-medium"
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <span className="text-sm font-medium">›</span>
        </button>
      )}
    </div>
  );
}
