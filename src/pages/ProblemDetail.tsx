
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Check, Clock, Code, FileText, MessageSquare, Star, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';

// Mock problem data - in a real app this would come from an API
const problemData = {
  id: '1',
  title: 'Two Sum',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
  difficulty: 'Easy',
  tags: ['Array', 'Hash Table'],
  constraints: [
    '2 <= nums.length <= 104',
    '-109 <= nums[i] <= 109',
    '-109 <= target <= 109',
    'Only one valid answer exists.'
  ],
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
      explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
    }
  ],
  hints: [
    'A really brute force way would be to search for all possible pairs of numbers but that would be too slow.',
    'Try to use the hash table to reduce the lookup time complexity to O(1).'
  ],
  solvedCount: 5243,
  attemptCount: 7851,
  successRate: '66.7%',
  averageTime: '15 minutes',
  authorName: 'CompliexTeam',
  authorAvatar: 'https://github.com/shadcn.png',
  relatedProblems: ['Three Sum', 'Four Sum', 'Two Sum II'],
  startingCode: {
    javascript: `function twoSum(nums, target) {
  // Write your code here
  
};`,
    python: `def two_sum(nums, target):
    # Write your code here
    
    pass`,
    java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        
    }
}`
  }
};

const ProblemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [code, setCode] = useState(problemData.startingCode.javascript);
  const [language, setLanguage] = useState<'javascript' | 'python' | 'java'>('javascript');
  const [output, setOutput] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const handleLanguageChange = (newLanguage: 'javascript' | 'python' | 'java') => {
    setLanguage(newLanguage);
    setCode(problemData.startingCode[newLanguage]);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setOutput('Running test cases...\n\nTest case 1: nums = [2,7,11,15], target = 9\nYour output: [0,1]\nExpected: [0,1]\nStatus: ✓ Passed\n\nTest case 2: nums = [3,2,4], target = 6\nYour output: [1,2]\nExpected: [1,2]\nStatus: ✓ Passed');
      setIsRunning(false);
      toast({
        title: "Code executed",
        description: "Your code ran successfully.",
      });
    }, 1500);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setOutput('Evaluating solution...\n\nResults:\nTime: 56 ms (faster than 85% of submissions)\nMemory: 42.3 MB (better than 62% of submissions)\n\nAll test cases passed!');
      setIsSubmitting(false);
      toast({
        title: "Solution submitted",
        description: "Your solution has been successfully submitted.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-compliex-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Problem description column */}
          <div className="lg:col-span-1">
            <div className="bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark p-6 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <Badge className="bg-green-700 hover:bg-green-800">{problemData.difficulty}</Badge>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-compliex-gray-dark">
                    <Star className="h-4 w-4 mr-1" />
                    Favorite
                  </Button>
                </div>
              </div>
              
              <h1 className="text-2xl font-bold mb-4">{problemData.title}</h1>
              
              <p className="text-gray-300 mb-6">{problemData.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Constraints:</h2>
                  <ul className="list-disc list-inside text-gray-300">
                    {problemData.constraints.map((constraint, i) => (
                      <li key={i}>{constraint}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-2">Examples:</h2>
                  {problemData.examples.map((example, i) => (
                    <div key={i} className="mb-4 bg-compliex-dark p-4 rounded-md border border-compliex-gray-dark">
                      <p className="font-mono text-sm mb-1"><span className="text-gray-400">Input:</span> {example.input}</p>
                      <p className="font-mono text-sm mb-1"><span className="text-gray-400">Output:</span> {example.output}</p>
                      {example.explanation && (
                        <p className="font-mono text-sm"><span className="text-gray-400">Explanation:</span> {example.explanation}</p>
                      )}
                    </div>
                  ))}
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-2">Hints:</h2>
                  <div className="space-y-2">
                    {problemData.hints.map((hint, i) => (
                      <div key={i} className="p-3 bg-compliex-gray-dark/50 rounded text-sm">
                        {hint}
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-compliex-gray-dark my-6" />
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>Author: {problemData.authorName}</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    <span>{problemData.solvedCount} solved</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Avg. Time: {problemData.averageTime}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>Success: {problemData.successRate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Code editor column */}
          <div className="lg:col-span-2">
            <div className="bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark overflow-hidden">
              <div className="border-b border-compliex-gray-dark px-4 py-2">
                <Tabs 
                  defaultValue="javascript" 
                  onValueChange={(val) => handleLanguageChange(val as 'javascript' | 'python' | 'java')}
                  className="w-full"
                >
                  <TabsList className="bg-compliex-dark-lighter border border-compliex-gray-dark w-full justify-start">
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="java">Java</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              {/* Code editor */}
              <div className="p-4 bg-compliex-dark">
                <Textarea
                  value={code}
                  onChange={handleCodeChange}
                  className="font-mono text-sm bg-compliex-dark border-compliex-gray-dark min-h-[400px] resize-none"
                />
              </div>
              
              {/* Action buttons */}
              <div className="border-t border-compliex-gray-dark p-4 flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handleRunCode} 
                  disabled={isRunning || isSubmitting} 
                  className="border-compliex-gray-dark"
                >
                  {isRunning ? "Running..." : "Run Code"}
                </Button>
                <Button 
                  className="bg-compliex-red hover:bg-compliex-red-dark" 
                  onClick={handleSubmit} 
                  disabled={isRunning || isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Solution"}
                </Button>
              </div>
            </div>
            
            {/* Output console */}
            {output && (
              <div className="mt-4 p-4 bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Output</h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setOutput(null)}
                    className="h-6 text-xs border-compliex-gray-dark"
                  >
                    Clear
                  </Button>
                </div>
                <pre className="bg-compliex-dark p-4 rounded text-sm font-mono overflow-auto max-h-[200px] whitespace-pre-wrap">
                  {output}
                </pre>
              </div>
            )}
            
            {/* Related problems */}
            <div className="mt-4 p-4 bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark">
              <h3 className="font-medium mb-3">Related Problems</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {problemData.relatedProblems.map((problem, i) => (
                  <Button 
                    key={i} 
                    variant="outline" 
                    className="justify-start border-compliex-gray-dark hover:border-compliex-red/50 text-left"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    {problem}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
