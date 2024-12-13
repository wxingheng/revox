/*
 * @Author: wxingheng
 * @Date: 2024-12-10 16:09:26
 * @LastEditTime: 2024-12-10 16:11:37
 * @LastEditors: wxingheng
 * @Description: 
 * @FilePath: /Revox/lib/commands/init.js
 */

const fs = require('fs');
const path = require('path');

/**
 * 复制文件或目录
 * @param {string} src - 源路径
 * @param {string} dest - 目标路径
 */
function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);
      copyRecursive(srcFile, destFile);
    });
  } else {
    fs.copyFileSync(src, dest);
    console.log(`文件已复制: ${dest}`);
  }
}

module.exports = function() {
  try {
    console.log('执行初始化逻辑...');
    
    // 1. 获取项目根目录
    const projectRoot = process.cwd();
    
    // 2. 创建 .revox 目录
    const targetPath = path.join(projectRoot, '.revox');
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath);
      console.log(`创建目录: ${targetPath}`);
    }
    
    // 3. 复制模板文件
    const templateDir = path.resolve(__dirname, '../../.revox');
    if (fs.existsSync(templateDir)) {
      copyRecursive(templateDir, targetPath);
      console.log('模板初始化完成!');
    } else {
      console.error('模板目录不存在:', templateDir);
    }
  } catch (error) {
    console.error('初始化失败:', error);
    process.exit(1);
  }
};

