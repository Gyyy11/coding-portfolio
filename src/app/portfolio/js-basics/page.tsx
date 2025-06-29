"use client";

import { useEffect, useState } from 'react';

export default function JSBasics() {
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    // 模拟原始JavaScript练习的输出
    const logs: string[] = [];
    
    // 变量练习
    let a = 100;
    logs.push(`变量 a = ${a}`);
    
    const api_key = 'ssssx-=-dddd';
    logs.push(`常量 api_key = ${api_key}`);
    logs.push(`类型检测: typeof a = ${typeof a}, typeof api_key = ${typeof api_key}, typeof true = ${typeof true}`);
    
    // 类型转换
    let b = '1';
    logs.push(`字符串拼接: ${a} + '${b}' = ${a + b}`);
    logs.push(`数字相加: ${a} + ${Number(b)} = ${a + Number(b)}`);
    
    let c = '100';
    logs.push(`类型比较: ${a} == '${c}' 结果是 ${a == c} (==比较)`);
    logs.push(`严格比较: ${a} === '${c}' 结果是 ${a === c} (===比较)`);
    
    // 条件语句
    let current_time = '12:20';
    if (current_time == '12:20') {
      logs.push('条件判断: 冲啊！');
    } else {
      logs.push('条件判断: 假装学习……');
    }
    
    // 循环演示
    logs.push('for循环输出1-5:');
    for (let i = 1; i <= 5; i++) {
      logs.push(`  ${i}`);
    }
    
    // while循环
    logs.push('while循环演示:');
    let hug = 30;
    let whileCount = 0;
    while (hug > 0 && whileCount < 3) {
      logs.push(`  继续干饭……剩余能量: ${hug}`);
      hug = hug - 10;
      whileCount++;
    }
    
    // 函数演示
    function intro() {
      return '你好，我是一个脚本！';
    }
    logs.push(`函数调用: ${intro()}`);
    
    function intro2(content: string) {
      return '以下是我介绍的内容： ' + String(content);
    }
    logs.push(intro2('这是传入的参数'));
    
    function intro4(content: string) {
      return content + ' - 这是返回值';
    }
    let result = intro4('带返回值的函数');
    logs.push(`带返回值的函数: ${result}`);
    
    setOutput(logs);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* 练习说明 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习14：JavaScript语法基础
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            学习JavaScript基础语法，包括变量、数据类型、循环和函数的使用。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm rounded-full">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm rounded-full">
              Variables
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 text-sm rounded-full">
              Functions
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 代码演示区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">代码演示</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto max-h-96">
              <div className="mb-2 text-yellow-400">// JavaScript基础语法练习</div>
              <div className="mb-4">
                <div className="text-blue-400">// 1. 变量声明和类型</div>
                <div>let a = 100;</div>
                <div>const api_key = 'ssssx-=-dddd';</div>
                <div className="text-gray-400">console.log(typeof a, typeof api_key);</div>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400">// 2. 类型转换</div>
                <div>let b = '1';</div>
                <div className="text-gray-400">console.log(a + b);        // 字符串拼接</div>
                <div className="text-gray-400">console.log(a + Number(b)); // 数字相加</div>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400">// 3. 条件语句</div>
                <div>if (current_time == '12:20') {'{'}</div>
                <div>&nbsp;&nbsp;console.log('冲啊！');</div>
                <div>{'}'}</div>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400">// 4. 循环</div>
                <div>for (let i = 1; i &lt;= 10; i++) {'{'}</div>
                <div>&nbsp;&nbsp;console.log(i);</div>
                <div>{'}'}</div>
              </div>
              
              <div>
                <div className="text-blue-400">// 5. 函数</div>
                <div>function intro(content) {'{'}</div>
                <div>&nbsp;&nbsp;return '介绍：' + content;</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>

          {/* 输出结果区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">执行结果</h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm max-h-96 overflow-auto">
              {output.map((line, index) => (
                <div key={index} className="mb-1 text-gray-800 dark:text-gray-200">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 知识点总结 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">JavaScript基础知识点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="knowledge-card">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">变量声明</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• let - 块级作用域变量</li>
                <li>• const - 常量声明</li>
                <li>• var - 函数作用域变量</li>
              </ul>
            </div>
            
            <div className="knowledge-card">
              <h3 className="font-semibold text-lg mb-2 text-green-600">数据类型</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• number - 数字类型</li>
                <li>• string - 字符串类型</li>
                <li>• boolean - 布尔类型</li>
                <li>• undefined/null - 空值</li>
              </ul>
            </div>
            
            <div className="knowledge-card">
              <h3 className="font-semibold text-lg mb-2 text-purple-600">控制结构</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• if/else - 条件判断</li>
                <li>• for - 计数循环</li>
                <li>• while - 条件循环</li>
                <li>• function - 函数定义</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .knowledge-card {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .knowledge-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media (prefers-color-scheme: dark) {
          .knowledge-card {
            background: #2d3748;
            border-left-color: #4a5568;
          }
        }
      `}</style>
    </div>
  );
} 