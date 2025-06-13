
import React, { useState, useEffect } from 'react';
import { Github, GitBranch, Star, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
}

const GitHubActivity = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      setIsLoading(true);
      
      // Fetch user stats
      const userResponse = await fetch('https://api.github.com/users/saiteja7065');
      if (userResponse.ok) {
        const userData = await userResponse.json();
        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
        });
      }

      // Fetch repositories
      const reposResponse = await fetch('https://api.github.com/users/saiteja7065/repos?sort=updated&per_page=6');
      if (reposResponse.ok) {
        const reposData = await reposResponse.json();
        setRepos(reposData);
      }
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      // Show mock data if API fails
      setStats({
        publicRepos: 25,
        followers: 50,
        following: 30,
      });
      setRepos([
        {
          name: 'portfolio-website',
          description: 'My personal portfolio built with React and TypeScript',
          html_url: 'https://github.com/saiteja7065/portfolio',
          stargazers_count: 15,
          language: 'TypeScript',
          updated_at: '2024-06-10T10:30:00Z',
          topics: ['react', 'typescript', 'portfolio']
        },
        {
          name: 'ai-chatbot',
          description: 'Intelligent chatbot using OpenAI API',
          html_url: 'https://github.com/saiteja7065/ai-chatbot',
          stargazers_count: 8,
          language: 'Python',
          updated_at: '2024-06-08T15:20:00Z',
          topics: ['ai', 'chatbot', 'openai']
        },
        {
          name: 'weather-app',
          description: 'Real-time weather application',
          html_url: 'https://github.com/saiteja7065/weather-app',
          stargazers_count: 12,
          language: 'JavaScript',
          updated_at: '2024-06-05T09:15:00Z',
          topics: ['weather', 'api', 'react']
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'Python': 'bg-green-500',
      'Java': 'bg-orange-500',
      'React': 'bg-cyan-500',
      'HTML': 'bg-red-500',
      'CSS': 'bg-purple-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Github className="w-5 h-5" />
            <span>GitHub Activity</span>
          </CardTitle>
          <CardDescription>Loading GitHub data...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-secondary rounded w-3/4"></div>
            <div className="h-4 bg-secondary rounded w-1/2"></div>
            <div className="h-4 bg-secondary rounded w-5/6"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* GitHub Stats */}
      {stats && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>GitHub Stats</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{stats.publicRepos}</div>
                <div className="text-sm text-muted-foreground">Repositories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{stats.followers}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{stats.following}</div>
                <div className="text-sm text-muted-foreground">Following</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Repositories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitBranch className="w-5 h-5" />
            <span>Recent Repositories</span>
          </CardTitle>
          <CardDescription>My latest projects and contributions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {repos.slice(0, 3).map((repo, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  {repo.name}
                </a>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Star className="w-3 h-3" />
                  <span>{repo.stargazers_count}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-3">
                {repo.description || 'No description available'}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {repo.language && (
                    <div className="flex items-center space-x-1">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                      <span className="text-xs text-muted-foreground">{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>Updated {formatDate(repo.updated_at)}</span>
                  </div>
                </div>
                
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex space-x-1">
                    {repo.topics.slice(0, 2).map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <div className="text-center pt-4">
            <a
              href="https://github.com/saiteja7065"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              View all repositories on GitHub →
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GitHubActivity;
