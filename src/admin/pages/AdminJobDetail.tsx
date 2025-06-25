
import React, { useState } from 'react';
import { ArrowLeft, Edit, CheckCircle, XCircle, Building, MapPin, DollarSign, Users, Calendar } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const AdminJobDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const job = {
    id: parseInt(id || '1'),
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $180k',
    status: 'approved',
    applicants: 45,
    postedAt: '2024-01-15',
    description: `We are looking for an experienced full stack developer to join our growing team. You will be responsible for developing and maintaining both frontend and backend systems.

Key Responsibilities:
• Develop and maintain web applications using React and Node.js
• Collaborate with cross-functional teams to define and implement new features
• Write clean, maintainable, and well-documented code
• Participate in code reviews and technical discussions
• Troubleshoot and debug applications

Requirements:
• 5+ years of experience in full stack development
• Strong proficiency in React, Node.js, and TypeScript
• Experience with databases (PostgreSQL, MongoDB)
• Knowledge of cloud platforms (AWS, Azure)
• Excellent problem-solving skills`,
    requirements: [
      '5+ years of experience in full stack development',
      'Strong proficiency in React, Node.js, and TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud platforms (AWS, Azure)',
      'Excellent problem-solving skills'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health insurance',
      'Flexible working hours',
      '30 days paid vacation',
      'Professional development budget'
    ]
  };

  const handleApprove = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Job approved:', job.id);
      setIsLoading(false);
      navigate('/admin/jobs');
    }, 1000);
  };

  const handleReject = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Job rejected:', job.id);
      setIsLoading(false);
      navigate('/admin/jobs');
    }, 1000);
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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
              <Link to="/admin/jobs">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Jobs
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-white">Job Details</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to={`/admin/jobs/${job.id}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Job
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
                    <CardTitle className="text-white text-2xl mb-3">{job.title}</CardTitle>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                      <Badge variant="outline" className="text-gray-300">
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Job Description</h3>
                    <div className="text-gray-300 whitespace-pre-line">
                      {job.description}
                    </div>
                  </div>

                  <Separator className="bg-compliex-gray-dark" />

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                    <ul className="space-y-2 text-gray-300">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-compliex-red mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="bg-compliex-gray-dark" />

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                    <ul className="space-y-2 text-gray-300">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-compliex-red mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Job Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-medium">{job.applicants}</p>
                    <p className="text-gray-400 text-sm">Total Applicants</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-medium">{job.postedAt}</p>
                    <p className="text-gray-400 text-sm">Posted Date</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {job.status === 'pending' && (
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
                    {isLoading ? 'Approving...' : 'Approve Job'}
                  </Button>
                  <Button
                    onClick={handleReject}
                    disabled={isLoading}
                    variant="destructive"
                    className="w-full"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    {isLoading ? 'Rejecting...' : 'Reject Job'}
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

export default AdminJobDetail;
