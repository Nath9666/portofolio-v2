import { useEffect, useRef } from "react";

export function Color() {
  return (
    <>
      <p className="text-orange-400">orange 1</p>
      <p className="text-amber-700">orange 2</p>
      <p className="text-violet-500">violet 1</p>
      <p className="text-violet-700">violet 2</p>
      <p className="text-blue-700">bleu 1</p>
      <p className="text-sky-600">bleu 2</p>
    </>
  );
}

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const numStars =
      (random(200, 1000) * (canvas.width * canvas.height)) / (1920 * 1080);
    const colors = [
      "#fff",
      "#fb923c",
      "#fb920c",
      "#b45309",
      "#8b5cf6",
      "#6d28d9",
      "#3b82f6",
      "#0284c7",
    ];
    const stars: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      vx: number;
      vy: number;
      color: string;
    }[] = [];

    for (let i = 0; i < numStars; i++) {
      const speed = random(0.01, 0.5)
      const xDirection = random(0.1, 0.25)
      const yDirection = random(0.1, 0.25)

      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: speed,
        radius: Math.random() * 1.6,
        vx: Math.random() * speed - xDirection,
        vy: Math.random() * speed - yDirection,
      });
    }

    function animate() {
      if (!ctx) return;
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1]"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
      }}
    />
  );
}
