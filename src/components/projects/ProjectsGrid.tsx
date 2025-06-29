import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import ProjectCard3D from '../ProjectCard3D';
import { Project } from './ProjectsData';

interface ProjectsGridProps {
  featuredProjects: Project[];
  otherProjects: Project[];
}

const ProjectsGrid = ({ featuredProjects, otherProjects }: ProjectsGridProps) => {
  return (
    <>
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
    </>
  );
};

export default ProjectsGrid;
