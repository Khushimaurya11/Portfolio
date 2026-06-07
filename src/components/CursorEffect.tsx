import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports hover/touch to avoid throwing cursor lag on smart mobile screens
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return () => window.removeEventListener('resize', checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track standard CTA hovers
    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Attach listeners to clickable elements
    const updateInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateInteractiveListeners();
    // Re-check elements on DOM sub-tree insertions
    const observer = new MutationObserver(updateInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();

      const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div id="premium-cursor-effect-wrapper" className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Outer Glow Tracer Ring */}
      <motion.div
        className="fixed w-7 h-7 rounded-full border border-indigo-500/50 block bg-transparent"
        animate={{
          x: position.x - 14,
          y: position.y - 14,
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          borderColor: hovered ? 'rgba(6, 182, 212, 0.8)' : 'rgba(99, 102, 241, 0.5)',
          backgroundColor: hovered ? 'rgba(6, 182, 212, 0.05)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 300,
          mass: 0.2,
        }}
        style={{
          opacity: hidden ? 0 : 1,
        }}
      />

      {/* Internal Core Dot Pointer */}
      <motion.div
        className="fixed w-1.5 h-1.5 rounded-full bg-indigo-500 block"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: clicked ? 1.2 : hovered ? 0.5 : 1,
          backgroundColor: hovered ? 'rgb(6, 182, 212)' : 'rgb(99, 102, 241)',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 400,
          mass: 0.1,
        }}
        style={{
          opacity: hidden ? 0 : 1,
        }}
      />
    </div>
  );
}
