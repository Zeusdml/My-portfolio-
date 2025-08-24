import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Calendar,
  Download
} from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "Email",
      value: "oyekanmijohn@gmail.com",
      link: "mailto:oyekanmijohn@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: "Phone",
      value: "+234 816 880 5278",
      link: "tel:+2348168805278",
      description: "Call me for urgent matters"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: "Location",
      value: "Lagos, Nigeria",
      link: "#",
      description: "Available for remote work globally"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600" />,
      title: "LinkedIn",
      value: "linkedin.com/in/johnoyekanmi",
      link: "https://www.linkedin.com/in/johnoyekanmi",
      description: "Connect with me professionally"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // This would typically handle form submission
    // For now, we'll just show an alert
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how 
            I can help your organization unlock the power of data-driven decision making.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborating on 
                exciting projects, or simply connecting with fellow data enthusiasts. 
                Whether you have a specific project in mind or just want to explore 
                possibilities, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={() => window.open(info.link, '_blank')}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-sm text-blue-600 mb-2 break-all">
                            {info.value}
                          </p>
                          <p className="text-xs text-gray-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-gray-200"
            >
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/johnoyekanmi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/johnoyekanmi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-gray-900">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download className="mr-2" size={16} />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open('https://calendly.com/johnoyekanmi', '_blank')}
                >
                  <Calendar className="mr-2" size={16} />
                  Schedule Call
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input 
                        id="firstName"
                        type="text" 
                        required 
                        placeholder="John"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName"
                        type="text" 
                        required 
                        placeholder="Doe"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email"
                      type="email" 
                      required 
                      placeholder="john.doe@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <Input 
                      id="company"
                      type="text" 
                      placeholder="Your Company"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input 
                      id="subject"
                      type="text" 
                      required 
                      placeholder="Project Discussion / Collaboration Opportunity"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message"
                      required 
                      rows={6}
                      placeholder="Tell me about your project, requirements, or how I can help you..."
                      className="w-full resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="mr-2" size={18} />
                      Send Message
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500">
                    I typically respond within 24 hours. For urgent matters, 
                    please call me directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Data Journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Whether you need help with data analysis, predictive modeling, or building 
            data-driven solutions, I'm here to help transform your data into actionable insights.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => window.open('mailto:oyekanmijohn@gmail.com', '_blank')}
          >
            Start a Conversation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

