
import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, ExternalLink, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger opening animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient with enhanced 3D feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse transform-gpu animate-bounce animate-glow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse transform-gpu animate-bounce animate-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-pulse transform-gpu animate-bounce animate-wobble" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-2/3 w-24 h-24 bg-secondary/15 rounded-full blur-lg animate-pulse transform-gpu animate-bounce animate-wobble" style={{ animationDelay: '0.7s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'animate-page-load' : 'opacity-0'}`}>
          {/* Enhanced Professional Profile Image with 3D effect */}
          <div className={`mb-8 relative inline-block transform-gpu transition-all duration-700 ${isLoaded ? 'animate-zoom-in' : 'opacity-0 scale-50'} animate-stagger-1`}>
            <div className="relative">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-2xl transform-gpu hover:rotate-3 hover:scale-110 transition-transform duration-300 hover-lift animate-glow">
                <AvatarImage 
                  src="/lovable-uploads/9006737b-9791-47b9-8feb-23ab9c161359.png" 
                  alt="Saiteja Garlapati"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  SG
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 animate-bounce shadow-lg transform-gpu hover:rotate-12 hover:scale-125 transition-transform duration-300 animate-wobble">
                <Code size={16} />
              </div>
            </div>
          </div>

          {/* Enhanced Main Content with staggered animations */}
          <div className="space-y-6">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transform-gpu transition-all duration-700 ${isLoaded ? 'animate-slide-up' : 'opacity-0 translate-y-20'} animate-stagger-2 hover:scale-105 hover-tilt transition-transform duration-300`}>
              Hi, I'm <span className="text-primary relative inline-block transform-gpu hover:rotate-1 transition-transform duration-300 animate-glow">
                Saiteja
                <Sparkles className="absolute -top-1 -right-6 md:-top-2 md:-right-8 w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse animate-wobble" />
              </span>
            </h1>
            
            <div className={`text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-4 transform-gpu transition-all duration-700 ${isLoaded ? 'animate-slide-right' : 'opacity-0 -translate-x-20'} animate-stagger-3 hover:translate-y-1 hover-lift transition-transform duration-300`}>
              <span className="block mb-2">Full Stack Developer</span>
              <span className="text-primary font-semibold animate-glow">& AI Enthusiast</span>
            </div>

            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-6 transform-gpu transition-all duration-700 ${isLoaded ? 'animate-fade-in' : 'opacity-0'} animate-stagger-4 hover:scale-105 hover-lift transition-transform duration-300`}>
              Passionate about building innovative web applications and AI solutions. 
              Currently helping aspiring developers grow as a <span className="text-primary font-medium animate-glow">Teaching Assistant at NxtWave</span>.
            </p>
          </div>

          {/* Enhanced Stats with staggered 3D hover effects */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-6 my-12 transition-all duration-700 ${isLoaded ? 'animate-slide-up' : 'opacity-0 translate-y-20'} animate-stagger-5`}>
            <div className="text-center transform-gpu hover:scale-110 hover:-translate-y-2 hover-tilt transition-transform duration-300 cursor-pointer hover-bounce">
              <div className="text-2xl md:text-3xl font-bold text-primary animate-glow">306</div>
              <div className="text-sm text-muted-foreground">Discussions Resolved</div>
            </div>
            <div className="text-center transform-gpu hover:scale-110 hover:-translate-y-2 hover-tilt transition-transform duration-300 cursor-pointer hover-bounce animate-stagger-1">
              <div className="text-2xl md:text-3xl font-bold text-primary animate-glow">264</div>
              <div className="text-sm text-muted-foreground">Learners Assisted</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1 transform-gpu hover:scale-110 hover:-translate-y-2 hover-tilt transition-transform duration-300 cursor-pointer hover-bounce animate-stagger-2">
              <div className="text-2xl md:text-3xl font-bold text-primary animate-glow">12+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>

          {/* Enhanced CTA Buttons with staggered 3D effects */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 ${isLoaded ? 'animate-slide-left' : 'opacity-0 translate-x-20'} animate-stagger-4`}>
            <Button 
              onClick={() => scrollToSection('projects')} 
              size="lg" 
              className="group transform-gpu hover:scale-110 hover:-translate-y-1 hover-tilt transition-transform duration-300 shadow-lg hover:shadow-xl animate-glow hover-bounce"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:rotate-12 transition-transform animate-wobble" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group transform-gpu hover:scale-110 hover:-translate-y-1 hover-tilt transition-transform duration-300 shadow-lg hover:shadow-xl animate-glow hover-bounce animate-stagger-1"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 group-hover:rotate-12 transition-transform animate-wobble" />
            </Button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className={`animate-bounce hover:text-primary transition-colors group transform-gpu hover:scale-125 transition-transform duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'} animate-stagger-5 hover-bounce`}
          >
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform animate-wobble" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
