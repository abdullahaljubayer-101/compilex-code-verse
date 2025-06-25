
import React from 'react';
import { ArrowLeft, Edit, Trash2, Play, Users, Star, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdminCourseDetail: React.FC = () => {
  const { id } = useParams();

  // Mock data - in real app, this would come from API
  const course = {
    id: parseInt(id || '1'),
    title: 'Complete React Developer Course',
    description: 'Master React from basics to advanced concepts. Learn hooks, context, state management, routing, and build real-world projects.',
    instructor: 'Sarah Johnson',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '12 hours',
    students: 1247,
    rating: 4.8,
    status: 'published',
    price: 99,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    thumbnail: '/placeholder.svg',
    modules: [
      { title: 'Introduction to React', duration: '45 min', lessons: 5 },
      { title: 'Components and JSX', duration: '1h 30min', lessons: 8 },
      { title: 'State and Props', duration: '2h 15min', lessons: 12 },
      { title: 'Hooks Deep Dive', duration: '3h 45min', lessons: 15 },
      { title: 'Advanced Patterns', duration: '2h 30min', lessons: 10 },
      { title: 'Project Building', duration: '1h 45min', lessons: 7 }
    ],
    requirements: [
      'Basic knowledge of HTML and CSS',
      'Understanding of JavaScript fundamentals',
      'Familiarity with ES6+ features'
    ],
    learningOutcomes: [
      'Build modern React applications from scratch',
      'Master React Hooks and Context API',
      'Implement state management solutions',
      'Create responsive and interactive UIs'
    ]
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400';
      case 'draft': return 'bg-yellow-500/20 text-yellow-400';
      case 'archived': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
            <Link to="/admin/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
            <div className="flex items-center gap-3">
              <Badge className={getLevelColor(course.level)}>
                {course.level}
              </Badge>
              <Badge className={getStatusColor(course.status)}>
                {course.status}
              </Badge>
              <span className="text-gray-400">by {course.instructor}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
              <Link to={`/admin/courses/${id}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
            <Button variant="destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-compliex-dark rounded-lg mb-6 flex items-center justify-center">
                  <Play className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-gray-300 mb-6">{course.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-compliex-red mx-auto mb-2" />
                    <p className="text-white font-semibold">{course.duration}</p>
                    <p className="text-gray-400 text-sm">Duration</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-compliex-red mx-auto mb-2" />
                    <p className="text-white font-semibold">{course.students}</p>
                    <p className="text-gray-400 text-sm">Students</p>
                  </div>
                  <div className="text-center">
                    <Star className="h-8 w-8 text-compliex-red mx-auto mb-2" />
                    <p className="text-white font-semibold">{course.rating}</p>
                    <p className="text-gray-400 text-sm">Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="h-8 w-8 bg-compliex-red rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">$</span>
                    </div>
                    <p className="text-white font-semibold">${course.price}</p>
                    <p className="text-gray-400 text-sm">Price</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {course.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">What You'll Learn</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {course.learningOutcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Course Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="bg-compliex-dark p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-white font-medium">{module.title}</h4>
                          <p className="text-gray-400 text-sm">{module.lessons} lessons</p>
                        </div>
                        <span className="text-gray-400 text-sm">{module.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Category</p>
                  <p className="text-white">{course.category}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Instructor</p>
                  <p className="text-white">{course.instructor}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Created</p>
                  <p className="text-white">{course.createdAt}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Last Updated</p>
                  <p className="text-white">{course.updatedAt}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Total Enrollments</p>
                  <p className="text-2xl font-bold text-white">{course.students}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Average Rating</p>
                  <p className="text-2xl font-bold text-yellow-400">{course.rating}/5</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Revenue</p>
                  <p className="text-2xl font-bold text-green-400">${course.students * course.price}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCourseDetail;
