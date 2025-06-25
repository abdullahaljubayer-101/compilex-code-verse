
import React, { useState } from 'react';
import { ArrowLeft, Download, Mail, Phone, MapPin, Calendar, ExternalLink, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import CompanyNavbar from '../components/CompanyNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ApplicantDetail: React.FC = () => {
  const { id } = useParams();
  const [status, setStatus] = useState('Under Review');
  const [notes, setNotes] = useState('');

  // Mock applicant data
  const applicant = {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    jobTitle: 'Senior Frontend Developer',
    appliedDate: '2024-01-22',
    status: 'Under Review',
    experience: '5+ years',
    currentRole: 'Frontend Developer at Tech Solutions Inc.',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Jest', 'CSS/SASS', 'Git'],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'Stanford University',
        year: '2019',
        gpa: '3.8/4.0'
      }
    ],
    experience_details: [
      {
        role: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        duration: '2021 - Present',
        description: 'Led the development of responsive web applications using React and TypeScript. Collaborated with design and backend teams to deliver high-quality user experiences.'
      },
      {
        role: 'Junior Frontend Developer',
        company: 'Digital Innovations',
        duration: '2019 - 2021',
        description: 'Developed and maintained client-side applications using modern JavaScript frameworks. Participated in code reviews and agile development processes.'
      }
    ],
    portfolio: 'https://sarahjohnson.dev',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    github: 'https://github.com/sarahjohnson',
    coverLetter: 'I am excited to apply for the Senior Frontend Developer position at your company. With over 5 years of experience in frontend development and a passion for creating exceptional user experiences, I believe I would be a valuable addition to your team...',
    avatar: ''
  };

  const handleStatusUpdate = () => {
    console.log('Status updated to:', status);
    console.log('Notes:', notes);
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <CompanyNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" className="text-gray-300 hover:text-white p-0" asChild>
              <Link to="/company/applicants">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-white">Applicant Details</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Applicant Header */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-compliex-gray-dark rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-400" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-white">{applicant.name}</h2>
                        <Badge className={`${
                          status === 'New' ? 'bg-blue-500/10 text-blue-500' :
                          status === 'Under Review' ? 'bg-yellow-500/10 text-yellow-500' :
                          status === 'Interview Scheduled' ? 'bg-green-500/10 text-green-500' :
                          'bg-red-500/10 text-red-500'
                        }`}>
                          {status}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-300 mb-3">{applicant.currentRole}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {applicant.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {applicant.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {applicant.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Applied {applicant.appliedDate}
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark">
                          <Download className="h-4 w-4 mr-2" />
                          Download Resume
                        </Button>
                        <Button variant="outline" className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark" asChild>
                          <a href={applicant.portfolio} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Portfolio
                          </a>
                        </Button>
                        <Button variant="outline" className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark" asChild>
                          <a href={applicant.linkedin} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {applicant.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="border-compliex-red text-compliex-red bg-compliex-red/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Work Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicant.experience_details.map((exp, index) => (
                      <div key={index} className="border-l-2 border-compliex-red pl-4">
                        <h4 className="text-white font-semibold">{exp.role}</h4>
                        <p className="text-gray-300">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
                        <p className="text-gray-300 text-sm">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  {applicant.education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="text-white font-semibold">{edu.degree}</h4>
                      <p className="text-gray-300">{edu.school}</p>
                      <p className="text-gray-400 text-sm">Graduated {edu.year} • GPA: {edu.gpa}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Cover Letter */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Cover Letter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{applicant.coverLetter}</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Job Details */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Applied Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="text-white font-semibold mb-2">{applicant.jobTitle}</h4>
                  <p className="text-gray-300 text-sm">Experience Required: {applicant.experience}</p>
                </CardContent>
              </Card>

              {/* Status Update */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Update Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Select value={status} onValueChange={setStatus}>
                      <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-compliex-dark-lighter border-compliex-gray-dark">
                        <SelectItem value="New" className="text-white hover:bg-compliex-gray-dark">New</SelectItem>
                        <SelectItem value="Under Review" className="text-white hover:bg-compliex-gray-dark">Under Review</SelectItem>
                        <SelectItem value="Interview Scheduled" className="text-white hover:bg-compliex-gray-dark">Interview Scheduled</SelectItem>
                        <SelectItem value="Accepted" className="text-white hover:bg-compliex-gray-dark">Accepted</SelectItem>
                        <SelectItem value="Rejected" className="text-white hover:bg-compliex-gray-dark">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Add notes about this applicant..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[100px]"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleStatusUpdate}
                    className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white"
                  >
                    Update Status
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Interview
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetail;
