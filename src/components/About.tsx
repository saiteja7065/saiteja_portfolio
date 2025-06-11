
import React, { useState } from 'react';
import { Code, Database, Globe, Cpu, Award, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const About = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Netlify'],
      icon: <Code className="w-5 h-5" />
    }
  ];

  const education = [
    {
      institution: 'Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology',
      degree: 'Bachelor of Technology',
      duration: '2020 - 2024',
      description: 'Computer Science and Engineering',
      grade: 'CGPA: 8.2/10'
    },
    {
      institution: 'NxtWave',
      degree: 'Full Stack Development',
      duration: '2023 - 2024',
      description: 'Comprehensive full-stack development program covering modern web technologies'
    }
  ];

  const achievements = [
    {
      title: 'Teaching Assistant Excellence',
      description: 'Resolved 306 discussions and assisted 264 learners at NxtWave',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'CEO Recognition',
      description: 'Recognized by NxtWave CEO for outstanding performance and dedication',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Tech Event Participation',
      description: 'Active participant in various tech events and coding challenges',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full-stack developer with a strong foundation in modern web technologies 
            and artificial intelligence. Currently serving as a Teaching Assistant at NxtWave, 
            where I help aspiring developers master cutting-edge technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="skills" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-8">
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 border border-border">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-3 mt-1">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                        <p className="text-primary font-medium mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-2">{edu.duration}</p>
                        <p className="text-muted-foreground mb-2">{edu.description}</p>
                        {edu.grade && (
                          <p className="text-sm font-medium text-foreground">{edu.grade}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors group">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
