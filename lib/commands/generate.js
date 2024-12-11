/*
 * @Author: wxingheng
 * @Date: 2024-12-11 15:03:28
 * @LastEditTime: 2024-12-11 15:53:04
 * @LastEditors: wxingheng
 * @Description: 
 * @FilePath: /Revox/lib/commands/generate.js
 */

const fs = require('fs');
const path = require('path');

module.exports = function() {
  // 找到项目根目录
  const projectRoot = process.cwd();

  console.log('执行生成逻辑...');
  // 获取命令行参数, 第一个参数是命令, 第二个参数是名称
  const args = process.argv.slice(2);
  console.log(process.argv, args);
  const command = args[1];
  const name = args[2];

  if (!command || !name) {
    console.error('请提供有效的命令和名称');
    return;
  }

  switch (command) {
    case 'component':
    case 'c':
      generateComponent(projectRoot, name);
      break;
    case 'directive':
    case 'd':
      generateDirective(projectRoot, name);
      break;
    case 'service':
      generateService(projectRoot, name);
      break;
    case 'module':
    case 'm':
      generateModule(projectRoot, name);
      break;
    case 'pipe':
    case 'p':
      generatePipe(projectRoot, name);
      break;
    case 'guard':
    case 'g':
      generateGuard(projectRoot, name);
      break;
    default:
      console.error('未知命令');
  }
};

function generateComponent(projectRoot, name) {
  const templatePath = path.join(projectRoot, 'templates/component/tmp.json');
  const template = JSON.parse(fs.readFileSync(templatePath, 'utf-8'));
  const componentTemplate = template.rfc.body.join('\n').replace(/\${1:ComponentName}/g, name);

  fs.writeFileSync(path.join(projectRoot, `${name}.component.tsx`), componentTemplate);
  console.log(`组件 ${name} 已生成`);
}

function generateDirective(projectRoot, name) {
  const content = `// 指令 ${name} 的代码`;
  fs.writeFileSync(path.join(projectRoot, `${name}.directive.js`), content);
  console.log(`指令 ${name} 已生成`);
}

function generateService(projectRoot, name) {
  const content = `// 服务 ${name} 的代码`;
    fs.writeFileSync(path.join(projectRoot, `${name}.service.js`), content);
  console.log(`服务 ${name} 已生成`);
}

function generateModule(projectRoot, name) {
  const content = `// 模块 ${name} 的代码`;
    fs.writeFileSync(path.join(projectRoot, `${name}.module.js`), content);
  console.log(`模块 ${name} 已生成`);
}
  
function generatePipe(projectRoot, name) {
  const content = `// 管道 ${name} 的代码`;
  fs.writeFileSync(path.join(projectRoot, `${name}.pipe.js`), content);
  console.log(`管道 ${name} 已生成`);
}

function generateGuard(projectRoot, name) {
  const content = `// 路由守卫 ${name} 的代码`;
  fs.writeFileSync(path.join(projectRoot, `${name}.guard.js`), content);
  console.log(`路由守卫 ${name} 已生成`);
}

