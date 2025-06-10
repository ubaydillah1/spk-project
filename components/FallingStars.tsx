"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  tail: number;
  type: "falling" | "background";
  twinkleSpeed?: number;
  twinklePhase?: number;
  initialOpacity?: number;
}

export function FallingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reinitialize stars on resize
      if (starsRef.current.length === 0) {
        initializeStars();
      } else {
        // Only adjust star positions if they're already initialized
        adjustStarsOnResize(canvas.width, canvas.height);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Initialize both types of stars with balanced counts
    function initializeStars() {
      // Moderately increased star counts from the optimized version
      const fallingStarCount = Math.min(50, Math.floor(window.innerWidth / 30)); // Lebih banyak & lebih rapat
      const backgroundStarCount = Math.min(
        1000,
        Math.floor((window.innerWidth * window.innerHeight) / 3000)
      );

      // Create falling stars (some already on screen, some above)
      const fallingStars = Array.from({ length: fallingStarCount }, () => {
        const onScreen = Math.random() > 0.5;
        return createFallingStar(onScreen);
      });

      // Create background stars (all on screen)
      const backgroundStars = Array.from(
        { length: backgroundStarCount },
        createBackgroundStar
      );

      // Combine both types
      starsRef.current = [...fallingStars, ...backgroundStars];
    }

    // Adjust star positions when window is resized
    function adjustStarsOnResize(newWidth: number, newHeight: number) {
      starsRef.current = starsRef.current.map((star) => {
        if (star.x > newWidth) star.x = Math.random() * newWidth;
        if (star.y > newHeight) star.y = Math.random() * newHeight;
        return star;
      });
    }

    // Initialize stars
    initializeStars();

    // Optimize animation with throttling
    let lastTime = 0;
    const fps = 30; // Limit to 30 fps
    const interval = 1000 / fps;

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;

      if (deltaTime > interval) {
        lastTime = timestamp - (deltaTime % interval);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw stars
        starsRef.current.forEach((star, index) => {
          if (star.type === "falling") {
            // Move falling star
            star.y += star.speed;
            star.x += star.speed;

            // Simplified drawing for falling stars
            drawFallingStar(ctx, star);

            const tailBuffer = star.tail * 1.2;

            if (
              star.y - tailBuffer > canvas.height ||
              star.x - tailBuffer > canvas.width
            ) {
              starsRef.current[index] = createFallingStar(false);
            }
          } else {
            // Update background star (twinkling and very slow movement)
            star.twinklePhase! += star.twinkleSpeed!;
            star.opacity =
              star.initialOpacity! * (0.5 + 0.5 * Math.sin(star.twinklePhase!));

            // Very slow movement - reduced even further
            star.y += star.speed * 0.5;
            star.x += star.speed * 0.1;

            // Simplified drawing for background stars
            drawBackgroundStar(ctx, star);

            // Reset if off screen
            if (star.y > canvas.height || star.x > canvas.width) {
              if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
              } else {
                star.x = 0;
                star.y = Math.random() * canvas.height;
              }
            }
          }
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Create a falling star - slightly enhanced but still performant
  const createFallingStar = (onScreen: boolean): Star => {
    const speed = 0.1 + Math.random() * 0.4; // Moderate speed range
    return {
      x: Math.random() * window.innerWidth,
      y: onScreen
        ? Math.random() * window.innerHeight
        : -20 - Math.random() * 100,
      size: 0.5 + Math.random() * 1,
      speed: speed,
      opacity: 0.2 + Math.random() * 0.6,
      tail: 3 + Math.random() * 10, // Slightly longer tails
      type: "falling",
    };
  };

  // Create a background star - slightly enhanced
  const createBackgroundStar = (): Star => {
    const initialOpacity = 0.1 + Math.random() * 0.5;
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 0.2 + Math.random() * 0.8,
      speed: 0.005 + Math.random() * 0.01, // Very slow movement
      opacity: initialOpacity,
      tail: 0,
      type: "background",
      twinkleSpeed: 0.003 + Math.random() * 0.007,
      twinklePhase: Math.random() * Math.PI * 2,
      initialOpacity: initialOpacity,
    };
  };

  // Slightly enhanced drawing for falling stars while keeping it performant
  const drawFallingStar = (ctx: CanvasRenderingContext2D, star: Star) => {
    // Simple tail
    ctx.beginPath();
    ctx.moveTo(star.x, star.y);
    ctx.lineTo(star.x - star.tail, star.y - star.tail);
    ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.7})`;
    ctx.lineWidth = star.size * 0.8;
    ctx.stroke();

    // Star point with minimal glow
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();

    // Very subtle glow (minimal performance impact)
    if (star.size > 0.8) {
      // Only add glow to larger stars
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.15})`;
      ctx.fill();
    }
  };

  // Enhanced drawing for background stars while keeping it performant
  const drawBackgroundStar = (ctx: CanvasRenderingContext2D, star: Star) => {
    // Simple circle with very subtle glow for larger stars
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();

    // Add very subtle glow only to larger stars
    if (star.size > 0.6 && star.opacity > 0.3) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.1})`;
      ctx.fill();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
