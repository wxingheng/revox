const fs = require('fs');
const path = require('path');

/**
 * 查找根目录（通过检测 .git 文件夹或 package.json）
 * @param {string} currentDir - 当前目录路径
 * @returns {string|null} - 项目根目录路径，找不到返回 null
 */
function findProjectRoot(currentDir) {
  if (fs.existsSync(path.join(currentDir, '.git')) || fs.existsSync(path.join(currentDir, 'package.json'))) {
    return currentDir;
  }

  const parentDir = path.dirname(currentDir);
  if (parentDir === currentDir) {
    // 已经到了文件系统的根目录，停止查找
    return null;
  }

  // 递归查找父目录
  return findProjectRoot(parentDir);
}

/**
 * 在项目根目录创建文件夹
 * @param {string} folderName - 要创建的文件夹名称
 */
function createFolderAtProjectRoot(folderName) {
  const currentDir = process.cwd();
  const projectRoot = findProjectRoot(currentDir);

  if (!projectRoot) {
    console.error('未找到项目根目录！');
    process.exit(1);
  }

  const targetPath = path.join(projectRoot, folderName);

  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
    console.log(`文件夹已创建：${targetPath}`);
  } else {
    console.log(`文件夹已存在：${targetPath}`);
  }
  return targetPath
}

// 使用
// createFolderAtProjectRoot('my-new-folder');

// 将函数导出，以便在其他文件中使用 createFolderAtProjectRoot
module.exports = {
    createFolderAtProjectRoot
};