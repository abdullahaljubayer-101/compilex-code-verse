import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TutorialDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock tutorial data
  const tutorial = {
    id: id,
    title: "Advanced React Hooks",
    content: `
      # Mastering React Hooks

      React Hooks are a powerful addition to React, allowing you to use state and other React features in functional components.

      ## useState

      The \`useState\` hook allows you to add state to your functional components.

      \`\`\`javascript
      import React, { useState } from 'react';

      function Example() {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`

      ## useEffect

      The \`useEffect\` hook lets you perform side effects in functional components.

      \`\`\`javascript
      import React, { useState, useEffect } from 'react';

      function Example() {
        const [count, setCount] = useState(0);

        useEffect(() => {
          // Update the document title using the browser API
          document.title = \`You clicked \${count} times\`;
        });

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`

      ## useContext

      The \`useContext\` hook accepts a context object (the value returned from \`React.createContext\`) and returns the current context value for that context.

      \`\`\`javascript
      import React, { useContext } from 'react';

      const MyContext = React.createContext(defaultValue);

      function MyComponent() {
        const value = useContext(MyContext);
        return <div>{value}</div>;
      }
      \`\`\`
    `,
    author: "John Doe",
    date: "December 2024",
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
              <Link to="/practice">
                Start Practicing
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="bg-compliex-dark-lighter rounded-lg p-8 border border-compliex-gray-dark">
            <h1 className="text-3xl font-bold text-white mb-4">{tutorial.title}</h1>
            <div className="text-gray-300 mb-6">
              By {tutorial.author} - {tutorial.date}
            </div>
            <div className="tutorial-content text-gray-300 leading-relaxed space-y-4">
              {tutorial.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-8">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-transparent border-compliex-gray-dark text-white hover:bg-compliex-gray-dark"
                asChild
              >
                <Link to="/learn">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Learn
                </Link>
              </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TutorialDetail;
