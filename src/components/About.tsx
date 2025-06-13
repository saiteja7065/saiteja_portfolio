
import React, { useState } from 'react';
import { Code, Database, Globe, Cpu, Award, GraduationCap, Target, Heart, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const About = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      icon: <Globe className="w-4 h-4 md:w-5 md:h-5" />
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Python', 'RESTful APIs', 'GraphQL'],
      icon: <Database className="w-4 h-4 md:w-5 md:h-5" />
    },
    {
      title: 'Databases & Cloud',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'AWS', 'Firebase'],
      icon: <Database className="w-4 h-4 md:w-5 md:h-5" />
    },
    {
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenAI API'],
      icon: <Cpu className="w-4 h-4 md:w-5 md:h-5" />
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Netlify', 'VS Code'],
      icon: <Code className="w-4 h-4 md:w-5 md:h-5" />
    }
  ];

  const education = [
    {
      institution: 'Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      duration: '2020 - 2024',
      description: 'Specialized in software development, algorithms, and computer systems',
      grade: 'CGPA: 8.2/10',
      highlights: ['Best Project Award for AI Healthcare Solution', 'Active participation in coding competitions']
    },
    {
      institution: 'NxtWave',
      degree: 'Full Stack Development Certification',
      duration: '2023 - 2024',
      description: 'Comprehensive program covering modern web development technologies and industry practices',
      highlights: ['Top 5% performer in the program', 'Recognized as Outstanding Teaching Assistant']
    }
  ];

  const achievements = [
    {
      title: 'Teaching Assistant Excellence',
      description: 'Resolved 306 discussions and assisted 264 learners at NxtWave with 98% satisfaction rate',
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      title: 'CEO Recognition',
      description: 'Personally recognized by NxtWave CEO for outstanding performance and dedication to helping others',
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      title: 'Technical Leadership',
      description: 'Led multiple project teams and mentored junior developers in best practices',
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      title: 'Community Contribution',
      description: 'Active contributor to open source projects and tech community events',
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />
    }
  ];

  const personalValues = [
    {
      title: 'Continuous Learning',
      description: 'Always eager to learn new technologies and improve existing skills'
    },
    {
      title: 'Problem Solving',
      description: 'Passionate about finding elegant solutions to complex technical challenges'
    },
    {
      title: 'Knowledge Sharing',
      description: 'Committed to helping others grow through mentoring and teaching'
    },
    {
      title: 'Innovation',
      description: 'Focused on building cutting-edge applications that make a difference'
    }
  ];

  const technicalCertifications = [
    {
      title: 'Full Stack Development',
      issuer: 'NxtWave',
      date: '2024',
      skills: ['React.js', 'Node.js', 'JavaScript', 'MongoDB']
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      skills: ['JavaScript', 'Algorithms', 'Data Structures']
    },
    {
      title: 'Machine Learning Fundamentals',
      issuer: 'Coursera',
      date: '2023',
      skills: ['Python', 'ML', 'TensorFlow', 'Scikit-learn']
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      skills: ['AWS', 'Cloud Computing', 'DevOps']
    }
  ];

  const eventCertifications = [
    {
      title: 'Google Developer Groups (GDG) DevFest 2023',
      issuer: 'Google Developers',
      date: '2023',
      type: 'Workshop Participation'
    },
    {
      title: 'HacktoberFest 2023',
      issuer: 'DigitalOcean',
      date: '2023',
      type: 'Open Source Contribution'
    },
    {
      title: 'Tech Innovation Summit',
      issuer: 'IEEE',
      date: '2023',
      type: 'Conference Participation'
    },
    {
      title: 'AI/ML Workshop Series',
      issuer: 'Microsoft Learn',
      date: '2023',
      type: 'Workshop Series'
    }
  ];

  const achievementCertifications = [
    {
      title: 'Outstanding Teaching Assistant',
      issuer: 'NxtWave',
      date: '2024',
      achievement: 'CEO Recognition'
    },
    {
      title: 'Top Performer in Full Stack Development',
      issuer: 'NxtWave',
      date: '2024',
      achievement: 'Academic Excellence'
    },
    {
      title: 'Best Project Award',
      issuer: 'VNRVJIET',
      date: '2023',
      achievement: 'Project Excellence'
    },
    {
      title: 'Community Contributor Recognition',
      issuer: 'GitHub',
      date: '2023',
      achievement: 'Community Impact'
    }
  ];

  const CompactCertificationCard = ({ cert, type }: { cert: any, type: string }) => (
    <div className="bg-background rounded-lg p-3 md:p-4 border border-border hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-xs md:text-sm leading-tight pr-2">{cert.title}</h4>
        <Badge variant="secondary" className="text-xs ml-1 flex-shrink-0">{cert.date}</Badge>
      </div>
      <p className="text-primary text-xs font-medium mb-2 truncate">{cert.issuer}</p>
      
      {cert.skills && (
        <div className="flex flex-wrap gap-1 mb-2">
          {cert.skills.slice(0, 2).map((skill: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs px-1.5 py-0">
              {skill}
            </Badge>
          ))}
          {cert.skills.length > 2 && (
            <Badge variant="outline" className="text-xs px-1.5 py-0">
              +{cert.skills.length - 2}
            </Badge>
          )}
        </div>
      )}
      
      {cert.type && (
        <Badge className="text-xs w-fit">{cert.type}</Badge>
      )}
      
      {cert.achievement && (
        <Badge variant="secondary" className="text-xs w-fit">
          <CheckCircle className="w-3 h-3 mr-1" />
          {cert.achievement}
        </Badge>
      )}
    </div>
  );

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/5">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">About Me</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            I'm a passionate full-stack developer with a strong foundation in modern web technologies 
            and artificial intelligence. My journey combines technical expertise with a genuine love 
            for helping others learn and grow in the tech industry.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 text-xs md:text-sm">
              <TabsTrigger value="overview" className="px-2 md:px-4">Overview</TabsTrigger>
              <TabsTrigger value="skills" className="px-2 md:px-4">Skills</TabsTrigger>
              <TabsTrigger value="education" className="px-2 md:px-4 hidden md:block">Education</TabsTrigger>
              <TabsTrigger value="achievements" className="px-2 md:px-4 hidden md:block">Achievements</TabsTrigger>
              <TabsTrigger value="certifications" className="px-2 md:px-4">Certs</TabsTrigger>
            </TabsList>

            {/* Mobile-only tabs for Education and Achievements */}
            <div className="md:hidden mt-2">
              <TabsList className="grid w-full grid-cols-2 text-xs">
                <TabsTrigger value="education" className="px-2">Education</TabsTrigger>
                <TabsTrigger value="achievements" className="px-2">Achievements</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="mt-6 md:mt-8">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-background rounded-lg p-4 md:p-6 lg:p-8 border border-border">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    My Journey
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    My passion for technology began during my Computer Science studies at VNRVJIET, 
                    where I discovered the power of code to solve real-world problems. This led me to 
                    pursue advanced training at NxtWave, where I not only mastered full-stack development 
                    but also found my calling in helping others learn.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    As a Teaching Assistant, I've had the privilege of guiding 264+ learners through 
                    their coding journey, resolving over 306 technical discussions, and earning recognition 
                    from leadership for my dedication to student success.
                  </p>
                </div>
                
                <div className="bg-background rounded-lg p-4 md:p-6 lg:p-8 border border-border">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Core Values
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {personalValues.map((value, index) => (
                      <div key={index} className="border-l-2 border-primary pl-3 md:pl-4">
                        <h4 className="font-medium mb-1 text-sm md:text-base">{value.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-6 md:mt-8">
              <div className="grid gap-4 md:gap-6">
                {skillCategories.map((category, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 md:p-6 border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                      <div className="text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-6 md:mt-8">
              <div className="space-y-6 md:space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 md:p-6 border border-border hover:border-primary/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4">
                      <div className="bg-primary/10 rounded-full p-2 md:p-3 mt-1 w-fit mx-auto md:mx-0">
                        <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{edu.degree}</h3>
                        <p className="text-primary font-medium mb-1 text-sm md:text-base">{edu.institution}</p>
                        <p className="text-xs md:text-sm text-muted-foreground mb-2">{edu.duration}</p>
                        <p className="text-muted-foreground mb-3 text-sm md:text-base">{edu.description}</p>
                        {edu.grade && (
                          <p className="text-sm font-medium text-foreground mb-3">{edu.grade}</p>
                        )}
                        {edu.highlights && (
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Key Highlights:</p>
                            {edu.highlights.map((highlight, hIndex) => (
                              <p key={hIndex} className="text-xs md:text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                                {highlight}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6 md:mt-8">
              <div className="grid gap-4 md:gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 md:p-6 border border-border hover:border-primary/50 transition-colors group">
                    <div className="text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform w-fit mx-auto md:mx-0">
                      {achievement.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-center md:text-left">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base text-center md:text-left">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="mt-6 md:mt-8">
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4 md:mb-6 text-xs md:text-sm">
                  <TabsTrigger value="technical" className="flex items-center gap-1 md:gap-2 px-2 md:px-4">
                    <Award className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Technical</span>
                    <span className="sm:hidden">Tech</span>
                  </TabsTrigger>
                  <TabsTrigger value="events" className="flex items-center gap-1 md:gap-2 px-2 md:px-4">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    Events
                  </TabsTrigger>
                  <TabsTrigger value="achievements" className="flex items-center gap-1 md:gap-2 px-2 md:px-4">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Achievements</span>
                    <span className="sm:hidden">Awards</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="technical" className="mt-4 md:mt-6">
                  <div className="grid gap-3 md:gap-4">
                    {technicalCertifications.map((cert, index) => (
                      <CompactCertificationCard key={index} cert={cert} type="technical" />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="events" className="mt-4 md:mt-6">
                  <div className="grid gap-3 md:gap-4">
                    {eventCertifications.map((cert, index) => (
                      <CompactCertificationCard key={index} cert={cert} type="event" />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="achievements" className="mt-4 md:mt-6">
                  <div className="grid gap-3 md:gap-4">
                    {achievementCertifications.map((cert, index) => (
                      <CompactCertificationCard key={index} cert={cert} type="achievement" />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
