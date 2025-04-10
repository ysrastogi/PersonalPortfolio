import { motion } from "framer-motion";

// Define the research flow items
const researchFlows = [
  {
    title: "Enterprise RAG Implementation Flow",
    description: "A comprehensive research-based approach for implementing Retrieval Augmented Generation (RAG) systems in enterprise environments.",
    steps: [
      "Knowledge Base Creation & Vectorization",
      "Query Understanding & Decomposition",
      "Optimized Retrieval Strategies",
      "Response Generation & Hallucination Mitigation",
      "Business-specific Evaluation Metrics"
    ],
    benefits: [
      "60% reduction in hallucinations compared to standard approaches",
      "Improved enterprise information retrieval accuracy",
      "Domain-specific knowledge integration"
    ],
    icon: "database",
    gradient: "from-indigo-600 to-blue-700"
  },
  {
    title: "AI Business Process Augmentation Framework",
    description: "Research-driven methodology for identifying, prioritizing, and implementing generative AI solutions within existing business workflows.",
    steps: [
      "Process Analysis & Opportunity Identification",
      "Solution Architecture Design",
      "Prototype Development & Testing",
      "Implementation & Integration",
      "Continuous Monitoring & Improvement"
    ],
    benefits: [
      "Clear ROI-focused implementation strategy",
      "Measurable business outcomes at each stage",
      "Reduced implementation timeline by 40%"
    ],
    icon: "cogs",
    gradient: "from-purple-600 to-primary"
  },
  {
    title: "Multi-Modal AI Content Pipeline",
    description: "An innovative approach to creating and maintaining consistent brand content across text, image, and video using multi-modal AI models.",
    steps: [
      "Brand Style Encoding & Embedding",
      "Cross-Modal Style Transfer",
      "Content Generation & Refinement",
      "Human-in-the-loop Quality Control",
      "Deployment & Analytics Integration"
    ],
    benefits: [
      "Brand consistency across all content formats",
      "70% reduction in content production time",
      "Scalable content creation with quality safeguards"
    ],
    icon: "images",
    gradient: "from-pink-600 to-rose-500"
  }
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900">Generative AI Research</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Innovative frameworks and methodologies I've developed for implementing Generative AI in business contexts
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {researchFlows.map((flow, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="md:flex">
                <div className={`md:flex-shrink-0 md:w-64 bg-gradient-to-br ${flow.gradient}`}>
                  <div className="h-48 md:h-full flex items-center justify-center p-6">
                    <div className="text-white text-center">
                      <motion.div 
                        className="bg-white/10 p-3 rounded-lg inline-block mb-3 relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {/* Animated element specific to research */}
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
                        <i className={`fas fa-${flow.icon} text-3xl`}></i>
                      </motion.div>
                      <h3 className="text-xl font-semibold">Research Flow</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:flex-1">
                  <h3 className="text-2xl font-semibold text-neutral-900">{flow.title}</h3>
                  <p className="mt-2 text-neutral-600">
                    {flow.description}
                  </p>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-neutral-900 flex items-center">
                        <i className="fas fa-flask text-primary mr-2"></i>
                        Research Process
                      </h4>
                      <ol className="mt-2 space-y-1 text-neutral-600 list-decimal list-inside">
                        {flow.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="pl-1">
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-neutral-900 flex items-center">
                        <i className="fas fa-chart-line text-green-600 mr-2"></i>
                        Business Outcomes
                      </h4>
                      <ul className="mt-2 space-y-1 text-neutral-600">
                        {flow.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-neutral-700">
            Interested in applying these research-based approaches to your business?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center mt-4 px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150"
          >
            <i className="fas fa-paper-plane mr-2"></i> 
            Discuss Research Opportunities
          </a>
        </motion.div>
      </div>
    </section>
  );
}