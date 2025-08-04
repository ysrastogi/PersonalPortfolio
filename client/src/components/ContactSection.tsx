import { useState } from "react";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactSection() {
  const [state, handleSubmit] = useFormspree("xvgqwzkk");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Interested in working together or have questions about my services? Let's connect!
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3 bg-primary p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center mr-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-white/80">Email</p>
                    <p className="font-medium">ysrastogi19@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center mr-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="text-white/80">Location</p>
                    <p className="font-medium">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center mr-3">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <p className="text-white/80">Social Profiles</p>
                    <div className="flex space-x-3 mt-2">
                      {SOCIAL_LINKS.map((social, index) => (
                        <a 
                          key={index}
                          href={social.href} 
                          className="text-white hover:text-purple-200 transition-colors" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <i className={`fab fa-${social.icon}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 md:flex-1">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Send Me a Message</h3>
              {state.succeeded ? (
                <div className="text-green-600 text-center font-semibold py-8">Thank you for reaching out! I'll get back to you soon.</div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="name">Name</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="email">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="subject">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="message">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can I help you?"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
              <div className="mt-4 text-center">
                <p className="text-neutral-600">Or schedule a meeting directly</p>
                <a 
                  href="https://cal.com/yash-rastogi-wbrk1g/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-2 px-5 py-2 border border-gray-300 text-base font-medium rounded-md text-neutral-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150"
                >
                  <i className="far fa-calendar-alt mr-2"></i> Schedule a Meeting
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
