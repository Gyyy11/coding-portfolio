"use client";

export default function CSSConcepts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习03：CSS核心概念
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            深入学习CSS的核心概念：背景、盒模型、布局和动画效果的综合应用。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">HTML</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">CSS</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Animation</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Flexbox</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="demo-title">CSS 核心概念：背景、盒模型、布局、动画</h1>
          
          <section className="mb-8">
            <h2 className="section-title">背景</h2>
            <div className="concept-content">
              <p>cascading 的音标是 /kæˈskeɪdɪŋ/。linear: 英 [ˈlɪniə(r)]美 [ˈlɪniər]</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="section-title">盒模型</h2>
            <div className="box-demo">
              <div className="demo-box">box 中的内容 1</div>
              <div className="demo-box">box 中的内容 2</div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="section-title">布局</h2>
            <h3>display 的不同取值</h3>
            <div className="display-demo">
              <p>段1</p><p>段2</p><p>段3</p>
            </div>
            
            <h3>Flexbox 布局</h3>
            <div className="flex-demo">
              <p>111111111111111111111</p>
              <p>222222222222222</p>
              <p>3</p>
              <p>4</p>
            </div>
          </section>

          <section>
            <h2 className="section-title">动画</h2>
            <p>动画必须要有起始状态、结束状态、时长</p>
            <div className="animate-box">盒模型内容</div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .demo-title {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 1rem;
        }

        .concept-content {
          background: #f7fafc;
          padding: 1rem;
          border-radius: 8px;
          font-style: italic;
        }

        .box-demo {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .demo-box {
          width: 200px;
          height: 200px;
          border: 2px dashed #e53e3e;
          padding: 20px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fef5e7;
        }

        .display-demo {
          margin: 1rem 0;
        }

        .display-demo p {
          display: inline;
          background: #e2e8f0;
          padding: 0.5rem;
          margin-right: 0.5rem;
          border-radius: 4px;
        }

        .flex-demo {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .flex-demo p {
          border: 1px solid #e53e3e;
          padding: 10px;
          background: #fed7d7;
          flex: 1;
          min-width: 120px;
          text-align: center;
        }

        .animate-box {
          width: 100px;
          height: 100px;
          background-color: #c0c0c0;
          text-align: center;
          line-height: 100px;
          margin: 2rem auto;
          border-radius: 0;
          transition: all 0.3s;
          cursor: pointer;
        }

        .animate-box:hover {
          border-radius: 50px;
          color: white;
          background-color: #be2626;
          transform: rotate(360deg);
        }

        @media (prefers-color-scheme: dark) {
          .section-title {
            color: #e2e8f0;
          }

          .concept-content {
            background: #2d3748;
            color: #a0aec0;
          }

          .demo-box {
            background: #2d3748;
            color: #e2e8f0;
          }

          .display-demo p {
            background: #4a5568;
            color: #e2e8f0;
          }

          .flex-demo p {
            background: #4a5568;
            color: #e2e8f0;
            border-color: #718096;
          }
        }
      `}</style>
    </div>
  );
} 