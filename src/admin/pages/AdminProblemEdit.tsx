
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

const AdminProblemEdit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const [problem, setProblem] = useState({
    id: parseInt(id || '1'),
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    difficulty: 'Easy',
    category: 'Array',
    status: 'approved',
    constraints: '2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9',
    examples: 'Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].',
    testCases: '[2,7,11,15], 9 -> [0,1]\n[3,2,4], 6 -> [1,2]\n[3,3], 6 -> [0,1]'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Problem updated:', problem);
      setIsLoading(false);
      navigate('/admin/problems');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setProblem(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
            <Link to="/admin/problems">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Problems
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-white">Edit Problem</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardHeader>
                  <CardTitle className="text-white">Problem Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-gray-300">Title</Label>
                    <Input
                      id="title"
                      value={problem.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-gray-300">Description</Label>
                    <Textarea
                      id="description"
                      value={problem.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="difficulty" className="text-gray-300">Difficulty</Label>
                      <Select value={problem.difficulty} onValueChange={(value) => handleInputChange('difficulty', value)}>
                        <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Easy">Easy</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-gray-300">Category</Label>
                      <Select value={problem.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Array">Array</SelectItem>
                          <SelectItem value="String">String</SelectItem>
                          <SelectItem value="Tree">Tree</SelectItem>
                          <SelectItem value="Graph">Graph</SelectItem>
                          <SelectItem value="Dynamic Programming">Dynamic Programming</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="status" className="text-gray-300">Status</Label>
                      <Select value={problem.status} onValueChange={(value) => handleInputChange('status', value)}>
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
                    <Label htmlFor="examples" className="text-gray-300">Examples</Label>
                    <Textarea
                      id="examples"
                      value={problem.examples}
                      onChange={(e) => handleInputChange('examples', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[100px]"
                      placeholder="Provide examples with input, output, and explanation"
                    />
                  </div>

                  <div>
                    <Label htmlFor="constraints" className="text-gray-300">Constraints</Label>
                    <Textarea
                      id="constraints"
                      value={problem.constraints}
                      onChange={(e) => handleInputChange('constraints', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[80px]"
                      placeholder="List the problem constraints"
                    />
                  </div>

                  <div>
                    <Label htmlFor="testCases" className="text-gray-300">Test Cases</Label>
                    <Textarea
                      id="testCases"
                      value={problem.testCases}
                      onChange={(e) => handleInputChange('testCases', e.target.value)}
                      className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[80px]"
                      placeholder="Define test cases for validation"
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
                    onClick={() => navigate('/admin/problems')}
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

export default AdminProblemEdit;
