
import React, { useState } from 'react';
import { User, Mail, Calendar, Trophy, BookOpen, Code, Settings, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Account: React.FC = () => {
  // Mock user data - in a real app this would come from authentication
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "",
    joinDate: "January 2024",
    problemsSolved: 47,
    tutorialsCompleted: 12,
    currentStreak: 5,
    totalPoints: 2340,
    rank: "Gold",
    skills: ["JavaScript", "Python", "React", "Node.js", "SQL"]
  };

  const recentActivity = [
    { type: "problem", title: "Two Sum", difficulty: "Easy", date: "2 hours ago", points: 50 },
    { type: "tutorial", title: "Advanced React Hooks", date: "1 day ago", points: 100 },
    { type: "problem", title: "Binary Tree Traversal", difficulty: "Medium", date: "2 days ago", points: 150 },
    { type: "problem", title: "Merge Sort Implementation", difficulty: "Hard", date: "3 days ago", points: 200 },
  ];

  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-compliex-dark-lighter rounded-lg p-8 border border-compliex-gray-dark mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-compliex-red text-white text-2xl">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                <p className="text-gray-300 mb-4">{user.email}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge className="bg-compliex-red text-white">{user.rank}</Badge>
                  <Badge variant="outline" className="border-compliex-gray-dark text-gray-300">
                    {user.totalPoints} Points
                  </Badge>
                  <Badge variant="outline" className="border-compliex-gray-dark text-gray-300">
                    {user.currentStreak} Day Streak
                  </Badge>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="outline" className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Problems Solved</CardTitle>
                <Code className="h-4 w-4 text-compliex-red" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{user.problemsSolved}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Tutorials Completed</CardTitle>
                <BookOpen className="h-4 w-4 text-compliex-red" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{user.tutorialsCompleted}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Current Streak</CardTitle>
                <Trophy className="h-4 w-4 text-compliex-red" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{user.currentStreak} days</div>
              </CardContent>
            </Card>
            
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Total Points</CardTitle>
                <User className="h-4 w-4 text-compliex-red" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{user.totalPoints.toLocaleString()}</div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="activity" className="space-y-6">
            <TabsList className="bg-compliex-dark-lighter border border-compliex-gray-dark">
              <TabsTrigger value="activity" className="data-[state=active]:bg-compliex-red data-[state=active]:text-white">
                Recent Activity
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-compliex-red data-[state=active]:text-white">
                Skills
              </TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-compliex-red data-[state=active]:text-white">
                Achievements
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="activity">
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-compliex-dark rounded-lg border border-compliex-gray-dark">
                        <div className="flex items-center gap-3">
                          {activity.type === 'problem' ? (
                            <Code className="h-5 w-5 text-compliex-red" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-compliex-red" />
                          )}
                          <div>
                            <h4 className="text-white font-medium">{activity.title}</h4>
                            <p className="text-gray-400 text-sm">{activity.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {activity.difficulty && (
                            <Badge variant="outline" className="border-compliex-gray-dark text-gray-300">
                              {activity.difficulty}
                            </Badge>
                          )}
                          <Badge className="bg-compliex-red text-white">
                            +{activity.points} pts
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="skills">
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="border-compliex-red text-compliex-red bg-compliex-red/10 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="achievements">
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-compliex-dark rounded-lg border border-compliex-gray-dark">
                      <div className="flex items-center gap-3 mb-2">
                        <Trophy className="h-6 w-6 text-yellow-500" />
                        <h4 className="text-white font-medium">First Problem Solved</h4>
                      </div>
                      <p className="text-gray-400 text-sm">Completed your first coding challenge</p>
                    </div>
                    <div className="p-4 bg-compliex-dark rounded-lg border border-compliex-gray-dark">
                      <div className="flex items-center gap-3 mb-2">
                        <Trophy className="h-6 w-6 text-blue-500" />
                        <h4 className="text-white font-medium">Tutorial Master</h4>
                      </div>
                      <p className="text-gray-400 text-sm">Completed 10+ tutorials</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
