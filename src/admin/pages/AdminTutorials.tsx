
import React, { useState } from 'react';
import { Search, Plus, Edit, Eye, Trash2, CheckCircle, Clock } from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const AdminTutorials: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tutorials = [
    {
      id: 1,
      title: 'Introduction to React Hooks',
      author: 'Admin',
      category: 'React',
      status: 'published',
      readTime: '8 min',
      views: 2847,
      likes: 156,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Advanced TypeScript Patterns',
      author: 'Jane Smith',
      category: 'TypeScript',
      status: 'pending',
      readTime: '12 min',
      views: 0,
      likes: 0,
      createdAt: '2024-01-20'
    },
    {
      id: 3,
      title: 'Building REST APIs with Node.js',
      author: 'Mike Johnson',
      category: 'Backend',
      status: 'published',
      readTime: '15 min',
      views: 1923,
      likes: 98,
      createdAt: '2024-01-10'
    },
  ];

  const pendingTutorials = tutorials.filter(t => t.status === 'pending');
  const publishedTutorials = tutorials.filter(t => t.status === 'published');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'rejected': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Tutorials Management</h1>
            <p className="text-gray-400">Manage tutorials and articles</p>
          </div>
          <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
            <Link to="/admin/tutorials/create">
              <Plus className="h-4 w-4 mr-2" />
              Create Tutorial
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-compliex-dark-lighter border border-compliex-gray-dark">
            <TabsTrigger value="all" className="text-gray-300 data-[state=active]:text-white">
              All Tutorials ({tutorials.length})
            </TabsTrigger>
            <TabsTrigger value="pending" className="text-gray-300 data-[state=active]:text-white">
              Pending ({pendingTutorials.length})
            </TabsTrigger>
            <TabsTrigger value="published" className="text-gray-300 data-[state=active]:text-white">
              Published ({publishedTutorials.length})
            </TabsTrigger>
          </TabsList>

          {/* Search */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-compliex-dark border-compliex-gray-dark text-white"
                />
              </div>
            </CardContent>
          </Card>

          <TabsContent value="all">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">All Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-compliex-gray-dark">
                      <TableHead className="text-gray-300">Title</TableHead>
                      <TableHead className="text-gray-300">Author</TableHead>
                      <TableHead className="text-gray-300">Category</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Views</TableHead>
                      <TableHead className="text-gray-300">Likes</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tutorials.map((tutorial) => (
                      <TableRow key={tutorial.id} className="border-compliex-gray-dark">
                        <TableCell>
                          <div>
                            <p className="text-white font-medium">{tutorial.title}</p>
                            <p className="text-gray-400 text-sm">{tutorial.readTime} read</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-300">{tutorial.author}</TableCell>
                        <TableCell className="text-gray-300">{tutorial.category}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(tutorial.status)}>
                            {tutorial.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">{tutorial.views}</TableCell>
                        <TableCell className="text-gray-300">{tutorial.likes}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" asChild>
                              <Link to={`/admin/tutorials/${tutorial.id}`}>
                                <Eye className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button size="sm" variant="ghost" asChild>
                              <Link to={`/admin/tutorials/${tutorial.id}/edit`}>
                                <Edit className="h-4 w-4" />
                              </Link>
                            </Button>
                            {tutorial.status === 'pending' && (
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}
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
          </TabsContent>

          <TabsContent value="pending">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {pendingTutorials.map((tutorial) => (
                <Card key={tutorial.id} className="bg-compliex-dark-lighter border-compliex-gray-dark">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{tutorial.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-gray-300">
                            {tutorial.category}
                          </Badge>
                          <Badge className="bg-yellow-500/20 text-yellow-400">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm">
                          by {tutorial.author} • {tutorial.readTime} read
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" className="flex-1">
                        Reject
                      </Button>
                      <Button size="sm" variant="outline" className="px-3">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="published">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Published Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-compliex-gray-dark">
                      <TableHead className="text-gray-300">Title</TableHead>
                      <TableHead className="text-gray-300">Author</TableHead>
                      <TableHead className="text-gray-300">Views</TableHead>
                      <TableHead className="text-gray-300">Likes</TableHead>
                      <TableHead className="text-gray-300">Published</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {publishedTutorials.map((tutorial) => (
                      <TableRow key={tutorial.id} className="border-compliex-gray-dark">
                        <TableCell>
                          <div>
                            <p className="text-white font-medium">{tutorial.title}</p>
                            <p className="text-gray-400 text-sm">{tutorial.category}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-300">{tutorial.author}</TableCell>
                        <TableCell className="text-gray-300">{tutorial.views}</TableCell>
                        <TableCell className="text-gray-300">{tutorial.likes}</TableCell>
                        <TableCell className="text-gray-300">{tutorial.createdAt}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" asChild>
                              <Link to={`/admin/tutorials/${tutorial.id}`}>
                                <Eye className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button size="sm" variant="ghost" asChild>
                              <Link to={`/admin/tutorials/${tutorial.id}/edit`}>
                                <Edit className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminTutorials;
