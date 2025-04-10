import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900">Projects</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Recent work and achievements in AI development and implementation.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-neutral-50 rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="md:flex">
                <div className={`md:flex-shrink-0 md:w-64 bg-gradient-to-br ${project.gradient}`}>
                  <div className="h-48 md:h-full flex items-center justify-center p-6">
                    <div className="text-white text-center">
                      <motion.div 
                        className="bg-white/10 p-3 rounded-lg inline-block mb-3 relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {/* Animated particles for AI-themed projects */}
                        {project.icon === 'robot' && (
                          <div className="absolute inset-0 -z-10">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute h-1 w-1 bg-white rounded-full opacity-70"
                                initial={{ 
                                  x: Math.random() * 60 - 30,
                                  y: Math.random() * 60 - 30,
                                  opacity: 0.3
                                }}
                                animate={{ 
                                  x: Math.random() * 60 - 30,
                                  y: Math.random() * 60 - 30,
                                  opacity: [0.3, 0.8, 0.3]
                                }}
                                transition={{ 
                                  duration: 2 + Math.random() * 2,
                                  repeat: Infinity,
                                  repeatType: "reverse"
                                }}
                              />
                            ))}
                          </div>
                        )}
                        <i className={`fas fa-${project.icon} text-3xl`}></i>
                      </motion.div>
                      <h3 className="text-xl font-semibold">{project.projectTitle}</h3>
                      {project.icon === 'robot' && (
                        <div className="mt-2 text-xs text-white/70">Powered by AI</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:flex-1">
                  <h3 className="text-2xl font-semibold text-neutral-900">{project.title}</h3>
                  <p className="mt-2 text-neutral-600">
                    {project.description}
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-neutral-900">Key Features:</h4>
                      <ul className="mt-2 space-y-1 text-neutral-600">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900">Technologies:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tech.bgColor} ${tech.textColor}`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
