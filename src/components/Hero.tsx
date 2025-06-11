
import React from 'react';
import { ArrowDown, Download, ExternalLink, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-24 h-24 bg-secondary/5 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Professional Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="relative">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=face" 
                  alt="Saiteja Garlapati"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  SG
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 animate-bounce">
                <Code size={16} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm <span className="text-primary relative">
                Saiteja
                <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-primary animate-pulse" />
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              <span className="block mb-2">Full Stack Developer</span>
              <span className="text-primary font-semibold">& AI Enthusiast</span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative web applications and AI solutions. 
              Currently helping aspiring developers grow as a <span className="text-primary font-medium">Teaching Assistant at NxtWave</span>.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">306</div>
              <div className="text-sm text-muted-foreground">Discussions Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">264</div>
              <div className="text-sm text-muted-foreground">Learners Assisted</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="group">
              View My Work
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              Download Resume
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:text-primary transition-colors group"
          >
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
