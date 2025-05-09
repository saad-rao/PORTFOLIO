import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Load Tailwind CSS via CDN
const tailwindLink = document.createElement("link");
tailwindLink.rel = "stylesheet";
tailwindLink.href = "https://cdn.tailwindcss.com";
document.head.appendChild(tailwindLink);

// Add additional styles for animations and hover effects
const styleElement = document.createElement("style");
styleElement.textContent = `
  html {
    scroll-behavior: smooth;
  }
  .skill-tag {
    transition: all 0.3s ease;
  }
  .skill-tag:hover {
    transform: translateY(-5px);
  }
  .nav-link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #3B82F6;
    transition: width 0.3s;
  }
  .nav-link:hover::after {
    width: 100%;
  }
  .project-card {
    transition: all 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-10px);
  }
`;
document.head.appendChild(styleElement);

createRoot(document.getElementById("root")!).render(<App />);
