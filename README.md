# 郭仪的Web全栈结业课程项目

## 🚀 部署方式

### 环境要求
- **Node.js**: 版本 21 或更高版本
- **包管理器**: pnpm（推荐）

### 安装与运行步骤

1. **安装 Node.js 21**
   ```bash
   # 访问 https://nodejs.org/ 下载并安装 Node.js 21
   # 或使用 nvm 安装
   nvm install 21
   nvm use 21
   ```

2. **克隆项目**
   ```bash
   git clone <repository-url>
   cd coding-portfolio
   ```

3. **安装依赖**
   ```bash
   pnpm i
   ```

4. **配置环境变量（可选）**
   ```bash
   # 复制环境变量模板
   cp .env.example .env.local
   
   # 编辑 .env.local 文件，添加你的 WakaTime API Key
   WAKATIME_API_KEY=your_wakatime_api_key_here
   ```

5. **启动开发服务器**
   ```bash
   pnpm run dev
   ```

6. **访问应用**
   - 在浏览器中打开 [http://localhost:3000](http://localhost:3000)
   - 项目将在本地 3000 端口运行

## 📖 项目简介

本项目是一个基于 **Next.js 15** 构建的Web全栈结业课程项目，整合了本学期所有的HTML、CSS、JavaScript和React课程练习。项目采用现代化的技术栈，实现了以下核心功能：

- 🤖 **QAnything AI问答服务**：通过iframe嵌入方式集成
- ⏱️ **WakaTime编码统计**：实时显示个人编码时长数据
- 📚 **课程练习展示**：16个精心整理的课程练习项目
- 🎨 **响应式设计**：支持深色/浅色主题切换
- 🔧 **组件化开发**：充分体现React组件化思想

## 🛠️ 技术栈

- **前端框架**: Next.js 15.3.4
- **UI库**: React 19.0.0
- **样式框架**: Tailwind CSS 3.4.17
- **开发语言**: TypeScript 5.x
- **包管理器**: pnpm
- **构建工具**: Turbopack（Next.js内置）

## 🤖 QAnything集成实现

### 集成路径选择

本项目选择了 **基础路径（iframe嵌入方式）** 来集成QAnything服务，具体原因如下：

1. **快速集成**: iframe方式能够快速、稳定地集成现有的QAnything HTML问答页面
2. **安全隔离**: iframe提供了良好的安全隔离，避免了跨域和权限问题
3. **维护简便**: 无需处理复杂的API调用、错误处理和状态管理
4. **用户体验**: 用户可以直接使用完整的QAnything功能界面

### 实现细节

```typescript
// src/app/page.tsx
<iframe
  src="https://ai.youdao.com/saas/qanything/#/login?path=/bots"
  className="w-full h-full"
  title="QAnything AI问答"
  allow="microphone; camera; clipboard-read; clipboard-write; fullscreen; payment; geolocation"
  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-modals allow-downloads allow-orientation-lock"
  referrerPolicy="strict-origin-when-cross-origin"
/>
```

**关键特性**：
- 动态高度计算：根据导航栏高度自动调整iframe显示区域
- 完整权限配置：支持QAnything的所有交互功能
- 安全策略：合理的sandbox和referrer策略
- 响应式设计：适配不同屏幕尺寸

## ⏱️ WakaTime API集成

### API Key安全管理

本项目使用环境变量来安全管理WakaTime API Key：

```typescript
// src/app/api/wakatime/route.ts
const apiKey = process.env.WAKATIME_API_KEY;
```

### 实现方案

1. **API路由**: 在 `src/app/api/wakatime/route.ts` 中实现服务端API调用
2. **数据处理**: 获取过去30天的编码统计数据
3. **错误处理**: 当API Key未配置时返回模拟数据
4. **缓存策略**: 设置5分钟的缓存避免频繁请求
5. **中文显示**: 将时间数据转换为中文格式显示

### 功能特点

- 📊 显示过去30天总编码时长
- 🔒 API Key通过环境变量安全管理
- 🎯 自动fallback到模拟数据（开发环境友好）
- ⚡ 智能缓存减少API调用频次
- 🌐 支持中英文时间格式显示

## 🏗️ Next.js项目结构

```
coding-portfolio/
├── src/
│   ├── app/                    # App Router目录
│   │   ├── api/               # API路由
│   │   │   └── wakatime/      # WakaTime API集成
│   │   ├── components/        # 公共组件
│   │   │   └── Navigation.tsx # 导航组件
│   │   ├── portfolio/         # 作品集页面
│   │   │   ├── page.tsx      # 作品集首页
│   │   │   ├── css-selectors/     # CSS选择器练习
│   │   │   ├── css-stylesheets/   # CSS样式表练习
│   │   │   ├── css-concepts/      # CSS核心概念
│   │   │   ├── css-layout/        # CSS布局练习
│   │   │   ├── css-positioning/   # CSS定位练习
│   │   │   ├── js-basics/         # JavaScript基础
│   │   │   ├── js-objects/        # JavaScript对象编程
│   │   │   ├── js-advanced/       # JavaScript进阶语法
│   │   │   ├── js-async-basics/   # JavaScript异步基础
│   │   │   ├── js-async-advanced/ # JavaScript异步进阶
│   │   │   ├── business-card/     # 个人名片页面
│   │   │   ├── login-form/        # 登录表单设计
│   │   │   ├── product-card/      # 产品展示卡片
│   │   │   ├── counter-component/ # 计数器组件
│   │   │   ├── todo-list/         # 待办事项列表
│   │   │   └── weather-app/       # 天气查询应用
│   │   ├── globals.css        # 全局样式
│   │   ├── layout.tsx         # 根布局组件
│   │   └── page.tsx          # 首页（QAnything集成）
├── public/                    # 静态资源
├── next.config.ts            # Next.js配置
├── tailwind.config.js        # Tailwind CSS配置
├── package.json              # 项目依赖配置
└── README.md                 # 项目文档
```

## 📚 课程练习整合方案

### 分类组织

所有练习按照技术栈分为三大类：

#### 🎨 HTML+CSS练习（5个）
1. **CSS选择器基础** - CSS语法、选择器和样式表使用
2. **CSS样式表练习** - 内嵌、内部和外部样式表方法
3. **CSS核心概念** - 背景、盒模型、布局和动画效果
4. **CSS布局练习** - 盒模型和Flexbox布局实践
5. **CSS定位练习** - 相对定位与绝对定位对比演示

#### 💻 JavaScript练习（5个）
1. **JavaScript语法基础** - 变量、循环、函数等基础语法
2. **JavaScript对象编程** - 类、对象、继承和DOM操作
3. **JavaScript进阶语法** - 类继承、回调函数和事件处理
4. **JavaScript异步基础** - Promise、async/await和API调用
5. **JavaScript异步进阶** - GitHub API调用和数据展示

#### ⚛️ React组件练习（6个）
1. **个人名片页面** - 响应式个人名片页面设计
2. **登录表单设计** - 美观的登录表单，包含验证和动画
3. **产品展示卡片** - 电商风格的产品卡片组件
4. **计数器组件** - React函数组件实现的交互式计数器
5. **待办事项列表** - 完整的TodoList应用，支持增删改查
6. **天气查询应用** - 调用API获取天气信息的React应用

### 路由设计

采用 Next.js App Router 实现嵌套路由：

- `/portfolio` - 作品集首页，展示所有练习项目
- `/portfolio/[exercise-name]` - 各个具体练习页面

### 组件化特点

- **统一布局**: 所有练习页面采用一致的布局设计
- **响应式设计**: 支持移动端和桌面端适配
- **主题切换**: 支持深色/浅色主题
- **交互反馈**: 丰富的hover效果和动画
- **代码展示**: 部分练习包含代码演示和执行结果

## 🎯 核心功能特性

### 1. 智能导航系统
- 响应式导航栏设计
- 当前页面高亮显示
- 移动端友好的汉堡菜单

### 2. 作品集展示
- 卡片式项目展示
- 技术标签分类
- 一键跳转到具体练习

### 3. 编码统计展示
- 页脚全局显示WakaTime数据
- 实时更新编码时长
- 优雅的加载和错误处理

### 4. 主题系统
- 支持深色/浅色主题
- 系统主题自动检测
- 所有组件完整适配

## 🔧 开发命令

```bash
# 开发环境启动
pnpm run dev

# 生产环境构建
pnpm run build

# 生产环境启动
pnpm run start

# 代码检查
pnpm run lint
```

## 📸 功能运行截图

### 1. QAnything AI问答界面
![QAnything运行截图](./screenshots/qanything-demo.png)
*QAnything AI问答服务成功嵌入到Next.js应用中，支持完整的对话功能*

### 2. WakaTime编码统计展示
![WakaTime统计截图](./screenshots/wakatime-stats.png)
*页脚显示个人编码时长统计，数据来源于WakaTime API*

### 3. 课程练习导航页面
![练习导航截图](./screenshots/portfolio-overview.png)
*作品集首页展示所有16个课程练习，按技术分类组织*

### 4. 具体练习运行界面
![练习详情截图](./screenshots/exercise-detail.png)
*JavaScript异步编程练习页面，包含代码演示和交互功能*

## 🔒 环境变量配置

创建 `.env.local` 文件并配置以下变量：

```env
# WakaTime API Key（可选）
WAKATIME_API_KEY=your_wakatime_api_key_here
```

**获取WakaTime API Key步骤**：
1. 访问 [WakaTime官网](https://wakatime.com/)
2. 注册并登录账户
3. 进入 Settings → API Key
4. 复制API Key到环境变量中

## 🚀 部署指南

### Vercel部署（推荐）

1. 将代码推送到GitHub仓库
2. 在Vercel中导入GitHub项目
3. 配置环境变量 `WAKATIME_API_KEY`
4. 部署完成

### 其他平台部署

本项目兼容所有支持Node.js的部署平台：
- Netlify
- Railway
- Render
- 自建服务器

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👨‍💻 作者

**郭仪** - Web全栈开发学习者

- GitHub: [@your-github-username](https://github.com/your-github-username)
- Email: your-email@example.com

## 🙏 致谢

感谢本学期Web开发课程的所有老师和同学，以及以下开源项目：

- [Next.js](https://nextjs.org/) - React全栈框架
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [WakaTime](https://wakatime.com/) - 编程时间统计服务
- [QAnything](https://qanything.ai/) - AI问答服务

---

**注意**: 本项目仅用于学习和展示目的，请勿用于商业用途。
