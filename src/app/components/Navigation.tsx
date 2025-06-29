'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';



export default function Navigation() {
  const pathname = usePathname();
  const [codingTime, setCodingTime] = useState<string>('加载中...');

  useEffect(() => {
    const fetchWakaTimeStats = async () => {
      try {
        const response = await fetch('/api/wakatime');
        const result = await response.json();
        
        if (result.success) {
          setCodingTime(result.data.text);
        } else {
          setCodingTime(result.data.text || '获取失败');
        }
      } catch (error) {
        console.error('获取编码时长失败:', error);
        setCodingTime('获取失败');
      }
    };

    fetchWakaTimeStats();
    
    // 每5分钟刷新一次数据
    const interval = setInterval(fetchWakaTimeStats, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 左侧导航按钮 */}
        <div className="flex space-x-4">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            AI问答
          </Link>
          <Link
            href="/portfolio"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === '/portfolio'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            作品展示
          </Link>
        </div>

        {/* 中间标题 */}
        <div className="flex-1 text-center">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            编程作品集
          </h1>
        </div>

        {/* 右侧WakaTime统计 */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>编码时长：{codingTime}</span>
        </div>
      </div>
    </nav>
  );
} 