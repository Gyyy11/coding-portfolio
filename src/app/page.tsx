"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [containerHeight, setContainerHeight] = useState('100vh');

  useEffect(() => {
    const calculateHeight = () => {
      // 动态获取导航栏高度
      const navElement = document.querySelector('nav');
      const navHeight = navElement ? navElement.offsetHeight : 60; // 备用值60px
      
      // 计算剩余高度
      const remainingHeight = window.innerHeight - navHeight;
      setContainerHeight(`${remainingHeight}px`);
    };

    // 延迟计算，确保DOM已完全加载
    const timer = setTimeout(() => {
      calculateHeight();
    }, 100);

    // 监听窗口大小变化
    const handleResize = () => {
      calculateHeight();
    };

    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      className="w-full" 
      style={{ height: containerHeight }}
    >
      <iframe
        src="https://ai.youdao.com/saas/qanything/#/login?path=/bots"
        className="w-full h-full"
        title="QAnything AI问答"
        allow="microphone; camera; clipboard-read; clipboard-write; fullscreen; payment; geolocation"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-modals allow-downloads allow-orientation-lock"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ 
          border: 'none',
          display: 'block'
        }}
      />
    </div>
  );
}
