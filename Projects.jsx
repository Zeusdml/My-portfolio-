import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ExternalLink, Github, TrendingUp, Activity, BarChart3, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Nigerian Stock Market Performance Analysis",
      description: "Comprehensive analysis of historical stock market data for key Nigerian companies and indices, featuring predictive modeling for short-term price movements and investment risk assessment.",
      longDescription: "Developed a sophisticated analytical framework to understand market dynamics in the Nigerian stock exchange. The project involved data collection from multiple sources, extensive preprocessing, and the implementation of machine learning models to predict stock price movements.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      category: "Financial Analytics",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Seaborn", "SQL"],
      achievements: [
        "Achieved 70-75% accuracy in predicting daily stock price movements",
        "Identified top 3 performing sectors over 5 years",
        "Created interactive dashboard for portfolio monitoring",
        "Developed risk assessment framework for investment decisions"
      ],
      metrics: {
        accuracy: "75%",
        dataPoints: "50K+",
        sectors: "8",
        timeframe: "5 Years"
      },
      githubUrl: "https://github.com/johnoyekanmi/nigerian-stock-analysis",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Hospital Readmission Risk Prediction",
      description: "Machine learning model to identify patients at high risk of hospital readmission within 30 days, enabling proactive interventions to improve patient outcomes and reduce healthcare costs.",
      longDescription: "Built a comprehensive predictive model using Electronic Health Records data to identify high-risk patients. The solution incorporates multiple clinical and demographic factors to provide actionable insights for healthcare providers.",
      icon: <Activity className="w-8 h-8 text-red-500" />,
      category: "Healthcare Analytics",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "SHAP", "SQL"],
      achievements: [
        "Achieved AUC-ROC score of 0.82 for risk prediction",
        "Identified top 5 clinical risk factors",
        "Potential 10-15% reduction in readmission rates",
        "Developed risk scoring mechanism for EHR integration"
      ],
      metrics: {
        accuracy: "82%",
        patients: "10K+",
        features: "25",
        riskReduction: "15%"
      },
      githubUrl: "https://github.com/johnoyekanmi/hospital-readmission-prediction",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Sales Performance Dashboard",
      description: "Interactive dashboard analyzing sales performance across multiple regions and product categories, providing real-time insights for strategic decision-making.",
      longDescription: "Created a comprehensive sales analytics platform that aggregates data from multiple sources to provide actionable insights for sales teams and management.",
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      category: "Business Intelligence",
      technologies: ["Power BI", "SQL", "Excel", "Python"],
      achievements: [
        "Automated monthly reporting process",
        "Identified key performance indicators",
        "Improved sales forecasting accuracy by 20%",
        "Streamlined data collection from 5 different sources"
      ],
      metrics: {
        regions: "12",
        products: "200+",
        timeframe: "3 Years",
        automation: "90%"
      },
      githubUrl: "https://github.com/johnoyekanmi/sales-dashboard",
      liveUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Customer Segmentation Analysis",
      description: "Advanced customer segmentation using clustering algorithms to identify distinct customer groups and optimize marketing strategies.",
      longDescription: "Applied unsupervised machine learning techniques to segment customers based on purchasing behavior, demographics, and engagement patterns.",
      icon: <Database className="w-8 h-8 text-purple-500" />,
      category: "Customer Analytics",
      technologies: ["Python", "Scikit-learn", "K-means", "Pandas", "Seaborn"],
      achievements: [
        "Identified 5 distinct customer segments",
        "Improved marketing campaign effectiveness by 30%",
        "Reduced customer acquisition cost by 25%",
        "Developed automated segmentation pipeline"
      ],
      metrics: {
        customers: "25K+",
        segments: "5",
        improvement: "30%",
        costReduction: "25%"
      },
      githubUrl: "https://github.com/johnoyekanmi/customer-segmentation",
      liveUrl: "#",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing real-world data analysis projects that demonstrate my ability to 
            transform complex data into actionable business insights.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Info */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      {project.icon}
                      <Badge variant="secondary" className="ml-3">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="mr-2" size={16} />
                        View Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Project Metrics */}
                  <div className={`bg-gradient-to-br from-gray-50 to-gray-100 p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h4 className="font-semibold text-gray-900 mb-6 text-center">Project Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Other Projects</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      {project.icon}
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="mr-1" size={14} />
                        Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-1" size={14} />
                        Demo
                      </Button>
                    </div>
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
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work or discussing a potential collaboration?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

