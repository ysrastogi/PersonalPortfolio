import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = [
    "Generative AI & LLMs",
    "Data Science & Analytics",
    "Natural Language Processing",
    "Machine Learning Engineering",
    "Python (Pandas, NumPy, Scikit-learn)",
    "TensorFlow & PyTorch",
    "SQL & Database Management",
    "Data Visualization & Dashboards",
    "Predictive Modeling",
    "Data Engineering & Pipelines",
    "AI Security & Governance",
    "Problem Solving"
  ];

  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900">About Me</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Hello! I'm Yash, an AI Engineer focused on building commercially viable AI products.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-neutral-50 rounded-xl shadow-sm p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="prose max-w-none">
            <p>
              My expertise spans both <strong className="text-primary">Data Science</strong> and <strong className="text-primary">Generative AI</strong>. I work with <strong className="text-primary">Python</strong>, <strong className="text-primary">TensorFlow</strong>, <strong className="text-primary">PyTorch</strong>, and libraries like <strong className="text-primary">Pandas</strong> and <strong className="text-primary">NumPy</strong> to turn raw data into actionable insights. In the AI space, I specialize in <strong className="text-primary">LLMs</strong> (GPT-4, Mistral, Llama2), <strong className="text-primary">NLP</strong>, <strong className="text-primary">Lang chain</strong>, and <strong className="text-primary">Vector DB</strong> implementation.
            </p>
            <p className="mt-4">
              I transform business data into clear insights through dashboards, forecasting models, and automated analytics systems. On the AI side, I build solutions ranging from conversational agents to content generation systems. My approach integrates data science and AI to create commercially viable products with measurable ROI.
            </p>
            <p className="mt-4">
              With experience in finance and customer support, I bridge the gap between technical capabilities and practical business needs. Whether you need data-driven insights or cutting-edge AI implementation, I can help transform your business processes and decision-making capabilities.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-neutral-900">Key Skills:</h3>
              <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {skills.map((skill, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
