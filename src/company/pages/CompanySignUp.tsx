
import React, { useState } from 'react';
import { Eye, EyeOff, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CompanySignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    
    // Company Information
    companyName: '',
    companyWebsite: '',
    companySize: '',
    industry: '',
    companyDescription: '',
    companyLocation: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Company sign up:', formData);
  };

  return (
    <div className="min-h-screen bg-compliex-dark py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 bg-compliex-red rounded-lg">
                <Building className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-white">Create Company Account</CardTitle>
            <p className="text-gray-300">Join our platform to find the best talent</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-compliex-gray-dark pb-2">
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john.doe@company.com"
                    className="bg-compliex-dark border-compliex-gray-dark text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="bg-compliex-dark border-compliex-gray-dark text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Create a password"
                        className="bg-compliex-dark border-compliex-gray-dark text-white pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="Confirm your password"
                        className="bg-compliex-dark border-compliex-gray-dark text-white pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-compliex-gray-dark pb-2">
                  Company Information
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-gray-300">Company Name</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Tech Corp Inc."
                    className="bg-compliex-dark border-compliex-gray-dark text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyWebsite" className="text-gray-300">Company Website</Label>
                    <Input
                      id="companyWebsite"
                      type="url"
                      value={formData.companyWebsite}
                      onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                      placeholder="https://techcorp.com"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyLocation" className="text-gray-300">Location</Label>
                    <Input
                      id="companyLocation"
                      value={formData.companyLocation}
                      onChange={(e) => handleInputChange('companyLocation', e.target.value)}
                      placeholder="San Francisco, CA"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companySize" className="text-gray-300">Company Size</Label>
                    <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                      <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent className="bg-compliex-dark-lighter border-compliex-gray-dark">
                        <SelectItem value="1-10" className="text-white hover:bg-compliex-gray-dark">1-10 employees</SelectItem>
                        <SelectItem value="11-50" className="text-white hover:bg-compliex-gray-dark">11-50 employees</SelectItem>
                        <SelectItem value="51-200" className="text-white hover:bg-compliex-gray-dark">51-200 employees</SelectItem>
                        <SelectItem value="201-500" className="text-white hover:bg-compliex-gray-dark">201-500 employees</SelectItem>
                        <SelectItem value="500+" className="text-white hover:bg-compliex-gray-dark">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-gray-300">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-compliex-dark-lighter border-compliex-gray-dark">
                        <SelectItem value="technology" className="text-white hover:bg-compliex-gray-dark">Technology</SelectItem>
                        <SelectItem value="finance" className="text-white hover:bg-compliex-gray-dark">Finance</SelectItem>
                        <SelectItem value="healthcare" className="text-white hover:bg-compliex-gray-dark">Healthcare</SelectItem>
                        <SelectItem value="education" className="text-white hover:bg-compliex-gray-dark">Education</SelectItem>
                        <SelectItem value="retail" className="text-white hover:bg-compliex-gray-dark">Retail</SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-compliex-gray-dark">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyDescription" className="text-gray-300">Company Description</Label>
                  <Textarea
                    id="companyDescription"
                    value={formData.companyDescription}
                    onChange={(e) => handleInputChange('companyDescription', e.target.value)}
                    placeholder="Tell us about your company..."
                    className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[100px]"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white"
              >
                Create Company Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/company/signin" className="text-compliex-red hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanySignUp;
