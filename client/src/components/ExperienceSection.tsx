import { motion } from "framer-motion";
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900">Experience & Education</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Work Experience</h3>
            <div className="space-y-8">
              {WORK_EXPERIENCE.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-purple-100 rounded-lg overflow-hidden mr-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-700 text-white flex items-center justify-center rounded-full">
                        <span className="font-semibold">{exp.company.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-neutral-900">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-neutral-600 mt-1">{exp.period}</p>
                      {exp.location && <p className="text-neutral-600 mt-1">{exp.location}</p>}
                      
                      {exp.skills.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-sm font-medium text-neutral-900">Skills:</h5>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Education & Certifications</h3>
            <div className="space-y-8">
              {/* Education */}
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-blue-100 rounded-lg overflow-hidden mr-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center rounded-full">
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-neutral-900">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-neutral-600 mt-1">{edu.period}</p>
                      <p className="text-neutral-600 mt-1">{edu.activities}</p>
                      
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-neutral-900">Key Skills:</h5>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Certifications */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-neutral-900 mb-4">Certifications</h4>
                <div className="space-y-4">
                  {CERTIFICATIONS.map((cert, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <div className={`flex-shrink-0 h-10 w-10 flex items-center justify-center ${cert.bgColor} rounded-lg mr-3`}>
                        <i className={`fab fa-${cert.logo} ${cert.logoColor}`}></i>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-base font-medium text-neutral-900">{cert.title}</h5>
                        <p className="text-neutral-600 text-sm">{cert.issuer} · {cert.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
