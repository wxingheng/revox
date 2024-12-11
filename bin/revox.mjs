#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';

// 设置版本和描述
program
  .version('0.0.1')
  .description('Revox 是一个强大的 CLI 工具，帮助开发者从命令行构建、开发、测试、部署和维护 React 应用。');

// 定义 build 命令
program
  .command('build')
  .description('构建项目')
  .action(() => {
    console.log(chalk.green('正在构建项目...'));
    // 调用构建命令的实现
    import('../lib/commands/build.js').then(module => module.default());
  });

// 定义 start 命令
program
  .command('start')
  .description('启动项目')
  .action(() => {
    console.log(chalk.green('正在启动项目...'));
    // 调用启动命令的实现
    import('../lib/commands/start.js').then(module => module.default());
  });

// 定义 test 命令
program
  .command('test')
  .description('测试项目')
  .action(() => {
    console.log(chalk.green('正在测试项目...'));
    // 调用测试命令的实现
    import('../lib/commands/test.js').then(module => module.default());
  });

// 解析命令行参数
program.parse(process.argv); 