import React from 'react';
import { BookOpen, BookText, BookCheck, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';

const Learn: React.FC = () => {
  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      {/* Page header */}
      <div className="pt-24 pb-8 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Learn to Code</h1>
                <p className="text-gray-400 mt-2">Master programming with our structured courses and tutorials</p>
              </div>
              
              <div className="flex gap-2">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    className="pl-9 bg-compliex-dark-lighter border-compliex-gray-dark" 
                    placeholder="Search courses..." 
                  />
                </div>
                <Button variant="outline" className="border-compliex-gray-dark">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* User progress summary */}
            <div className="bg-compliex-dark-lighter p-4 rounded-lg border border-compliex-gray-dark flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex gap-4 items-center">
                <Avatar className="h-12 w-12 border-2 border-compliex-red">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-semibold">Your Learning Journey</p>
                  <p className="text-sm text-gray-400">42% of Front-end Path completed</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex flex-col">
                  <div className="w-full bg-compliex-gray-dark rounded-full h-2.5">
                    <div className="bg-compliex-red h-2.5 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">18/42 modules</span>
                    <span className="text-xs text-gray-400">42%</span>
                  </div>
                </div>
                <Button className="bg-compliex-red hover:bg-compliex-red-dark">Continue</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 md:px-8 pb-16">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="paths" className="w-full">
            <TabsList className="bg-compliex-dark-lighter border border-compliex-gray-dark w-full md:w-auto justify-start mb-4">
              <TabsTrigger value="paths">Learning Paths</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            
            <TabsContent value="paths" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Popular Learning Paths</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {learningPaths.map((path, index) => (
                    <LearningPathCard key={index} path={path} />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Recommended For You</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendedCourses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))}
                </div>
              </section>
            </TabsContent>
            
            <TabsContent value="courses">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tutorials">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tutorials.map((tutorial, index) => (
                  <TutorialCard key={index} tutorial={tutorial} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saved">
              <div className="min-h-[300px] flex items-center justify-center flex-col text-center">
                <BookOpen className="h-16 w-16 text-compliex-gray-light mb-4" />
                <h3 className="text-xl font-semibold text-white">No saved content yet</h3>
                <p className="text-gray-400 mt-2 max-w-md">
                  When you save courses or tutorials, they'll appear here for easy access
                </p>
                <Button variant="outline" className="mt-4 border-compliex-gray-dark">
                  Browse Courses
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

type LearningPath = {
  title: string;
  description: string;
  modules: number;
  hours: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: React.ReactNode;
  progressPercent?: number;
};

const LearningPathCard: React.FC<{ path: LearningPath }> = ({ path }) => {
  return (
    <Card className="bg-compliex-dark-lighter border-compliex-gray-dark hover:border-compliex-red/50 transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="feature-icon">
            {path.icon}
          </div>
          <Badge variant="outline" className="border-compliex-gray-light text-gray-300">
            {path.level}
          </Badge>
        </div>
        <CardTitle className="text-white">{path.title}</CardTitle>
        <CardDescription className="line-clamp-2">{path.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-gray-400 mb-3">
          <span>{path.modules} Modules</span>
          <span>{path.hours} Hours</span>
        </div>
        {path.progressPercent !== undefined && (
          <div className="w-full">
            <div className="w-full bg-compliex-gray-dark rounded-full h-2 mb-1">
              <div 
                className="bg-compliex-red h-2 rounded-full" 
                style={{ width: `${path.progressPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-end">
              <span className="text-xs text-gray-400">{path.progressPercent}% Complete</span>
            </div>
          </div>
        )}
        {path.progressPercent === undefined && (
          <Button className="w-full bg-compliex-gray-dark hover:bg-compliex-gray-light text-white">
            Start Path
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

type Course = {
  title: string;
  author: string;
  authorAvatar?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  duration: string;
  lessons: number;
  progressPercent?: number;
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <Card className="bg-compliex-dark-lighter border-compliex-gray-dark hover:border-compliex-red/50 transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={course.authorAvatar || "https://github.com/shadcn.png"} />
              <AvatarFallback>{course.author.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-400">{course.author}</span>
          </div>
          <Badge variant="outline" className="border-compliex-gray-light text-gray-300">
            {course.level}
          </Badge>
        </div>
        <CardTitle className="text-white text-xl">{course.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-3">
          {course.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-compliex-gray-dark text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-400 mb-3">
          <span>{course.lessons} Lessons</span>
          <span>{course.duration}</span>
        </div>
        {course.progressPercent !== undefined && (
          <div className="w-full">
            <div className="w-full bg-compliex-gray-dark rounded-full h-2 mb-1">
              <div 
                className="bg-compliex-red h-2 rounded-full" 
                style={{ width: `${course.progressPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between">
              <Button variant="link" className="text-compliex-red p-0 h-auto text-xs">
                Continue
              </Button>
              <span className="text-xs text-gray-400">{course.progressPercent}% Complete</span>
            </div>
          </div>
        )}
        {course.progressPercent === undefined && (
          <Button className="w-full bg-compliex-gray-dark hover:bg-compliex-gray-light text-white">
            Enroll Now
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

type Tutorial = {
  title: string;
  description: string;
  readTime: string;
  date: string;
  tags: string[];
};

const TutorialCard: React.FC<{ tutorial: Tutorial }> = ({ tutorial }) => {
  return (
    <Card className="bg-compliex-dark-lighter border-compliex-gray-dark hover:border-compliex-red/50 transition-all">
      <CardHeader>
        <CardTitle className="text-white text-xl">{tutorial.title}</CardTitle>
        <div className="flex justify-between text-xs text-gray-400">
          <span>{tutorial.date}</span>
          <span>{tutorial.readTime} read</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4 line-clamp-2">{tutorial.description}</p>
        <div className="flex flex-wrap gap-2">
          {tutorial.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-compliex-gray-dark text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Sample data
const learningPaths: LearningPath[] = [
  {
    title: "Front-End Developer Path",
    description: "Master HTML, CSS, JavaScript and popular frameworks to build modern web interfaces.",
    modules: 42,
    hours: 85,
    level: "Beginner",
    icon: <BookOpen className="h-5 w-5" />,
    progressPercent: 42
  },
  {
    title: "Back-End Developer Path",
    description: "Learn server-side programming, databases, and APIs to power web applications.",
    modules: 38,
    hours: 78,
    level: "Intermediate",
    icon: <BookText className="h-5 w-5" />
  },
  {
    title: "Full-Stack Developer Path",
    description: "Combine front-end and back-end skills to build complete web applications.",
    modules: 65,
    hours: 130,
    level: "Advanced",
    icon: <BookCheck className="h-5 w-5" />
  }
];

const recommendedCourses: Course[] = [
  {
    title: "Advanced React Patterns",
    author: "Sarah Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=1",
    level: "Advanced",
    tags: ["React", "JavaScript", "Frontend"],
    duration: "12 hours",
    lessons: 24,
    progressPercent: 15
  },
  {
    title: "TypeScript Fundamentals",
    author: "Michael Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=2",
    level: "Intermediate",
    tags: ["TypeScript", "JavaScript"],
    duration: "8 hours",
    lessons: 16
  },
  {
    title: "Data Structures & Algorithms",
    author: "Alex Rodriguez",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    level: "Advanced",
    tags: ["DSA", "Problem Solving"],
    duration: "15 hours",
    lessons: 30
  }
];

const allCourses: Course[] = [
  ...recommendedCourses,
  {
    title: "Introduction to Python",
    author: "Emily Parker",
    authorAvatar: "https://i.pravatar.cc/150?img=4",
    level: "Beginner",
    tags: ["Python", "Backend"],
    duration: "10 hours",
    lessons: 20
  },
  {
    title: "Machine Learning Basics",
    author: "David Lee",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    level: "Intermediate",
    tags: ["ML", "Python", "Data Science"],
    duration: "18 hours",
    lessons: 36
  },
  {
    title: "UI/UX Design Principles",
    author: "Nina Smith",
    authorAvatar: "https://i.pravatar.cc/150?img=6",
    level: "Beginner",
    tags: ["Design", "UI", "UX"],
    duration: "6 hours",
    lessons: 12
  }
];

const tutorials: Tutorial[] = [
  {
    title: "Building a REST API with Node.js and Express",
    description: "Learn how to create a RESTful API using Node.js, Express, and MongoDB to power your web applications.",
    readTime: "15 min",
    date: "May 8, 2025",
    tags: ["Node.js", "Express", "API"]
  },
  {
    title: "CSS Grid Layout Mastery",
    description: "Master CSS Grid Layout to create complex, responsive web layouts with less code and more flexibility.",
    readTime: "12 min",
    date: "May 6, 2025",
    tags: ["CSS", "Frontend", "Layout"]
  },
  {
    title: "Understanding JavaScript Closures",
    description: "Dive deep into JavaScript closures, how they work, and how to use them effectively in your code.",
    readTime: "10 min",
    date: "May 5, 2025",
    tags: ["JavaScript", "Programming"]
  },
  {
    title: "Git Workflow for Teams",
    description: "Learn efficient Git workflows for collaboration in development teams, including branching strategies and code reviews.",
    readTime: "18 min",
    date: "May 4, 2025",
    tags: ["Git", "DevOps", "Collaboration"]
  },
  {
    title: "Deploying React Apps with GitHub Actions",
    description: "Set up continuous deployment for React applications using GitHub Actions to automate your build and deployment process.",
    readTime: "14 min",
    date: "May 2, 2025",
    tags: ["React", "CI/CD", "DevOps"]
  },
  {
    title: "Building Accessible Web Forms",
    description: "Create inclusive, accessible web forms that comply with WCAG guidelines and provide a better user experience for all.",
    readTime: "16 min",
    date: "May 1, 2025",
    tags: ["Accessibility", "HTML", "Forms"]
  }
];

export default Learn;
