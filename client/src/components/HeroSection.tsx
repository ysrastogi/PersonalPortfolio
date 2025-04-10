import { motion } from "framer-motion";
import { SKILLS, SOCIAL_LINKS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="h-52 w-full md:h-full md:w-72 bg-gradient-to-r from-primary to-purple-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="absolute w-full h-full opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M47.7,-57.2C59.1,-45.9,64.2,-27.9,64.5,-10.8C64.8,6.4,60.3,22.6,50.4,33.8C40.4,45,25,51.1,7.8,56.6C-9.4,62.2,-28.4,67,-43.6,60.1C-58.8,53.3,-70.1,34.7,-70.8,16.1C-71.5,-2.5,-61.7,-21.1,-49.3,-32.5C-36.9,-43.9,-22,-48,-5.6,-53.1C10.7,-58.2,36.3,-68.4,47.7,-57.2Z" transform="translate(100 100)" />
                  </svg>
                  {/* AI Neural Network Animation */}
                  <div className="absolute inset-0 w-full h-full opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <g className="neural-network">
                        {/* Nodes */}
                        <circle className="animate-pulse" cx="40" cy="40" r="3" fill="white" />
                        <circle className="animate-pulse" cx="40" cy="80" r="3" fill="white" />
                        <circle className="animate-pulse" cx="40" cy="120" r="3" fill="white" />
                        <circle className="animate-pulse" cx="40" cy="160" r="3" fill="white" />
                        
                        <circle className="animate-pulse" cx="100" cy="60" r="3" fill="white" />
                        <circle className="animate-pulse" cx="100" cy="100" r="3" fill="white" />
                        <circle className="animate-pulse" cx="100" cy="140" r="3" fill="white" />
                        
                        <circle className="animate-pulse" cx="160" cy="100" r="3" fill="white" />
                        
                        {/* Connections */}
                        <line x1="40" y1="40" x2="100" y2="60" stroke="white" strokeWidth="0.5" />
                        <line x1="40" y1="40" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
                        <line x1="40" y1="40" x2="100" y2="140" stroke="white" strokeWidth="0.5" />
                        
                        <line x1="40" y1="80" x2="100" y2="60" stroke="white" strokeWidth="0.5" />
                        <line x1="40" y1="80" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
                        <line x1="40" y1="80" x2="100" y2="140" stroke="white" strokeWidth="0.5" />
                        
                        <line x1="40" y1="120" x2="100" y2="60" stroke="white" strokeWidth="0.5" />
                        <line x1="40" y1="120" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
                        <line x1="40" y1="120" x2="100" y2="140" stroke="white" strokeWidth="0.5" />
                        
                        <line x1="40" y1="160" x2="100" y2="60" stroke="white" strokeWidth="0.5" />
                        <line x1="40" y1="160" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
                        <line x1="40" y1="160" x2="100" y2="140" stroke="white" strokeWidth="0.5" />
                        
                        <line x1="100" y1="60" x2="160" y2="100" stroke="white" strokeWidth="0.5" />
                        <line x1="100" y1="100" x2="160" y2="100" stroke="white" strokeWidth="0.5" />
                        <line x1="100" y1="140" x2="160" y2="100" stroke="white" strokeWidth="0.5" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute text-white text-center px-6 z-10">
                    <h2 className="text-2xl font-bold">AI Engineer</h2>
                    <p className="text-purple-200 mt-2">Building the future</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-6 md:p-10 md:flex-1">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">Yash Rastogi</h1>
                  <p className="mt-2 text-xl text-neutral-700">AI Engineer focused on commercially viable AI products</p>
                </div>
                {/* Profile image - hidden on mobile */}
                <div className="hidden md:block">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary to-purple-900 flex items-center justify-center text-white">
                    <span className="text-3xl">YR</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Specializing in Generative AI, LLMs (GPT-4, Mistral, Llama2), NLP, Lang chain, Vector DB and containerization for seamless deployment. Bridging the gap between theoretical AI concepts and practical applications.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <motion.span 
                    key={index}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${skill.bgColor} ${skill.textColor}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <i className={`fas fa-${skill.icon} mr-1`}></i> {skill.name}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150"
                  >
                    Let's Connect
                  </a>
                  <a 
                    href="#projects" 
                    className="inline-flex items-center justify-center px-5 py-2 border border-gray-300 text-base font-medium rounded-md text-neutral-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150"
                  >
                    View Projects
                  </a>
                </div>
                <div className="hidden sm:flex space-x-3">
                  {SOCIAL_LINKS.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="text-neutral-600 hover:text-primary transition-colors" 
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fab fa-${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
