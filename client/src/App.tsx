import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample portfolio data - Replace with your information
const portfolioData = {
  name: "Saad Naseem",
  role: "Frontend Developer",
  bio: "I'm a passionate developer with expertise in building modern web applications. I specialize in React.js, Node.js, and responsive design principles. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
  projects: [
    { 
      id: 1,
      title: "E-Commerce Platform", 
      description: "A full-featured online store with product catalog, shopping cart, and payment integration.", 
      stack: ["React", "Node.js", "MongoDB", "Stripe"], 
      github: "#", 
      demo: "#",
      color: "blue"
    },
    { 
      id: 2,
      title: "Task Management App", 
      description: "A productivity tool for organizing tasks with drag-and-drop functionality and team collaboration features.", 
      stack: ["React", "Firebase", "Tailwind CSS", "Redux"], 
      github: "#", 
      demo: "#",
      color: "green"
    },
    { 
      id: 3,
      title: "Weather Dashboard", 
      description: "Real-time weather visualization with historical data and forecasting capabilities.", 
      stack: ["JavaScript", "Chart.js", "Weather API", "CSS Grid"], 
      github: "#", 
      demo: "#",
      color: "purple"
    }
  ],
  skills: [
    "JavaScript", "React", "Node.js", "Express", "MongoDB",
    "HTML5", "CSS3", "Tailwind CSS", "Git", "RESTful APIs",
    "TypeScript", "Redux", "Firebase", "Responsive Design"
  ],
  social: { 
    github: "https://github.com/yourusername", 
    linkedin: "https://linkedin.com/in/yourusername", 
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com" 
  },
};

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">{portfolioData.name.split(" ")[0]}<span className="text-dark">.</span></a>
        
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="nav-link text-dark hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <button className="md:hidden text-dark">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </motion.nav>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block">{portfolioData.name}</span>
          <span className="text-primary mt-2 block">{portfolioData.role}</span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Crafting digital experiences with clean code and creative solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a 
            href="#contact" 
            className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full inline-block font-medium transition-colors duration-300 mr-4"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full inline-block font-medium transition-colors duration-300"
          >
            View Projects
          </a>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="animate-bounce-slow">
            <i className="fas fa-chevron-down text-primary text-2xl"></i>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto overflow-hidden border-4 border-primary">
              <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14.25c4.142 0 7.5 3.358 7.5 7.5H4.5c0-4.142 3.358-7.5 7.5-7.5Z" />
                <path d="M12 13.5c2.9 0 5.25-2.35 5.25-5.25S14.9 3 12 3 6.75 5.35 6.75 8.25 9.1 13.5 12 13.5Z" />
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {portfolioData.bio}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-2 flex items-center">
                  <i className="fas fa-user-graduate text-primary mr-2"></i> Education
                </h4>
                <p className="text-gray-700">B.S. in Computer Science<br />University of Technology, 2018-2022</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 flex items-center">
                  <i className="fas fa-briefcase text-primary mr-2"></i> Experience
                </h4>
                <p className="text-gray-700">Software Developer<br />Tech Solutions Inc., 2022-Present</p>
              </div>
            </div>
            
            <a 
              href="#"
              className="inline-flex items-center text-primary font-medium"
            >
              Download Resume <i className="fas fa-download ml-2"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Color mapper for project cards
  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200"
  };
  
  return (
    <section id="projects" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card rounded-xl overflow-hidden border-2 ${colorMap[project.color]} shadow-sm hover:shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="24" height="24" />
                  <text x="50%" y="50%" fontSize="5" textAnchor="middle" dominantBaseline="middle" fill="#6B7280">
                    Project Preview
                  </text>
                </svg>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a href={project.github} className="text-gray-700 hover:text-primary transition-colors">
                    <i className="fab fa-github mr-1"></i> Code
                  </a>
                  <a href={project.demo} className="text-gray-700 hover:text-primary transition-colors">
                    <i className="fas fa-external-link-alt mr-1"></i> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#"
            className="inline-flex items-center text-primary font-medium"
          >
            See more projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Skills Section Component
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-tag bg-gray-100 hover:bg-primary hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Development Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-lightbulb text-primary text-xl"></i>
              </div>
              <h4 className="font-semibold mb-1">Planning</h4>
              <p className="text-sm text-gray-600">Requirements gathering and solution design</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-code text-secondary text-xl"></i>
              </div>
              <h4 className="font-semibold mb-1">Development</h4>
              <p className="text-sm text-gray-600">Clean, efficient, and maintainable code</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-check-circle text-accent text-xl"></i>
              </div>
              <h4 className="font-semibold mb-1">Testing</h4>
              <p className="text-sm text-gray-600">Thorough testing and quality assurance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              However, if you have other request or question, don't hesitate to use the form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href={`mailto:${portfolioData.social.email}`} className="text-gray-600 hover:text-primary transition-colors">
                    {portfolioData.social.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">San Francisco, California</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fas fa-globe text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Social Profiles</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href={portfolioData.social.github} className="text-gray-600 hover:text-primary transition-colors">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href={portfolioData.social.linkedin} className="text-gray-600 hover:text-primary transition-colors">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href={portfolioData.social.twitter} className="text-gray-600 hover:text-primary transition-colors">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">{portfolioData.name.split(" ")[0]}<span className="text-primary">.</span></a>
            <p className="text-gray-400 mt-2">Building digital experiences that matter.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href={portfolioData.social.github} className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href={portfolioData.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href={portfolioData.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="bg-light text-dark font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
