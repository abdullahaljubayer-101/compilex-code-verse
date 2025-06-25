
import React, { useState } from 'react';
import { Search, Eye, CheckCircle, XCircle, Building, MapPin, DollarSign } from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminJobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      status: 'approved',
      applicants: 45,
      postedAt: '2024-01-15',
      description: 'We are looking for an experienced full stack developer...'
    },
    {
      id: 2,
      title: 'Frontend React Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $130k',
      status: 'pending',
      applicants: 0,
      postedAt: '2024-01-20',
      description: 'Join our team as a frontend developer specializing in React...'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $150k',
      status: 'approved',
      applicants: 28,
      postedAt: '2024-01-12',
      description: 'Looking for a DevOps engineer to manage our cloud infrastructure...'
    },
    {
      id: 4,
      title: 'Junior Developer',
      company: 'WebDev Agency',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$60k - $80k',
      status: 'rejected',
      applicants: 0,
      postedAt: '2024-01-18',
      description: 'Entry-level position for a junior developer...'
    },
  ];

  const pendingJobs = jobs.filter(j => j.status === 'pending');
  const approvedJobs = jobs.filter(j => j.status === 'approved');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'rejected': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'bg-blue-500/20 text-blue-400';
      case 'Part-time': return 'bg-purple-500/20 text-purple-400';
      case 'Contract': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Jobs Management</h1>
          <p className="text-gray-400">Review and manage job postings</p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-compliex-dark-lighter border border-compliex-gray-dark">
            <TabsTrigger value="all" className="text-gray-300 data-[state=active]:text-white">
              All Jobs ({jobs.length})
            </TabsTrigger>
            <TabsTrigger value="pending" className="text-gray-300 data-[state=active]:text-white">
              Pending ({pendingJobs.length})
            </TabsTrigger>
            <TabsTrigger value="approved" className="text-gray-300 data-[state=active]:text-white">
              Approved ({approvedJobs.length})
            </TabsTrigger>
          </TabsList>

          {/* Search */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-compliex-dark border-compliex-gray-dark text-white"
                />
              </div>
            </CardContent>
          </Card>

          <TabsContent value="all">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <Card key={job.id} className="bg-compliex-dark-lighter border-compliex-gray-dark">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{job.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={getTypeColor(job.type)}>
                            {job.type}
                          </Badge>
                          <Badge className={getStatusColor(job.status)}>
                            {job.status}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm">
                        {job.applicants} applicants • Posted {job.postedAt}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        asChild
                      >
                        <Link to={`/admin/jobs/${job.id}`}>
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Link>
                      </Button>
                      {job.status === 'pending' && (
                        <>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pendingJobs.map((job) => (
                <Card key={job.id} className="bg-compliex-dark-lighter border-compliex-gray-dark">
                  <CardHeader>
                    <CardTitle className="text-white text-lg mb-2">{job.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-yellow-500/20 text-yellow-400">
                        Pending Review
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
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
                        <XCircle className="h-4 w-4 mr-1" />
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

          <TabsContent value="approved">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {approvedJobs.map((job) => (
                <Card key={job.id} className="bg-compliex-dark-lighter border-compliex-gray-dark">
                  <CardHeader>
                    <CardTitle className="text-white text-lg mb-2">{job.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-green-500/20 text-green-400">
                        Approved
                      </Badge>
                      <Badge className={getTypeColor(job.type)}>
                        {job.type}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm">
                        {job.applicants} applicants
                      </span>
                      <span className="text-gray-400 text-sm">
                        Posted {job.postedAt}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link to={`/admin/jobs/${job.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminJobs;
