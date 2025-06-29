
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Sparkles } from 'lucide-react';

interface ProjectCard3DProps {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  featured: boolean;
  index: number;
}

const ProjectCard3D = ({ title, description, technologies, category, githubUrl, featured, index }: ProjectCard3DProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-500 transform-gpu ${
        isHovered ? 'scale-105 rotate-1 shadow-2xl' : 'scale-100 rotate-0 shadow-lg'
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${isHovered ? -5 : 0}deg) rotateY(${isHovered ? 5 : 0}deg)`,
        transformStyle: 'preserve-3d',
        animationDelay: `${index * 0.1}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Background Effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Animated Border */}
      <div 
        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          isHovered ? 'bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 p-[2px]' : ''
        }`}
      >
        <div className="w-full h-full bg-background rounded-lg" />
      </div>

      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className={`flex items-center space-x-2 transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`}>
            <span>{title}</span>
            {featured && <Sparkles className="w-4 h-4 text-primary animate-pulse" />}
          </CardTitle>
          <Badge 
            variant={featured ? "default" : "secondary"} 
            className={`text-xs transition-transform duration-300 ${
              isHovered ? 'scale-110' : ''
            }`}
          >
            {category}
          </Badge>
        </div>
        <CardDescription className={`transition-transform duration-300 ${
          isHovered ? 'translate-y-1' : ''
        }`}>
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <Badge 
              key={techIndex} 
              variant={featured ? "secondary" : "outline"}
              className={`transition-all duration-300 ${
                isHovered ? 'transform scale-105 rotate-1' : ''
              }`}
              style={{ animationDelay: `${techIndex * 0.05}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="relative z-10">
        <Button 
          variant="outline" 
          size="sm" 
          className={`w-full transition-all duration-300 ${
            isHovered ? 'bg-primary text-primary-foreground border-primary' : ''
          }`}
          onClick={() => window.open(githubUrl, '_blank')}
        >
          <Github className={`w-4 h-4 mr-2 transition-transform duration-300 ${
            isHovered ? 'rotate-12' : ''
          }`} />
          View on GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard3D;
