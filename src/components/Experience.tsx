
import React from 'react';
import { Calendar, MapPin, Users, MessageSquare, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Teaching Assistant',
      company: 'NxtWave',
      duration: 'March 2024 - June 2024',
      location: 'Remote',
      type: 'Part-time',
      achievements: [
        'Resolved 306 technical discussions and queries',
        'Assisted 264 learners in mastering full-stack development',
        'Recognized by CEO for outstanding performance and dedication',
        'Maintained 98% satisfaction rate from learners'
      ],
      skills: ['JavaScript', 'React.js', 'Node.js', 'Mentoring', 'Problem Solving']
    }
  ];

  const stats = [
    { label: 'Discussions Resolved', value: '306', icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'Learners Helped', value: '264', icon: <Users className="w-5 h-5" /> },
    { label: 'Satisfaction Rate', value: '98%', icon: <Award className="w-5 h-5" /> },
    { label: 'Months Active', value: '4', icon: <Calendar className="w-5 h-5" /> }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in helping others learn technology while building my own expertise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-background rounded-lg p-6 text-center border border-border">
              <div className="text-primary mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              
              {/* Content */}
              <div className="ml-20 pb-12">
                <div className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-lg font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location} • {exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">CEO Recognition</h3>
            <p className="text-muted-foreground">
              "Saiteja's dedication to helping learners and his technical expertise 
              made him stand out as an exceptional Teaching Assistant."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
