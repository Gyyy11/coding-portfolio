'use client';

import { useState, useEffect } from 'react';

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export default function WeatherApp() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchCity, setSearchCity] = useState('');

  // 模拟天气数据
  const mockWeatherData: { [key: string]: WeatherData } = {
    '北京': {
      city: '北京',
      temperature: 22,
      condition: '晴朗',
      humidity: 45,
      windSpeed: 12,
      icon: '☀️'
    },
    '上海': {
      city: '上海',
      temperature: 26,
      condition: '多云',
      humidity: 68,
      windSpeed: 8,
      icon: '⛅'
    },
    '广州': {
      city: '广州',
      temperature: 29,
      condition: '阴雨',
      humidity: 78,
      windSpeed: 6,
      icon: '🌧️'
    },
    '深圳': {
      city: '深圳',
      temperature: 28,
      condition: '阴雨',
      humidity: 75,
      windSpeed: 10,
      icon: '🌧️'
    }
  };

  // 模拟API调用
  const fetchWeather = async (city: string) => {
    setLoading(true);
    
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const weatherData = mockWeatherData[city];
    if (weatherData) {
      setCurrentWeather(weatherData);
    } else {
      alert('找不到该城市的天气信息');
    }
    
    setLoading(false);
  };

  const handleSearch = () => {
    if (searchCity.trim()) {
      fetchWeather(searchCity.trim());
    }
  };

  // 初始化时获取北京天气
  useEffect(() => {
    fetchWeather('北京');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="max-w-4xl mx-auto">
        {/* 练习说明 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-4">
            练习08：天气查询应用
          </h1>
          <p className="text-lg mb-4 opacity-90">
            调用API获取天气信息的React应用，展示数据获取和状态管理。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">功能特性：</h3>
              <ul className="space-y-1 opacity-80">
                <li>• 城市天气查询</li>
                <li>• 实时数据显示</li>
                <li>• 加载状态处理</li>
                <li>• 错误处理</li>
                <li>• 响应式设计</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">技术实现：</h3>
              <ul className="space-y-1 opacity-80">
                <li>• React Hooks (useState, useEffect)</li>
                <li>• 异步数据获取</li>
                <li>• 条件渲染</li>
                <li>• 组件状态管理</li>
                <li>• API模拟</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">API</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">useState</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">useEffect</span>
          </div>
        </div>

        {/* 天气应用界面 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          {/* 搜索区域 */}
          <div className="mb-8">
            <div className="flex max-w-md mx-auto">
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="输入城市名称..."
                className="flex-1 px-4 py-3 rounded-l-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                disabled={loading}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-r-lg border border-white/30 transition-colors disabled:opacity-50"
              >
                {loading ? '搜索中...' : '搜索'}
              </button>
            </div>
          </div>

          {/* 天气显示区域 */}
          {loading ? (
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-lg">正在获取天气信息...</p>
            </div>
          ) : currentWeather ? (
            <div className="max-w-2xl mx-auto">
              {/* 主要天气信息 */}
              <div className="text-center text-white mb-8">
                <div className="text-8xl mb-4">{currentWeather.icon}</div>
                <h2 className="text-4xl font-bold mb-2">{currentWeather.city}</h2>
                <div className="text-6xl font-light mb-2">{currentWeather.temperature}°</div>
                <p className="text-xl opacity-90">{currentWeather.condition}</p>
              </div>

              {/* 详细信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6 text-center text-white">
                  <div className="text-3xl mb-2">💧</div>
                  <div className="text-2xl font-semibold">{currentWeather.humidity}%</div>
                  <div className="opacity-75">湿度</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center text-white">
                  <div className="text-3xl mb-2">💨</div>
                  <div className="text-2xl font-semibold">{currentWeather.windSpeed} km/h</div>
                  <div className="opacity-75">风速</div>
                </div>
              </div>

              {/* 更新时间 */}
              <div className="text-center text-white/70 mt-6">
                最后更新：{new Date().toLocaleTimeString()}
              </div>
            </div>
          ) : (
            <div className="text-center text-white">
              <div className="text-4xl mb-4">🌤️</div>
              <p className="text-lg">请搜索城市查看天气信息</p>
            </div>
          )}

          {/* 快速城市选择 */}
          <div className="mt-8">
            <h3 className="text-white text-lg font-semibold mb-4 text-center">
              热门城市
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(mockWeatherData).map(city => (
                <button
                  key={city}
                  onClick={() => fetchWeather(city)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 技术说明 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mt-8 text-white">
          <h3 className="text-xl font-semibold mb-4">技术实现说明</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium mb-2">状态管理：</h4>
              <ul className="space-y-1 opacity-80">
                <li>• useState 管理天气数据</li>
                <li>• 加载状态控制</li>
                <li>• 用户输入处理</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">数据获取：</h4>
              <ul className="space-y-1 opacity-80">
                <li>• 模拟API调用</li>
                <li>• 异步处理</li>
                <li>• 错误处理</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 