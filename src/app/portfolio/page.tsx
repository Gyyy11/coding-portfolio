'use client';

import Link from 'next/link';

// 练习项目数据 - 重新排序：新增项目在前，原有项目在后
const projects = [
  // 新增的HTML+CSS项目（01-08）
  {
    id: '01',
    title: 'CSS选择器基础',
    description: 'CSS语法基础、选择器和样式表的使用',
    route: '/portfolio/css-selectors',
    tech: ['HTML', 'CSS', 'Selectors'],
    category: 'HTML+CSS'
  },
  {
    id: '02',
    title: 'CSS样式表练习',
    description: '内嵌、内部和外部样式表的使用方法',
    route: '/portfolio/css-stylesheets',
    tech: ['HTML', 'CSS', 'Stylesheets'],
    category: 'HTML+CSS'
  },
  {
    id: '03',
    title: 'CSS核心概念',
    description: 'CSS背景、盒模型、布局和动画效果',
    route: '/portfolio/css-concepts',
    tech: ['HTML', 'CSS', 'Animation', 'Flexbox'],
    category: 'HTML+CSS'
  },
  {
    id: '04',
    title: 'CSS布局练习',
    description: 'CSS盒模型和Flexbox布局实践',
    route: '/portfolio/css-layout',
    tech: ['HTML', 'CSS', 'Flexbox', 'Box Model'],
    category: 'HTML+CSS'
  },
  {
    id: '05',
    title: 'CSS定位练习',
    description: '相对定位与绝对定位的对比演示',
    route: '/portfolio/css-positioning',
    tech: ['HTML', 'CSS', 'Position'],
    category: 'HTML+CSS'
  },
  // 新增的JavaScript项目（06-10）
  {
    id: '06',
    title: 'JavaScript语法基础',
    description: '变量、循环、函数等基础语法练习',
    route: '/portfolio/js-basics',
    tech: ['JavaScript', 'Variables', 'Functions'],
    category: 'JavaScript'
  },
  {
    id: '07',
    title: 'JavaScript对象编程',
    description: '类、对象、继承和DOM操作实践',
    route: '/portfolio/js-objects',
    tech: ['JavaScript', 'OOP', 'DOM'],
    category: 'JavaScript'
  },
  {
    id: '08',
    title: 'JavaScript进阶语法',
    description: '类继承、回调函数和事件处理',
    route: '/portfolio/js-advanced',
    tech: ['JavaScript', 'Classes', 'Callbacks'],
    category: 'JavaScript'
  },
  {
    id: '09',
    title: 'JavaScript异步基础',
    description: 'Promise、async/await和API调用',
    route: '/portfolio/js-async-basics',
    tech: ['JavaScript', 'Promise', 'Async/Await'],
    category: 'JavaScript'
  },
  {
    id: '10',
    title: 'JavaScript异步进阶',
    description: 'GitHub API调用和数据展示',
    route: '/portfolio/js-async-advanced',
    tech: ['JavaScript', 'API', 'Fetch'],
    category: 'JavaScript'
  },
  // 原有项目（11-16）
  {
    id: '11',
    title: '个人名片页面',
    description: '使用HTML和CSS创建响应式个人名片页面',
    route: '/portfolio/business-card',
    tech: ['HTML', 'CSS', 'Flexbox'],
    category: 'HTML+CSS'
  },
  {
    id: '12',
    title: '登录表单设计',
    description: '美观的登录表单，包含验证和动画效果',
    route: '/portfolio/login-form',
    tech: ['HTML', 'CSS', 'Animation'],
    category: 'HTML+CSS'
  },
  {
    id: '13',
    title: '产品展示卡片',
    description: '电商风格的产品卡片组件设计',
    route: '/portfolio/product-card',
    tech: ['HTML', 'CSS', 'Grid'],
    category: 'HTML+CSS'
  },
  {
    id: '14',
    title: '计数器组件',
    description: 'React函数组件实现的交互式计数器',
    route: '/portfolio/counter-component',
    tech: ['React', 'useState', 'JSX'],
    category: 'React'
  },
  {
    id: '15',
    title: '待办事项列表',
    description: '完整的TodoList应用，支持增删改查',
    route: '/portfolio/todo-list',
    tech: ['React', 'useState', 'useEffect'],
    category: 'React'
  },
  {
    id: '16',
    title: '天气查询应用',
    description: '调用API获取天气信息的React应用',
    route: '/portfolio/weather-app',
    tech: ['React', 'API', 'useState', 'useEffect'],
    category: 'React'
  }

];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'HTML+CSS':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
    case 'React':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'JavaScript':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};

export default function Portfolio() {
  const htmlCssProjects = projects.filter(p => p.category === 'HTML+CSS');
  const reactProjects = projects.filter(p => p.category === 'React');
  const jsProjects = projects.filter(p => p.category === 'JavaScript');

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-900 overflow-y-auto">
      {/* 页面标题 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            编程练习作品集
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            前端技术综合练习：HTML+CSS基础、JavaScript编程和React组件开发
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <span>HTML+CSS ({htmlCssProjects.length}个)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>JavaScript ({jsProjects.length}个)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>React ({reactProjects.length}个)</span>
            </div>
          </div>
        </div>
      </div>

      {/* HTML+CSS 练习区域 */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            HTML + CSS 基础练习
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            掌握HTML结构和CSS样式设计的基础练习项目
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {htmlCssProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* JavaScript 练习区域 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            JavaScript 编程
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            JavaScript基础语法、面向对象编程和异步编程实践
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {jsProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* React 练习区域 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            React 组件开发
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            React函数组件、Hooks和状态管理的实践练习
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reactProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* 统计信息 */}
      <div className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {htmlCssProjects.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">HTML+CSS练习</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {jsProjects.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">JavaScript练习</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {reactProjects.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">React练习</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">总练习数</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 项目卡片组件 - 体现组件化开发思想
interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    route: string;
    tech: string[];
    category: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.route} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:scale-105">
        {/* 项目图片占位 */}
        <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
          <div className="text-center">
            <div className="w-40 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md">
              <span className="text-lg font-bold text-gray-600 dark:text-gray-400">
                {project.title}
              </span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">练习项目</span>
          </div>
        </div>

        {/* 项目信息 */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {project.title}
            </h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}>
              {project.category}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* 技术标签 */}
          <div className="flex flex-wrap gap-1">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
} 