
import React, { useState } from 'react';
import { Search, Plus, Edit, Eye, Trash2, Play } from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const AdminCourses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Johnson',
      category: 'Web Development',
      level: 'Intermediate',
      duration: '12 hours',
      students: 1247,
      rating: 4.8,
      status: 'published',
      price: 99,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      instructor: 'Mike Chen',
      category: 'Programming',
      level: 'Advanced',
      duration: '8 hours',
      students: 892,
      rating: 4.9,
      status: 'published',
      price: 79,
      createdAt: '2024-01-10'
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms',
      instructor: 'Alex Rodriguez',
      category: 'Computer Science',
      level: 'Intermediate',
      duration: '15 hours',
      students: 2156,
      rating: 4.7,
      status: 'published',
      price: 129,
      createdAt: '2024-01-05'
    },
  ];

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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Courses Management</h1>
            <p className="text-gray-400">Manage video courses and content</p>
          </div>
          <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
            <Link to="/admin/courses/create">
              <Plus className="h-4 w-4 mr-2" />
              Create Course
            </Link>
          </Button>
        </div>

        {/* Search */}
        <Card className="bg-compliex-dark-lighter border-compliex-gray-dark mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-compliex-dark border-compliex-gray-dark text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* Courses Table */}
        <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
          <CardHeader>
            <CardTitle className="text-white">Courses List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-compliex-gray-dark">
                  <TableHead className="text-gray-300">Course</TableHead>
                  <TableHead className="text-gray-300">Instructor</TableHead>
                  <TableHead className="text-gray-300">Level</TableHead>
                  <TableHead className="text-gray-300">Duration</TableHead>
                  <TableHead className="text-gray-300">Students</TableHead>
                  <TableHead className="text-gray-300">Rating</TableHead>
                  <TableHead className="text-gray-300">Price</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id} className="border-compliex-gray-dark">
                    <TableCell>
                      <div>
                        <p className="text-white font-medium">{course.title}</p>
                        <p className="text-gray-400 text-sm">{course.category}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-300">{course.instructor}</TableCell>
                    <TableCell>
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">{course.duration}</TableCell>
                    <TableCell className="text-gray-300">{course.students}</TableCell>
                    <TableCell className="text-yellow-400">★ {course.rating}</TableCell>
                    <TableCell className="text-gray-300">${course.price}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(course.status)}>
                        {course.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" asChild>
                          <Link to={`/admin/courses/${course.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="ghost" asChild>
                          <Link to={`/admin/courses/${course.id}/edit`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminCourses;
