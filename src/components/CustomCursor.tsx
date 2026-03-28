"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const observe = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    observe();
    const observer = new MutationObserver(observe);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  // Trailing effect
  useEffect(() => {
    let raf: number;
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  if (!visible) return null;

  return (
    <>
      {/* Main dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: hovering ? 40 : 8,
          height: hovering ? 40 : 8,
          marginLeft: hovering ? -16 : 0,
          marginTop: hovering ? -16 : 0,
          borderRadius: "50%",
          backgroundColor: "#e8722a",
          transition: "width 0.3s, height 0.3s, margin 0.3s",
          opacity: 0.9,
        }}
      />
      {/* Trail glow */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: trail.x - 20,
          top: trail.y - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,47,190,0.15) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
