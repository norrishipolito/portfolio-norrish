import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/norrishipolito" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/norrishipolito",
  },
  { name: "Email", icon: Mail, href: "mailto:norrishipolito@gmail.com" },
];

const NavigationFooter = () => {
  return (
    <footer className="text-text-primary py-10 text-center z-10">
      <div className="container mx-auto">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">NH</h2>
          <div className="flex justify-center space-x-6 text-sm text-text-muted">
            <a href="#" className="hover:text-white">
              Status
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
            <a href="#" className="hover:text-white">
              Docs
            </a>
            <a href="#" className="hover:text-white">
              API
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-6 text-text-muted mb-4">
          {contactLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Contact via ${link.name}`}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        <p className="text-sm text-text-secondary">
          &copy; 2025 Norris Hipolito Jr.
        </p>
      </div>
    </footer>
  );
};

export default NavigationFooter;
