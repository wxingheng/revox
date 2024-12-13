# Revox

**Revox** 是一个强大的命令行工具，用于快速生成和管理标准化的 React 组件模板，帮助开发者提高工作效率并规范代码结构。

---

## 🎉 核心功能

- **📦 一键生成标准化 React 组件/模块结构**
- **🔧 快速将现有组件转化为可复用模板**
- **💡 支持多种组件模板生成，灵活配置**
- **🎨 自动生成组件相关的样式、类型、上下文和工具文件**
- **🚀 提供快速调试与扩展支持**

---

## 🚀 快速开始

### 全局安装

```bash
npm install -g revox
```

### ✨ 功能详解

#### generate 命令
用于快速生成标准化组件或模块结构：

```bash
# 生成完整的 React 功能模块
revox generate rfc.module MyComponent

# 生成单个标准化 React 组件
revox generate rfc.comp MyComponent

# 使用默认模板生成组件
revox generate rfc MyComponent
```

#### tool 命令
提供模板管理与转换功能：

```bash
# 将已有组件目录转换为模板目录
revox tool tmp MyComponent

# 将单个组件文件转换为模板
revox tool tmp MyComponent/index.tsx
```

### 📁 生成的组件结构
以 rfc.module 模板为例，生成的结构如下：
    
```bash
    MyComponent/
├── components/          # 子组件目录
│   └── SubComponent/     
├── context/             # Context 相关
├── hooks/               # 自定义 Hooks
├── types/               # TypeScript 类型定义
├── utils/               # 工具函数
├── index.tsx            # 组件入口文件
└── index.less           # 样式文件
```

### 🛠️ 本地开发与调试

#### 启动本地开发
    
```bash
# 启动本地开发
node bin/revox.mjs start
```

#### 本地调试
    
```bash
# 添加执行权限
chmod +x bin/revox.mjs

# 关联全局命令
npm link
```

### 📦 项目结构
    
```bash
    revox/
├── bin/                # CLI 命令入口
├── lib/                # 核心逻辑
│   ├── commands/       # 命令实现
│   └── utils/          # 工具函数
├── .revox/             # 模板配置文件
└── example/            # 示例代码
```

### 💡 示例
以下是一些实际使用示例：
#### 转换现有组件为模板
```bash
# 转换目录为模板
revox tool tmp ExampleModule

# 转换单个组件为模板
revox tool tmp ExampleModule/index.tsx
```

#### 使用模板生成组件
```bash
# 使用 rfc.module 模板
revox generate rfc.module ExampleComponent

# 使用 rfc.comp 模板
revox generate rfc.comp ExampleComponent

# 使用默认模板
revox generate rfc ExampleComponent
```

---

### 📜 许可证

本项目遵循 MIT 开源协议，欢迎使用与转载。

### 🙌 贡献指南

欢迎贡献代码、提交功能建议或报告问题！
- 反馈: 请通过 GitHub Issues 提交问题和建议。

一起为更高效的 React 开发而努力！💻✨