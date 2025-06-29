"use client";

import { useState } from 'react';

interface GitHubRepo {
  name: string;
  owner: { login: string };
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  size: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export default function JSAsyncAdvanced() {
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchRepoData = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://api.github.com/repos/yangjh-xbmu/Web-develop');
      if (!response.ok) {
        throw new Error('网络响应失败');
      }
      const data = await response.json();
      setRepoData(data);
    } catch (err) {
      setError('获取数据失败: ' + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            练习10：JavaScript异步进阶
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            实践GitHub API调用和数据展示，掌握真实的异步编程应用。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">JavaScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">API</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Fetch</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">GitHub API调用演示</h2>
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={fetchRepoData}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {loading ? '获取中...' : '获取仓库信息'}
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              获取 yangjh-xbmu/Web-develop 仓库信息
            </span>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {repoData && (
            <div className="repo-info">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="info-card">
                  <h3 className="text-lg font-semibold mb-3">基本信息</h3>
                  <div className="space-y-2">
                    <div><strong>仓库名:</strong> {repoData.name}</div>
                    <div><strong>所有者:</strong> {repoData.owner?.login}</div>
                    <div><strong>描述:</strong> {repoData.description || '无描述'}</div>
                    <div><strong>主要语言:</strong> {repoData.language || '未知'}</div>
                  </div>
                </div>
                
                <div className="info-card">
                  <h3 className="text-lg font-semibold mb-3">统计数据</h3>
                  <div className="space-y-2">
                    <div><strong>Stars:</strong> {repoData.stargazers_count}</div>
                    <div><strong>Forks:</strong> {repoData.forks_count}</div>
                    <div><strong>Issues:</strong> {repoData.open_issues_count}</div>
                    <div><strong>大小:</strong> {repoData.size} KB</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">时间信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="time-card">
                    <div className="font-medium">创建时间</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(repoData.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="time-card">
                    <div className="font-medium">更新时间</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(repoData.updated_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="time-card">
                    <div className="font-medium">推送时间</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(repoData.pushed_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 代码示例 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">API调用代码示例</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto">
            <div className="mb-2 text-yellow-400">{'// GitHub API调用示例'}</div>
            <div className="mb-4">
              <div className="text-blue-400">{'// 异步函数定义'}</div>
              <div>async function getRepoData(owner, repo) {'{'}</div>
              <div>&nbsp;&nbsp;const url = `https://api.github.com/repos/${'${owner}'}/${'${repo}'}`;</div>
              <div>&nbsp;&nbsp;const response = await fetch(url);</div>
              <div>&nbsp;&nbsp;const data = await response.json();</div>
              <div>&nbsp;&nbsp;return data;</div>
              <div>{'}'}</div>
            </div>
            <div className="mb-4">
              <div className="text-blue-400">{'// 错误处理'}</div>
              <div>try {'{'}</div>
              <div>&nbsp;&nbsp;const data = await getRepoData(&apos;yangjh-xbmu&apos;, &apos;Web-develop&apos;);</div>
              <div>{'}'} catch (error) {'{'}</div>
              <div>&nbsp;&nbsp;console.error(&apos;获取失败:&apos;, error);</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .repo-info {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid #e9ecef;
        }

        .info-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .time-card {
          background: white;
          padding: 1rem;
          border-radius: 6px;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        @media (prefers-color-scheme: dark) {
          .repo-info {
            background: #2d3748;
            border-color: #4a5568;
          }

          .info-card {
            background: #4a5568;
            color: #e2e8f0;
          }

          .time-card {
            background: #4a5568;
            color: #e2e8f0;
            border-color: #718096;
          }
        }
      `}</style>
    </div>
  );
} 