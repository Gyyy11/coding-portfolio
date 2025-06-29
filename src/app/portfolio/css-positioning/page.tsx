"use client";

export default function CSSPositioning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习05：CSS定位练习
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            通过实例对比学习CSS中相对定位与绝对定位的区别和应用场景。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">HTML</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">CSS</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Position</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="positioning-demo">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 正常信息流 */}
              <div className="demo-section">
                <h2 className="demo-title">正常信息流</h2>
                <div className="text-content">
                  <p>孩子，你真是快活啊，一早晨坐在泥土里，耍着折下来的小树枝。</p>
                  <p>我微笑着看你在那里耍着那根折下来的小树枝。</p>
                  <p className="highlight">我正忙着算账，一小时一小时在那里加叠数字。</p>
                  <p>也许你在看我，想到："这种好没趣的游戏，竟把你的一早晨的好时间浪费掉了！"</p>
                  <p>孩子，我忘了聚精会神玩耍树枝与泥饼的方法了。</p>
                </div>
              </div>

              {/* 相对定位 */}
              <div className="demo-section">
                <h2 className="demo-title">相对定位</h2>
                <div className="text-content relative-container">
                  <p>孩子，你真是快活啊，一早晨坐在泥土里，耍着折下来的小树枝。</p>
                  <p>我微笑着看你在那里耍着那根折下来的小树枝。</p>
                  <p className="highlight relative-positioned">我正忙着算账，一小时一小时在那里加叠数字。</p>
                  <p>也许你在看我，想到："这种好没趣的游戏，竟把你的一早晨的好时间浪费掉了！"</p>
                  <p>孩子，我忘了聚精会神玩耍树枝与泥饼的方法了。</p>
                </div>
                <code className="position-code">.relative {'{'}position: relative; top: 50px;{'}'}</code>
              </div>

              {/* 绝对定位 */}
              <div className="demo-section">
                <h2 className="demo-title">绝对定位</h2>
                <div className="text-content absolute-container">
                  <p>孩子，你真是快活啊，一早晨坐在泥土里，耍着折下来的小树枝。</p>
                  <p>我微笑着看你在那里耍着那根折下来的小树枝。</p>
                  <p className="highlight absolute-positioned">我正忙着算账，一小时一小时在那里加叠数字。</p>
                  <p>也许你在看我，想到："这种好没趣的游戏，竟把你的一早晨的好时间浪费掉了！"</p>
                  <p>孩子，我忘了聚精会神玩耍树枝与泥饼的方法了。</p>
                </div>
                <code className="position-code">.absolute {'{'}position: absolute; top: 50px;{'}'}</code>
              </div>
            </div>

            {/* 定位解释 */}
            <div className="explanation-section">
              <h2 className="explanation-title">定位类型详解</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="explanation-card static-card">
                  <h3>static</h3>
                  <p>默认定位，按照正常文档流排列</p>
                  <ul>
                    <li>不受top、right、bottom、left影响</li>
                    <li>元素按照HTML顺序排列</li>
                  </ul>
                </div>
                <div className="explanation-card relative-card">
                  <h3>relative</h3>
                  <p>相对于自身原始位置进行定位</p>
                  <ul>
                    <li>保留原来在文档流中的空间</li>
                    <li>相对于自身位置偏移</li>
                  </ul>
                </div>
                <div className="explanation-card absolute-card">
                  <h3>absolute</h3>
                  <p>相对于最近的非static父元素定位</p>
                  <ul>
                    <li>脱离文档流</li>
                    <li>不占用原来的空间</li>
                  </ul>
                </div>
                <div className="explanation-card fixed-card">
                  <h3>fixed</h3>
                  <p>相对于浏览器窗口定位</p>
                  <ul>
                    <li>脱离文档流</li>
                    <li>滚动时位置不变</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .positioning-demo {
          font-family: '微软雅黑', sans-serif;
          font-size: 18px;
          line-height: 1.8em;
        }

        .demo-section {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 12px;
          border: 2px solid #e9ecef;
        }

        .demo-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2d3748;
          text-align: center;
        }

        .text-content {
          min-height: 300px;
          position: relative;
        }

        .text-content p {
          margin-bottom: 1rem;
          color: #4a5568;
          font-size: 0.9rem;
        }

        .highlight {
          background-color: #fcc !important;
          padding: 0.5rem;
          border-radius: 4px;
          font-weight: 500;
        }

        .relative-positioned {
          position: relative;
          top: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .absolute-container {
          position: relative;
        }

        .absolute-positioned {
          position: absolute;
          top: 150px;
          left: 20px;
          right: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }

        .position-code {
          display: block;
          background: #2d3748;
          color: #e2e8f0;
          padding: 0.75rem;
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          margin-top: 1rem;
        }

        .explanation-section {
          margin-top: 3rem;
          padding: 2rem;
          background: #f7fafc;
          border-radius: 12px;
        }

        .explanation-title {
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2rem;
          color: #2d3748;
        }

        .explanation-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-top: 4px solid;
          transition: all 0.3s ease;
        }

        .explanation-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .explanation-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #2d3748;
        }

        .explanation-card p {
          font-size: 0.9rem;
          color: #718096;
          margin-bottom: 1rem;
        }

        .explanation-card ul {
          list-style: none;
          padding: 0;
          font-size: 0.8rem;
          color: #4a5568;
        }

        .explanation-card li {
          margin-bottom: 0.25rem;
          padding-left: 1rem;
          position: relative;
        }

        .explanation-card li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #a0aec0;
        }

        .static-card { border-top-color: #48bb78; }
        .relative-card { border-top-color: #ed8936; }
        .absolute-card { border-top-color: #e53e3e; }
        .fixed-card { border-top-color: #9f7aea; }

        @media (prefers-color-scheme: dark) {
          .demo-section {
            background: #2d3748;
            border-color: #4a5568;
          }

          .demo-title {
            color: #f7fafc;
          }

          .text-content p {
            color: #a0aec0;
          }

          .highlight {
            background-color: #744210 !important;
            color: #fef5e7;
          }

          .explanation-section {
            background: #2d3748;
          }

          .explanation-title {
            color: #f7fafc;
          }

          .explanation-card {
            background: #4a5568;
          }

          .explanation-card h3 {
            color: #f7fafc;
          }

          .explanation-card p {
            color: #cbd5e0;
          }

          .explanation-card li {
            color: #a0aec0;
          }
        }
      `}</style>
    </div>
  );
} 