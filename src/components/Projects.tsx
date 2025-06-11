import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'AI Healthcare Solutions',
      description: 'Intelligent healthcare management system with predictive analytics and patient monitoring.',
      technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Fullstack Blog Application',
      description: 'Complete blogging platform with authentication, rich text editor, and comment system.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'JWT'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'AI Document Search',
      description: 'Smart document search system using natural language processing and vector embeddings.',
      technologies: ['Python', 'OpenAI API', 'Streamlit', 'FAISS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'House Price Prediction',
      description: 'Machine learning model to predict house prices based on various features and market trends.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Food Munch',
      description: 'Restaurant discovery platform with reviews, ratings, and online ordering system.',
      technologies: ['React', 'CSS', 'JavaScript', 'API Integration'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'VR Experience Page',
      description: 'Immersive virtual reality landing page with interactive 3D elements and animations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise through innovative web applications and AI solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <span>{project.title}</span>
                    <Sparkles className="w-4 h-4 text-primary" />
                  </CardTitle>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
