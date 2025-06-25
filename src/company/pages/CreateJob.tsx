
import React, { useState } from 'react';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyNavbar from '../components/CompanyNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const CreateJob: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    employmentType: '',
    experienceLevel: '',
    salaryRange: '',
    description: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
    applicationDeadline: ''
  });
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job created:', { ...formData, skills });
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <CompanyNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" className="text-gray-300 hover:text-white p-0" asChild>
              <Link to="/company/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-white">Create New Job</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Job Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-300">Job Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g. Senior Frontend Developer"
                    className="bg-compliex-dark border-compliex-gray-dark text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-gray-300">Department</Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      placeholder="e.g. Engineering"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-gray-300">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="e.g. San Francisco, CA or Remote"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employmentType" className="text-gray-300">Employment Type</Label>
                    <Select value={formData.employmentType} onValueChange={(value) => handleInputChange('employmentType', value)}>
                      <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent className="bg-compliex-dark-lighter border-compliex-gray-dark">
                        <SelectItem value="full-time" className="text-white hover:bg-compliex-gray-dark">Full-time</SelectItem>
                        <SelectItem value="part-time" className="text-white hover:bg-compliex-gray-dark">Part-time</SelectItem>
                        <SelectItem value="contract" className="text-white hover:bg-compliex-gray-dark">Contract</SelectItem>
                        <SelectItem value="internship" className="text-white hover:bg-compliex-gray-dark">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienceLevel" className="text-gray-300">Experience Level</Label>
                    <Select value={formData.experienceLevel} onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                      <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-compliex-dark-lighter border-compliex-gray-dark">
                        <SelectItem value="entry" className="text-white hover:bg-compliex-gray-dark">Entry Level</SelectItem>
                        <SelectItem value="mid" className="text-white hover:bg-compliex-gray-dark">Mid Level</SelectItem>
                        <SelectItem value="senior" className="text-white hover:bg-compliex-gray-dark">Senior Level</SelectItem>
                        <SelectItem value="lead" className="text-white hover:bg-compliex-gray-dark">Lead/Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="salaryRange" className="text-gray-300">Salary Range</Label>
                    <Input
                      id="salaryRange"
                      value={formData.salaryRange}
                      onChange={(e) => handleInputChange('salaryRange', e.target.value)}
                      placeholder="e.g. $100,000 - $150,000"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="applicationDeadline" className="text-gray-300">Application Deadline</Label>
                    <Input
                      id="applicationDeadline"
                      type="date"
                      value={formData.applicationDeadline}
                      onChange={(e) => handleInputChange('applicationDeadline', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills" className="text-gray-300">Required Skills</Label>
                  <div className="flex gap-2">
                    <Input
                      id="skills"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill..."
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                    />
                    <Button type="button" onClick={handleAddSkill} className="bg-compliex-red hover:bg-compliex-red-dark">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-compliex-red text-compliex-red bg-compliex-red/10 cursor-pointer"
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        {skill} ×
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-300">Job Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe the role and what the candidate will be doing..."
                    className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[150px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responsibilities" className="text-gray-300">Key Responsibilities</Label>
                  <Textarea
                    id="responsibilities"
                    value={formData.responsibilities}
                    onChange={(e) => handleInputChange('responsibilities', e.target.value)}
                    placeholder="List the main responsibilities for this role..."
                    className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements" className="text-gray-300">Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    placeholder="List the required qualifications, experience, and skills..."
                    className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits" className="text-gray-300">Benefits & Perks</Label>
                  <Textarea
                    id="benefits"
                    value={formData.benefits}
                    onChange={(e) => handleInputChange('benefits', e.target.value)}
                    placeholder="Describe the benefits, perks, and compensation package..."
                    className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between items-center pt-6">
              <Button
                type="button"
                variant="outline"
                className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark"
                >
                  Save Draft
                </Button>
                <Button
                  type="submit"
                  className="bg-compliex-red hover:bg-compliex-red-dark text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Publish Job
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
