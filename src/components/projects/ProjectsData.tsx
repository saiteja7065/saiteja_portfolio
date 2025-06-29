
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
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

export const categories = ['All', 'AI/ML', 'Full Stack', 'Frontend'];
