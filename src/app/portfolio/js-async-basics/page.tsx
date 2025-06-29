"use client";

import { useEffect, useState } from 'react';

export default function JSAsyncBasics() {
  const [output, setOutput] = useState<string[]>([]);
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const logs: string[] = [];
    logs.push('开始异步编程演示...');
    logs.push('1. setTimeout演示:');
    logs.push('console.log("111") - 立即执行');
    
    setTimeout(() => {
      setOutput(prev => [...prev, 'setTimeout回调: "222" - 2秒后执行']);
    }, 2000);
    
    logs.push('console.log("333") - 立即执行');
    logs.push('');
    logs.push('2. Promise演示:');
    
    function getSomething() {
      return new Promise((resolve) => {
        setTimeout(() => {
          setOutput(prev => [...prev, 'Promise resolved: "1111"']);
          resolve('完成');
        }, 1000);
      });
    }
    
    getSomething().then(() => {
      setOutput(prev => [...prev, 'Promise.then: "2222"']);
    });
    
    logs.push('Promise创建完成，等待resolve...');
    setOutput(logs);
  }, []);

  const fetchGitHubData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.github.com/repos/microsoft/vscode');
      if (!response.ok) throw new Error('网络响应失败');
      const data = await response.json();
      setApiData({
        name: data.name,
        description: data.description,
        stars: data.stargazers_count,
        language: data.language,
        updated_at: data.updated_at
      });
      setOutput(prev => [...prev, '✅ GitHub API调用成功！']);
    } catch (error) {
      setOutput(prev => [...prev, '❌ API调用失败: ' + error]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习17：JavaScript异步编程基础
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            学习JavaScript异步编程：Promise、async/await和API调用的实践应用。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              Promise
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              Async/Await
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">异步编程代码</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto max-h-96">
              <div className="mb-2 text-yellow-400">// JavaScript异步编程练习</div>
              <div className="mb-4">
                <div className="text-blue-400">// 1. setTimeout演示</div>
                <div>setTimeout(() => console.log('222'), 2000);</div>
                <div>console.log('333');</div>
              </div>
              <div className="mb-4">
                <div className="text-blue-400">// 2. Promise演示</div>
                <div>function getSomething() {'{'}return new Promise((resolve) => {'{'}setTimeout(() => resolve(), 1000);{'}'});{'}'}</div>
                <div>getSomething().then(() => console.log('完成'));</div>
              </div>
              <div>
                <div className="text-blue-400">// 3. API调用</div>
                <div>async function fetchData() {'{'}const response = await fetch(url); return response.json();{'}'}</div>
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

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">实际API调用演示</h2>
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={fetchGitHubData}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {loading ? '获取中...' : '调用GitHub API'}
            </button>
          </div>
          
          {apiData && (
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{apiData.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{apiData.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div><span className="font-semibold">Stars:</span> {apiData.stars?.toLocaleString()}</div>
                <div><span className="font-semibold">Language:</span> {apiData.language}</div>
                <div><span className="font-semibold">Updated:</span> {new Date(apiData.updated_at).toLocaleDateString()}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 