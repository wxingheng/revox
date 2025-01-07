<div align="center">

# Revox 

[![npm version](https://img.shields.io/npm/v/revox.svg)](https://www.npmjs.com/package/revox)
[![license](https://img.shields.io/npm/l/revox.svg)](https://github.com/wxingheng/revox/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)
[![Node Version](https://img.shields.io/node/v/revox.svg)](https://nodejs.org)
[![Downloads](https://img.shields.io/npm/dm/revox.svg)](https://www.npmjs.com/package/revox)
[![Issues](https://img.shields.io/github/issues/wxingheng/revox.svg)](https://github.com/wxingheng/revox/issues)

<h4>基于AI 生成的 一个强大的 React 组件生成和管理工具，让开发更高效、更规范</h4>

[English](https://github.com/wxingheng/revox/blob/main/README_EN.md) | 简体中文

</div>

## 🎯 项目初心

Revox 诞生于对现代化开发效率提升的追求，以及对 AI 辅助编程未来的展望。整个项目从构思到发布仅用时3小时，充分展现了 AI 驱动开发的高效性：

- 🤖 **拥抱 AI 编程** - 项目本身基于 [Cursor](https://www.cursor.com/) 编程工具开发，从构思到完整实现仅用时3小时，完美诠释了 AI 驱动开发的效率革命
- ⚡️ **效率至上** - 通过智能化的工具和流程，显著提升日常开发效率。正如 Revox 本身的开发过程，包含开发、测试、发布和文档编写的完整流程，都在极短时间内高质量完成
- 🎨 **最佳实践** - 将团队积累的开发经验和最佳实践，转化为可复用的工具和模板
- 🌟 **开放共享** - 期待通过开源社区的力量，共同打造更智能、更高效的开发工具

> 💡 从项目的 [commit 历史](https://github.com/wxingheng/revox/commits/main/) 可以看到，在短短3小时内完成了从初始化到发布 0.0.5 版本的全过程，包括：
> - 核心功能开发
> - 完整的文档编写
> - NPM 包发布
> - 多语言支持

## ✨ 特性

- 🎯 **标准化模板** - 一键生成符合最佳实践的 React 组件结构
- 🔄 **模板转换** - 轻松将现有组件转化为可复用模板
- 🎨 **完整生态** - 自动生成样式、类型、Context 和工具文件
- ⚙️ **高度可配置** - 支持自定义模板和配置项
- 📦 **开箱即用** - 内置多种实用模板，快速上手
- 🛠 **扩展性强** - 提供插件机制，支持功能扩展

## 📦 安装

```bash
npm install -g revox
# 或
yarn global add revox
# 或
pnpm add -g revox
```

## 🚀 快速开始

### 1. 初始化配置（可选）

```bash
revox init
```

这将在项目根目录创建 `.revox` 文件夹，用于存放自定义模板和配置。

### 2. 生成组件

```bash
# 生成标准组件
revox generate rfc.comp MyComponent

# 生成完整功能模块
revox generate rfc.module MyModule

# 使用自定义模板
revox generate rfc.custom<your template name> MyCustom
```

## 📚 命令详解

### generate

生成组件或模块：

```bash
revox generate <template> <name> [options]

选项：
  -f, --force    强制覆盖已存在的文件
  -d, --dir      指定输出目录
```

### template

模板管理：

```bash
# 将文件夹转换为模板
revox tool tmp ./src/Button        

# 将文件夹转换为模板
revox tool tmp ./components/Modal  
```

## 📁 目录结构

生成的组件结构示例：

```
MyComponent/
├── components/          # 子组件
│   └── SubComponent/     
├── context/            # Context 相关
├── hooks/              # 自定义 Hooks
├── types/              # TypeScript 类型
├── utils/              # 工具函数
├── index.tsx           # 组件入口
├── style.module.css    # 样式文件
└── README.md           # 组件文档
```

## 最佳实践
1. 使用 revox init 初始化配置
2. 编写属于你自己项目的最佳实践案例
3. 使用 revox tool tmp 将你的最佳实践案例转换为模板
4. 就可以随时使用 revox generate 生成组件 

## 🤝 贡献指南

我们欢迎所有形式的贡献，无论是新功能、文档改进还是 bug 修复。

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交改动：`git commit -m 'Add some AmazingFeature'`
4. 推送分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

如果你发现了 bug 或有新的想法，欢迎提交 [Issue](https://github.com/wxingheng/revox/issues)。

## 📝 更新日志

查看 [CHANGELOG.md](./CHANGELOG.md) 了解详细更新历史。

## 🎯 开发计划

- [ ] 支持更多模板类型
- [ ] 添加模板市场功能
- [ ] 提供 Web UI 配置界面
- [ ] 支持组件预览功能
- [ ] 集成单元测试生成

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Create React App](https://github.com/facebook/create-react-app)

## 📮 联系方式

- 作者：wxingheng
- Email：[wxingheng@outlook.com](mailto:wxingheng@outlook.com)
- GitHub：[@wxingheng](https://github.com/wxingheng)

---

如果这个项目对你有帮助，欢迎 star 支持！ ⭐️ 
