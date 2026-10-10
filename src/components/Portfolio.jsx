import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiPause,
  FiImage,
} from "react-icons/fi";

// Project assets
import kasCambodia from "../assets/kascambodia.png";
import realEstate from "../assets/real-estate.png";
import kasAdvertising from "../assets/kas-advertising.png";

const projectsData = [
  {
    id: 1,
    title: "Kas Advertise",
    category: "Full Stack",
    description:
      "Comprehensive digital advertising management system for launching campaigns, tracking ad reach, and analyzing audience metrics in real time.",
    image: kasAdvertising,
    liveUrl: "https://www.kasadvertisting.com",
    tags: ["React", "Tailwind CSS", "Node.js", "Analytics"],
  },
  {
    id: 2,
    title: "Kas Cambodia",
    category: "Full Stack",
    description:
      "An official corporate platform delivering digital solutions, modern web design, and high-impact branding services across Cambodia.",
    image: kasCambodia,
    liveUrl: "https://www.kascambodia.com/",
    tags: ["React", "Express", "Tailwind CSS", "UI/UX"],
  },
  {
    id: 3,
    title: "UX/UI Real Estate",
    category: "UX/UI Design",
    description:
      "Modern real estate application UI/UX featuring seamless property discovery, interactive listings, virtual tours, and intuitive booking flows.",
    image: realEstate,
    liveUrl: "",
    tags: ["Figma", "UI/UX", "Mobile App", "Wireframing"],
  },
];

// Create an infinite repeating list of projects
const REPEAT_COUNT = 8;
const virtualProjects = Array.from({ length: REPEAT_COUNT }).flatMap(() => projectsData);
const INITIAL_INDEX = projectsData.length * 3; // start in Set 3 (index 9)

const AUTOPLAY_DURATION = 4; // 4 seconds per slide

function Portfolio() {
  const [page, setPage] = useState(INITIAL_INDEX);
  const [isResetting, setIsResetting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [cardWidth, setCardWidth] = useState(560);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const hasDraggedRef = useRef(false);

  // Dynamic gap between cards (12px on small mobile, 16px on mobile, 24px on tablet/desktop)
  const gap = containerWidth < 480 ? 12 : containerWidth < 640 ? 16 : 24;
  const totalOriginal = projectsData.length;
  const activeProjectIndex = ((page % totalOriginal) + totalOriginal) % totalOriginal;

  // Measure container and card width dynamically for responsive centering
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
      // Fluid responsive card width:
      // Small mobile (<480px): 78% of width so preview cards peek on both sides with room to spare
      // Mobile (480-640px): 80% of width
      // Tablet (640-1024px): 66% of width (max 520px)
      // Desktop (1024-1440px): 48% of width (max 620px)
      // Large screens (>=1440px): 640px
      let calculated;
      if (width < 480) {
        calculated = Math.round(width * 0.78);
      } else if (width < 640) {
        calculated = Math.round(width * 0.8);
      } else if (width < 1024) {
        calculated = Math.min(Math.round(width * 0.66), 520);
      } else if (width < 1440) {
        calculated = Math.min(Math.round(width * 0.48), 620);
      } else {
        calculated = 640;
      }
      setCardWidth(calculated);
    }
  }, []);

  useEffect(() => {
    updateDimensions();

    const t1 = setTimeout(updateDimensions, 100);
    const t2 = setTimeout(updateDimensions, 350);

    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      resizeObserver = new ResizeObserver(() => updateDimensions());
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("orientationchange", updateDimensions);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("orientationchange", updateDimensions);
    };
  }, [updateDimensions]);

  // Navigate to next slide - smoothly swap forward forever
  const handleNext = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  // Navigate to previous slide - smoothly swap backward forever
  const handlePrev = useCallback(() => {
    setPage((prev) => prev - 1);
  }, []);

  // Calculate centered X position
  const centerOffset = (containerWidth - cardWidth) / 2;
  const trackX = -page * (cardWidth + gap) + centerOffset;

  return (
    <section
      id="projects"
      className="relative py-14 sm:py-20 md:py-24 bg-white overflow-hidden select-none w-full"
    >
      {/* Background ambient lighting matching other sections */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full blur-3xl -z-10" />

      {/* Section Header Container */}
      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto mt-2 sm:mt-3 text-xs sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
            Here are some of my key projects:
          </p>
        </motion.div>
      </div>

      {/* Full-Width Carousel Viewport (Edge-to-Edge across entire page with 0 padding) */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden py-2 sm:py-4 touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Smooth Motion Slider Track */}
        <motion.div
          animate={{ x: trackX }}
          transition={
            isResetting
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 240,
                  damping: 28,
                  mass: 0.8,
                }
          }
          onAnimationComplete={() => {
            if (isResetting) {
              setIsResetting(false);
              return;
            }
            if (page >= INITIAL_INDEX + totalOriginal) {
              setIsResetting(true);
              setPage((prev) => prev - totalOriginal);
            } else if (page < INITIAL_INDEX) {
              setIsResetting(true);
              setPage((prev) => prev + totalOriginal);
            }
          }}
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => {
            setIsPaused(true);
            setIsDragging(true);
            hasDraggedRef.current = true;
          }}
          onDragEnd={(e, { offset, velocity }) => {
            setIsPaused(false);
            setIsDragging(false);
            setTimeout(() => {
              hasDraggedRef.current = false;
            }, 100);
            const swipe = offset.x;
            if (swipe < -35 || velocity.x < -250) {
              handleNext();
            } else if (swipe > 35 || velocity.x > 250) {
              handlePrev();
            }
          }}
          style={{ gap: `${gap}px` }}
          className="flex cursor-grab active:cursor-grabbing md:cursor-none w-max items-center"
        >
          {virtualProjects.map((project, idx) => {
            const isCurrent = idx === page;
            return (
              <motion.div
                key={`${project.id}-${idx}`}
                data-cursor="view"
                data-cursor-text={isDragging ? "DRAG" : "VIEW"}
                animate={{
                  scale: isCurrent ? 1 : 0.94,
                  opacity: isCurrent ? 1 : 0.6,
                  filter: isCurrent ? "brightness(1)" : "brightness(0.85)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => {
                  if (hasDraggedRef.current) return;
                  if (!isCurrent) {
                    setPage(idx);
                  } else if (project.liveUrl) {
                    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                style={{ width: cardWidth }}
                className={`relative flex-shrink-0 aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? "border-blue-500/40 shadow-2xl shadow-blue-500/15"
                    : "border-slate-200/90 shadow-md hover:shadow-xl hover:opacity-85"
                }`}
              >
                {/* Card Image */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top pointer-events-none"
                    draggable="false"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                    <FiImage className="w-12 h-12 sm:w-16 sm:h-16 stroke-[1.2]" />
                    <span className="mt-2 text-xs uppercase tracking-wider font-mono">
                      No Preview
                    </span>
                  </div>
                )}

                {/* Card Content Overlay */}
                <div
                  className={`absolute inset-0 z-10 flex flex-col justify-between p-3.5 sm:p-6 md:p-7 transition-opacity duration-300 ${
                    isCurrent
                      ? "bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-95 hover:opacity-100"
                      : "bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-75 hover:opacity-90"
                  }`}
                >
                  {/* Top Bar: Category Pill & Mobile View Hint */}
                  <div className="flex items-center justify-between w-full">
                  
                  </div>

                  {/* Bottom Info: Title, Description, and Responsive Tech Tags */}
                  <div>
                    <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-100/95 line-clamp-2 max-w-xl drop-shadow leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Autoplay Progress Bar & Controls */}
      <div
        className="mx-auto mt-4 sm:mt-6 px-4 flex items-center justify-between gap-3 w-full"
        style={{ maxWidth: Math.min(cardWidth, containerWidth - 24) }}
      >
        {/* Progress Bar Pill & Play/Pause */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-16 min-[380px]:w-24 sm:w-36 md:w-44 h-1.5 bg-gray-200/90 rounded-full overflow-hidden flex-shrink-0">
            <motion.div
              key={`${activeProjectIndex}-${isPaused}`}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? undefined : "100%" }}
              transition={{
                duration: AUTOPLAY_DURATION,
                ease: "linear",
              }}
              onAnimationComplete={() => {
                if (!isPaused) {
                  handleNext();
                }
              }}
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
            />
          </div>

          {/* Play / Pause Toggle Button */}
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center"
            title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
            aria-label={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
          >
            {isPaused ? (
              <FiPlay className="w-3.5 h-3.5" />
            ) : (
              <FiPause className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Slide Navigation Chevrons & Counter */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[11px] sm:text-xs font-semibold text-gray-500 font-mono select-none">
            0{activeProjectIndex + 1} / 0{totalOriginal}
          </span>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1.5 sm:p-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition-colors flex items-center justify-center"
              title="Previous Project"
              aria-label="Previous Project"
            >
              <FiChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 sm:p-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition-colors flex items-center justify-center"
              title="Next Project"
              aria-label="Next Project"
            >
              <FiChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
