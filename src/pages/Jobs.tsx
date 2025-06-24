
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseBusiness, Search, HardDriveDownload, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  level: 'Entry' | 'Mid' | 'Senior';
  skills: string[];
  postedAt: string;
  salary?: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechGrowth Inc.',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    postedAt: '2025-04-12',
    salary: '$90k - $110k'
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataSphere',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Senior',
    skills: ['Node.js', 'Python', 'MongoDB'],
    postedAt: '2025-04-18',
    salary: '$120k - $150k'
  },
  {
    id: 3,
    title: 'Machine Learning Intern',
    company: 'AI Solutions',
    location: 'San Francisco, CA',
    type: 'Internship',
    level: 'Entry',
    skills: ['Python', 'TensorFlow', 'Data Analysis'],
    postedAt: '2025-04-22'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'CloudNative Inc.',
    location: 'Austin, TX',
    type: 'Contract',
    skills: ['Docker', 'Kubernetes', 'AWS'],
    level: 'Mid',
    postedAt: '2025-04-25',
    salary: '$100k - $130k'
  },
  {
    id: 5,
    title: 'Fullstack Developer',
    company: 'Innovate Tech',
    location: 'Remote',
    type: 'Full-time',
    skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL'],
    level: 'Senior',
    postedAt: '2025-04-26',
    salary: '$110k - $140k'
  },
  {
    id: 6,
    title: 'Mobile App Developer',
    company: 'AppWorks Ltd',
    location: 'Seattle, WA',
    type: 'Part-time',
    skills: ['React Native', 'Swift', 'Firebase'],
    level: 'Mid',
    postedAt: '2025-04-27',
    salary: '$80k - $95k'
  }
];

const JobCard: React.FC<{ job: Job; appliedJobs: number[]; onApply: (jobId: number) => void }> = ({ job, appliedJobs, onApply }) => {
  const hasApplied = appliedJobs.includes(job.id);
  
  return (
    <Card className="bg-compliex-dark-lighter border-compliex-gray-dark hover:border-compliex-red transition-colors mb-4">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-white">
              <Link to={`/jobs/${job.id}`} className="hover:text-compliex-red transition-colors">
                {job.title}
              </Link>
            </CardTitle>
            <CardDescription className="text-gray-400">
              {job.company} • {job.location}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-sm bg-compliex-gray-dark/60 text-white px-3 py-1 rounded-full">{job.type}</span>
            {job.salary && <span className="text-sm text-compliex-red">{job.salary}</span>}
            {hasApplied && (
              <div className="flex items-center gap-1 text-green-500 text-xs">
                <CheckCircle className="h-3 w-3" />
                <span>Applied</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 mb-3 text-sm text-gray-400">
          <span>Experience:</span>
          <span className="bg-compliex-dark/80 px-2 py-0.5 rounded text-white">{job.level}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, i) => (
            <span key={i} className="bg-compliex-dark/80 text-gray-300 px-3 py-1 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-compliex-gray-dark pt-3 mt-2">
        <span className="text-xs text-gray-400">Posted on {new Date(job.postedAt).toLocaleDateString()}</span>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" asChild>
            <Link to={`/jobs/${job.id}`}>View Details</Link>
          </Button>
          {hasApplied ? (
            <Button variant="outline" size="sm" disabled className="text-green-500 border-green-500 cursor-not-allowed">
              <CheckCircle className="h-3 w-3 mr-1" />
              Applied
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-gray-300 hover:text-white hover:bg-compliex-red hover:border-compliex-red"
              onClick={() => onApply(job.id)}
            >
              Apply Now
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

const Jobs: React.FC = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  
  const handleApply = (jobId: number) => {
    setAppliedJobs(prev => [...prev, jobId]);
    toast({
      title: "Application submitted!",
      description: "Your application has been sent to the employer.",
    });
  };
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLevel = selectedLevel ? job.level === selectedLevel : true;
    const matchesType = selectedType ? job.type === selectedType : true;
    
    return matchesSearch && matchesLevel && matchesType;
  });
  
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedLevel(null);
    setSelectedType(null);
  };
  
  // Get unique job types and experience levels for filters
  const jobTypes = Array.from(new Set(jobs.map(job => job.type)));
  const experienceLevels = Array.from(new Set(jobs.map(job => job.level)));

  return (
    <div className="flex flex-col min-h-screen bg-compliex-dark">
      <Navbar />
      <div className="container mx-auto px-4 py-24 flex-grow">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Tech <span className="text-compliex-red">Jobs</span> Board
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find your next opportunity in tech. Browse through our curated list of jobs from top companies looking for talented developers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Section */}
          <div className="lg:col-span-1">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Search</label>
                  <Input
                    type="text"
                    placeholder="Job title, company, or skill..."
                    className="bg-compliex-dark border-compliex-gray-dark"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Job Type</label>
                  <div className="space-y-2">
                    {jobTypes.map(type => (
                      <Button
                        key={type}
                        variant={selectedType === type ? "default" : "outline"}
                        size="sm"
                        className={`mr-2 mb-2 ${selectedType === type ? 'bg-compliex-red border-compliex-red' : 'text-gray-400'}`}
                        onClick={() => setSelectedType(selectedType === type ? null : type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Experience Level</label>
                  <div className="space-y-2">
                    {experienceLevels.map(level => (
                      <Button
                        key={level}
                        variant={selectedLevel === level ? "default" : "outline"}
                        size="sm"
                        className={`mr-2 mb-2 ${selectedLevel === level ? 'bg-compliex-red border-compliex-red' : 'text-gray-400'}`}
                        onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 text-gray-400" 
                  onClick={handleResetFilters}
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Jobs List Section */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <div className="text-white flex items-center">
                <BriefcaseBusiness className="mr-2 text-compliex-red" />
                <span className="font-medium">{filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found</span>
                {appliedJobs.length > 0 && (
                  <span className="ml-4 text-green-500 text-sm">
                    • {appliedJobs.length} applied
                  </span>
                )}
              </div>
              <Button variant="outline" className="text-gray-400" size="sm">
                <HardDriveDownload className="mr-1 h-4 w-4" /> Export
              </Button>
            </div>
            
            {filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} appliedJobs={appliedJobs} onApply={handleApply} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark">
                <p className="text-gray-400">No jobs matching your criteria.</p>
                <Button 
                  variant="link" 
                  className="text-compliex-red mt-2" 
                  onClick={handleResetFilters}
                >
                  Clear filters and try again
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* For Employers Section */}
        <div className="mt-16 bg-compliex-dark-lighter border border-compliex-gray-dark rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Are you hiring?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Post your job listing on our platform and reach thousands of qualified developers ready to take on new challenges.
          </p>
          <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white">
            Post a Job
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
