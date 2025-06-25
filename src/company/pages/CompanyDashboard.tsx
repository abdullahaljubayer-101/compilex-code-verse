
import React from 'react';
import { Users, Briefcase, Eye, TrendingUp, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyNavbar from '../components/CompanyNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CompanyDashboard: React.FC = () => {
  // Mock data
  const stats = {
    totalJobs: 12,
    totalApplications: 148,
    activeJobs: 8,
    totalViews: 2340
  };

  const recentApplications = [
    { id: 1, jobTitle: "Senior Frontend Developer", applicantName: "Sarah Johnson", appliedDate: "2024-01-22", status: "Under Review" },
    { id: 2, jobTitle: "Full Stack Engineer", applicantName: "Mike Chen", appliedDate: "2024-01-21", status: "Interview Scheduled" },
    { id: 3, jobTitle: "React Developer", applicantName: "Emily Davis", appliedDate: "2024-01-20", status: "New" },
    { id: 4, jobTitle: "DevOps Engineer", applicantName: "John Smith", appliedDate: "2024-01-19", status: "Under Review" },
  ];

  const jobPerformance = [
    { title: "Senior Frontend Developer", applications: 34, views: 156 },
    { title: "Full Stack Engineer", applications: 28, views: 142 },
    { title: "React Developer", applications: 22, views: 98 },
    { title: "DevOps Engineer", applications: 19, views: 87 },
  ];

  return (
    <div className="min-h-screen bg-compliex-dark">
      <CompanyNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-300 mt-2">Welcome back! Here's what's happening with your jobs.</p>
          </div>
          <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
            <Link to="/company/create-job">
              <Plus className="h-4 w-4 mr-2" />
              Post New Job
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-compliex-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalJobs}</div>
              <p className="text-xs text-gray-400">+2 from last month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Applications</CardTitle>
              <Users className="h-4 w-4 text-compliex-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalApplications}</div>
              <p className="text-xs text-gray-400">+12 from last week</p>
            </CardContent>
          </Card>
          
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Jobs</CardTitle>
              <TrendingUp className="h-4 w-4 text-compliex-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.activeJobs}</div>
              <p className="text-xs text-gray-400">Currently accepting applications</p>
            </CardContent>
          </Card>
          
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-compliex-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalViews}</div>
              <p className="text-xs text-gray-400">Across all job postings</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Applications */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Recent Applications</CardTitle>
              <Button variant="outline" className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark" asChild>
                <Link to="/company/applicants">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-3 bg-compliex-dark rounded-lg border border-compliex-gray-dark">
                    <div>
                      <h4 className="text-white font-medium">{application.applicantName}</h4>
                      <p className="text-gray-300 text-sm">{application.jobTitle}</p>
                      <p className="text-gray-400 text-xs">{application.appliedDate}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded text-xs ${
                        application.status === 'New' ? 'bg-blue-500/10 text-blue-500' :
                        application.status === 'Under Review' ? 'bg-yellow-500/10 text-yellow-500' :
                        'bg-green-500/10 text-green-500'
                      }`}>
                        {application.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Job Performance */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <CardTitle className="text-white">Job Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobPerformance.map((job, index) => (
                  <div key={index} className="p-3 bg-compliex-dark rounded-lg border border-compliex-gray-dark">
                    <h4 className="text-white font-medium mb-2">{job.title}</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{job.applications} applications</span>
                      <span className="text-gray-300">{job.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
