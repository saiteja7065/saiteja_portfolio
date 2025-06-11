
import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Certifications = () => {
  const technicalCertifications = [
    {
      title: 'Full Stack Development',
      issuer: 'NxtWave',
      date: '2024',
      description: 'Comprehensive certification covering React.js, Node.js, Express.js, and modern web development practices.',
      skills: ['React.js', 'Node.js', 'JavaScript', 'MongoDB'],
      credentialId: 'NXTWAVE-2024-001',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: 'Advanced JavaScript programming concepts, algorithms, and data structure implementations.',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      credentialId: 'FCC-JS-2023-789',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop'
    },
    {
      title: 'Machine Learning Fundamentals',
      issuer: 'Coursera',
      date: '2023',
      description: 'Foundation in machine learning concepts, supervised learning, and Python for ML.',
      skills: ['Python', 'ML', 'TensorFlow', 'Scikit-learn'],
      credentialId: 'COURSERA-ML-456',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Cloud computing fundamentals and AWS core services certification.',
      skills: ['AWS', 'Cloud Computing', 'DevOps'],
      credentialId: 'AWS-CP-2023-123',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop'
    }
  ];

  const participationCertifications = [
    {
      title: 'Google Developer Groups (GDG) DevFest 2023',
      issuer: 'Google Developers',
      date: '2023',
      description: 'Participated in workshops on Android development, machine learning, and cloud technologies.',
      type: 'Workshop Participation',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=200&fit=crop'
    },
    {
      title: 'HacktoberFest 2023',
      issuer: 'DigitalOcean',
      date: '2023',
      description: 'Successfully contributed to open source projects during the month-long celebration.',
      type: 'Open Source Contribution',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop'
    },
    {
      title: 'Tech Innovation Summit',
      issuer: 'IEEE',
      date: '2023',
      description: 'Attended sessions on emerging technologies and future of software development.',
      type: 'Conference Participation',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop'
    },
    {
      title: 'AI/ML Workshop Series',
      issuer: 'Microsoft Learn',
      date: '2023',
      description: 'Participated in hands-on workshops covering Azure AI services and machine learning.',
      type: 'Workshop Series',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop'
    }
  ];

  const achievementCertifications = [
    {
      title: 'Outstanding Teaching Assistant',
      issuer: 'NxtWave',
      date: '2024',
      description: 'Recognized for exceptional performance in resolving 306 discussions and assisting 264 learners.',
      achievement: 'CEO Recognition',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop'
    },
    {
      title: 'Top Performer in Full Stack Development',
      issuer: 'NxtWave',
      date: '2024',
      description: 'Achieved top 5% ranking in the intensive full-stack development program.',
      achievement: 'Academic Excellence',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=200&fit=crop'
    },
    {
      title: 'Best Project Award',
      issuer: 'VNRVJIET',
      date: '2023',
      description: 'Won best project award for AI-powered healthcare solution during final year.',
      achievement: 'Project Excellence',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop'
    },
    {
      title: 'Community Contributor Recognition',
      issuer: 'GitHub',
      date: '2023',
      description: 'Recognized for significant contributions to open source projects and community engagement.',
      achievement: 'Community Impact',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop'
    }
  ];

  const CertificationCard = ({ cert, type }: { cert: any, type: string }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={cert.image} 
          alt={cert.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {cert.date}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
              {cert.title}
            </CardTitle>
            <CardDescription className="font-medium text-primary">
              {cert.issuer}
            </CardDescription>
          </div>
          <Award className="w-6 h-6 text-primary flex-shrink-0 ml-2" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {cert.description}
        </p>
        
        {cert.skills && (
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
        
        {cert.type && (
          <Badge className="w-fit">
            {cert.type}
          </Badge>
        )}
        
        {cert.achievement && (
          <Badge variant="secondary" className="w-fit">
            <CheckCircle className="w-3 h-3 mr-1" />
            {cert.achievement}
          </Badge>
        )}
        
        {cert.credentialId && (
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground mb-2">
              Credential ID: {cert.credentialId}
            </p>
            <Button variant="outline" size="sm" className="w-full group/btn">
              View Certificate
              <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section id="certifications" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical certifications, event participations, and professional achievements
            that showcase my commitment to continuous learning and excellence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical" className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Technical Certifications
              </TabsTrigger>
              <TabsTrigger value="participation" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Event Participation
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {technicalCertifications.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} type="technical" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="participation" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {participationCertifications.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} type="participation" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {achievementCertifications.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} type="achievement" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">4</div>
            <div className="text-sm text-muted-foreground">Technical Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">4</div>
            <div className="text-sm text-muted-foreground">Event Participations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">4</div>
            <div className="text-sm text-muted-foreground">Achievement Awards</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
