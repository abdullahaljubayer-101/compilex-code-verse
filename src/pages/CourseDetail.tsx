
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Users, Star, CheckCircle, Lock, Download, Share, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedVideo, setSelectedVideo] = useState(0);

  // Mock course data
  const course = {
    id: id,
    title: "Complete React Developer Course 2024",
    subtitle: "Build modern web applications with React, Redux, and TypeScript",
    description: "Master React development from beginner to advanced level. This comprehensive course covers everything you need to know to become a professional React developer, including hooks, context, Redux, TypeScript, testing, and deployment.",
    thumbnail: "/placeholder.svg",
    instructor: {
      name: "Alex Chen",
      avatar: "",
      bio: "Full-stack developer with 10+ years of experience. Former lead developer at Google and Facebook.",
      rating: 4.9,
      students: "50k+",
      courses: 12
    },
    price: 89.99,
    originalPrice: 199.99,
    rating: 4.8,
    totalRatings: 12540,
    students: 45230,
    duration: "42 hours",
    lessons: 156,
    level: "All Levels",
    lastUpdated: "December 2024",
    language: "English",
    tags: ["React", "JavaScript", "TypeScript", "Redux", "Web Development"],
    skills: [
      "Build modern React applications",
      "Master React Hooks and Context",
      "Implement state management with Redux",
      "Use TypeScript with React",
      "Test React applications",
      "Deploy React apps to production"
    ],
    curriculum: [
      {
        id: 1,
        title: "Introduction to React",
        duration: "2h 30m",
        lessons: 12,
        videos: [
          { id: 1, title: "What is React?", duration: "12:34", isCompleted: true, isPreview: true },
          { id: 2, title: "Setting up Development Environment", duration: "18:45", isCompleted: true, isPreview: false },
          { id: 3, title: "Your First React Component", duration: "15:22", isCompleted: false, isPreview: false },
          { id: 4, title: "JSX Fundamentals", duration: "20:15", isCompleted: false, isPreview: false }
        ]
      },
      {
        id: 2,
        title: "Components and Props",
        duration: "3h 45m",
        lessons: 18,
        videos: [
          { id: 5, title: "Understanding Components", duration: "16:30", isCompleted: false, isPreview: false },
          { id: 6, title: "Props and Data Flow", duration: "22:18", isCompleted: false, isPreview: false },
          { id: 7, title: "Component Composition", duration: "19:45", isCompleted: false, isPreview: true }
        ]
      },
      {
        id: 3,
        title: "State and Event Handling",
        duration: "4h 15m",
        lessons: 20,
        videos: [
          { id: 8, title: "Introduction to State", duration: "18:22", isCompleted: false, isPreview: false },
          { id: 9, title: "Event Handling", duration: "14:55", isCompleted: false, isPreview: false }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-400 hover:text-white hover:bg-compliex-gray-dark"
            asChild
          >
            <Link to="/learn">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
        </div>

        {/* Course Hero Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          <div className="xl:col-span-2">
            {/* Video Player */}
            <div className="relative bg-black rounded-lg overflow-hidden mb-6 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-compliex-dark-lighter">
                <div className="text-center">
                  <Play className="h-16 w-16 text-compliex-red mx-auto mb-4" />
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {course.curriculum[0].videos[selectedVideo]?.title || "Course Preview"}
                  </h3>
                  <p className="text-gray-400">
                    Duration: {course.curriculum[0].videos[selectedVideo]?.duration || "12:34"}
                  </p>
                </div>
              </div>
            </div>

            {/* Course Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-compliex-gray-dark text-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {course.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-medium">{course.rating}</span>
                  <span>({course.totalRatings.toLocaleString()} ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
              </div>
            </div>
          </div>

          {/* Course Purchase Card */}
          <div className="xl:col-span-1">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-white">${course.price}</span>
                    <span className="text-lg text-gray-400 line-through">${course.originalPrice}</span>
                  </div>
                  <Badge className="bg-compliex-red text-white">55% OFF</Badge>
                </div>

                <Button className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white mb-4">
                  Enroll Now
                </Button>
                
                <Button variant="outline" className="w-full border-compliex-gray-dark text-white hover:bg-compliex-gray-dark mb-6">
                  Add to Wishlist
                </Button>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lessons:</span>
                    <span className="text-white">{course.lessons}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Language:</span>
                    <span className="text-white">{course.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Updated:</span>
                    <span className="text-white">{course.lastUpdated}</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Share className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-compliex-dark-lighter">
            <TabsTrigger value="overview" className="data-[state=active]:bg-compliex-red">Overview</TabsTrigger>
            <TabsTrigger value="curriculum" className="data-[state=active]:bg-compliex-red">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor" className="data-[state=active]:bg-compliex-red">Instructor</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">About This Course</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <h4 className="text-xl font-semibold text-white mb-4">What You'll Learn</h4>
                <ul className="space-y-3">
                  {course.skills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Course Progress</h3>
                <div className="bg-compliex-dark-lighter rounded-lg p-6 border border-compliex-gray-dark">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300">Your Progress</span>
                    <span className="text-white font-medium">12%</span>
                  </div>
                  <Progress value={12} className="mb-4" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Completed:</span>
                      <span className="text-white ml-2">3/156 lessons</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Time spent:</span>
                      <span className="text-white ml-2">2h 15m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="mt-8">
            <div className="space-y-6">
              {course.curriculum.map((section) => (
                <Card key={section.id} className="bg-compliex-dark-lighter border-compliex-gray-dark">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white">{section.title}</CardTitle>
                      <div className="text-sm text-gray-400">
                        {section.lessons} lessons • {section.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.videos.map((video) => (
                        <div 
                          key={video.id} 
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-compliex-gray-dark transition-colors cursor-pointer"
                          onClick={() => setSelectedVideo(video.id - 1)}
                        >
                          <div className="flex items-center gap-3">
                            {video.isCompleted ? (
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            ) : video.isPreview ? (
                              <Play className="h-5 w-5 text-compliex-red" />
                            ) : (
                              <Lock className="h-5 w-5 text-gray-400" />
                            )}
                            <span className="text-white">{video.title}</span>
                            {video.isPreview && (
                              <Badge variant="secondary" className="bg-compliex-red/20 text-compliex-red text-xs">
                                Preview
                              </Badge>
                            )}
                          </div>
                          <span className="text-gray-400 text-sm">{video.duration}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="instructor" className="mt-8">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                    <AvatarFallback className="bg-compliex-red text-white text-2xl">
                      {course.instructor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{course.instructor.name}</h3>
                    <p className="text-gray-300 mb-4">{course.instructor.bio}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-white font-semibold">{course.instructor.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">Instructor Rating</span>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-semibold mb-1">{course.instructor.students}</div>
                        <span className="text-gray-400 text-sm">Students</span>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-semibold mb-1">{course.instructor.courses}</div>
                        <span className="text-gray-400 text-sm">Courses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;
