"use client";

export default function BusinessCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* 练习说明 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            练习01：个人名片页面
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            使用HTML和CSS创建响应式个人名片页面，掌握Flexbox布局和基础样式设计。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 text-sm rounded-full">
              HTML
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm rounded-full">
              CSS
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm rounded-full">
              Flexbox
            </span>
          </div>
        </div>

        {/* 名片展示区域 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="max-w-2xl mx-auto">
            {/* 个人名片 */}
            <div className="business-card">
              <div className="card-header">
                <div className="avatar">
                  <div className="avatar-placeholder">
                    <span>张三</span>
                  </div>
                </div>
                <div className="card-info">
                  <h2>张三</h2>
                  <p className="title">前端开发工程师</p>
                  <p className="company">互联网科技公司</p>
                </div>
              </div>
              
              <div className="card-body">
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="icon">📧</span>
                    <span>zhangsan@email.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon">📱</span>
                    <span>+86 138-0000-0000</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon">🌐</span>
                    <span>www.zhangsan.dev</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon">📍</span>
                    <span>北京市朝阳区</span>
                  </div>
                </div>
                
                <div className="skills">
                  <h3>技能专长</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Vue.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 内联样式 - 在实际项目中应该放在单独的CSS文件中 */}
      <style jsx>{`
        .business-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          padding: 2rem;
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .business-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: rotate(45deg);
        }

        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .avatar {
          margin-right: 1.5rem;
        }

        .avatar-placeholder {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          border: 3px solid rgba(255, 255, 255, 0.3);
        }

        .card-info h2 {
          font-size: 2rem;
          margin: 0 0 0.5rem 0;
          font-weight: 700;
        }

        .title {
          font-size: 1.1rem;
          margin: 0 0 0.25rem 0;
          opacity: 0.9;
        }

        .company {
          margin: 0;
          opacity: 0.8;
        }

        .card-body {
          position: relative;
          z-index: 1;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .icon {
          margin-right: 0.75rem;
          font-size: 1.2rem;
        }

        .skills h3 {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .card-header {
            flex-direction: column;
            text-align: center;
          }

          .avatar {
            margin-right: 0;
            margin-bottom: 1rem;
          }

          .contact-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
} 