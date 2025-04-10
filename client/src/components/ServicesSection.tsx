import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900">Services</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Specialized AI engineering and consulting services to help your business innovate and grow.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={service.icon === 'robot' ? { 
                scale: 1.02,
                transition: { duration: 0.2 }
              } : {}}
            >
              <div className="p-6">
                {service.icon === 'robot' ? (
                  <motion.div 
                    className={`h-12 w-12 rounded-md ${service.bgColor} ${service.iconColor} flex items-center justify-center mb-4 relative overflow-hidden`}
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      borderRadius: ["16%", "30%", "16%"]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  >
                    <motion.i 
                      className={`fas fa-${service.icon} text-xl`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.i>
                    <div className="absolute inset-0 bg-primary rounded-md opacity-10 animate-ping"></div>
                  </motion.div>
                ) : (
                  <div className={`h-12 w-12 rounded-md ${service.bgColor} ${service.iconColor} flex items-center justify-center mb-4`}>
                    <i className={`fas fa-${service.icon} text-xl`}></i>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600 mb-4">
                  {service.description}
                </p>
                <div className="mt-2">
                  <span className="text-primary font-medium">
                    {service.technologies.includes(':') ? service.technologies.split(':')[0] : 'Technologies:'}{' '}
                  </span>
                  <span className="text-neutral-600">
                    {service.technologies.includes(':') ? service.technologies.split(':')[1].trim() : service.technologies}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
