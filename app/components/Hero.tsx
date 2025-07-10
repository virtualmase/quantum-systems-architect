"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Navbar from "./Navbar"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 100)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Navbar />

      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JD</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Quantum Systems Architect
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-mono">Building Quantum-Native Infrastructure</p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Designing verifiable quantum infrastructure and orchestrating modular signal flows for secure, distributed
          systems. Specializing in post-quantum security and quantum algorithm optimization.
        </p>

        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-24 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-mono text-blue-400">LIVE SYNC: 98.7%</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            className="px-8 py-3 border border-purple-500/50 text-purple-400 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:john@example.com"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
