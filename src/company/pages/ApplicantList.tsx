
import React, { useState } from 'react';
import { Search, Filter, Eye, User, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyNavbar from '../components/CompanyNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const ApplicantList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobFilter, setJobFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data
  const applicants = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      jobTitle: 'Senior Frontend Developer',
      appliedDate: '2024-01-22',
      status: 'Under Review',
      experience: '5+ years',
      location: 'San Francisco, CA',
      skills: ['React', 'TypeScript', 'Node.js'],
      avatar: ''
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      jobTitle: 'Full Stack Engineer',
      appliedDate: '2024-01-21',
      status: 'Interview Scheduled',
      experience: '3-4 years',
      location: 'New York, NY',
      skills: ['JavaScript', 'Python', 'AWS'],
      avatar: ''
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      jobTitle: 'React Developer',
      appliedDate: '2024-01-20',
      status: 'New',
      experience: '2-3 years',
      location: 'Austin, TX',
      skills: ['React', 'Redux', 'CSS'],
      avatar: ''
    },
    {
      id: 4,
      name: 'John Smith',
      email: 'john.smith@email.com',
      jobTitle: 'DevOps Engineer',
      appliedDate: '2024-01-19',
      status: 'Under Review',
      experience: '4-5 years',
      location: 'Seattle, WA',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      avatar: ''
    },
    {
      id: 5,
      name: 'Lisa Park',
      email: 'lisa.park@email.com',
      jobTitle: 'Senior Frontend Developer',
      appliedDate: '2024-01-18',
      status: 'Rejected',
      experience: '6+ years',
      location: 'Los Angeles, CA',
      skills: ['Vue.js', 'Angular', 'CSS'],
      avatar: ''
    }
  ];

  const jobs = ['Senior Frontend Developer', 'Full Stack Engineer', 'React Developer', 'DevOps Engineer'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Under Review':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Interview Scheduled':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Rejected':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesJob = jobFilter === 'all' || applicant.jobTitle === jobFilter;
    const matchesStatus = statusFilter === 'all' || applicant.status === statusFilter;
    
    return matchesSearch && matchesJob && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-compliex-dark">
      <CompanyNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Applicants</h1>
            <p className="text-gray-300 mt-2">Manage and review job applications</p>
          </div>
        </div>

        {/* Filters */}
        <Card className="bg-compliex-dark-lighter border-compliex-gray-dark mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search applicants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-compliex-dark border-compliex-gray-dark text-white"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <Select value={jobFilter} onValueChange={setJobFilter}>
                  <SelectTrigger className="w-[200px] bg-compliex-dark border-compliex-gray-dark text-white">
                    <SelectValue placeholder="Filter by job" />
                  </SelectTrigger>
                  <SelectContent className="bg-compliex-dark-lighter border-compliex-gray-dark">
                    <SelectItem value="all" className="text-white hover:bg-compliex-gray-dark">All Jobs</SelectItem>
                    {jobs.map(job => (
                      <SelectItem key={job} value={job} className="text-white hover:bg-compliex-gray-dark">
                        {job}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px] bg-compliex-dark border-compliex-gray-dark text-white">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent className="bg-compliex-dark-lighter border-compliex-gray-dark">
                    <SelectItem value="all" className="text-white hover:bg-compliex-gray-dark">All Status</SelectItem>
                    <SelectItem value="New" className="text-white hover:bg-compliex-gray-dark">New</SelectItem>
                    <SelectItem value="Under Review" className="text-white hover:bg-compliex-gray-dark">Under Review</SelectItem>
                    <SelectItem value="Interview Scheduled" className="text-white hover:bg-compliex-gray-dark">Interview Scheduled</SelectItem>
                    <SelectItem value="Rejected" className="text-white hover:bg-compliex-gray-dark">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applicants List */}
        <div className="space-y-4">
          {filteredApplicants.map((applicant) => (
            <Card key={applicant.id} className="bg-compliex-dark-lighter border-compliex-gray-dark hover:border-compliex-red/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-compliex-gray-dark rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-gray-400" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{applicant.name}</h3>
                        <Badge className={getStatusColor(applicant.status)}>
                          {applicant.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                        <span>{applicant.email}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Applied {applicant.appliedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {applicant.location}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-300">{applicant.jobTitle}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-300">{applicant.experience}</span>
                        <div className="flex gap-1">
                          {applicant.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="border-compliex-gray-dark text-gray-300 text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {applicant.skills.length > 3 && (
                            <Badge variant="outline" className="border-compliex-gray-dark text-gray-300 text-xs">
                              +{applicant.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark" asChild>
                      <Link to={`/company/applicants/${applicant.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredApplicants.length === 0 && (
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardContent className="p-12 text-center">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No applicants found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ApplicantList;
