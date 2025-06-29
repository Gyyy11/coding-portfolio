"use client";

export default function CSSStylesheets() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* 练习说明 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习10：CSS样式表练习
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            学习内嵌、内部和外部样式表的三种使用方法及其优先级。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 text-sm rounded-full">
              HTML
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm rounded-full">
              CSS
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm rounded-full">
              Stylesheets
            </span>
          </div>
        </div>

        {/* 内容展示区域 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="stylesheets-demo">
            <h1 className="main-title">CSS练习</h1>
            
            <div className="content-section">
              <h2 className="section-header">使用样式表的三种方式</h2>
              
              <ul className="methods-list">
                <li className="method-item">外部样式表</li>
                <li className="method-item">内部样式表</li>
                <li className="method-item inline">内嵌样式表</li>
              </ul>
            </div>

            {/* 样式说明区域 */}
            <div className="explanation-section">
              <h3 className="explanation-title">CSS样式表类型详解</h3>
              
              <div className="methods-grid">
                <div className="method-card">
                  <h4>外部样式表</h4>
                  <p>通过&lt;link&gt;标签引入外部CSS文件</p>
                  <div className="code-example">
                    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles/main.css&quot; /&gt;
                  </div>
                  <div className="priority">优先级: 低</div>
                </div>
                
                <div className="method-card">
                  <h4>内部样式表</h4>
                  <p>在&lt;head&gt;中使用&lt;style&gt;标签定义样式</p>
                  <div className="code-example">
                    &lt;style&gt;<br/>
                    &nbsp;&nbsp;h2 {'{'}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;color: chocolate;
                    <br/>
                    &nbsp;&nbsp;{'}'}
                    <br/>
                    &lt;/style&gt;
                  </div>
                  <div className="priority">优先级: 中</div>
                </div>
                
                <div className="method-card">
                  <h4>内嵌样式表</h4>
                  <p>直接在HTML元素的style属性中定义样式</p>
                  <div className="code-example">
                    &lt;li style=&quot;color: darkorchid&quot;&gt;内嵌样式表&lt;/li&gt;
                  </div>
                  <div className="priority">优先级: 高</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2d3748;
          margin-bottom: 2rem;
          text-align: center;
        }

        .content-section {
          margin-bottom: 3rem;
        }

        .section-header {
          font-family: 'Cooper', '楷体', serif;
          text-decoration: underline;
          color: #d2691e;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .methods-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .method-item {
          background: #f7fafc;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #4299e1;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .method-item:hover {
          transform: translateX(8px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .method-item.inline {
          color: #9932cc;
          border-left-color: #9932cc;
          background: #faf5ff;
        }

        .explanation-section {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
          margin-top: 2rem;
        }

        .explanation-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .method-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-top: 4px solid #4299e1;
        }

        .method-card h4 {
          color: #2d3748;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .method-card p {
          color: #718096;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .code-example {
          background: #2d3748;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          overflow-x: auto;
        }

        .priority {
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          text-align: center;
        }

        .method-card:nth-child(1) {
          border-top-color: #38a169;
        }

        .method-card:nth-child(1) .priority {
          background: #c6f6d5;
          color: #22543d;
        }

        .method-card:nth-child(2) {
          border-top-color: #ed8936;
        }

        .method-card:nth-child(2) .priority {
          background: #fbd38d;
          color: #7b341e;
        }

        .method-card:nth-child(3) {
          border-top-color: #e53e3e;
        }

        .method-card:nth-child(3) .priority {
          background: #fed7d7;
          color: #822727;
        }

        @media (prefers-color-scheme: dark) {
          .main-title {
            color: #f7fafc;
          }

          .method-item {
            background: #2d3748;
            color: #e2e8f0;
          }

          .method-item.inline {
            background: #44337a;
            color: #d6bcfa;
          }

          .explanation-section {
            background: #2d3748;
          }

          .explanation-title {
            color: #f7fafc;
          }

          .method-card {
            background: #4a5568;
          }

          .method-card h4 {
            color: #f7fafc;
          }

          .method-card p {
            color: #cbd5e0;
          }
        }
      `}</style>
    </div>
  );
} 