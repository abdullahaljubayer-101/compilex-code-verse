
import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
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

const AdminTutorialEdit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const [tutorial, setTutorial] = useState({
    id: parseInt(id || '1'),
    title: 'Introduction to React Hooks',
    author: 'John Doe',
    category: 'React',
    status: 'pending',
    readTime: '8 min',
    difficulty: 'Beginner',
    content: `# Introduction to React Hooks

React Hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features in functional components.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components.`,
    tags: 'React, JavaScript, Frontend, Hooks',
    summary: 'Learn the basics of React Hooks and how to use useState and useEffect in your functional components.'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Tutorial updated:', tutorial);
      setIsLoading(false);
      navigate('/admin/tutorials');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setTutorial(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
            <Link to="/admin/tutorials">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tutorials
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white">Edit Tutorial</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Tutorial Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-gray-300">Title</Label>
                    <Input
                      id="title"
                      value={tutorial.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="author" className="text-gray-300">Author</Label>
                    <Input
                      id="author"
                      value={tutorial.author}
                      onChange={(e) => handleInputChange('author', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="category" className="text-gray-300">Category</Label>
                      <Select value={tutorial.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="React">React</SelectItem>
                          <SelectItem value="JavaScript">JavaScript</SelectItem>
                          <SelectItem value="TypeScript">TypeScript</SelectItem>
                          <SelectItem value="Backend">Backend</SelectItem>
                          <SelectItem value="CSS">CSS</SelectItem>
                          <SelectItem value="DevOps">DevOps</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="difficulty" className="text-gray-300">Difficulty</Label>
                      <Select value={tutorial.difficulty} onValueChange={(value) => handleInputChange('difficulty', value)}>
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
                      <Label htmlFor="status" className="text-gray-300">Status</Label>
                      <Select value={tutorial.status} onValueChange={(value) => handleInputChange('status', value)}>
                        <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="published">Published</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="readTime" className="text-gray-300">Read Time</Label>
                      <Input
                        id="readTime"
                        value={tutorial.readTime}
                        onChange={(e) => handleInputChange('readTime', e.target.value)}
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                        placeholder="e.g., 5 min"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tags" className="text-gray-300">Tags (comma-separated)</Label>
                      <Input
                        id="tags"
                        value={tutorial.tags}
                        onChange={(e) => handleInputChange('tags', e.target.value)}
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                        placeholder="React, JavaScript, Frontend"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="summary" className="text-gray-300">Summary</Label>
                    <Textarea
                      id="summary"
                      value={tutorial.summary}
                      onChange={(e) => handleInputChange('summary', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[80px]"
                      placeholder="Brief summary of the tutorial"
                    />
                  </div>

                  <div>
                    <Label htmlFor="content" className="text-gray-300">Content (Markdown)</Label>
                    <Textarea
                      id="content"
                      value={tutorial.content}
                      onChange={(e) => handleInputChange('content', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[400px] font-mono"
                      placeholder="Write your tutorial content in Markdown format"
                    />
                  </div>
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
                    onClick={() => navigate('/admin/tutorials')}
                  >
                    Cancel
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark mt-6">
                <CardHeader>
                  <CardTitle className="text-white text-sm">Preview</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400 text-sm">
                  <p>Use the preview tab in your browser to see how the tutorial will look when published.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminTutorialEdit;
