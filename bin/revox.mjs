#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';

// 设置版本和描述
program
  .version('0.0.1')
  .description('Revox 是一个强大的 CLI 工具，帮助开发者从命令行构建、开发、测试、部署和维护 React 应用。');



// 定义 generate 命令
program
  .command('generate <template> <name>')
  .alias('g') // 别名
  .description('生成 React 组件/模块/文件/目录；eg：revox g rfc MyComponent')
  .option('-d, --dir <directory>', '指定输出目录', './')
  .option('-f, --force', '强制覆盖已存在的文件', false)
  .action((template, name, options) => {
    console.log(chalk.green('正在生成组件...'));
    import('../lib/commands/generate.js')
      .then(module => {
        try {
          module.default(template, name, options);
        } catch (error) {
          console.error(chalk.red('生成失败:'), error.message);
          process.exit(1);
        }
      })
      .catch(error => {
        console.error(chalk.red('命令执行失败:'), error.message);
        process.exit(1);
      });
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