
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const TutorialDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock tutorial data with enhanced structure
  const tutorial = {
    id: id,
    title: "Advanced React Hooks: A Complete Guide",
    subtitle: "Master useState, useEffect, useContext, and custom hooks to build powerful React applications",
    content: `
React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components. In this comprehensive guide, we'll explore the most important hooks and learn how to use them effectively.

## Table of Contents
1. Introduction to React Hooks
2. useState Hook
3. useEffect Hook  
4. useContext Hook
5. Custom Hooks
6. Best Practices

## Introduction to React Hooks

React Hooks were introduced in React 16.8 as a way to use state and lifecycle methods in functional components. They provide a more direct API to the React concepts you already know.

## useState Hook

The \`useState\` hook allows you to add state to your functional components. It returns an array with two elements: the current state value and a function to update it.

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p className="count-display">You clicked {count} times</p>
      <button 
        className="increment-btn"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
\`\`\`

The initial state can be a primitive value, object, or array. When updating objects or arrays, remember to create new instances rather than mutating the existing ones.

## useEffect Hook

The \`useEffect\` hook lets you perform side effects in functional components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function DocumentTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
    
    // Optional cleanup function
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Only re-run when count changes

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

## useContext Hook

The \`useContext\` hook accepts a context object and returns the current context value. It's a cleaner way to consume context compared to the Context.Consumer component.

\`\`\`javascript
import React, { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button className={\`btn btn-\${theme}\`}>
      I am styled by theme context!
    </button>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
\`\`\`

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions. They're JavaScript functions whose names start with "use" and can call other hooks.

\`\`\`javascript
import { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Usage
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
\`\`\`

## Best Practices

1. **Always use hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Use the dependency array wisely** - Include all values from component scope that are used inside useEffect
3. **Extract custom hooks** - When you have complex stateful logic, consider extracting it into a custom hook
4. **Use ESLint plugin** - Install eslint-plugin-react-hooks to catch common mistakes

## Conclusion

React Hooks provide a powerful and flexible way to manage state and side effects in functional components. By mastering these fundamental hooks and learning to create custom ones, you'll be able to build more maintainable and reusable React applications.
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "",
      bio: "Senior React Developer at TechCorp with 8+ years of experience in modern web development.",
      title: "Senior React Developer"
    },
    publishedDate: "December 15, 2024",
    readTime: "12 min read",
    tags: ["React", "Hooks", "JavaScript", "Frontend", "Web Development"],
    difficulty: "Intermediate",
    views: "2.4k",
    likes: 187
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <article className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-400 hover:text-white hover:bg-compliex-gray-dark"
            asChild
          >
            <Link to="/learn">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Learn
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {tutorial.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-compliex-gray-dark text-gray-300">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {tutorial.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {tutorial.subtitle}
          </p>

          {/* Article Meta */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-compliex-dark-lighter rounded-lg border border-compliex-gray-dark">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={tutorial.author.avatar} alt={tutorial.author.name} />
                <AvatarFallback className="bg-compliex-red text-white">
                  {tutorial.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 text-white font-medium">
                  <User className="h-4 w-4" />
                  {tutorial.author.name}
                </div>
                <p className="text-sm text-gray-400">{tutorial.author.title}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {tutorial.publishedDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {tutorial.readTime}
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {tutorial.difficulty}
              </div>
            </div>
          </div>
        </header>

        <Separator className="bg-compliex-gray-dark mb-12" />

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6">
            {tutorial.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-compliex-red pl-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('```')) {
                return (
                  <div key={index} className="bg-compliex-dark-lighter rounded-lg p-6 border border-compliex-gray-dark overflow-x-auto">
                    <pre className="text-sm">
                      <code className="text-gray-300 font-mono">
                        {paragraph.replace(/```\w*\n?/, '').replace(/```$/, '')}
                      </code>
                    </pre>
                  </div>
                );
              } else if (paragraph.includes('`') && !paragraph.startsWith('```')) {
                return (
                  <p key={index} className="text-gray-300" dangerouslySetInnerHTML={{
                    __html: paragraph.replace(/`([^`]+)`/g, '<code class="bg-compliex-gray-dark px-2 py-1 rounded text-compliex-red font-mono text-sm">$1</code>')
                  }} />
                );
              }
              return <p key={index} className="text-gray-300">{paragraph}</p>;
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-compliex-red/10 to-compliex-red/5 rounded-lg p-8 border border-compliex-red/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Practice?</h3>
            <p className="text-gray-300 mb-6">Apply what you've learned with hands-on coding challenges.</p>
            <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
              <Link to="/practice">
                Start Practicing
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default TutorialDetail;
