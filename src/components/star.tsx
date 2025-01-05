import { useEffect, useRef } from 'react'

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const random = (min: number, max: number) => Math.random() * (max - min) + min

    const numStars = random(200,1000) * (canvas.width * canvas.height) / (1920 * 1080)
    const colors = [
      'rgba(255, 255, 60, 1)',
      'rgba(255, 255, 45, 1)',
      'rgba(255, 255, 30, 1)',
      'rgba(255, 255, 15, 1)',
      'rgba(255, 255, 0, 1)',
      'rgba(255, 230, 0, 1)',
      'rgba(255, 200, 0, 1)',
      'rgba(255, 170, 0, 1)',
      'rgba(255, 140, 0, 1)',
      'rgba(255, 110, 0, 1)',
    ];
    const stars: { x: number; y: number; radius: number; vx: number; vy: number, color: string }[] = []

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: Math.random() * 1.5,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25
      })
    }

    function animate() {
      if (!ctx) return
      if (!canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        ctx.beginPath()
        ctx.fillStyle = star.color
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        star.x += star.vx
        star.y += star.vy

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1]"
      style={{ background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)' }}
    />
  )
}

