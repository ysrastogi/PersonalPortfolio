import { motion } from "framer-motion";
import { ANALYTICS } from "@/lib/constants";

export default function AnalyticsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-neutral-50 rounded-xl shadow-sm p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-neutral-900 mb-8">
            Analytics <span className="text-sm font-normal text-neutral-500 ml-2">Private to you</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ANALYTICS.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="flex items-center">
                  <div className={`h-12 w-12 rounded-md ${item.bgColor} ${item.iconColor} flex items-center justify-center mr-4`}>
                    <i className={`fas fa-${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-neutral-900">{item.number}</h4>
                    <p className="text-neutral-600">{item.label}</p>
                  </div>
                </div>
                <p className="mt-4 text-neutral-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <motion.a 
              href="#" 
              className="inline-flex items-center text-primary font-medium"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Show all analytics
              <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
