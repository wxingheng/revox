/*
 * @Author: wxingheng
 * @Date: 2024-12-10 16:09:26
 * @LastEditTime: 2024-12-10 16:11:37
 * @LastEditors: wxingheng
 * @Description: 
 * @FilePath: /Revox/lib/commands/tool.js
 */

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
function generateTemplate(templateFile){
// 1、判断 templateFile 是否存在
// 2、判断 templateFile 是文件还是文件夹
// 3、如果是文件，将文件内容转换为 JSON 格式
// 4、如果是文件夹，将文件夹下所有文件内容转换为 JSON 格式




}