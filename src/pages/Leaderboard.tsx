
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Medal, 
  Users, 
  TrendingUp, 
  Award
} from 'lucide-react';

// Mock data for the leaderboard - In a real app this would come from an API
const topUsers = [
  {
    id: 1,
    name: "Alex Johnson",
    username: "alexcode",
    avatar: "",
    rank: 1,
    score: 9850,
    solved: 487,
    streak: 73,
    level: "Master",
    badge: "Contest Winner"
  },
  {
    id: 2,
    name: "Samantha Lee",
    username: "samcodes",
    avatar: "",
    rank: 2,
    score: 9720,
    solved: 461,
    streak: 120,
    level: "Master",
    badge: "Problem Setter"
  },
  {
    id: 3,
    name: "David Chen",
    username: "davealgo",
    avatar: "",
    rank: 3,
    score: 9150,
    solved: 423,
    streak: 45,
    level: "Expert",
    badge: "Early Adopter"
  },
  {
    id: 4,
    name: "Priya Patel",
    username: "priyatech",
    avatar: "",
    rank: 4,
    score: 8790,
    solved: 412,
    streak: 62,
    level: "Expert",
    badge: null
  },
  {
    id: 5,
    name: "Mark Williams",
    username: "markwill",
    avatar: "",
    rank: 5,
    score: 8670,
    solved: 394,
    streak: 28,
    level: "Expert",
    badge: "Mentor"
  },
  {
    id: 6,
    name: "Julia Zhang",
    username: "juliaz",
    avatar: "",
    rank: 6,
    score: 8320,
    solved: 376,
    streak: 54,
    level: "Advanced",
    badge: null
  },
  {
    id: 7,
    name: "Raj Kumar",
    username: "rajkumar",
    avatar: "",
    rank: 7,
    score: 7980,
    solved: 352,
    streak: 41,
    level: "Advanced",
    badge: "Contributor"
  },
  {
    id: 8,
    name: "Sofia Garcia",
    username: "sofiadev",
    avatar: "",
    rank: 8,
    score: 7820,
    solved: 341,
    streak: 37,
    level: "Advanced", 
    badge: null
  },
  {
    id: 9,
    name: "Michael Brown",
    username: "mikebrown",
    avatar: "",
    rank: 9,
    score: 7710,
    solved: 337,
    streak: 23,
    level: "Advanced",
    badge: null
  },
  {
    id: 10,
    name: "Emma Wilson",
    username: "emmawil",
    avatar: "",
    rank: 10,
    score: 7580,
    solved: 321,
    streak: 19,
    level: "Intermediate",
    badge: null
  }
];

const LeaderboardPage: React.FC = () => {
  const [leaderboardType, setLeaderboardType] = useState("global");

  const renderTopThree = () => {
    const top3 = topUsers.slice(0, 3);
    
    return (
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Second Place */}
        <div className="col-start-1 transform translate-y-4">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Avatar className="h-20 w-20 border-2 border-compliex-gray-light">
                <AvatarImage src={top3[1]?.avatar} />
                <AvatarFallback className="bg-compliex-gray-dark text-xl">
                  {top3[1]?.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                <Medal className="h-6 w-6 text-gray-400" />
              </div>
            </div>
            <span className="mt-2 font-semibold text-white">{top3[1]?.name}</span>
            <span className="text-sm text-gray-400">{top3[1]?.score} pts</span>
          </div>
        </div>
        
        {/* First Place */}
        <div className="col-start-2">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Avatar className="h-24 w-24 border-2 border-compliex-red">
                <AvatarImage src={top3[0]?.avatar} />
                <AvatarFallback className="bg-compliex-red text-2xl">
                  {top3[0]?.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-1">
                <Trophy className="h-7 w-7 text-yellow-500" />
              </div>
            </div>
            <span className="mt-2 font-bold text-lg text-white">{top3[0]?.name}</span>
            <span className="text-sm text-gray-300">{top3[0]?.score} pts</span>
            {top3[0]?.badge && (
              <Badge variant="outline" className="mt-1 border-compliex-red text-compliex-red">
                {top3[0]?.badge}
              </Badge>
            )}
          </div>
        </div>
        
        {/* Third Place */}
        <div className="col-start-3 transform translate-y-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Avatar className="h-16 w-16 border-2 border-compliex-gray-light">
                <AvatarImage src={top3[2]?.avatar} />
                <AvatarFallback className="bg-compliex-gray-dark text-lg">
                  {top3[2]?.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                <Award className="h-5 w-5 text-amber-700" />
              </div>
            </div>
            <span className="mt-2 font-semibold text-white">{top3[2]?.name}</span>
            <span className="text-sm text-gray-400">{top3[2]?.score} pts</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-compliex-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Leaderboard</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcase your skills and climb the ranks. Solve more problems, improve your score, and earn your place among the best.
          </p>
        </div>
        
        <div className="mb-12">
          <Tabs defaultValue="global" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-compliex-dark-lighter border border-compliex-gray-dark">
                <TabsTrigger 
                  value="global"
                  onClick={() => setLeaderboardType("global")}
                  className="data-[state=active]:bg-compliex-red data-[state=active]:text-white"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Global
                </TabsTrigger>
                <TabsTrigger 
                  value="monthly"
                  onClick={() => setLeaderboardType("monthly")}
                  className="data-[state=active]:bg-compliex-red data-[state=active]:text-white"
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  Monthly
                </TabsTrigger>
                <TabsTrigger 
                  value="friends"
                  onClick={() => setLeaderboardType("friends")}
                  className="data-[state=active]:bg-compliex-red data-[state=active]:text-white"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Friends
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="global" className="mt-0">
              {renderTopThree()}
              
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex justify-between items-center">
                    <span>Top Performers</span>
                    <Button variant="ghost" className="text-compliex-red hover:text-compliex-red-light hover:bg-compliex-gray-dark">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      View All Stats
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-compliex-gray-dark">
                        <TableHead className="w-16 text-center">Rank</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                        <TableHead className="hidden md:table-cell text-right">Problems</TableHead>
                        <TableHead className="hidden md:table-cell text-right">Streak</TableHead>
                        <TableHead className="hidden md:table-cell">Level</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topUsers.map((user) => (
                        <TableRow 
                          key={user.id} 
                          className="border-compliex-gray-dark hover:bg-compliex-gray-dark/50"
                        >
                          <TableCell className="text-center font-medium">
                            {user.rank <= 3 ? (
                              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full 
                                ${user.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : 
                                  user.rank === 2 ? 'bg-gray-400/20 text-gray-400' : 
                                  'bg-amber-700/20 text-amber-700'}`}>
                                {user.rank}
                              </span>
                            ) : user.rank}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-3">
                                <AvatarFallback className="bg-compliex-gray-dark">
                                  {user.name.substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-400">@{user.username}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-right font-bold">{user.score}</TableCell>
                          <TableCell className="hidden md:table-cell text-right">{user.solved}</TableCell>
                          <TableCell className="hidden md:table-cell text-right">{user.streak} days</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge variant="outline" className={`
                              ${user.level === 'Master' ? 'border-compliex-red text-compliex-red' : 
                                user.level === 'Expert' ? 'border-blue-500 text-blue-500' :
                                user.level === 'Advanced' ? 'border-green-500 text-green-500' : 
                                'border-yellow-500 text-yellow-500'}
                            `}>
                              {user.level}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="monthly">
              <div className="flex justify-center items-center h-40">
                <p className="text-gray-400">Monthly leaderboard data would appear here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="friends">
              <div className="flex justify-center items-center h-40">
                <p className="text-gray-400">Connect with friends to see how you rank among them.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                Hall of Fame
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-4">Users with the highest all-time achievements</p>
              <div className="space-y-3">
                {topUsers.slice(0, 3).map((user) => (
                  <div key={`fame-${user.id}`} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarFallback className="bg-compliex-gray-dark text-xs">
                          {user.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{user.solved} problems</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                Weekly Improvers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-4">Users with the highest weekly gains</p>
              <div className="space-y-3">
                {[...topUsers].reverse().slice(0, 3).map((user) => (
                  <div key={`improve-${user.id}`} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarFallback className="bg-compliex-gray-dark text-xs">
                          {user.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                    <span className="text-sm text-green-500">+{Math.floor(Math.random() * 500) + 100} pts</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Award className="mr-2 h-5 w-5 text-amber-500" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-4">Latest badges and milestones</p>
              <div className="space-y-3">
                {topUsers.slice(0, 3).map((user) => (
                  <div key={`achieve-${user.id}`} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarFallback className="bg-compliex-gray-dark text-xs">
                          {user.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                    <Badge variant="outline" className="border-amber-500 text-amber-500">
                      {user.badge || "100 Days Streak"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
