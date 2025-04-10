import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/constants";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900">Professional Certifications</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Industry-recognized credentials that validate my expertise in AI, data science, and related fields
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((certification, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-200 transition-all duration-300 hover:shadow-md hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex p-6">
                <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg ${certification.bgColor} ${certification.logoColor}`}>
                  {certification.logo.startsWith('ibm') || certification.logo.startsWith('microsoft') ? (
                    <i className={`fab fa-${certification.logo} text-xl`}></i>
                  ) : (
                    <i className={`fas fa-${certification.logo} text-xl`}></i>
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-neutral-900">{certification.title}</h3>
                  <div className="mt-1 flex items-center text-sm text-neutral-600">
                    <span>{certification.issuer}</span>
                    <span className="mx-2 text-neutral-300">•</span>
                    <span>{certification.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-neutral-100 bg-neutral-50 px-6 py-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500 flex items-center">
                    <i className="fas fa-medal mr-2 text-amber-500"></i>
                    Verified Credential
                  </span>
                  <motion.button 
                    className="text-primary text-sm font-medium flex items-center"
                    whileHover={{ x: 4 }}
                  >
                    View certificate
                    <i className="fas fa-chevron-right ml-1 text-xs"></i>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-neutral-700 text-lg">
            Continuously expanding my knowledge through additional courses and certifications
          </p>
          <div className="mt-6 inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            <i className="fas fa-sync-alt mr-2 animate-spin-slow"></i> 
            Currently pursuing Advanced ML Certification
          </div>
        </motion.div>
      </div>
    </section>
  );
}