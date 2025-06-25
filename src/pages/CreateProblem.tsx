
import React, { useState } from 'react';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CreateProblem: React.FC = () => {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [description, setDescription] = useState('');
  const [inputFormat, setInputFormat] = useState('');
  const [outputFormat, setOutputFormat] = useState('');
  const [constraints, setConstraints] = useState('');
  const [sampleInput, setSampleInput] = useState('');
  const [sampleOutput, setSampleOutput] = useState('');
  const [explanation, setExplanation] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Problem submitted:', {
      title,
      difficulty,
      description,
      inputFormat,
      outputFormat,
      constraints,
      sampleInput,
      sampleOutput,
      explanation,
      tags
    });
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" className="text-gray-300 hover:text-white p-0" asChild>
              <Link to="/account">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-white">Create New Problem</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-compliex-dark-lighter mb-8">
                <TabsTrigger value="basic" className="data-[state=active]:bg-compliex-red">
                  Basic Info
                </TabsTrigger>
                <TabsTrigger value="details" className="data-[state=active]:bg-compliex-red">
                  Problem Details
                </TabsTrigger>
                <TabsTrigger value="examples" className="data-[state=active]:bg-compliex-red">
                  Examples & Tests
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic">
                <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                  <CardHeader>
                    <CardTitle className="text-white">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-gray-300">Problem Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter problem title..."
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="difficulty" className="text-gray-300">Difficulty Level</Label>
                      <Select value={difficulty} onValueChange={setDifficulty} required>
                        <SelectTrigger className="bg-compliex-dark border-compliex-gray-dark text-white">
                          <SelectValue placeholder="Select difficulty level" />
                        </SelectTrigger>
                        <SelectContent className="bg-compliex-dark-lighter border-compliex-gray-dark">
                          <SelectItem value="Easy" className="text-white hover:bg-compliex-gray-dark">Easy</SelectItem>
                          <SelectItem value="Medium" className="text-white hover:bg-compliex-gray-dark">Medium</SelectItem>
                          <SelectItem value="Hard" className="text-white hover:bg-compliex-gray-dark">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tags" className="text-gray-300">Tags</Label>
                      <div className="flex gap-2">
                        <Input
                          id="tags"
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder="Add a tag..."
                          className="bg-compliex-dark border-compliex-gray-dark text-white"
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                        />
                        <Button type="button" onClick={handleAddTag} className="bg-compliex-red hover:bg-compliex-red-dark">
                          Add
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-compliex-red text-compliex-red bg-compliex-red/10 cursor-pointer"
                            onClick={() => handleRemoveTag(tag)}
                          >
                            {tag} ×
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details">
                <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                  <CardHeader>
                    <CardTitle className="text-white">Problem Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-gray-300">Problem Description</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe the problem in detail..."
                        className="bg-compliex-dark border-compliex-gray-dark text-white min-h-[150px]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="inputFormat" className="text-gray-300">Input Format</Label>
                        <Textarea
                          id="inputFormat"
                          value={inputFormat}
                          onChange={(e) => setInputFormat(e.target.value)}
                          placeholder="Describe the input format..."
                          className="bg-compliex-dark border-compliex-gray-dark text-white"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="outputFormat" className="text-gray-300">Output Format</Label>
                        <Textarea
                          id="outputFormat"
                          value={outputFormat}
                          onChange={(e) => setOutputFormat(e.target.value)}
                          placeholder="Describe the expected output format..."
                          className="bg-compliex-dark border-compliex-gray-dark text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="constraints" className="text-gray-300">Constraints</Label>
                      <Textarea
                        id="constraints"
                        value={constraints}
                        onChange={(e) => setConstraints(e.target.value)}
                        placeholder="List the constraints and limits..."
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                        required
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="examples">
                <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                  <CardHeader>
                    <CardTitle className="text-white">Examples & Test Cases</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="sampleInput" className="text-gray-300">Sample Input</Label>
                        <Textarea
                          id="sampleInput"
                          value={sampleInput}
                          onChange={(e) => setSampleInput(e.target.value)}
                          placeholder="Provide sample input..."
                          className="bg-compliex-dark border-compliex-gray-dark text-white font-mono"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sampleOutput" className="text-gray-300">Sample Output</Label>
                        <Textarea
                          id="sampleOutput"
                          value={sampleOutput}
                          onChange={(e) => setSampleOutput(e.target.value)}
                          placeholder="Provide expected output..."
                          className="bg-compliex-dark border-compliex-gray-dark text-white font-mono"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="explanation" className="text-gray-300">Explanation (Optional)</Label>
                      <Textarea
                        id="explanation"
                        value={explanation}
                        onChange={(e) => setExplanation(e.target.value)}
                        placeholder="Explain the solution approach or provide hints..."
                        className="bg-compliex-dark border-compliex-gray-dark text-white"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
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
                  Submit for Review
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateProblem;
