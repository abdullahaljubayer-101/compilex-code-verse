
import React from 'react';
import { ArrowLeft, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdminProblemDetail: React.FC = () => {
  const { id } = useParams();

  const problem = {
    id: 1,
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    difficulty: 'Easy',
    category: 'Array',
    status: 'approved',
    author: 'John Doe',
    submissions: 1247,
    acceptanceRate: 85.2,
    createdAt: '2024-01-15',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9'
    ],
    testCases: [
      { input: '[2,7,11,15], 9', expectedOutput: '[0,1]' },
      { input: '[3,2,4], 6', expectedOutput: '[1,2]' },
      { input: '[3,3], 6', expectedOutput: '[0,1]' }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Hard': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
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
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
            <Link to="/admin/problems">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Problems
            </Link>
          </Button>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{problem.title}</h1>
            <div className="flex items-center gap-3">
              <Badge className={getDifficultyColor(problem.difficulty)}>
                {problem.difficulty}
              </Badge>
              <Badge className={getStatusColor(problem.status)}>
                {problem.status}
              </Badge>
              <span className="text-gray-400">by {problem.author}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
              <Link to={`/admin/problems/${id}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
            {problem.status === 'pending' && (
              <>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve
                </Button>
                <Button variant="destructive">
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject
                </Button>
              </>
            )}
            <Button variant="destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Problem Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Problem Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">{problem.description}</p>
                
                <h3 className="text-lg font-semibold text-white mb-3">Examples</h3>
                {problem.examples.map((example, index) => (
                  <div key={index} className="bg-compliex-dark p-4 rounded-lg mb-4">
                    <p className="text-gray-300 mb-2"><strong>Input:</strong> {example.input}</p>
                    <p className="text-gray-300 mb-2"><strong>Output:</strong> {example.output}</p>
                    <p className="text-gray-400"><strong>Explanation:</strong> {example.explanation}</p>
                  </div>
                ))}

                <h3 className="text-lg font-semibold text-white mb-3">Constraints</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {problem.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Test Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {problem.testCases.map((testCase, index) => (
                    <div key={index} className="bg-compliex-dark p-4 rounded-lg">
                      <p className="text-gray-300 mb-2"><strong>Input:</strong> {testCase.input}</p>
                      <p className="text-gray-300"><strong>Expected Output:</strong> {testCase.expectedOutput}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Total Submissions</p>
                  <p className="text-2xl font-bold text-white">{problem.submissions}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Acceptance Rate</p>
                  <p className="text-2xl font-bold text-green-400">{problem.acceptanceRate}%</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Category</p>
                  <p className="text-white">{problem.category}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Created</p>
                  <p className="text-white">{problem.createdAt}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProblemDetail;
