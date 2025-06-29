
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface ProjectsFilterProps {
  categories: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectsFilter = ({ categories, selectedFilter, onFilterChange }: ProjectsFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedFilter === category ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(category)}
          className="transition-all duration-300 transform-gpu hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg"
        >
          <Filter className="w-3 h-3 mr-1" />
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ProjectsFilter;
