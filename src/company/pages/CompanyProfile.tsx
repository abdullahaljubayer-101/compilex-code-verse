
import React, { useState } from 'react';
import { Building, MapPin, Users, Globe, Save } from 'lucide-react';
import CompanyNavbar from '../components/CompanyNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CompanyProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: 'Tech Corp Inc.',
    description: 'We are a leading technology company focused on creating innovative solutions that transform businesses and improve lives.',
    website: 'https://techcorp.com',
    industry: 'technology',
    companySize: '51-200',
    location: 'San Francisco, CA',
    founded: '2015',
    headquarters: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
    email: 'contact@techcorp.com'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Company profile updated:', formData);
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <CompanyNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Company Profile</h1>
              <p className="text-gray-300 mt-2">Manage your company information and settings</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Overview */}
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader className="flex flex-row items-center gap-2">
                <Building className="h-5 w-5 text-compliex-red" />
                <CardTitle className="text-white">Company Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-gray-300">Company Name</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="bg-compliex-dark border-compliex-gray-dark text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-300">Company Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe your company..."
                    className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[120px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-gray-300">Website</Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="founded" className="text-gray-300">Founded Year</Label>
                    <Input
                      id="founded"
                      value={formData.founded}
                      onChange={(e) => handleInputChange('founded', e.target.value)}
                      placeholder="2015"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-gray-300">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                        <SelectValue />
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

                  <div className="space-y-2">
                    <Label htmlFor="companySize" className="text-gray-300">Company Size</Label>
                    <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                      <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                        <SelectValue />
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
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader className="flex flex-row items-center gap-2">
                <MapPin className="h-5 w-5 text-compliex-red" />
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-gray-300">Primary Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="San Francisco, CA"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="headquarters" className="text-gray-300">Headquarters</Label>
                    <Input
                      id="headquarters"
                      value={formData.headquarters}
                      onChange={(e) => handleInputChange('headquarters', e.target.value)}
                      placeholder="San Francisco, CA"
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Contact Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
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
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-compliex-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">150+</div>
                  <div className="text-gray-300 text-sm">Employees</div>
                </CardContent>
              </Card>

              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark text-center">
                <CardContent className="p-6">
                  <Building className="h-8 w-8 text-compliex-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">12</div>
                  <div className="text-gray-300 text-sm">Active Jobs</div>
                </CardContent>
              </Card>

              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark text-center">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-compliex-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">5</div>
                  <div className="text-gray-300 text-sm">Office Locations</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end pt-6">
              <Button
                type="submit"
                className="bg-compliex-red hover:bg-compliex-red-dark text-white"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
