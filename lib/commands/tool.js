/*
 * @Author: wxingheng
 * @Date: 2024-12-10 16:09:26
 * @LastEditTime: 2024-12-10 16:11:37
 * @LastEditors: wxingheng
 * @Description: 
 * @FilePath: /Revox/lib/commands/tool.js
 */

const fs = require('fs');
const path = require('path');
const { createFolderAtProjectRoot } = require('../utils/index');

module.exports = function() {

  console.log('执行工具箱逻辑...');
  // 在这里实现工具箱逻辑
  // revox tool <toolName> <templateFile | templateContents>

  const args = process.argv.slice(2);
  console.log(process.argv, args);
  const toolName = args[1];
  const templateFile = args[2];
  const isRoot = args[3];

  if (!toolName) {
    console.error('请提供有效的工具箱名称');
    return;
  }

  switch (toolName) {
    case 'template':
    case 'tmp':
      console.log('执行文件转换为模版文件逻辑...');
      generateTemplate(templateFile, isRoot);
      break;
    default:
      console.error('未知的工具箱名称:', toolName);
      break;
  }
};

// templateFile 文件路径 或者 文件夹路径
function generateTemplate(templateFile, isRoot) {
  if (!fs.existsSync(templateFile)) {
    console.error('文件或文件夹不存在:', templateFile);
    return;
  }

  const parentDir = path.dirname(templateFile);
  const stats = fs.statSync(templateFile);
  let outputDir = stats.isFile() ?  parentDir : path.join(parentDir, `${ path.basename(templateFile)}Revox`)  ;
  
  if (isRoot) {
    const outputRootDir = createFolderAtProjectRoot('.revox');
    outputDir = stats.isFile() ?  outputRootDir : path.join(outputRootDir, `${ path.basename(templateFile)}Revox`)  ;
  }
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 处理单个文件的函数
  function processFile(filePath, relativeDir = '') {
    const fileName = path.basename(filePath);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const jsonContent = {
      body: fileContent.split('\n'),
      file_name: fileName
    };
    
    // 使用相对路径创建输出目录
    const targetDir = path.join(outputDir, relativeDir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    let outputPath = path.join(targetDir, `${fileName}.revox.json`);

    fs.writeFileSync(outputPath, JSON.stringify(jsonContent, null, 2), 'utf-8');
    console.log(`已转换文件: ${outputPath}`);
  }

  /**
   * 处理目录下的所有文件,转换为模板
   * @param {string} dirPath - 要处理的目录路径
   */
  function processDirectory(dirPath) {
    try {
      const basePath = templateFile;
      
      /**
       * 递归遍历目录
       * @param {string} currentPath - 当前处理的路径
       */
      function traverse(currentPath) {
        try {
          // 读取目录下所有文件
          const files = fs.readdirSync(currentPath);
          
          // 遍历处理每个文件
          files.forEach(file => {
            try {
              const fullPath = path.join(currentPath, file);
              const stat = fs.statSync(fullPath);
              
              // 计算当前文件相对于基础路径的相对路径
              const relativePath = path.relative(basePath, currentPath);
              
              if (stat.isDirectory()) {
                // 如果是目录则递归处理
                console.log(`处理子目录: ${file}`);
                traverse(fullPath);
              } else {
                // 如果是文件则转换为模板
                console.log(`处理文件: ${file}`);
                processFile(fullPath, relativePath);
              }
            } catch (fileError) {
              console.error(`处理文件 ${file} 时出错:`, fileError);
            }
          });
        } catch (traverseError) {
          console.error(`遍历目录 ${currentPath} 时出错:`, traverseError);
        }
      }
      
      // 开始遍历目录
      console.log(`开始处理目录: ${dirPath}`);
      traverse(dirPath);
      console.log(`目录处理完成: ${dirPath}`);
      
    } catch (error) {
      console.error('处理目录时发生错误:', error);
      throw error;
    }
  }

  // 根据类型处理文件或文件夹
  if (stats.isFile()) {
    processFile(templateFile);
  } else if (stats.isDirectory()) {
    processDirectory(templateFile);
  }

  console.log('模板生成完成！输出目录:', outputDir);
}