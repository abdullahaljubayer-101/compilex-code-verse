
import React, { useState } from 'react';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const AdminCourseEdit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const [course, setCourse] = useState({
    id: parseInt(id || '1'),
    title: 'Complete React Developer Course',
    description: 'Master React from basics to advanced concepts. Learn hooks, context, state management, routing, and build real-world projects.',
    instructor: 'Sarah Johnson',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '12 hours',
    price: 99,
    status: 'published',
    requirements: ['Basic knowledge of HTML and CSS', 'Understanding of JavaScript fundamentals'],
    learningOutcomes: ['Build modern React applications', 'Master React Hooks and Context API'],
    modules: [
      { title: 'Introduction to React', duration: '45 min', lessons: 5 },
      { title: 'Components and JSX', duration: '1h 30min', lessons: 8 }
    ]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Course updated:', course);
      setIsLoading(false);
      navigate('/admin/courses');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setCourse(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: 'requirements' | 'learningOutcomes', index: number, value: string) => {
    setCourse(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'requirements' | 'learningOutcomes') => {
    setCourse(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'requirements' | 'learningOutcomes', index: number) => {
    setCourse(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
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
          <h1 className="text-3xl font-bold text-white">Edit Course</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-gray-300">Course Title</Label>
                    <Input
                      id="title"
                      value={course.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-gray-300">Description</Label>
                    <Textarea
                      id="description"
                      value={course.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="instructor" className="text-gray-300">Instructor</Label>
                      <Input
                        id="instructor"
                        value={course.instructor}
                        onChange={(e) => handleInputChange('instructor', e.target.value)}
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-gray-300">Category</Label>
                      <Select value={course.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Web Development">Web Development</SelectItem>
                          <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                          <SelectItem value="Data Science">Data Science</SelectItem>
                          <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                          <SelectItem value="DevOps">DevOps</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="level" className="text-gray-300">Level</Label>
                      <Select value={course.level} onValueChange={(value) => handleInputChange('level', value)}>
                        <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="duration" className="text-gray-300">Duration</Label>
                      <Input
                        id="duration"
                        value={course.duration}
                        onChange={(e) => handleInputChange('duration', e.target.value)}
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                        placeholder="e.g. 12 hours"
                      />
                    </div>

                    <div>
                      <Label htmlFor="price" className="text-gray-300">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={course.price}
                        onChange={(e) => handleInputChange('price', parseInt(e.target.value) || 0)}
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">Requirements</CardTitle>
                    <Button type="button" onClick={() => addArrayItem('requirements')} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {course.requirements.map((req, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={req}
                        onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                        placeholder="Enter requirement"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => removeArrayItem('requirements', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">Learning Outcomes</CardTitle>
                    <Button type="button" onClick={() => addArrayItem('learningOutcomes')} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={outcome}
                        onChange={(e) => handleArrayChange('learningOutcomes', index, e.target.value)}
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                        placeholder="Enter learning outcome"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => removeArrayItem('learningOutcomes', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Actions Sidebar */}
            <div>
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="status" className="text-gray-300">Status</Label>
                    <Select value={course.status} onValueChange={(value) => handleInputChange('status', value)}>
                      <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate('/admin/courses')}
                  >
                    Cancel
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCourseEdit;
