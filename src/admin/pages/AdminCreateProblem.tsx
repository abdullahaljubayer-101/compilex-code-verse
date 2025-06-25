
import React, { useState } from 'react';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminCreateProblem: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');
  const [constraints, setConstraints] = useState(['']);
  const [examples, setExamples] = useState([{ input: '', output: '', explanation: '' }]);
  const [testCases, setTestCases] = useState([{ input: '', expectedOutput: '' }]);

  const addConstraint = () => {
    setConstraints([...constraints, '']);
  };

  const removeConstraint = (index: number) => {
    setConstraints(constraints.filter((_, i) => i !== index));
  };

  const updateConstraint = (index: number, value: string) => {
    const updated = [...constraints];
    updated[index] = value;
    setConstraints(updated);
  };

  const addExample = () => {
    setExamples([...examples, { input: '', output: '', explanation: '' }]);
  };

  const removeExample = (index: number) => {
    setExamples(examples.filter((_, i) => i !== index));
  };

  const updateExample = (index: number, field: string, value: string) => {
    const updated = [...examples];
    updated[index] = { ...updated[index], [field]: value };
    setExamples(updated);
  };

  const addTestCase = () => {
    setTestCases([...testCases, { input: '', expectedOutput: '' }]);
  };

  const removeTestCase = (index: number) => {
    setTestCases(testCases.filter((_, i) => i !== index));
  };

  const updateTestCase = (index: number, field: string, value: string) => {
    const updated = [...testCases];
    updated[index] = { ...updated[index], [field]: value };
    setTestCases(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating problem:', {
      title,
      description,
      difficulty,
      category,
      constraints,
      examples,
      testCases
    });
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
          <h1 className="text-3xl font-bold text-white">Create New Problem</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <CardTitle className="text-white">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-gray-300">Problem Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter problem title"
                  className="bg-compliex-dark border-compliex-gray-dark text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-gray-300">Problem Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter detailed problem description"
                  className="bg-compliex-dark border-compliex-gray-dark text-white min-h-32"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Difficulty</Label>
                  <Select value={difficulty} onValueChange={setDifficulty}>
                    <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-300">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Array">Array</SelectItem>
                      <SelectItem value="String">String</SelectItem>
                      <SelectItem value="Linked List">Linked List</SelectItem>
                      <SelectItem value="Tree">Tree</SelectItem>
                      <SelectItem value="Dynamic Programming">Dynamic Programming</SelectItem>
                      <SelectItem value="Graph">Graph</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Examples</CardTitle>
                <Button type="button" onClick={addExample} className="bg-compliex-red hover:bg-compliex-red-dark">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Example
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {examples.map((example, index) => (
                <div key={index} className="bg-compliex-dark p-4 rounded-lg space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-white font-medium">Example {index + 1}</h4>
                    {examples.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeExample(index)}
                        variant="ghost"
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-gray-300">Input</Label>
                      <Input
                        value={example.input}
                        onChange={(e) => updateExample(index, 'input', e.target.value)}
                        placeholder="Example input"
                        className="bg-compliex-dark-lighter border-compliex-gray-dark text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Output</Label>
                      <Input
                        value={example.output}
                        onChange={(e) => updateExample(index, 'output', e.target.value)}
                        placeholder="Expected output"
                        className="bg-compliex-dark-lighter border-compliex-gray-dark text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Explanation</Label>
                      <Textarea
                        value={example.explanation}
                        onChange={(e) => updateExample(index, 'explanation', e.target.value)}
                        placeholder="Explanation of the example"
                        className="bg-compliex-dark-lighter border-compliex-gray-dark text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Constraints */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Constraints</CardTitle>
                <Button type="button" onClick={addConstraint} className="bg-compliex-red hover:bg-compliex-red-dark">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Constraint
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {constraints.map((constraint, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={constraint}
                    onChange={(e) => updateConstraint(index, e.target.value)}
                    placeholder="Enter constraint"
                    className="bg-compliex-dark border-compliex-gray-dark text-white"
                  />
                  {constraints.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeConstraint(index)}
                      variant="ghost"
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Test Cases */}
          <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Test Cases</CardTitle>
                <Button type="button" onClick={addTestCase} className="bg-compliex-red hover:bg-compliex-red-dark">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Test Case
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {testCases.map((testCase, index) => (
                <div key={index} className="bg-compliex-dark p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-white font-medium">Test Case {index + 1}</h4>
                    {testCases.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeTestCase(index)}
                        variant="ghost"
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <Label className="text-gray-300">Input</Label>
                      <Input
                        value={testCase.input}
                        onChange={(e) => updateTestCase(index, 'input', e.target.value)}
                        placeholder="Test input"
                        className="bg-compliex-dark-lighter border-compliex-gray-dark text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Expected Output</Label>
                      <Input
                        value={testCase.expectedOutput}
                        onChange={(e) => updateTestCase(index, 'expectedOutput', e.target.value)}
                        placeholder="Expected output"
                        className="bg-compliex-dark-lighter border-compliex-gray-dark text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" className="bg-compliex-red hover:bg-compliex-red-dark text-white px-8">
              Create Problem
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateProblem;
