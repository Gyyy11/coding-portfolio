'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('登录成功！（演示）');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* 练习说明 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            练习02：登录表单设计
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            美观的登录表单，包含验证和动画效果。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">HTML</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">CSS</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Animation</span>
          </div>
        </div>

        {/* 登录表单 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">欢迎回来</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">请登录您的账户</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  邮箱地址
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  密码
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                    className="h-4 w-4 text-purple-600 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">记住我</span>
                </label>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
                  忘记密码？
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
              >
                登录
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  还没有账户？{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">
                    立即注册
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 