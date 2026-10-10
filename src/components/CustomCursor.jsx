import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const [cursorType, setCursorType] = useState("default"); // "default" | "pointer" | "view" | "drag" | "hidden"
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Hardware-accelerated mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for cursor follower
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (!target) return;

      // 1. Inputs and textareas - hide custom cursor for native text selection
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        target.closest("input, textarea, [data-cursor='hidden']")
      ) {
        setCursorType("hidden");
        setCursorText("");
        return;
      }

      // 2. Custom cursor attributes (e.g., Portfolio cards with data-cursor="view")
      const cursorTarget = target.closest("[data-cursor]");
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        const text = cursorTarget.getAttribute("data-cursor-text") || "";
        setCursorType(type || "pointer");
        setCursorText(text);
        return;
      }

      // 3. Interactive clickable elements (buttons, links, clickable roles)
      const clickable = target.closest("a, button, [role='button'], .cursor-pointer");
      if (clickable) {
        setCursorType("pointer");
        setCursorText("");
        return;
      }

      // 4. Default state across all other components
      setCursorType("default");
      setCursorText("");
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible || cursorType === "hidden") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block select-none">
      {/* Black Circle VIEW / DRAG Cursor (Active over Portfolio cards) */}
      {(cursorType === "view" || cursorType === "drag") && (
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isClicking ? 0.88 : 1,
            opacity: 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-0 left-0 flex items-center justify-center w-20 h-20 rounded-full bg-black text-white font-mono text-sm font-bold tracking-widest uppercase shadow-2xl shadow-black/50"
        >
          <span>{cursorText || (cursorType === "drag" ? "DRAG" : "VIEW")}</span>
        </motion.div>
      )}

      {/* Global Interactive Cursor (Active across all other components) */}
      {cursorType !== "view" && cursorType !== "drag" && (
        <>
          {/* Precise Center Dot */}
          <motion.div
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: isClicking ? 0.6 : cursorType === "pointer" ? 0 : 1,
              opacity: cursorType === "pointer" ? 0 : 1,
            }}
            transition={{ duration: 0.15 }}
            className="absolute top-0 left-0 w-2 h-2 rounded-full bg-blue-600 shadow-sm"
          />

          {/* Smooth Spring Outer Follower Ring */}
          <motion.div
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              width: cursorType === "pointer" ? 48 : 34,
              height: cursorType === "pointer" ? 48 : 34,
              scale: isClicking ? 0.85 : 1,
              backgroundColor:
                cursorType === "pointer"
                  ? "rgba(37, 99, 235, 0.14)"
                  : "rgba(37, 99, 235, 0.04)",
              borderColor:
                cursorType === "pointer"
                  ? "rgba(37, 99, 235, 0.7)"
                  : "rgba(59, 130, 246, 0.35)",
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 26,
            }}
            className="absolute top-0 left-0 rounded-full border backdrop-blur-[1px] flex items-center justify-center"
          />
        </>
      )}
    </div>
  );
}

export default CustomCursor;
