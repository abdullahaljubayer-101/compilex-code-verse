
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, DollarSign, Users, Building, Calendar, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Mock job data - in a real app this would come from an API
const jobsData = {
  '1': {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechGrowth Inc.',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    postedAt: '2025-04-12',
    salary: '$90k - $110k',
    description: 'We are looking for a talented Frontend Developer to join our growing team. You will be responsible for building user-facing features and ensuring great user experience across our web applications.',
    requirements: [
      '3+ years of experience with React and JavaScript',
      'Strong knowledge of TypeScript',
      'Experience with modern CSS frameworks (Tailwind CSS preferred)',
      'Understanding of responsive design principles',
      'Experience with version control (Git)',
      'Strong problem-solving skills'
    ],
    responsibilities: [
      'Develop and maintain user-facing web applications',
      'Collaborate with designers to implement UI/UX designs',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and team meetings',
      'Stay up-to-date with the latest frontend technologies'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Health, dental, and vision insurance',
      'Flexible working hours and remote work options',
      'Professional development budget',
      '4 weeks paid vacation'
    ],
    companyInfo: {
      size: '50-100 employees',
      industry: 'Technology',
      founded: '2018'
    }
  }
};

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [hasApplied, setHasApplied] = useState(false);
  
  const job = jobsData[id as keyof typeof jobsData];

  if (!job) {
    return (
      <div className="min-h-screen bg-compliex-dark">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Job Not Found</h1>
          <p className="text-gray-400 mb-6">The job you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/jobs">Back to Jobs</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleApply = () => {
    setHasApplied(true);
    toast({
      title: "Application submitted!",
      description: "Your application has been sent to the employer.",
    });
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" className="text-gray-400 hover:text-white mb-6" asChild>
            <Link to="/jobs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
          </Button>
          
          {/* Job Header */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark mb-8">
            <CardHeader>
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">{job.title}</CardTitle>
                  <div className="flex items-center gap-4 text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Posted {new Date(job.postedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-compliex-red text-white">{job.type}</Badge>
                    <Badge variant="outline" className="border-compliex-gray-dark text-gray-300">{job.level}</Badge>
                    {job.salary && (
                      <Badge variant="outline" className="border-compliex-gray-dark text-gray-300">
                        {job.salary}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="bg-compliex-dark/80 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  {hasApplied ? (
                    <Button disabled className="bg-green-600 text-white cursor-not-allowed">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Applied
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleApply}
                      className="bg-compliex-red hover:bg-compliex-red-dark text-white"
                    >
                      Apply Now
                    </Button>
                  )}
                  <Button variant="outline" className="text-gray-300 hover:text-white hover:bg-compliex-gray-dark">
                    Save Job
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Description */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
              
              {/* Requirements */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-2">
                        <span className="text-compliex-red mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Responsibilities */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-2">
                        <span className="text-compliex-red mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Benefits */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-2">
                        <span className="text-compliex-red mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Company Info */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Company Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-compliex-red" />
                    <div>
                      <p className="text-gray-300 text-sm">Company Size</p>
                      <p className="text-white">{job.companyInfo.size}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-compliex-red" />
                    <div>
                      <p className="text-gray-300 text-sm">Industry</p>
                      <p className="text-white">{job.companyInfo.industry}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-compliex-red" />
                    <div>
                      <p className="text-gray-300 text-sm">Founded</p>
                      <p className="text-white">{job.companyInfo.founded}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Job Details */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Job Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-compliex-red" />
                    <div>
                      <p className="text-gray-300 text-sm">Job Type</p>
                      <p className="text-white">{job.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-compliex-red" />
                    <div>
                      <p className="text-gray-300 text-sm">Experience Level</p>
                      <p className="text-white">{job.level}</p>
                    </div>
                  </div>
                  
                  {job.salary && (
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-compliex-red" />
                      <div>
                        <p className="text-gray-300 text-sm">Salary Range</p>
                        <p className="text-white">{job.salary}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-compliex-red" />
                    <div>
                      <p className="text-gray-300 text-sm">Location</p>
                      <p className="text-white">{job.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;
