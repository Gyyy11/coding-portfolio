"use client";

export default function CSSLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习04：CSS布局练习
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            学习CSS盒模型和Flexbox布局的综合实践应用。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">HTML</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">CSS</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Flexbox</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Box Model</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="demo-title">CSS基础知识：背景、盒模型、布局、动画</h1>
          
          <section className="mb-8">
            <h2 className="section-title">CSS 背景</h2>
            <div className="content-box">
              "cascading" 的音标是 /kæˈskeɪdɪŋ/。如果你想在 HTML 文件里为 "cascading"
              添加音标，结合当前编辑的文件情况，假如你是要在某个合适的文本处添加
            </div>
          </section>

          <section className="mb-8">
            <h2 className="section-title">CSS 盒模型</h2>
            <div className="box-example">
              盒模型是 CSS 布局的基石，它定义了元素在页面上的位置和大小。在 CSS 中，每个
              元素都被看作是一个矩形的盒子，这个盒子由内容、内边距、边框和外边距组成。
            </div>
          </section>

          <section className="mb-8">
            <h2 className="section-title">信息流、display以及position</h2>
            <div className="list-demo">
              <h3>默认列表布局：</h3>
              <ul className="default-list">
                <li>列表项目</li>
                <li>列表项目</li>
                <li>列表项目</li>
              </ul>
              
              <h3>内联列表布局：</h3>
              <ul className="inline-list">
                <li>列表项目</li>
                <li>列表项目</li>
                <li>列表项目</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="section-title">Flex布局</h2>
            <div className="flex-container">
              <p>1的点点滴滴的点点滴滴</p>
              <p>2的点点滴滴的点点滴滴</p>
              <p>3的点点滴滴的点点滴滴</p>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .demo-title {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 2rem;
          color: #2d3748;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 1rem;
        }

        .content-box {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 8px;
          line-height: 1.6;
          color: #4a5568;
        }

        .box-example {
          width: 300px;
          height: 200px;
          border: 2px solid #cc6666;
          padding: 20px;
          margin-top: 1rem;
          border-radius: 5px;
          background: #fef5e7;
          line-height: 1.5;
          color: #744210;
        }

        .list-demo h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 1.5rem 0 0.5rem 0;
          color: #2d3748;
        }

        .default-list {
          margin-bottom: 2rem;
        }

        .default-list li {
          margin-bottom: 0.5rem;
          color: #4a5568;
        }

        .inline-list {
          display: flex;
          gap: 1rem;
          list-style: none;
          padding: 0;
        }

        .inline-list li {
          background: #e2e8f0;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          color: #2d3748;
        }

        .flex-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .flex-container p {
          background-color: #bdaeae;
          border: 1px solid red;
          padding: 1rem;
          border-radius: 4px;
          margin: 0;
          transition: all 0.3s ease;
        }

        .flex-container p:hover {
          background-color: #a0a0a0;
          transform: translateX(10px);
        }

        @media (prefers-color-scheme: dark) {
          .demo-title {
            color: #f7fafc;
          }

          .section-title {
            color: #e2e8f0;
          }

          .content-box {
            background: #2d3748;
            color: #a0aec0;
          }

          .box-example {
            background: #2d3748;
            color: #e2e8f0;
            border-color: #718096;
          }

          .list-demo h3 {
            color: #f7fafc;
          }

          .default-list li {
            color: #a0aec0;
          }

          .inline-list li {
            background: #4a5568;
            color: #e2e8f0;
          }

          .flex-container p {
            background-color: #4a5568;
            color: #e2e8f0;
            border-color: #718096;
          }

          .flex-container p:hover {
            background-color: #2d3748;
          }
        }
      `}</style>
    </div>
  );
} 