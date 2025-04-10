import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-neutral-200 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              {SOCIAL_LINKS.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-neutral-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
            <div className="mt-8 md:mt-0 md:order-1 text-center md:text-left">
              <p className="text-base text-neutral-500">&copy; {currentYear} Yash Rastogi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
