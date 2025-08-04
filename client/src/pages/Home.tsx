import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIAssistantButton from "@/components/AIAssistantButton";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  useEffect(() => {
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]');
      
      if (anchorElement) {
        e.preventDefault();
        const targetId = anchorElement.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    // Set page title and meta description
    document.title = 'Yash Rastogi | AI Engineer & Data Scientist';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Yash Rastogi - AI Engineer and Data Scientist specializing in Generative AI, LLMs, and data analytics. Delivering research-based frameworks and commercially viable solutions that transform businesses.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Yash Rastogi - AI Engineer and Data Scientist specializing in Generative AI, LLMs, and data analytics. Delivering research-based frameworks and commercially viable solutions that transform businesses.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-neutral-50 font-sans text-neutral-800">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ResearchSection />
      <ExperienceSection />
      <CertificationsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <AIAssistantButton />
    </div>
  );
}
