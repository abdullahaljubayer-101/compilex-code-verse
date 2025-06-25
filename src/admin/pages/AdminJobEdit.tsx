
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

const AdminJobEdit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const [job, setJob] = useState({
    id: parseInt(id || '1'),
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $180k',
    status: 'approved',
    description: 'We are looking for an experienced full stack developer to join our growing team.',
    requirements: '5+ years of experience in full stack development\nStrong proficiency in React, Node.js, and TypeScript\nExperience with databases (PostgreSQL, MongoDB)',
    benefits: 'Competitive salary and equity package\nComprehensive health insurance\nFlexible working hours'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Job updated:', job);
      setIsLoading(false);
      navigate('/admin/jobs');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setJob(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
            <Link to="/admin/jobs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white">Edit Job</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Job Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-gray-300">Job Title</Label>
                    <Input
                      id="title"
                      value={job.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-300">Company</Label>
                    <Input
                      id="company"
                      value={job.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location" className="text-gray-300">Location</Label>
                      <Input
                        id="location"
                        value={job.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="salary" className="text-gray-300">Salary</Label>
                      <Input
                        id="salary"
                        value={job.salary}
                        onChange={(e) => handleInputChange('salary', e.target.value)}
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="type" className="text-gray-300">Job Type</Label>
                      <Select value={job.type} onValueChange={(value) => handleInputChange('type', value)}>
                        <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Part-time">Part-time</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                          <SelectItem value="Internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="status" className="text-gray-300">Status</Label>
                      <Select value={job.status} onValueChange={(value) => handleInputChange('status', value)}>
                        <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-gray-300">Job Description</Label>
                    <Textarea
                      id="description"
                      value={job.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[120px]"
                      placeholder="Provide a detailed job description"
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements" className="text-gray-300">Requirements</Label>
                    <Textarea
                      id="requirements"
                      value={job.requirements}
                      onChange={(e) => handleInputChange('requirements', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[100px]"
                      placeholder="List job requirements (one per line)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="benefits" className="text-gray-300">Benefits</Label>
                    <Textarea
                      id="benefits"
                      value={job.benefits}
                      onChange={(e) => handleInputChange('benefits', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[100px]"
                      placeholder="List job benefits (one per line)"
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
                    onClick={() => navigate('/admin/jobs')}
                  >
                    Cancel
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminJobEdit;
