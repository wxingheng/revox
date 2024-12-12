# Revox: 一站式 React 应用管理工具

Revox 是一个强大的 CLI 工具，帮助开发者从命令行构建、开发、测试、部署和维护 React 应用。通过 Revox，您可以简化开发流程，同时保持对项目的全面掌控。

## 目录

- [CLI 命令语法](#cli-命令语法)
- [布尔选项](#布尔选项)
- [数组选项](#数组选项)
- [键/值选项](#键值选项)
- [路径选项](#路径选项)
- [调试支持](#调试支持)
- [常见问题](#常见问题)

---

## CLI 命令语法

Revox CLI 遵循 Unix/POSIX 标准选项语法。命令由以下部分组成：

1. **主命令**：如 `build`、`start`、`test`。
2. **选项标志**：以 `--` 或 `-` 开头。
3. **参数值**：可为布尔值、数组、键值对或路径。

### 通用命令格式
```bash
revox [主命令] [选项] [参数]
```

## 示例

```bash
revox build --minify --define ENV="production"
revox start --watch src/index.js
```

## 布尔选项

布尔选项通过标志开启或关闭功能。

格式
- 开启：--option 或 --option=true
- 关闭：--no-option 或 --option=false

## 数组选项

用于提供多个值：

- --option value1 value2
- --option value1 --option value2

## 键/值选项

用于提供键值对：

- --option key=value key=value
- --option key=value --option key=value

## 示例
```bash
revox build --define ENV="production" API_URL="https://api.example.com"
revox build --define ENV="production" --define API_URL="https://api.example.com"
```

## 路径选项

支持绝对路径和相对路径。

## 示例

假设当前目录为项目根目录：

```bash
revox build --src src/index.js
revox build --src src/index.js --src src/index.js
```

## 调试支持

Revox 提供调试选项：
- --verbose：详细日志。
- --debug：调试信息。
- --trace：跟踪操作步骤。

## 示例
```bash
revox build --verbose
revox build --debug
revox build --trace
```

## 常见问题

- 如何查看所有命令？
使用 `revox --help`。
- 如何更新 Revox？
```bash
npm install -g revox-cli
```
- 支持哪些 React 项目结构？
Revox 支持多种项目结构，建议遵循常见的 React 项目模式。

Revox 助力 React 开发者高效完成从开发到生产的流程，提升项目质量和效率！


## 开发

```bash
node bin/revox.mjs start
```

## 调试

```bash
   chmod +x bin/revox.mjs

   npm link
```


## example

```bash
 revox generate f rfc GroupBank

 revox generate c rfc GroupBank
```

## 项目结构

```
revox/
│
├── bin/                   # CLI 入口文件
│   └── revox.js           # CLI 入口文件
│
├── lib/                   # 存放各种命令的实现
│   ├── commands/          # 各种命令的实现
│   │   ├── build.js       # 构建命令
│   │   ├── start.js       # 启动命令
│   │   └── test.js        # 测试命令
│   │
│   └── utils/             # 工具函数
│       └── logger.js      # 日志工具
│
├── templates/             # 模板文件，用于生成项目或组件
│   ├── component/         # 组件模板
│   └── service/           # 服务模板
│
├── test/                  # 测试文件
│   ├── commands/          # 命令测试
│   └── utils/             # 工具测试
│
├── package.json           # 项目配置文件
├── README.md              # 项目说明文档
└── .gitignore             # Git 忽略文件
```