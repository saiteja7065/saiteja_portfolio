import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Sparkles, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProjectCard3D from './ProjectCard3D';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'AI Healthcare Solutions',
      description: 'Intelligent healthcare management system with predictive analytics and patient monitoring.',
      technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/saiteja7065/MedicalRecordsSummaryProject.git',
      featured: true
    },
    {
      title: 'Fullstack Blog Application',
      description: 'Complete blogging platform with authentication, rich text editor, and comment system.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'JWT'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/saiteja7065/Blog-Application.git',
      featured: true
    },
    {
      title: 'AI Document Search',
      description: 'Smart document search system using natural language processing and vector embeddings.',
      technologies: ['Python', 'OpenAI API', 'Streamlit', 'FAISS'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/saiteja7065/AI_Document_Search.git',
      featured: true
    },
    {
      title: 'House Price Prediction',
      description: 'Machine learning model to predict house prices based on various features and market trends.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      category: 'AI/ML',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Food Munch',
      description: 'Restaurant discovery platform with reviews, ratings, and online ordering system.',
      technologies: ['React', 'CSS', 'JavaScript', 'API Integration'],
      category: 'Frontend',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'VR Experience Page',
      description: 'Immersive virtual reality landing page with interactive 3D elements and animations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
      category: 'Frontend',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'AI/ML', 'Full Stack', 'Frontend'];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projects;
    return projects.filter(project => project.category === selectedFilter);
  }, [selectedFilter]);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse transform-gpu animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse transform-gpu animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 transform-gpu hover:scale-105 transition-transform duration-300">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 transform-gpu hover:translate-y-1 transition-transform duration-300">
            A showcase of my technical expertise through innovative web applications and AI solutions.
          </p>
          
          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(category)}
                className="transition-all duration-300 transform-gpu hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                <Filter className="w-3 h-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Projects with 3D Cards */}
        {featuredProjects.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard3D
                key={index}
                {...project}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Other Projects with 3D Cards */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center transform-gpu hover:scale-105 transition-transform duration-300">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard3D
                  key={index}
                  {...project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for this category.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.open('https://github.com/saiteja7065', '_blank')}
            className="transform-gpu hover:scale-110 hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
