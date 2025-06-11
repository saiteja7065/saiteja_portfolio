
import React, { useState } from 'react';
import { Code, Database, Globe, Cpu, Award, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'React.js', level: 85, icon: <Globe className="w-5 h-5" /> },
    { name: 'Node.js', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'Python', level: 85, icon: <Cpu className="w-5 h-5" /> },
    { name: 'SQL', level: 75, icon: <Database className="w-5 h-5" /> },
    { name: 'Machine Learning', level: 70, icon: <Cpu className="w-5 h-5" /> },
  ];

  const education = [
    {
      institution: 'Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology',
      degree: 'Bachelor of Technology',
      duration: '2020 - 2024',
      description: 'Computer Science and Engineering'
    },
    {
      institution: 'NxtWave',
      degree: 'Full Stack Development',
      duration: '2023 - 2024',
      description: 'Comprehensive full-stack development program'
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
      description: 'Recognized by NxtWave CEO for outstanding performance',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Tech Event Participation',
      description: 'Active participant in various tech events and challenges',
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
            and artificial intelligence. Currently serving as a Teaching Assistant at NxtWave.
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
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {skill.icon}
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6">Technologies & Tools</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['React', 'Express.js', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'TensorFlow'].map((tech, index) => (
                      <div key={index} className="bg-background rounded-lg p-3 text-center border border-border hover:border-primary transition-colors">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-8">
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 border border-border">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                        <p className="text-primary font-medium mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-2">{edu.duration}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors">
                    <div className="text-primary mb-4">
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
