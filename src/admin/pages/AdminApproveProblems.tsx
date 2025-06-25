
import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye, Clock } from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const AdminApproveProblems: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const pendingProblems = [
    {
      id: 1,
      title: 'Binary Tree Maximum Depth',
      author: 'John Doe',
      difficulty: 'Easy',
      category: 'Tree',
      submittedAt: '2024-01-20',
      description: 'Given the root of a binary tree, return its maximum depth...',
    },
    {
      id: 2,
      title: 'Longest Palindromic Substring',
      author: 'Jane Smith',
      difficulty: 'Medium',
      category: 'String',
      submittedAt: '2024-01-19',
      description: 'Given a string s, return the longest palindromic substring in s...',
    },
    {
      id: 3,
      title: 'Merge K Sorted Lists',
      author: 'Mike Johnson',
      difficulty: 'Hard',
      category: 'Linked List',
      submittedAt: '2024-01-18',
      description: 'You are given an array of k linked-lists lists...',
    },
  ];

  const handleApprove = (problemId: number) => {
    console.log('Approving problem:', problemId);
  };

  const handleReject = (problemId: number) => {
    console.log('Rejecting problem:', problemId, 'Reason:', rejectionReason);
    setSelectedProblem(null);
    setRejectionReason('');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Hard': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <AdminNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Approve Problems</h1>
          <p className="text-gray-400">Review and approve user-submitted problems</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {pendingProblems.map((problem) => (
            <Card key={problem.id} className="bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg mb-2">{problem.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-gray-300">
                        {problem.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>Submitted {problem.submittedAt}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">by {problem.author}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {problem.description}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => handleApprove(problem.id)}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="flex-1"
                    onClick={() => setSelectedProblem(problem.id)}
                  >
                    <XCircle className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="px-3"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rejection Modal */}
        {selectedProblem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md bg-compliex-dark-lighter border-compliex-gray-dark">
              <CardHeader>
                <CardTitle className="text-white">Reject Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="reason" className="text-gray-300">
                    Reason for rejection (optional)
                  </Label>
                  <Textarea
                    id="reason"
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Provide feedback to the author..."
                    className="bg-compliex-dark border-compliex-gray-dark text-white"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="destructive"
                    className="flex-1"
                    onClick={() => handleReject(selectedProblem)}
                  >
                    Reject Problem
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedProblem(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApproveProblems;
