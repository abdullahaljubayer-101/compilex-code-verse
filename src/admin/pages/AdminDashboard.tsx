
import React from 'react';
import { Code, BookOpen, FileText, Briefcase, Users, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const stats = [
    { title: 'Total Problems', count: 245, icon: Code, change: '+12' },
    { title: 'Total Courses', count: 48, icon: BookOpen, change: '+3' },
    { title: 'Total Tutorials', count: 156, icon: FileText, change: '+8' },
    { title: 'Total Jobs', count: 89, icon: Briefcase, change: '+15' },
    { title: 'Active Users', count: 1247, icon: Users, change: '+67' },
  ];

  const pendingApprovals = [
    { type: 'Problem', title: 'Two Sum Algorithm', author: 'John Doe', status: 'pending' },
    { type: 'Tutorial', title: 'React Hooks Guide', author: 'Jane Smith', status: 'pending' },
    { type: 'Job', title: 'Senior Developer at Tech Corp', company: 'TechCorp', status: 'pending' },
    { type: 'Problem', title: 'Binary Tree Traversal', author: 'Mike Johnson', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-compliex-dark">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage and monitor platform content</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.count}</p>
                    <p className="text-green-400 text-sm">{stat.change} this month</p>
                  </div>
                  <div className="p-3 bg-compliex-red/20 rounded-lg">
                    <stat.icon className="h-6 w-6 text-compliex-red" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pending Approvals */}
          <Card className="lg:col-span-2 bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-compliex-red" />
                Pending Approvals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-compliex-dark rounded-lg border border-compliex-gray-dark">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{item.title}</p>
                        <p className="text-gray-400 text-sm">
                          {item.type} by {item.author || item.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
                <Link to="/admin/problems/create">Create Problem</Link>
              </Button>
              <Button className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
                <Link to="/admin/courses/create">Create Course</Link>
              </Button>
              <Button className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
                <Link to="/admin/tutorials/create">Create Tutorial</Link>
              </Button>
              <Button className="w-full bg-compliex-gray-dark hover:bg-compliex-gray-light text-white" asChild>
                <Link to="/admin/problems/approve">Review Problems</Link>
              </Button>
              <Button className="w-full bg-compliex-gray-dark hover:bg-compliex-gray-light text-white" asChild>
                <Link to="/admin/tutorials/approve">Review Tutorials</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
