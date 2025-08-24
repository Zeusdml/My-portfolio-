import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">John Oyekanmi</h3>
            <p className="text-gray-400 leading-relaxed">
              Data Analyst & Scientist passionate about transforming complex data 
              into actionable insights that drive strategic decision-making.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/johnoyekanmi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/johnoyekanmi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:oyekanmijohn@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  const element = document.getElementById('home')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('about')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('skills')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a 
                  href="mailto:oyekanmijohn@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  oyekanmijohn@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+2348168805278"
                  className="hover:text-white transition-colors"
                >
                  +234 816 880 5278
                </a>
              </p>
              <p>Lagos, Nigeria</p>
              <p className="text-sm">Available for remote work globally</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} John Oyekanmi. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of data</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>
              This website is built with React, Tailwind CSS, and Framer Motion. 
              Designed to be responsive, accessible, and performant.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

