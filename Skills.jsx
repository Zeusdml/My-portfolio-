import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Users, 
  Target,
  TrendingUp,
  Lightbulb
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      skills: [
        { name: "Python", level: 90, description: "Pandas, NumPy, Scikit-learn, TensorFlow" },
        { name: "SQL", level: 85, description: "Complex queries, database design, optimization" },
        { name: "Excel", level: 95, description: "Advanced formulas, pivot tables, VBA" },
        { name: "Power BI", level: 80, description: "Dashboard creation, DAX, data modeling" },
        { name: "Git/GitHub", level: 75, description: "Version control, collaboration" }
      ],
      color: "blue"
    },
    {
      title: "Data Analysis & Statistics",
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      skills: [
        { name: "Statistical Analysis", level: 90, description: "Hypothesis testing, regression analysis" },
        { name: "Data Visualization", level: 85, description: "Matplotlib, Seaborn, interactive dashboards" },
        { name: "Exploratory Data Analysis", level: 95, description: "Pattern recognition, data profiling" },
        { name: "A/B Testing", level: 80, description: "Experimental design, statistical significance" },
        { name: "Time Series Analysis", level: 75, description: "Forecasting, trend analysis" }
      ],
      color: "green"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      skills: [
        { name: "Supervised Learning", level: 85, description: "Classification, regression algorithms" },
        { name: "Unsupervised Learning", level: 80, description: "Clustering, dimensionality reduction" },
        { name: "Feature Engineering", level: 85, description: "Feature selection, transformation" },
        { name: "Model Evaluation", level: 90, description: "Cross-validation, performance metrics" },
        { name: "Deep Learning", level: 70, description: "Neural networks, TensorFlow/Keras" }
      ],
      color: "purple"
    },
    {
      title: "Domain Knowledge",
      icon: <Database className="w-6 h-6 text-orange-500" />,
      skills: [
        { name: "Healthcare Analytics", level: 85, description: "EHR data, clinical outcomes analysis" },
        { name: "Financial Analysis", level: 80, description: "Stock market, risk assessment" },
        { name: "Business Intelligence", level: 85, description: "KPI development, reporting" },
        { name: "Research Methodology", level: 90, description: "Scientific approach, data integrity" },
        { name: "Market Analysis", level: 80, description: "Trend identification, competitive analysis" }
      ],
      color: "orange"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6 text-red-500" />,
      skills: [
        { name: "Problem Solving", level: 95, description: "Analytical thinking, creative solutions" },
        { name: "Communication", level: 90, description: "Technical writing, stakeholder presentations" },
        { name: "Project Management", level: 85, description: "Planning, execution, team coordination" },
        { name: "Adaptability", level: 90, description: "Learning new technologies, changing requirements" },
        { name: "Critical Thinking", level: 95, description: "Data interpretation, decision making" }
      ],
      color: "red"
    },
    {
      title: "Business Skills",
      icon: <Target className="w-6 h-6 text-indigo-500" />,
      skills: [
        { name: "Strategic Thinking", level: 85, description: "Long-term planning, goal alignment" },
        { name: "Client Relations", level: 90, description: "Relationship building, needs assessment" },
        { name: "Process Optimization", level: 85, description: "Efficiency improvement, workflow design" },
        { name: "Data-Driven Decision Making", level: 95, description: "Evidence-based recommendations" },
        { name: "Cross-functional Collaboration", level: 90, description: "Team integration, communication" }
      ],
      color: "indigo"
    }
  ]

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: type === 'bg' ? 'bg-blue-500' : 'text-blue-500',
      green: type === 'bg' ? 'bg-green-500' : 'text-green-500',
      purple: type === 'bg' ? 'bg-purple-500' : 'text-purple-500',
      orange: type === 'bg' ? 'bg-orange-500' : 'text-orange-500',
      red: type === 'bg' ? 'bg-red-500' : 'text-red-500',
      indigo: type === 'bg' ? 'bg-indigo-500' : 'text-indigo-500'
    }
    return colorMap[color] || 'bg-gray-500'
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set combining technical proficiency with domain expertise 
            and strong business acumen, developed through diverse professional experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {category.icon}
                    <CardTitle className="ml-3 text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-gray-900">{skill.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${getColorClasses(category.color)}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Strengths Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Strengths</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Analytical Excellence</h4>
              <p className="text-gray-600 text-sm">
                Strong foundation in statistical analysis and data interpretation, 
                with the ability to extract meaningful insights from complex datasets.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cross-Functional Expertise</h4>
              <p className="text-gray-600 text-sm">
                Unique blend of scientific rigor, business acumen, and technical skills 
                gained through diverse professional experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation & Adaptability</h4>
              <p className="text-gray-600 text-sm">
                Proven ability to learn new technologies quickly and apply innovative 
                approaches to solve complex business problems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Continuous Learning</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Committed to staying current with the latest developments in data science, 
            machine learning, and business analytics through continuous learning and 
            professional development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Science Specialization",
              "Machine Learning Fundamentals",
              "Advanced SQL",
              "Python for Data Analysis",
              "Statistical Methods",
              "Business Intelligence"
            ].map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {cert}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

