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


// 模版所在的目录
const templateDir = path.resolve(__dirname, "../../");

// 执行revox generate命令时的目录
 const projectRoot = process.cwd();

module.exports = function () {
  // 用revox执行时的根目录
  // const projectRoot = process.cwd();

  // 用revox的根目录文件
  // const projectRoot = path.resolve(__dirname, "../../");

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
      generateFile( type, name);
      break;
    case "directive":
    case "d":
      generateDirective( type, name);
      break;
    case "service":
      generateService( type, name);
      break;
    case "module":
    case "m":
      generateModule( type, name);
      break;
    case "pipe":
    case "p":
      generatePipe( type, name);
      break;
    case "guard":
    case "g":
      generateGuard( type, name);
      break;
    case "contents":
    case "c":
      generateContents( type, name);
      break;
    default:
      console.error("未知命令");
  }
};

function generateDirective( type, name) {
  const content = `// 指令 ${name} 的代码`;
  fs.writeFileSync(path.join( `${name}.directive.js`), content);
  console.log(`指令 ${name} 已生成`);
}

function generateService( type, name) {
  const content = `// 服务 ${name} 的代码`;
  fs.writeFileSync(path.join( `${name}.service.js`), content);
  console.log(`服务 ${name} 已生成`);
}

function generateModule( type, name) {
  const content = `// 模块 ${name} 的代码`;
  fs.writeFileSync(path.join( `${name}.module.js`), content);
  console.log(`模块 ${name} 已生成`);
}

function generatePipe( type, name) {
  const content = `// 管道 ${name} 的代码`;
  fs.writeFileSync(path.join( `${name}.pipe.js`), content);
  console.log(`管道 ${name} 已生成`);
}

function generateGuard( type, name) {
  const content = `// 路由守卫 ${name} 的代码`;
  fs.writeFileSync(path.join( `${name}.guard.js`), content);
  console.log(`路由守卫 ${name} 已生成`);
}

// 生成单个文件
function generateFile( type, name) {
  const templatePath = path.join(templateDir, `tmp/file/${type}.json`);
  const template = JSON.parse(fs.readFileSync(templatePath, "utf-8"));
  const componentTemplate = template
    .join("\n")
    .replace(/\${ComponentName}/g, name);

  // 需要使用 projectRoot 路径
  fs.writeFileSync(path.join( `${projectRoot}/${name}.tsx`), componentTemplate);
  console.log(`组件 ${name} 已生成`);
}

// 生成文件夹
function generateContents( type, name) {
  const templatePath = path.join(templateDir, `tmp/contents/${type}`);
  // 遍历文件夹
  const files = fs.readdirSync(templatePath);
  files.forEach((file) => {
    const filePath = path.join(templatePath, file);
    const content = JSON.parse(fs
      .readFileSync(filePath, "utf-8")
      .replace(/\${ComponentName}/g, name));
      const fileContent = content.body.join("\n");
      // 创建文件夹, 如果文件夹存在, 则不创建
      fs.mkdirSync(path.join( `${projectRoot}/${name}`), { recursive: true });
      fs.writeFileSync(path.join( `${projectRoot}/${name}/${content.file_name}`), fileContent);
  });
}
