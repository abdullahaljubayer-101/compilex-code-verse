
import React, { useState } from 'react';
import { ArrowLeft, Plus, Trash2, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminCreateCourse: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');
  const [instructor, setInstructor] = useState('');
  const [lessons, setLessons] = useState([{ title: '', description: '', duration: '', videoUrl: '' }]);

  const addLesson = () => {
    setLessons([...lessons, { title: '', description: '', duration: '', videoUrl: '' }]);
  };

  const removeLesson = (index: number) => {
    setLessons(lessons.filter((_, i) => i !== index));
  };

  const updateLesson = (index: number, field: string, value: string) => {
    const updated = [...lessons];
    updated[index] = { ...updated[index], [field]: value };
    setLessons(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating course:', {
      title,
      description,
      category,
      level,
      price,
      instructor,
      lessons
    });
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
          <h1 className="text-3xl font-bold text-white">Create New Course</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <CardTitle className="text-white">Course Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-gray-300">Course Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter course title"
                  className="bg-compliex-dark border-compliex-gray-dark text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-gray-300">Course Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter detailed course description"
                  className="bg-compliex-dark border-compliex-gray-dark text-white min-h-32"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="Programming">Programming</SelectItem>
                      <SelectItem value="Computer Science">Computer Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-300">Level</Label>
                  <Select value={level} onValueChange={setLevel}>
                    <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="instructor" className="text-gray-300">Instructor Name</Label>
                  <Input
                    id="instructor"
                    value={instructor}
                    onChange={(e) => setInstructor(e.target.value)}
                    placeholder="Enter instructor name"
                    className="bg-compliex-dark border-compliex-gray-dark text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="price" className="text-gray-300">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter course price"
                    className="bg-compliex-dark border-compliex-gray-dark text-white"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Thumbnail */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <CardTitle className="text-white">Course Thumbnail</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-compliex-gray-dark rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-2">Upload course thumbnail</p>
                <p className="text-gray-400 text-sm">PNG, JPG up to 5MB</p>
                <Button className="mt-4 bg-compliex-red hover:bg-compliex-red-dark text-white">
                  Choose File
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Lessons */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Course Lessons</CardTitle>
                <Button type="button" onClick={addLesson} className="bg-compliex-red hover:bg-compliex-red-dark">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Lesson
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {lessons.map((lesson, index) => (
                <div key={index} className="bg-compliex-dark p-6 rounded-lg space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-white font-medium">Lesson {index + 1}</h4>
                    {lessons.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeLesson(index)}
                        variant="ghost"
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-300">Lesson Title</Label>
                      <Input
                        value={lesson.title}
                        onChange={(e) => updateLesson(index, 'title', e.target.value)}
                        placeholder="Enter lesson title"
                        className="bg-compliex-dark-lighter border-compliex-gray-dark text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Duration (minutes)</Label>
                      <Input
                        type="number"
                        value={lesson.duration}
                        onChange={(e) => updateLesson(index, 'duration', e.target.value)}
                        placeholder="Enter duration"
                        className="bg-compliex-dark-lighter border-compliex-gray-dark text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-gray-300">Lesson Description</Label>
                    <Textarea
                      value={lesson.description}
                      onChange={(e) => updateLesson(index, 'description', e.target.value)}
                      placeholder="Enter lesson description"
                      className="bg-compliex-dark-lighter border-compliex-gray-dark text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Video URL</Label>
                    <Input
                      value={lesson.videoUrl}
                      onChange={(e) => updateLesson(index, 'videoUrl', e.target.value)}
                      placeholder="Enter video URL or upload video"
                      className="bg-compliex-dark-lighter border-compliex-gray-dark text-white"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" className="bg-compliex-red hover:bg-compliex-red-dark text-white px-8">
              Create Course
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateCourse;
