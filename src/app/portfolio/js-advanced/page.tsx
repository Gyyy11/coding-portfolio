"use client";

import { useEffect, useState } from 'react';

export default function JSAdvanced() {
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    const logs: string[] = [];
    
    // 类和对象演示
    logs.push('=== 汽车类演示 ===');
    
    class Car {
      brand: string;
      model: string;
      year: number;

      constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
      }

      start() {
        return `汽车 ${this.brand} ${this.model} 启动了`;
      }

      stop() {
        return `汽车 ${this.brand} ${this.model} 停止了`;
      }
    }

    let myCar = new Car('Mi', 'Yu7', 2025);
    logs.push(myCar.start());
    logs.push(myCar.stop());
    logs.push('');

    // 继承演示
    logs.push('=== 电动汽车继承演示 ===');
    
    class ElectricCar extends Car {
      range: number;

      constructor(brand: string, model: string, year: number, range: number) {
        super(brand, model, year);
        this.range = range;
      }

      charge() {
        return `电动汽车 ${this.brand} ${this.model} 正在充电`;
      }
    }

    let myElectricCar = new ElectricCar('Tesla', 'Model Y', 2025, 300);
    logs.push(myElectricCar.start());
    logs.push(myElectricCar.charge());
    logs.push('');

    // 回调函数演示
    logs.push('=== 回调函数演示 ===');
    logs.push('console.log("111111") - 立即执行');

    setTimeout(() => {
      setOutput(prev => [...prev, 'setTimeout回调: "22222" - 2秒后执行']);
    }, 2000);

    logs.push('console.log("333333") - 立即执行');
    
    setOutput(logs);
  }, []);

  const handleElementClick = () => {
    alert('我被点击了！');
  };

  const handleDomUpdate = () => {
    setOutput(prev => [...prev, 'DOM更新: 内容已动态更改']);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习08：JavaScript进阶语法
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            学习JavaScript进阶概念：类继承、回调函数和事件处理机制。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">JavaScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Classes</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Callbacks</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">进阶语法代码</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto max-h-96">
              <div className="mb-2 text-yellow-400">// JavaScript进阶语法</div>
              <div className="mb-4">
                <div className="text-blue-400">// 1. 类定义</div>
                <div>class Car {'{'}constructor(brand, model, year) {'{'}this.brand = brand;{'}'}</div>
                <div>&nbsp;&nbsp;start() {'{'}return `汽车启动`;{'}'}</div>
                <div>{'}'}</div>
              </div>
              <div className="mb-4">
                <div className="text-blue-400">// 2. 继承</div>
                <div>class ElectricCar extends Car {'{'}charge() {'{'}return `充电中`;{'}'}</div>
                <div>{'}'}</div>
              </div>
              <div>
                <div className="text-blue-400">// 3. 回调函数</div>
                <div>setTimeout(() =&gt; console.log('延迟执行'), 2000);</div>
              </div>
            </div>
          </div>

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

        {/* 事件处理演示 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">事件处理演示</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              onClick={handleElementClick}
              className="event-demo-box cursor-pointer"
            >
              <h1 className="text-2xl font-bold">JavaScript 语法</h1>
              <p>点击我试试！</p>
            </div>
            <div className="control-panel">
              <button
                onClick={handleDomUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                更新DOM内容
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .event-demo-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .event-demo-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .control-panel {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
} 