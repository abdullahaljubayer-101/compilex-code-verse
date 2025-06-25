
import React, { useState } from 'react';
import { ArrowLeft, Edit, CheckCircle, XCircle, Eye, Heart, Clock, User } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const AdminTutorialDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const tutorial = {
    id: parseInt(id || '1'),
    title: 'Introduction to React Hooks',
    author: 'John Doe',
    category: 'React',
    status: 'pending',
    readTime: '8 min',
    views: 0,
    likes: 0,
    createdAt: '2024-01-20',
    content: `# Introduction to React Hooks

React Hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features in functional components.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.

## Basic Rules of Hooks

1. **Only call Hooks at the top level.** Don't call Hooks inside loops, conditions, or nested functions.
2. **Only call Hooks from React functions.** Don't call Hooks from regular JavaScript functions.

## useState Hook

The \`useState\` Hook lets you add React state to function components.

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The \`useEffect\` Hook lets you perform side effects in function components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Conclusion

React Hooks provide a more direct API to the React concepts you already know. They offer a powerful way to share stateful logic between components without changing your component hierarchy.`,
    tags: ['React', 'JavaScript', 'Frontend', 'Hooks'],
    difficulty: 'Beginner'
  };

  const handleApprove = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Tutorial approved:', tutorial.id);
      setIsLoading(false);
      navigate('/admin/tutorials');
    }, 1000);
  };

  const handleReject = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Tutorial rejected:', tutorial.id);
      setIsLoading(false);
      navigate('/admin/tutorials');
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'rejected': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
              <Link to="/admin/tutorials">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tutorials
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-white">Tutorial Details</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to={`/admin/tutorials/${tutorial.id}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Tutorial
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-2xl mb-3">{tutorial.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className={getStatusColor(tutorial.status)}>
                        {tutorial.status}
                      </Badge>
                      <Badge variant="outline" className="text-gray-300">
                        {tutorial.category}
                      </Badge>
                      <Badge className={getDifficultyColor(tutorial.difficulty)}>
                        {tutorial.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>by {tutorial.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{tutorial.readTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Tutorial Content</h3>
                    <div className="text-gray-300 whitespace-pre-wrap">
                      {tutorial.content}
                    </div>
                  </div>

                  <Separator className="bg-compliex-gray-dark" />

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tutorial.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Tutorial Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-medium">{tutorial.views}</p>
                    <p className="text-gray-400 text-sm">Total Views</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-medium">{tutorial.likes}</p>
                    <p className="text-gray-400 text-sm">Total Likes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-medium">{tutorial.createdAt}</p>
                    <p className="text-gray-400 text-sm">Created Date</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {tutorial.status === 'pending' && (
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Review Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={handleApprove}
                    disabled={isLoading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {isLoading ? 'Publishing...' : 'Publish Tutorial'}
                  </Button>
                  <Button
                    onClick={handleReject}
                    disabled={isLoading}
                    variant="destructive"
                    className="w-full"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    {isLoading ? 'Rejecting...' : 'Reject Tutorial'}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTutorialDetail;
