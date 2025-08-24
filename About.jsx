import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { GraduationCap, Briefcase, TrendingUp, Heart } from 'lucide-react'

const About = () => {
  const experiences = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Medical Physiologist",
      description: "Conducted rigorous scientific research and analyzed complex biological data, developing strong analytical and critical thinking skills."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Corporate Sales Executive",
      description: "Drove revenue growth through market analysis and client relationship management, consistently exceeding sales targets."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      title: "Project/Administrative Manager",
      description: "Managed complex projects and streamlined operations, improving efficiency and ensuring timely delivery of objectives."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
      title: "Data Analyst/Scientist",
      description: "Currently applying advanced analytical techniques and machine learning to extract insights from complex datasets."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A multidisciplinary professional with a unique journey from medical physiology 
            to data science, bringing scientific rigor and business acumen to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              My career began in the fascinating world of medical physiology, where I developed 
              a deep appreciation for evidence-based analysis and scientific methodology. This 
              foundation instilled in me a rigorous approach to data collection, interpretation, 
              and problem-solving that continues to guide my work today.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Transitioning into corporate sales, I discovered the power of data-driven insights 
              in understanding market trends and client needs. This experience taught me to 
              translate complex information into actionable business strategies, a skill that 
              proves invaluable in my current data science endeavors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a project manager, I honed my organizational skills and learned to optimize 
              processes for maximum efficiency. Now, as a data analyst and scientist, I combine 
              all these experiences to transform raw data into meaningful insights that drive 
              strategic decision-making.
            </p>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education & Background</h3>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Bachelor of Science in Medical Physiology
                </h4>
                <p className="text-gray-600 mb-2">University of Ibadan, Nigeria</p>
                <p className="text-sm text-gray-500">
                  Graduated 2015 • Developed strong analytical and research skills
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">Analytical Skills</h5>
                  <p className="text-sm text-blue-700">Statistical analysis, data interpretation, research methodology</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-900 mb-2">Business Acumen</h5>
                  <p className="text-sm text-green-700">Market analysis, client relations, strategic thinking</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-900 mb-2">Project Management</h5>
                  <p className="text-sm text-purple-700">Process optimization, team coordination, efficiency improvement</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-medium text-orange-900 mb-2">Technical Expertise</h5>
                  <p className="text-sm text-orange-700">Python, SQL, machine learning, data visualization</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Professional Experience</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gray-100 rounded-full">
                        {exp.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">
                      {exp.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Transform Data into Insights
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            With my unique blend of scientific rigor, business understanding, and technical expertise, 
            I'm passionate about helping organizations unlock the power of their data.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About

