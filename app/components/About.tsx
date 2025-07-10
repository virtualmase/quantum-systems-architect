export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-purple-500/20 shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My work begins at the intersection of cryptography and quantum mechanics, focusing on the design and
                implementation of advanced infrastructure for the next generation of digital systems. As a systems
                architect, I construct resilient, quantum-native knowledge infrastructures.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I decode complex data signals and translate them into secure, scalable solutions, integrating
                traditional physical assets with cyber-technologies like networks and sensors. My mission is to build
                systems that learn, adapt, and collaborate within distributed networks.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Operating with radical transparency, I leverage on-chain data and quantum-inspired analytics to drive
                ecosystem growth, exploring unconventional architectures in the decentralized frontier.
              </p>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">9+</div>
                  <div className="text-gray-400 font-mono text-sm">Quantum Labs</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">3</div>
                  <div className="text-gray-400 font-mono text-sm">Architecture Layers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <p className="text-gray-300 font-mono">Quantum Systems Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
