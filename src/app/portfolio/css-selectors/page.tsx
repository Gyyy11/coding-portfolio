"use client";

export default function CSSSelectors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* 练习说明 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习09：CSS选择器基础
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            学习CSS语法基础、选择器类型和样式表的使用方法。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 text-sm rounded-full">
              HTML
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm rounded-full">
              CSS
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm rounded-full">
              Selectors
            </span>
          </div>
        </div>

        {/* 内容展示区域 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="css-demo">
            {/* 标题样式演示 */}
            <h1 className="demo-title">CSS练习</h1>
            
            <h2 className="css-base-title">CSS语法基础</h2>
            
            <p className="abstract-text">
              这是一个段落，段落中包含了一个这是一个段落，段落中包含了一个这是一个段落，段落中包含了一个这是一个段落，段落中包含了一个
            </p>
            
            <p className="normal-text">
              这是一个段落，段落中包含了一个这是一个段落，段落中包含了一个这是一个段落，段落中包含了一个这是一个段落，段落中包含了一个
            </p>
            
            <h2 className="section-title">选择符</h2>
            
            <p className="normal-text">
              这是一个段落，段落中包
              <a href="#" className="demo-link">含了一个这是一个段落</a>
              ，段落中包含了一个这是一个段落，段落中包含了一个
              <a href="#" className="demo-link visited">这是一个段落</a>
              ，段落中包含了一个
            </p>

            {/* 样式说明区域 */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">CSS选择器说明</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">元素选择器</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• h1 - 选择所有h1元素</li>
                    <li>• p - 选择所有p元素</li>
                    <li>• a - 选择所有a元素</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">类选择器</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• .abstract - 选择class=&quot;abstract&quot;的元素</li>
                    <li>• .demo-link - 选择class=&quot;demo-link&quot;的元素</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">ID选择器</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• #CSSbase - 选择id=&quot;CSSbase&quot;的元素</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">伪类选择器</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• a:link - 未访问的链接</li>
                    <li>• a:visited - 已访问的链接</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .demo-title {
          font-family: 'KaiTi', '楷体', serif;
          color: #8b4513;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        .css-base-title {
          color: #ff7f50;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title {
          color: #ff7f50;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
        }

        .abstract-text {
          font-size: 14px;
          text-indent: 2em;
          line-height: 1.7;
          margin-bottom: 1rem;
          color: #374151;
        }

        .normal-text {
          text-indent: 2em;
          line-height: 1.7;
          margin-bottom: 1rem;
          color: #374151;
        }

        .demo-link {
          color: #5757c5;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .demo-link:hover {
          text-decoration: underline;
        }

        .demo-link.visited {
          color: #a9a9a9;
        }

        @media (prefers-color-scheme: dark) {
          .abstract-text,
          .normal-text {
            color: #d1d5db;
          }

          .demo-link {
            color: #93c5fd;
          }

          .demo-link.visited {
            color: #9ca3af;
          }
        }
      `}</style>
    </div>
  );
} 