
import React, { useState, useMemo } from 'react';
import ProjectsFilter from './projects/ProjectsFilter';
import ProjectsGrid from './projects/ProjectsGrid';
import { projects, categories } from './projects/ProjectsData';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

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
          
          <ProjectsFilter 
            categories={categories}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for this category.</p>
          </div>
        ) : (
          <ProjectsGrid 
            featuredProjects={featuredProjects}
            otherProjects={otherProjects}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
