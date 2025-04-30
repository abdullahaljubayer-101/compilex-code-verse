
import React from 'react';

const CodePreview: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-compliex-dark-lighter">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See it in Action</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our powerful code editor with syntax highlighting, code execution, and results preview
          </p>
        </div>
        
        <div className="code-snippet max-w-4xl mx-auto animate-glow">
          <div className="flex items-center justify-start mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-gray-400 text-xs">solution.py</div>
          </div>
          
          <div className="code-line"><span className="text-purple-400">def</span> <span className="text-blue-400">merge_sort</span><span className="text-gray-400">(</span><span className="text-orange-400">arr</span><span className="text-gray-400">):</span></div>
          <div className="code-line pl-4"><span className="text-purple-400">if</span> <span className="text-gray-400">len(</span><span className="text-orange-400">arr</span><span className="text-gray-400">) &lt;= </span><span className="text-green-400">1</span><span className="text-gray-400">:</span></div>
          <div className="code-line pl-8"><span className="text-purple-400">return</span> <span className="text-orange-400">arr</span></div>
          
          <div className="code-line pl-4"><span className="text-gray-400">mid = len(</span><span className="text-orange-400">arr</span><span className="text-gray-400">) // </span><span className="text-green-400">2</span></div>
          <div className="code-line pl-4"><span className="text-orange-400">left</span> <span className="text-gray-400">=</span> <span className="text-blue-400">merge_sort</span><span className="text-gray-400">(</span><span className="text-orange-400">arr</span><span className="text-gray-400">[:</span><span className="text-orange-400">mid</span><span className="text-gray-400">])</span></div>
          <div className="code-line pl-4"><span className="text-orange-400">right</span> <span className="text-gray-400">=</span> <span className="text-blue-400">merge_sort</span><span className="text-gray-400">(</span><span className="text-orange-400">arr</span><span className="text-gray-400">[</span><span className="text-orange-400">mid</span><span className="text-gray-400">:])</span></div>
          <div className="code-line pl-4"><span className="text-purple-400">return</span> <span className="text-blue-400">merge</span><span className="text-gray-400">(</span><span className="text-orange-400">left</span><span className="text-gray-400">,</span> <span className="text-orange-400">right</span><span className="text-gray-400">)</span></div>
          
          <div className="code-line mt-2"><span className="text-purple-400">def</span> <span className="text-blue-400">merge</span><span className="text-gray-400">(</span><span className="text-orange-400">left</span><span className="text-gray-400">,</span> <span className="text-orange-400">right</span><span className="text-gray-400">):</span></div>
          <div className="code-line pl-4"><span className="text-orange-400">result</span> <span className="text-gray-400">=</span> <span className="text-teal-400">[]</span></div>
          <div className="code-line pl-4"><span className="text-orange-400">i</span><span className="text-gray-400">,</span> <span className="text-orange-400">j</span> <span className="text-gray-400">=</span> <span className="text-green-400">0</span><span className="text-gray-400">,</span> <span className="text-green-400">0</span></div>
          
          <div className="code-line pl-4"><span className="text-purple-400">while</span> <span className="text-orange-400">i</span> <span className="text-gray-400">&lt;</span> <span className="text-gray-400">len(</span><span className="text-orange-400">left</span><span className="text-gray-400">) and</span> <span className="text-orange-400">j</span> <span className="text-gray-400">&lt;</span> <span className="text-gray-400">len(</span><span className="text-orange-400">right</span><span className="text-gray-400">):</span></div>
          <div className="code-line pl-8"><span className="text-purple-400">if</span> <span className="text-orange-400">left</span><span className="text-gray-400">[</span><span className="text-orange-400">i</span><span className="text-gray-400">] &lt;=</span> <span className="text-orange-400">right</span><span className="text-gray-400">[</span><span className="text-orange-400">j</span><span className="text-gray-400">]:</span></div>
          <div className="code-line pl-12"><span className="text-orange-400">result</span><span className="text-gray-400">.</span><span className="text-blue-400">append</span><span className="text-gray-400">(</span><span className="text-orange-400">left</span><span className="text-gray-400">[</span><span className="text-orange-400">i</span><span className="text-gray-400">])</span></div>
          <div className="code-line pl-12"><span className="text-orange-400">i</span> <span className="text-gray-400">+=</span> <span className="text-green-400">1</span></div>
          <div className="code-line pl-8"><span className="text-purple-400">else</span><span className="text-gray-400">:</span></div>
          <div className="code-line pl-12"><span className="text-orange-400">result</span><span className="text-gray-400">.</span><span className="text-blue-400">append</span><span className="text-gray-400">(</span><span className="text-orange-400">right</span><span className="text-gray-400">[</span><span className="text-orange-400">j</span><span className="text-gray-400">])</span></div>
          <div className="code-line pl-12"><span className="text-orange-400">j</span> <span className="text-gray-400">+=</span> <span className="text-green-400">1</span></div>
          
          <div className="code-line pl-4"><span className="text-orange-400">result</span> <span className="text-gray-400">+=</span> <span className="text-orange-400">left</span><span className="text-gray-400">[</span><span className="text-orange-400">i</span><span className="text-gray-400">:]</span></div>
          <div className="code-line pl-4"><span className="text-orange-400">result</span> <span className="text-gray-400">+=</span> <span className="text-orange-400">right</span><span className="text-gray-400">[</span><span className="text-orange-400">j</span><span className="text-gray-400">:]</span></div>
          <div className="code-line pl-4"><span className="text-purple-400">return</span> <span className="text-orange-400">result</span></div>
          
          <div className="mt-4">
            <div className="text-gray-400 text-xs mb-2">▶ Run | Language: Python 3.9</div>
            <div className="bg-black/30 p-3 rounded">
              <div className="text-green-400"># Output</div>
              <div className="text-white">[1, 2, 3, 4, 5, 6, 7, 8, 9]</div>
              <div className="text-green-400"># Execution time: 0.003s</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodePreview;
