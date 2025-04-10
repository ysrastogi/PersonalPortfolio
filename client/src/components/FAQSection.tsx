import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What AI and data science services do you specialize in?",
      answer: "I specialize in Generative AI solutions, Large Language Models (LLMs), data science analytics, and machine learning implementations. My services include developing custom AI models, creating data analytics dashboards, building predictive models, and implementing AI-powered features for businesses. I use tools like Python, TensorFlow, PyTorch, and libraries such as Pandas and NumPy to deliver practical, commercially viable solutions that provide real business value."
    },
    {
      question: "How can data science benefit my business?",
      answer: "Data science can transform raw business data into clear, actionable insights that drive smarter decisions. I can help you build automated dashboards, forecast business trends, optimize processes, and enhance customer interactions. My practical approach uses your existing data to create measurable business impact through increased efficiency, reduced costs, and competitive advantages in today's data-driven market."
    },
    {
      question: "How can AI benefit my business?",
      answer: "AI can transform your business by automating routine tasks, generating insights from data, enhancing customer experiences, and creating new products or services. Specifically, generative AI can help with content creation, customer support, data analysis, personalization, and decision-making processes - all of which can lead to increased efficiency, reduced costs, and new revenue opportunities."
    },
    {
      question: "What's your approach to implementation projects?",
      answer: "My approach is business-first, not technology-first. I start by understanding your business challenges and goals, then design solutions that directly address those needs. Whether it's a data science dashboard or an AI model, I focus on creating practical implementations with measurable ROI, using the most appropriate technologies for your specific situation."
    },
    {
      question: "Do you work with open-source technologies?",
      answer: "Yes, I work extensively with both proprietary and open-source tools. For AI, I use Mistral, Llama, and other open-source LLMs. For data science, I utilize Python-based libraries like Pandas, NumPy, and Scikit-learn. Open-source technologies offer cost advantages, customization flexibility, and transparency, which can be particularly beneficial for businesses of all sizes."
    },
    {
      question: "What makes your solutions different?",
      answer: "My solutions stand out through their commercial viability and practical implementation. While many focus on theoretical capabilities, I emphasize building systems that integrate seamlessly with existing workflows and deliver measurable business outcomes. My background spanning both technical expertise and business applications allows me to bridge the gap between cutting-edge technology and practical business needs."
    }
  ];

  return (
    <section id="faq" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900">FAQ</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Common questions about AI and data science services
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-neutral-200">
                  <AccordionTrigger className="text-left font-medium text-neutral-900 py-4 hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-700 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <motion.div 
            className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-medium text-primary">Have more questions?</h3>
            <p className="mt-2 text-neutral-700">I'm happy to discuss your specific AI or data science needs and how I can help transform your business.</p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center mt-4 px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}