"use client";

import { useEffect, useState } from 'react';

export default function JSObjects() {
  const [output, setOutput] = useState<string[]>([]);
  const [domMessage, setDomMessage] = useState('这是一个标题的原始内容');

  useEffect(() => {
    const logs: string[] = [];
    
    // 类和对象演示
    logs.push('=== 类和对象练习 ===');
    
    class Student {
      name: string;
      age: number;
      school: string;
      grade: number;

      constructor(name: string, age: number, school: string, grade: number) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.grade = grade;
      }

      learn(subject: string = "语文") {
        return `${this.name}正在学习${subject}，真棒！`;
      }

      exam() {
        return `${this.name} 正在考试`;
      }
    }

    // 创建对象
    let xiaoming = new Student("小明", 7, "实验小学", 1);
    logs.push(xiaoming.learn("英语"));
    logs.push(xiaoming.exam());
    logs.push('');

    // 继承演示
    logs.push('=== 继承练习 ===');
    
    class Undergraduate extends Student {
      major: string;
      experience: number;

      constructor(name: string, age: number, school: string, grade: number, major: string, experience: number) {
        super(name, age, school, grade);
        this.major = major;
        this.experience = experience;
      }

      intern(corp: string) {
        const message = `${this.name}在${corp}实习，获得经验值1000`;
        logs.push(message);
        setOutput(prev => [...prev, message]);
        return super.exam();
      }
    }

    let xiaoming2 = new Undergraduate("小明", 17, "科技大学", 1, "新闻学", 0);
    xiaoming2.intern("腾讯");
    logs.push('');

    // 回调函数演示
    logs.push('=== 回调函数练习 ===');
    logs.push('console.log("111111") - 立即执行');

    setTimeout(() => {
      setOutput(prev => [...prev, 'setTimeout回调: "222222" - 1秒后执行']);
    }, 1000);

    logs.push('console.log("333333") - 立即执行');
    logs.push('');

    setOutput(logs);
  }, []);

  const handleTitleClick = () => {
    alert('你点我干啥！');
  };

  const handleDOMChange = () => {
    setDomMessage('这是来自脚本的动态内容');
  };

  const handleParagraphClick = () => {
    alert('你好啊！');
  };

  const simulatePageLoad = () => {
    alert('页面加载完成');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习07：JavaScript对象编程
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            学习JavaScript面向对象编程：类定义、对象创建、继承关系和DOM操作。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">JavaScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">OOP</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">DOM</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 代码演示 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">面向对象编程代码</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto max-h-96">
              <div className="mb-2 text-yellow-400">// JavaScript类和对象练习</div>
              
              <div className="mb-4">
                <div className="text-blue-400">// 1. 定义学生类</div>
                <div>class Student {'{'}constructor(name, age, school, grade) {'{'}this.name = name;{'}'}</div>
                <div>&nbsp;&nbsp;learn(subject = "语文") {'{'}return `${'{'}this.name{'}'}正在学习${'{'}subject{'}'}`;{'}'}</div>
                <div>{'}'}</div>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400">// 2. 创建对象实例</div>
                <div>let xiaoming = new Student("小明", 7, "实验小学", 1);</div>
                <div>xiaoming.learn("英语");</div>
              </div>
              
              <div className="mb-4">
                <div className="text-blue-400">// 3. 继承示例</div>
                <div>class Undergraduate extends Student {'{'}constructor(...args, major) {'{'}super(...args); this.major = major;{'}'}</div>
                <div>&nbsp;&nbsp;intern(corp) {'{'}return `${'{'}this.name{'}'}在${'{'}corp{'}'}实习`;{'}'}</div>
                <div>{'}'}</div>
              </div>
              
              <div>
                <div className="text-blue-400">// 4. DOM操作</div>
                <div>document.getElementById("demo").innerHTML = "新内容";</div>
                <div>element.onclick = function() {'{'}alert("点击事件");{'}'}</div>
              </div>
            </div>
          </div>

          {/* 执行结果 */}
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

        {/* DOM操作演示 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">DOM操作实践</h2>
          
          <div className="dom-demo-area">
            <h1 
              id="demo" 
              onClick={handleTitleClick}
              className="demo-title cursor-pointer"
              style={{ color: '#888' }}
            >
              {domMessage}
            </h1>
            
            <div className="mt-4">
              <p 
                id="anotherp"
                onClick={handleParagraphClick}
                className="demo-paragraph cursor-pointer"
              >
                这是一个段落
              </p>
            </div>

            <div className="mt-6 flex gap-4 flex-wrap">
              <button
                onClick={handleDOMChange}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                改变标题内容
              </button>
              <button
                onClick={simulatePageLoad}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                模拟页面加载
              </button>
            </div>
          </div>
        </div>

        {/* 面向对象概念 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">面向对象编程核心概念</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="concept-card">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">类与对象</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                类是对象的模板，对象是类的实例
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <li>• class - 定义类</li>
                <li>• constructor - 构造函数</li>
                <li>• new - 创建实例</li>
                <li>• this - 引用当前对象</li>
              </ul>
            </div>
            
            <div className="concept-card">
              <h3 className="font-semibold text-lg mb-2 text-green-600">继承</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                子类可以继承父类的属性和方法
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <li>• extends - 继承关键字</li>
                <li>• super() - 调用父类构造函数</li>
                <li>• super.method() - 调用父类方法</li>
                <li>• 方法重写</li>
              </ul>
            </div>
            
            <div className="concept-card">
              <h3 className="font-semibold text-lg mb-2 text-purple-600">DOM操作</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                通过JavaScript操作HTML元素
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <li>• getElementById - 获取元素</li>
                <li>• innerHTML - 修改内容</li>
                <li>• onclick - 事件处理</li>
                <li>• style - 修改样式</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .demo-title {
          font-size: 2rem;
          font-weight: bold;
          padding: 1rem;
          border: 2px dashed #cbd5e0;
          border-radius: 8px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .demo-title:hover {
          border-color: #3182ce;
          background-color: #ebf8ff;
          transform: scale(1.02);
        }

        .demo-paragraph {
          padding: 1rem;
          background: #f7fafc;
          border-radius: 8px;
          border-left: 4px solid #4299e1;
          transition: all 0.3s ease;
        }

        .demo-paragraph:hover {
          background: #edf2f7;
          border-left-color: #3182ce;
          transform: translateX(4px);
        }

        .concept-card {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .concept-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .concept-card:nth-child(1) {
          border-left-color: #3182ce;
        }

        .concept-card:nth-child(2) {
          border-left-color: #38a169;
        }

        .concept-card:nth-child(3) {
          border-left-color: #805ad5;
        }

        @media (prefers-color-scheme: dark) {
          .demo-title:hover {
            background-color: #2d3748;
            border-color: #63b3ed;
          }

          .demo-paragraph {
            background: #2d3748;
            color: #e2e8f0;
            border-left-color: #63b3ed;
          }

          .demo-paragraph:hover {
            background: #4a5568;
          }

          .concept-card {
            background: #2d3748;
            border-left-color: #4a5568;
          }
        }
      `}</style>
    </div>
  );
} 