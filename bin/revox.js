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
  .description(`生成 组件/模块/文件/目录
 示例:
  $ revox g rfc MyComponent          # 生成基础组件
  $ revox g rfc.module MyModule      # 生成完整模块
  $ revox g rfc.comp Button -d src   # 指定输出目录
  $ revox g rfc.context Theme -f     # 强制覆盖`)
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
  .command('tool <action> [source]')
  .alias('t')
  .description(`工具箱命令集
示例:
  $ revox tool tmp ./src/Button        # 转换组件为模板
  $ revox tool tmp ./components/Modal   # 转换整个目录
  $ revox tool tmp Button.tsx --root   # 保存到项目根目录`)
  .option('-r, --root', '保存到项目根目录的 .revox 文件夹', false)
  .action((action, source, options) => {
    console.log(chalk.green('正在执行工具箱命令...'));
    import('../lib/commands/tool.js')
      .then(module => {
        try {
          module.default(action, source, options);
        } catch (error) {
          console.error(chalk.red('执行失败:'), error.message);
          process.exit(1);
        }
      })
      .catch(error => {
        console.error(chalk.red('命令加载失败:'), error.message);
        process.exit(1);
      });
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