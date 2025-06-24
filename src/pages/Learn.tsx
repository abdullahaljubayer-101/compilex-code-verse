
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, Clock, Users, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const tutorials = [
  {
    id: 'react-hooks',
    title: 'Mastering React Hooks',
    description: 'Learn how to use React hooks to manage state and side effects in your functional components.',
    author: 'John Doe',
    duration: '4 hours',
    level: 'Intermediate',
  },
  {
    id: 'typescript-basics',
    title: 'TypeScript Basics for React Developers',
    description: 'Get started with TypeScript and learn how to use it to type your React components.',
    author: 'Jane Smith',
    duration: '3 hours',
    level: 'Beginner',
  },
  {
    id: 'nextjs-tutorial',
    title: 'Building a Full-Stack App with Next.js',
    description: 'Learn how to build a full-stack application with Next.js, including server-side rendering and API routes.',
    author: 'David Johnson',
    duration: '6 hours',
    level: 'Advanced',
  },
];

const courses = [
  {
    id: 'react-masterclass',
    title: 'Complete React Developer Course 2024',
    description: 'Master React development from beginner to advanced level with hands-on projects.',
    instructor: 'Alex Chen',
    duration: '42 hours',
    students: '45k',
    rating: 4.8,
    price: 89.99,
    level: 'All Levels',
    thumbnail: '/placeholder.svg'
  },
  {
    id: 'fullstack-javascript',
    title: 'Full-Stack JavaScript Development',
    description: 'Learn to build complete web applications using Node.js, React, and MongoDB.',
    instructor: 'Maria Rodriguez',
    duration: '38 hours',
    students: '32k',
    rating: 4.7,
    price: 79.99,
    level: 'Intermediate',
    thumbnail: '/placeholder.svg'
  },
  {
    id: 'advanced-css',
    title: 'Advanced CSS and Animations',
    description: 'Create stunning web interfaces with advanced CSS techniques and animations.',
    instructor: 'Thomas Kim',
    duration: '25 hours',
    students: '28k',
    rating: 4.9,
    price: 59.99,
    level: 'Intermediate',
    thumbnail: '/placeholder.svg'
  }
];

const Learn: React.FC = () => {
  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn New Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enhance your coding skills with our comprehensive tutorials and video courses.
          </p>
        </div>

        <Tabs defaultValue="tutorials" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-compliex-dark-lighter mb-12">
            <TabsTrigger value="tutorials" className="data-[state=active]:bg-compliex-red">
              <BookOpen className="h-4 w-4 mr-2" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-compliex-red">
              <Play className="h-4 w-4 mr-2" />
              Video Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tutorials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-compliex-dark-lighter rounded-lg p-6 border border-compliex-gray-dark hover:border-compliex-red/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <BookOpen className="h-6 w-6 text-compliex-red" />
                    <h2 className="text-xl font-semibold text-white">{tutorial.title}</h2>
                  </div>
                  <p className="text-gray-300 mb-4">{tutorial.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Author:</span>
                      <span className="text-white">{tutorial.author}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{tutorial.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Level:</span>
                      <Badge variant="secondary" className="bg-compliex-gray-dark text-gray-300 text-xs">
                        {tutorial.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button 
                    variant="link" 
                    className="text-compliex-red hover:text-compliex-red-dark p-0 h-auto w-full justify-start"
                    asChild
                  >
                    <Link to={`/learn/tutorial/${tutorial.id}`}>
                      Read Tutorial →
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-compliex-dark-lighter rounded-lg overflow-hidden border border-compliex-gray-dark hover:border-compliex-red/50 transition-colors">
                  <div className="aspect-video bg-compliex-gray-dark flex items-center justify-center">
                    <Play className="h-12 w-12 text-compliex-red" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{course.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-yellow-400">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="secondary" className="bg-compliex-gray-dark text-gray-300">
                        {course.level}
                      </Badge>
                      <div className="text-right">
                        <span className="text-xl font-bold text-white">${course.price}</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-400 mb-4">
                      By {course.instructor}
                    </div>

                    <Button 
                      variant="link" 
                      className="text-compliex-red hover:text-compliex-red-dark p-0 h-auto w-full justify-start"
                      asChild
                    >
                      <Link to={`/learn/course/${course.id}`}>
                        View Course →
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Learn;
