
import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Calendar, Share, Bookmark, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

// Mock tutorial data - in a real app this would come from an API
const tutorialsData = [
  {
    id: '1',
    title: "Building a REST API with Node.js and Express",
    description: "Learn how to create a RESTful API using Node.js, Express, and MongoDB to power your web applications.",
    readTime: "15 min",
    date: "May 8, 2025",
    tags: ["Node.js", "Express", "API"],
    author: {
      name: "Alexandra Williams",
      avatar: "https://i.pravatar.cc/150?img=1",
      title: "Senior Backend Developer"
    },
    content: `
      <h2>Introduction</h2>
      <p>RESTful APIs are the backbone of many modern web applications, providing a standardized way for different systems to communicate. In this tutorial, we'll build a complete REST API using Node.js and Express.</p>
      
      <h2>Setting Up Your Project</h2>
      <p>First, let's create a new Node.js project and install the necessary dependencies:</p>
      
      <pre><code>
      mkdir rest-api-tutorial
      cd rest-api-tutorial
      npm init -y
      npm install express mongoose dotenv
      npm install --save-dev nodemon
      </code></pre>
      
      <h2>Creating the Express Server</h2>
      <p>Now, let's create our main server file:</p>
      
      <pre><code>
      // server.js
      const express = require('express');
      const mongoose = require('mongoose');
      require('dotenv').config();
      
      const app = express();
      const PORT = process.env.PORT || 5000;
      
      // Middleware
      app.use(express.json());
      
      // Connect to MongoDB
      mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err));
      
      // Routes
      app.use('/api/items', require('./routes/api/items'));
      
      app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
      </code></pre>
      
      <h2>Creating the Item Model</h2>
      <p>Let's define a simple data model for our API:</p>
      
      <pre><code>
      // models/Item.js
      const mongoose = require('mongoose');
      const Schema = mongoose.Schema;
      
      const ItemSchema = new Schema({
        name: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          default: Date.now
        }
      });
      
      module.exports = Item = mongoose.model('item', ItemSchema);
      </code></pre>
      
      <h2>Defining Routes</h2>
      <p>Now, let's create our API routes:</p>
      
      <pre><code>
      // routes/api/items.js
      const express = require('express');
      const router = express.Router();
      
      // Item Model
      const Item = require('../../models/Item');
      
      // @route   GET api/items
      // @desc    Get All Items
      // @access  Public
      router.get('/', async (req, res) => {
        try {
          const items = await Item.find().sort({ date: -1 });
          res.json(items);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });
      
      // @route   POST api/items
      // @desc    Create An Item
      // @access  Public
      router.post('/', async (req, res) => {
        try {
          const newItem = new Item({
            name: req.body.name
          });
          
          const item = await newItem.save();
          res.json(item);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      });
      
      // @route   DELETE api/items/:id
      // @desc    Delete An Item
      // @access  Public
      router.delete('/:id', async (req, res) => {
        try {
          const item = await Item.findById(req.params.id);
          if (!item) return res.status(404).json({ error: "Item not found" });
          
          await item.remove();
          res.json({ success: true });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });
      
      module.exports = router;
      </code></pre>
      
      <h2>Testing Your API</h2>
      <p>You can test your API using tools like Postman or curl. Here are some example requests:</p>
      
      <h3>Get all items:</h3>
      <pre><code>GET http://localhost:5000/api/items</code></pre>
      
      <h3>Create an item:</h3>
      <pre><code>
      POST http://localhost:5000/api/items
      Content-Type: application/json
      
      {
        "name": "Test Item"
      }
      </code></pre>
      
      <h3>Delete an item:</h3>
      <pre><code>DELETE http://localhost:5000/api/items/[item_id]</code></pre>
      
      <h2>Conclusion</h2>
      <p>Congratulations! You've built a basic RESTful API with Node.js, Express, and MongoDB. This foundation can be extended to build more complex APIs with additional features like authentication, validation, and more complex data relationships.</p>
      
      <h2>Next Steps</h2>
      <ul>
        <li>Add user authentication with JWT</li>
        <li>Implement input validation</li>
        <li>Add more complex data models and relationships</li>
        <li>Deploy your API to a cloud platform like Heroku or AWS</li>
      </ul>
    `,
    relatedTutorials: ["Understanding JavaScript Closures", "Deploying React Apps with GitHub Actions", "Git Workflow for Teams"]
  },
  {
    id: '2',
    title: "CSS Grid Layout Mastery",
    description: "Master CSS Grid Layout to create complex, responsive web layouts with less code and more flexibility.",
    readTime: "12 min",
    date: "May 6, 2025",
    tags: ["CSS", "Frontend", "Layout"],
    author: {
      name: "Jason Wong",
      avatar: "https://i.pravatar.cc/150?img=3",
      title: "Frontend Developer"
    },
    content: `<p>This is the CSS Grid Layout tutorial content...</p>`
  },
  {
    id: '3',
    title: "Understanding JavaScript Closures",
    description: "Dive deep into JavaScript closures, how they work, and how to use them effectively in your code.",
    readTime: "10 min",
    date: "May 5, 2025",
    tags: ["JavaScript", "Programming"],
    author: {
      name: "Emma Johnson",
      avatar: "https://i.pravatar.cc/150?img=5",
      title: "JavaScript Developer"
    },
    content: `<p>This is the JavaScript Closures tutorial content...</p>`
  }
];

const TutorialDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tutorial = tutorialsData.find(t => t.id === id);
  
  if (!tutorial) {
    return (
      <div className="min-h-screen bg-compliex-dark text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold">Tutorial not found</h1>
          <Button className="mt-6" as={Link} to="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tutorials
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-compliex-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <Link to="/learn" className="hover:text-compliex-red flex items-center">
            <BookOpen className="h-4 w-4 mr-1" /> Learn
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/learn?tab=tutorials" className="hover:text-compliex-red">
            Tutorials
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-white truncate max-w-[200px]">{tutorial.title}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Button 
              variant="outline" 
              size="sm"
              className="border-compliex-gray-dark mb-4"
              as={Link}
              to="/learn?tab=tutorials"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Tutorials
            </Button>
            
            <h1 className="text-3xl font-bold mb-4">{tutorial.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">{tutorial.readTime} read</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">{tutorial.date}</span>
              </div>
            </div>
            
            <div className="flex gap-2 mb-6 flex-wrap">
              {tutorial.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-compliex-dark-lighter text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-between mb-8">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={tutorial.author.avatar} />
                  <AvatarFallback>{tutorial.author.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{tutorial.author.name}</p>
                  <p className="text-sm text-gray-400">{tutorial.author.title}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-compliex-gray-dark">
                  <Share className="h-4 w-4 mr-2" /> Share
                </Button>
                <Button variant="outline" size="sm" className="border-compliex-gray-dark">
                  <Bookmark className="h-4 w-4 mr-2" /> Save
                </Button>
              </div>
            </div>
            
            <Separator className="my-8 bg-compliex-gray-dark" />
            
            {/* Tutorial content */}
            <div 
              className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-compliex-red prose-code:bg-compliex-dark-lighter prose-code:p-1 prose-code:rounded prose-pre:bg-compliex-dark-lighter prose-pre:p-4 prose-pre:rounded-lg"
              dangerouslySetInnerHTML={{ __html: tutorial.content }}
            />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Related tutorials */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Related Tutorials</h3>
                  <div className="space-y-4">
                    {tutorial.relatedTutorials.map((title, index) => {
                      const relatedTutorial = tutorialsData.find(t => t.title === title);
                      return relatedTutorial ? (
                        <div key={index} className="group">
                          <Link 
                            to={`/learn/tutorial/${relatedTutorial.id}`}
                            className="text-gray-300 group-hover:text-compliex-red transition-colors block"
                          >
                            {relatedTutorial.title}
                          </Link>
                          <div className="flex text-xs text-gray-500 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{relatedTutorial.readTime} read</span>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </CardContent>
              </Card>
              
              {/* Newsletter signup */}
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Get Weekly Tutorials</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Sign up for our newsletter to get the latest tutorials delivered to your inbox.
                  </p>
                  <Button className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetail;
