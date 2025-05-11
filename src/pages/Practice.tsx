import React, { useState } from 'react';
import { Code, BookOpen, Terminal, CheckCircle, Trophy, Clock, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

interface Challenge {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Algorithms' | 'Data Structures' | 'Frontend' | 'Backend' | 'Database';
  description: string;
  completedBy: number;
  timeEstimate: string;
  xpPoints: number;
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Algorithms",
    description: "Find two numbers in an array that add up to a target.",
    completedBy: 4523,
    timeEstimate: "15 min",
    xpPoints: 50
  },
  {
    id: 2,
    title: "Binary Search Tree",
    difficulty: "Medium",
    category: "Data Structures",
    description: "Implement a binary search tree with insert, delete and search operations.",
    completedBy: 2876,
    timeEstimate: "30 min",
    xpPoints: 100
  },
  {
    id: 3,
    title: "Responsive Dashboard",
    difficulty: "Medium",
    category: "Frontend",
    description: "Create a responsive dashboard using React and Tailwind CSS.",
    completedBy: 1982,
    timeEstimate: "45 min",
    xpPoints: 120
  },
  {
    id: 4,
    title: "RESTful API",
    difficulty: "Hard",
    category: "Backend",
    description: "Build a RESTful API with authentication and rate limiting.",
    completedBy: 1245,
    timeEstimate: "60 min",
    xpPoints: 150
  },
  {
    id: 5,
    title: "SQL Optimization",
    difficulty: "Hard",
    category: "Database",
    description: "Optimize complex SQL queries for better performance.",
    completedBy: 987,
    timeEstimate: "40 min",
    xpPoints: 130
  },
  {
    id: 6,
    title: "LinkedList Implementation",
    difficulty: "Medium",
    category: "Data Structures",
    description: "Create a linked list with add, remove and traverse operations.",
    completedBy: 3241,
    timeEstimate: "25 min",
    xpPoints: 90
  }
];

const ChallengeCard: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30';
      case 'Medium':
        return 'bg-amber-500/20 text-amber-500 border-amber-500/30';
      case 'Hard':
        return 'bg-compliex-red/20 text-compliex-red border-compliex-red/30';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
    }
  };

  return (
    <Card className="bg-compliex-dark-lighter border-compliex-gray-dark hover:border-compliex-red transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg text-white">{challenge.title}</CardTitle>
            <CardDescription className="mt-1">{challenge.description}</CardDescription>
          </div>
          <Badge 
            className={`${getDifficultyColor(challenge.difficulty)} border`}
          >
            {challenge.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 mr-1 text-emerald-500" />
            <span>{challenge.completedBy.toLocaleString()} completed</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-amber-500" />
            <span>{challenge.timeEstimate}</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1 text-purple-500" />
            <span>{challenge.xpPoints} XP</span>
          </div>
        </div>
        <Badge className="bg-compliex-dark text-gray-300 hover:bg-compliex-dark">
          {challenge.category}
        </Badge>
      </CardContent>
      <CardFooter>
        <Button 
          variant="default" 
          className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white mt-2"
          as={Link}
          to={`/practice/problem/${challenge.id}`}
        >
          Start Challenge <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Practice: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeDifficulty, setActiveDifficulty] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(challenges.map(challenge => challenge.category)));
  // Get unique difficulties
  const difficulties = Array.from(new Set(challenges.map(challenge => challenge.difficulty)));
  
  const filteredChallenges = challenges.filter(challenge => {
    const matchesCategory = activeCategory ? challenge.category === activeCategory : true;
    const matchesDifficulty = activeDifficulty ? challenge.difficulty === activeDifficulty : true;
    return matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Practice <span className="text-compliex-red">Coding</span> Challenges
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Improve your coding skills with practical challenges. Choose from a variety of topics and difficulty levels to level up your programming expertise.
          </p>
        </div>
        
        {/* User Progress Section */}
        <div className="mb-12 bg-compliex-dark-lighter border border-compliex-gray-dark rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-compliex-red">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-compliex-dark-lighter text-white">CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-white">Your Progress</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Trophy className="h-4 w-4 text-amber-500" />
                  <span className="text-amber-500">Level 5 Coder</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Progress to next level</span>
                <span className="text-white">650/1000 XP</span>
              </div>
              <Progress value={65} className="h-2 bg-compliex-gray-dark" />
            </div>
            
            <div className="flex gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-sm text-gray-400">Challenges Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">1,450</p>
                <p className="text-sm text-gray-400">Total XP</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-compliex-red">#253</p>
                <p className="text-sm text-gray-400">Global Rank</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Challenges Section */}
        <div>
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Code className="mr-2 text-compliex-red" />
                Coding Challenges
              </h2>
              <TabsList className="bg-compliex-dark-lighter">
                <TabsTrigger value="all">All Challenges</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="mr-4 mb-4">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Difficulty:</h3>
                  <div className="flex gap-2">
                    <Button 
                      variant={activeDifficulty === null ? "default" : "outline"} 
                      size="sm"
                      className={activeDifficulty === null ? "bg-compliex-red border-compliex-red" : "text-gray-400"} 
                      onClick={() => setActiveDifficulty(null)}
                    >
                      All
                    </Button>
                    {difficulties.map((difficulty) => (
                      <Button 
                        key={difficulty}
                        variant={activeDifficulty === difficulty ? "default" : "outline"} 
                        size="sm"
                        className={activeDifficulty === difficulty ? "bg-compliex-red border-compliex-red" : "text-gray-400"} 
                        onClick={() => setActiveDifficulty(difficulty)}
                      >
                        {difficulty}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Category:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant={activeCategory === null ? "default" : "outline"} 
                      size="sm"
                      className={activeCategory === null ? "bg-compliex-red border-compliex-red" : "text-gray-400"} 
                      onClick={() => setActiveCategory(null)}
                    >
                      All
                    </Button>
                    {categories.map((category) => (
                      <Button 
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"} 
                        size="sm"
                        className={activeCategory === category ? "bg-compliex-red border-compliex-red" : "text-gray-400"} 
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Challenge Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredChallenges.length > 0 ? (
                  filteredChallenges.map(challenge => (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12 bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark">
                    <p className="text-gray-400">No challenges match your selected filters.</p>
                    <Button 
                      variant="link" 
                      className="text-compliex-red mt-2" 
                      onClick={() => {
                        setActiveCategory(null);
                        setActiveDifficulty(null);
                      }}
                    >
                      Clear filters and try again
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="recommended" className="mt-0">
              <div className="text-center py-16 bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark">
                <BookOpen className="h-12 w-12 text-compliex-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Personalized Recommendations</h3>
                <p className="text-gray-400 mb-4 max-w-md mx-auto">
                  Sign in to get challenges recommended based on your skill level and interests.
                </p>
                <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white">
                  Sign In to Get Started
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-0">
              <div className="text-center py-16 bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark">
                <CheckCircle className="h-12 w-12 text-compliex-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Track Your Progress</h3>
                <p className="text-gray-400 mb-4 max-w-md mx-auto">
                  Sign in to keep track of challenges you've completed.
                </p>
                <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white">
                  Sign In to Track Progress
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="bookmarked" className="mt-0">
              <div className="text-center py-16 bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark">
                <Terminal className="h-12 w-12 text-compliex-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Save Challenges for Later</h3>
                <p className="text-gray-400 mb-4 max-w-md mx-auto">
                  Sign in to bookmark challenges you want to try later.
                </p>
                <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white">
                  Sign In to Bookmark
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Weekly Challenge Section */}
        <div className="mt-16 bg-compliex-dark-lighter border border-compliex-gray-dark rounded-lg p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <Badge className="mb-2 bg-compliex-red text-white border-none">Weekly Challenge</Badge>
              <h2 className="text-2xl font-bold text-white mb-2">Dynamic Programming: Maximum Subarray Sum</h2>
              <p className="text-gray-400 mb-4 max-w-xl">
                Solve this week's featured challenge to earn bonus XP and climb the leaderboard. This problem focuses on finding the contiguous subarray with the largest sum.
              </p>
              <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white">
                Take Weekly Challenge
              </Button>
            </div>
            <div className="bg-compliex-dark rounded-lg p-4 border border-compliex-gray-dark min-w-[280px]">
              <h3 className="text-lg font-semibold text-white mb-2">Challenge Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Difficulty:</span>
                  <span className="text-amber-500 font-medium">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Participants:</span>
                  <span className="text-white">872</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Success Rate:</span>
                  <span className="text-emerald-500">63%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonus XP:</span>
                  <span className="text-purple-500">+200 XP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time Left:</span>
                  <span className="text-white">4 days 6 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Practice;
