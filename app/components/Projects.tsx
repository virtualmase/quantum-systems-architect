"use client"

import { ExternalLink } from "lucide-react"
import { useEffect, useRef } from "react"

// Your actual projects organized by layers
const projectLayers = [
  {
    title: "Infrastructure Layer",
    description: "Building the foundational quantum-native systems for robust, distributed operations.",
    projects: [
      {
        title: "CQF Visualizer",
        description:
          "A prototype for visualizing Coreweaver Quantum Framework (CQF) states, standardizing quantum algorithm design through interactive, high-dimensional representation.",
        liveUrl: "https://quantum-nexus-blond.vercel.app/",
        technologies: ["Quantum Computing", "Visualization", "CQF", "Interactive Design"],
        category: "infrastructure",
      },
      {
        title: "Lighthouse Node Simulator",
        description:
          "Interactive 3D simulation of a Lighthouse Node, managing distributed network operations for collaboration across quantum and classical nodes with real-time monitoring.",
        liveUrl: "https://virtual-lighthouse-node.vercel.app/",
        technologies: ["3D Simulation", "Network Operations", "Real-time Monitoring", "Distributed Systems"],
        category: "infrastructure",
      },
      {
        title: "The Mycelium Network",
        description:
          "A distributed system focused on efficient data processing and visualization, showcasing emergent, scalable architectures for quantum-enhanced networks.",
        liveUrl: "https://athenax-c1.vercel.app/",
        technologies: ["Distributed Systems", "Data Processing", "Scalable Architecture", "Network Visualization"],
        category: "infrastructure",
      },
    ],
  },
  {
    title: "Search + Compute Layer",
    description: "Developing advanced quantum algorithms for accelerated data discovery and complex computations.",
    projects: [
      {
        title: "Deltangular Bootstrap Lab",
        description:
          "Our flagship lab for developing and validating quantum search and QML algorithms, exploring entanglement for faster, more efficient data discovery.",
        liveUrl: "https://riip.vercel.app/",
        technologies: ["Quantum Search", "QML Algorithms", "Entanglement", "Data Discovery"],
        category: "compute",
      },
      {
        title: "Sheldon Algorithm Optimizer",
        description:
          "Focuses on optimizing quantum algorithms, reducing circuit depth, and improving runtime for critical quantum search operations like Grover's algorithm.",
        liveUrl: "https://autonomous-ascent.vercel.app/",
        technologies: ["Algorithm Optimization", "Circuit Depth Reduction", "Grover's Algorithm", "Performance"],
        category: "compute",
      },
      {
        title: "The Oracle Engine",
        description:
          "Advanced analytics and visualization platform providing actionable insights from high-dimensional, complex quantum datasets for auditing and performance.",
        liveUrl: "https://athenax-gamma.vercel.app/",
        technologies: ["Analytics", "Data Visualization", "High-dimensional Data", "Quantum Datasets"],
        category: "compute",
      },
    ],
  },
  {
    title: "Interface + Coordination Layer",
    description:
      "Crafting intuitive interfaces and robust coordination mechanisms for seamless quantum ecosystem interaction.",
    projects: [
      {
        title: "Archie System Integrator",
        description:
          "A modular framework for integrating autonomous agents and algorithms, ensuring compatibility with external platforms and enhancing post-quantum security.",
        liveUrl: "https://subnet63-quantum.vercel.app/",
        technologies: ["System Integration", "Autonomous Agents", "Post-quantum Security", "Modular Framework"],
        category: "interface",
      },
      {
        title: "The Atlas Interface",
        description:
          "A geographical data visualization platform demonstrating a 'big picture' approach to complex environmental data signals, potentially leveraging quantum insights.",
        liveUrl: "https://terr-nine.vercel.app/",
        technologies: ["Geographical Visualization", "Environmental Data", "Big Data", "Quantum Insights"],
        category: "interface",
      },
      {
        title: "The Abacus Protocol",
        description:
          "A robust financial modeling tool using quantum-inspired optimization for enhanced accuracy and predictive power in complex markets.",
        liveUrl: "https://reckonax.vercel.app/",
        technologies: ["Financial Modeling", "Quantum Optimization", "Predictive Analytics", "Market Analysis"],
        category: "interface",
      },
    ],
  },
]

// Quantum Canvas Animation Component
function QuantumCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    const particleCount = 15
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: centerX + (Math.random() - 0.5) * canvas.width,
        y: centerY + (Math.random() - 0.5) * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      })
    }

    let frame = 0

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      const currentCenterX = canvas.width / 2
      const currentCenterY = canvas.height / 2

      // Draw connecting lines
      ctx.strokeStyle = "rgba(0, 191, 255, 0.2)"
      ctx.lineWidth = 0.5
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.moveTo(currentCenterX, currentCenterY)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()
      })

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(138, 43, 226, 0.7)"
        ctx.fill()
      })

      // Draw central pulsing core
      const pulseScale = 0.8 + Math.sin(frame * 0.05) * 0.2
      const pulseAlpha = 0.7 + Math.sin(frame * 0.05) * 0.3

      // Outer pulse
      ctx.beginPath()
      ctx.arc(currentCenterX, currentCenterY, 12 * pulseScale, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 191, 255, ${pulseAlpha * 0.2})`
      ctx.fill()

      // Inner core
      ctx.beginPath()
      ctx.arc(currentCenterX, currentCenterY, 4, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 191, 255, 0.9)"
      ctx.shadowColor = "rgba(0, 191, 255, 1)"
      ctx.shadowBlur = 10
      ctx.fill()
      ctx.shadowBlur = 0

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

  return <canvas ref={canvasRef} className={className} />
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Quantum Labs: Research & Development
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Building the foundational infrastructure for next-generation quantum computing and distributed systems
        </p>

        {projectLayers.map((layer, layerIndex) => (
          <div key={layerIndex} className="mb-20">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-purple-400 mb-4 text-center md:text-left">{layer.title}</h3>
              <p className="text-gray-400 text-lg text-center md:text-left max-w-4xl mx-auto md:mx-0">
                {layer.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {layer.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
                >
                  {/* Quantum Canvas Animation */}
                  <div className="relative h-48 bg-slate-900/90 border-b border-purple-500/15 overflow-hidden">
                    <QuantumCanvas className="w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h4>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm"
                      >
                        <ExternalLink size={14} />
                        <span>Access Lab</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Live Feed Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-6 font-mono">
            📡 <span className="text-blue-400">Incoming Signals</span>
          </h3>
          <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-blue-500/20 max-w-4xl mx-auto">
            <div className="text-sm font-mono text-blue-300 space-y-2">
              <p className="animate-pulse">INIT: Coreweaver Quantum Framework (CQF) v1.2 online...</p>
              <p>SYNC: Lighthouse Node cluster 0x7a8b stable. Latency: 12ms.</p>
              <p>STATUS: All quantum labs operational. Network efficiency: 99.8%</p>
              <p>SECURE: Post-quantum cryptography handshake successful. QKD active.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
