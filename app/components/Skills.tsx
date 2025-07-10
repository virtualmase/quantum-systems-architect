const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Language" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Language" },
  { name: "PostgreSQL", level: 82, category: "Database" },
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "Docker", level: 78, category: "DevOps" },
]

const categories = ["Frontend", "Backend", "Language", "Database", "Cloud", "DevOps"]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
