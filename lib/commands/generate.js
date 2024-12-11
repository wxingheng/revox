/*
 * @Author: wxingheng
 * @Date: 2024-12-11 15:03:28
 * @LastEditTime: 2024-12-11 17:37:29
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /Revox/lib/commands/generate.js
 */

const fs = require("fs");
const path = require("path");

module.exports = function () {
  // 找到项目根目录
  const projectRoot = process.cwd();

  console.log("执行生成逻辑...");
  // 获取命令行参数, 第一个参数是命令, 第二个参数是名称
  const args = process.argv.slice(2);
  console.log(process.argv, args);
  const command = args[1];
  const type = args[2];
  const name = args[3];

  if (!command || !name) {
    console.error("请提供有效的命令和名称");
    return;
  }

  switch (command) {
    case "file":
    case "f":
      generateFile(projectRoot, type, name);
      break;
    case "directive":
    case "d":
      generateDirective(projectRoot, type, name);
      break;
    case "service":
      generateService(projectRoot, type, name);
      break;
    case "module":
    case "m":
      generateModule(projectRoot, type, name);
      break;
    case "pipe":
    case "p":
      generatePipe(projectRoot, type, name);
      break;
    case "guard":
    case "g":
      generateGuard(projectRoot, type, name);
      break;
    case "contents":
    case "c":
      generateContents(projectRoot, type, name);
      break;
    default:
      console.error("未知命令");
  }
};

function generateDirective(projectRoot, type, name) {
  const content = `// 指令 ${name} 的代码`;
  fs.writeFileSync(path.join(projectRoot, `${name}.directive.js`), content);
  console.log(`指令 ${name} 已生成`);
}

function generateService(projectRoot, type, name) {
  const content = `// 服务 ${name} 的代码`;
  fs.writeFileSync(path.join(projectRoot, `${name}.service.js`), content);
  console.log(`服务 ${name} 已生成`);
}

function generateModule(projectRoot, type, name) {
  const content = `// 模块 ${name} 的代码`;
  fs.writeFileSync(path.join(projectRoot, `${name}.module.js`), content);
  console.log(`模块 ${name} 已生成`);
}

function generatePipe(projectRoot, type, name) {
  const content = `// 管道 ${name} 的代码`;
  fs.writeFileSync(path.join(projectRoot, `${name}.pipe.js`), content);
  console.log(`管道 ${name} 已生成`);
}

function generateGuard(projectRoot, type, name) {
  const content = `// 路由守卫 ${name} 的代码`;
  fs.writeFileSync(path.join(projectRoot, `${name}.guard.js`), content);
  console.log(`路由守卫 ${name} 已生成`);
}

// 生成单个文件
function generateFile(projectRoot, type, name) {
  const templatePath = path.join(projectRoot, `templates/file/${type}.json`);
  const template = JSON.parse(fs.readFileSync(templatePath, "utf-8"));
  const componentTemplate = template
    .join("\n")
    .replace(/\${1:ComponentName}/g, name);

  fs.writeFileSync(path.join(projectRoot, `${name}.tsx`), componentTemplate);
  console.log(`组件 ${name} 已生成`);
}

// 生成文件夹
function generateContents(projectRoot, type, name) {
  const templatePath = path.join(projectRoot, `templates/contents/${type}`);
  // 遍历文件夹
  const files = fs.readdirSync(templatePath);
  files.forEach((file) => {
    const filePath = path.join(templatePath, file);
    const content = JSON.parse(fs
      .readFileSync(filePath, "utf-8")
      .replace(/\${1:ComponentName}/g, name));
      const fileContent = content.body.join("\n");
      // 创建文件夹, 如果文件夹存在, 则不创建
      fs.mkdirSync(path.join(projectRoot, `${name}`), { recursive: true });
      fs.writeFileSync(path.join(projectRoot, `${name}/${content.file_name}`), fileContent);
  });
}
