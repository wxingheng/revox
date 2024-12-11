/*
 * @Author: wxingheng
 * @Date: 2024-12-11 14:54:08
 * @LastEditTime: 2024-12-11 15:00:20
 * @LastEditors: wxingheng
 * @Description: 
 * @FilePath: /Revox/lib/commands/dev.js
 */

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

module.exports = function() {
  console.log('执行开发逻辑...');

  // 找到项目根目录
  const projectRoot = process.cwd();

  // 构建 package.json 的路径
  const packageJsonPath = path.join(projectRoot, 'package.json');

  // 检查 package.json 是否存在
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = require(packageJsonPath);

    // 检查是否存在 dev 脚本
    if (packageJson.scripts && packageJson.scripts.dev) {
      console.log('找到 dev 命令，正在运行...');
      
      // 运行 dev 命令
      exec('npm run dev', { cwd: projectRoot }, (error, stdout, stderr) => {
        if (error) {
          console.error(`执行错误: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    } else {
      console.log('package.json 中没有找到 dev 命令。');
    }
  } else {
    console.log('没有找到 package.json 文件。');
  }
};