
import React, { useState } from 'react';
import { Search, Plus, Edit, Eye, Trash2, Filter } from 'lucide-react';
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

const AdminProblems: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      category: 'Array',
      status: 'approved',
      author: 'Admin',
      submissions: 1247,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Binary Tree Inorder Traversal',
      difficulty: 'Medium',
      category: 'Tree',
      status: 'pending',
      author: 'John Doe',
      submissions: 0,
      createdAt: '2024-01-20'
    },
    {
      id: 3,
      title: 'Merge Two Sorted Lists',
      difficulty: 'Easy',
      category: 'Linked List',
      status: 'approved',
      author: 'Admin',
      submissions: 892,
      createdAt: '2024-01-10'
    },
    {
      id: 4,
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      category: 'Stack',
      status: 'rejected',
      author: 'Jane Smith',
      submissions: 0,
      createdAt: '2024-01-18'
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Hard': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500/20 text-green-400';
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
            <h1 className="text-3xl font-bold text-white mb-2">Problems Management</h1>
            <p className="text-gray-400">Manage coding problems and challenges</p>
          </div>
          <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
            <Link to="/admin/problems/create">
              <Plus className="h-4 w-4 mr-2" />
              Create Problem
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <Card className="bg-compliex-dark-lighter border-compliex-gray-dark mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search problems..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-compliex-dark border-compliex-gray-dark text-white"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('all')}
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === 'approved' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('approved')}
                >
                  Approved
                </Button>
                <Button
                  variant={filterStatus === 'pending' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('pending')}
                >
                  Pending
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Problems Table */}
        <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
          <CardHeader>
            <CardTitle className="text-white">Problems List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-compliex-gray-dark">
                  <TableHead className="text-gray-300">Title</TableHead>
                  <TableHead className="text-gray-300">Difficulty</TableHead>
                  <TableHead className="text-gray-300">Category</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Author</TableHead>
                  <TableHead className="text-gray-300">Submissions</TableHead>
                  <TableHead className="text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((problem) => (
                  <TableRow key={problem.id} className="border-compliex-gray-dark">
                    <TableCell className="text-white font-medium">{problem.title}</TableCell>
                    <TableCell>
                      <Badge className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">{problem.category}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(problem.status)}>
                        {problem.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">{problem.author}</TableCell>
                    <TableCell className="text-gray-300">{problem.submissions}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" asChild>
                          <Link to={`/admin/problems/${problem.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="ghost" asChild>
                          <Link to={`/admin/problems/${problem.id}/edit`}>
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

export default AdminProblems;
