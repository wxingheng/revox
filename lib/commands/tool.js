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

module.exports = function() {

  console.log('执行工具箱逻辑...');
  // 在这里实现工具箱逻辑
  // revox tool <toolName> <templateFile | templateContents>

  const args = process.argv.slice(2);
  console.log(process.argv, args);
  const toolName = args[1];
  const templateFile = args[2];


  if (!toolName) {
    console.error('请提供有效的工具箱名称');
    return;
  }

  switch (toolName) {
    case 'template':
    case 'tmp':
      console.log('执行文件转换为模版文件逻辑...');
      generateTemplate(templateFile);
      break;
    default:
      console.error('未知的工具箱名称:', toolName);
      break;
  }
};

// templateFile 文件路径 或者 文件夹路径
function generateTemplate(templateFile) {
  if (!fs.existsSync(templateFile)) {
    console.error('文件或文件夹不存在:', templateFile);
    return;
  }

  const parentDir = path.dirname(templateFile);
  const stats = fs.statSync(templateFile);
  const outputDir = stats.isFile() ?  parentDir : path.join(parentDir, `${ path.basename(templateFile)}Revox`)  ;
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
    
    const outputPath = path.join(targetDir, `${fileName}.revox.json`);
    fs.writeFileSync(outputPath, JSON.stringify(jsonContent, null, 2), 'utf-8');
    console.log(`已转换文件: ${outputPath}`);
  }

  // 处理文件夹的函数
  function processDirectory(dirPath) {
    const basePath = templateFile;
    
    function traverse(currentPath) {
      const files = fs.readdirSync(currentPath);
      
      files.forEach(file => {
        const fullPath = path.join(currentPath, file);
        const stat = fs.statSync(fullPath);
        
        // 计算相对路径
        const relativePath = path.relative(basePath, currentPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else {
          processFile(fullPath, relativePath);
        }
      });
    }
    
    traverse(dirPath);
  }

  // 根据类型处理文件或文件夹
  if (stats.isFile()) {
    processFile(templateFile);
  } else if (stats.isDirectory()) {
    processDirectory(templateFile);
  }

  console.log('模板生成完成！输出目录:', outputDir);
}