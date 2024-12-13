#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';

// 设置版本和描述
program
  .version('0.0.1')
  .description('Revox 是一个强大的 CLI 工具，帮助开发者从命令行构建、开发、测试、部署和维护 React 应用。');



// 定义 generate 命令
program
  .command('generate')
  .description('生成项目')
  .action(() => {
    console.log(chalk.green('正在生成项目...'));
    // 调用生成命令的实现
    import('../lib/commands/generate.js').then(module => module.default());
  });



// 定义 tool 命令
program
  .command('tool')
  .description('工具箱')
  .action(() => {
    console.log(chalk.green('正在打开工具箱...'));
    // 调用工具箱命令的实现
    import('../lib/commands/tool.js').then(module => module.default());
  });


// 定义 init 命令
program
  .command('init')
  .description('初始化项目')
  .action(() => {
    console.log(chalk.green('正在初始化项目...'));
    // 调用初始化命令的实现
    import('../lib/commands/init.js').then(module => module.default());
  });

// 解析命令行参数
program.parse(process.argv); 