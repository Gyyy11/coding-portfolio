'use client';

import { useState } from 'react';

// 计数器组件 - 体现组件化开发思想
function Counter({ title, initialValue = 0, step = 1, color = 'blue' }: {
  title: string;
  initialValue?: number;
  step?: number;
  color?: string;
}) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);
  const reset = () => setCount(initialValue);

  const getColorClasses = () => {
    const colors: { [key: string]: string } = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
        {title}
      </h3>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {count}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          当前数值
        </div>
      </div>

      <div className="flex justify-center space-x-3">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          -{step}
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg transition-colors"
        >
          重置
        </button>
        <button
          onClick={increment}
          className={`px-4 py-2 bg-gradient-to-r ${getColorClasses()} text-white rounded-lg transition-all`}
        >
          +{step}
        </button>
      </div>
    </div>
  );
}

// 高级计数器组件 - 展示更复杂的状态管理
function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState<number[]>([0]);

  const updateCount = (newCount: number) => {
    setCount(newCount);
    setHistory(prev => [...prev, newCount]);
  };

  const increment = () => updateCount(count + step);
  const decrement = () => updateCount(count - step);
  const reset = () => {
    setCount(0);
    setHistory([0]);
  };

  const undo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCount(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
        高级计数器（带历史记录）
      </h3>
      
      <div className="text-center mb-6">
        <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          {count}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          操作历史：{history.length} 步
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          步长：{step}
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          -{step}
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
        >
          +{step}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={undo}
          disabled={history.length <= 1}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          撤销
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          重置
        </button>
      </div>

      {history.length > 1 && (
        <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            操作历史：
          </div>
          <div className="flex flex-wrap gap-1">
            {history.slice(-10).map((value, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {value}
              </span>
            ))}
            {history.length > 10 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{history.length - 10} 更多
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CounterComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 练习说明 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习06：React计数器组件
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            使用React函数组件和useState Hook实现交互式计数器，展示组件化开发思想。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                技术要点：
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• React函数组件</li>
                <li>• useState Hook状态管理</li>
                <li>• 组件props传递</li>
                <li>• 事件处理</li>
                <li>• 条件渲染</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                组件特性：
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• 可配置初始值和步长</li>
                <li>• 多个独立计数器实例</li>
                <li>• 操作历史记录</li>
                <li>• 撤销功能</li>
                <li>• 响应式设计</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm rounded-full">
              React
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm rounded-full">
              useState
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 text-sm rounded-full">
              JSX
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 text-sm rounded-full">
              组件化
            </span>
          </div>
        </div>

        {/* 基础计数器组件展示 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            基础计数器组件
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Counter title="基础计数器" />
            <Counter title="步长为5" step={5} color="green" />
            <Counter title="从10开始" initialValue={10} color="purple" />
            <Counter title="步长为3" step={3} initialValue={-5} color="red" />
          </div>
        </div>

        {/* 高级计数器组件 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            高级计数器组件
          </h2>
          <div className="max-w-md mx-auto">
            <AdvancedCounter />
          </div>
        </div>
      </div>
    </div>
  );
} 