
import React, { useState, useMemo, useEffect } from 'react';
import ProjectsFilter from './projects/ProjectsFilter';
import ProjectsGrid from './projects/ProjectsGrid';
import { projects, categories } from './projects/ProjectsData';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projects;
    return projects.filter(project => project.category === selectedFilter);
  }, [selectedFilter]);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse transform-gpu animate-bounce animate-glow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse transform-gpu animate-bounce animate-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse transform-gpu animate-wobble" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-page-load' : 'opacity-0'}`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transform-gpu transition-all duration-700 ${isVisible ? 'animate-slide-down' : 'opacity-0 -translate-y-10'} hover:scale-105 hover-tilt transition-transform duration-300 animate-glow`}>
            Featured Projects
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-8 transform-gpu transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'} animate-stagger-2 hover:translate-y-1 hover-lift transition-transform duration-300`}>
            A showcase of my technical expertise through innovative web applications and AI solutions.
          </p>
          
          <div className={`transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'} animate-stagger-3`}>
            <ProjectsFilter 
              categories={categories}
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className={`text-center py-12 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'} animate-stagger-4`}>
            <p className="text-muted-foreground">No projects found for this category.</p>
          </div>
        ) : (
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'} animate-stagger-4`}>
            <ProjectsGrid 
              featuredProjects={featuredProjects}
              otherProjects={otherProjects}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
