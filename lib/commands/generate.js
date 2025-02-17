import fs from "fs";
import path, { dirname } from "path";
import { findProjectRoot } from "../utils/index.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 模板所在的目录
let templateDir = path.resolve(__dirname, "../../");
// 用户执行 revox generate 命令时的目录
let outputDir = process.cwd();

const userProjectRoot = findProjectRoot(outputDir);

if(userProjectRoot){
  templateDir = userProjectRoot
}

export default function (template, name, options = {}) {
  console.log("执行生成逻辑...");

  if(options.dir){
    outputDir = path.resolve(process.cwd(), options.dir);
  }

  // 检查目标路径
  const targetPath = path.join(outputDir, name);
  if (fs.existsSync(targetPath)) {
    if (!options.force && !options.f) {
      console.error(`错误: 目标路径 "${targetPath}" 已存在`);
      console.log(`提示: 使用 --force 选项强制覆盖`);
      process.exit(1);
    } else {
      console.log(`警告: 正在覆盖已存在的路径 "${targetPath}"`);
    }
  }

  try {
    let filePath = path.join(templateDir, `./.revox/${template}`);
    if (!fs.existsSync(filePath)) {
      filePath += ".revox.json"; // 尝试添加默认后缀
      if (!fs.existsSync(filePath)) {
        console.error("文件或文件夹不存在:", filePath);
        return;
      }
    }

    console.log("正在处理文件路径:", filePath);

    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      processFile(filePath, name);
    } else if (stats.isDirectory()) {
      processDirectory(filePath, name);
    } else {
      console.error("未知文件类型:", filePath);
    }
  } catch (error) {
    console.error("处理文件时出错:", error.message);
    process.exit(1);
  }
};

// 处理单个文件
function processFile(filePath, componentName) {
  try {
    const content = readAndReplace(filePath, componentName);
    const targetPath = path.join(outputDir, content.file_name);

    fs.writeFileSync(targetPath, content.body.join("\n"));
    console.log(`文件已生成: ${targetPath}`);
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error.message);
  }
}

// 处理文件夹
function processDirectory(directoryPath, componentName) {
  try {
    const traverseDirectory = (currentPath, targetBasePath) => {
      const files = fs.readdirSync(currentPath);

      files.forEach((file) => {
        const sourcePath = path.join(currentPath, file);
        const stats = fs.statSync(sourcePath);

        // 相对路径用于保持目标目录结构一致
        const relativePath = path.relative(directoryPath, currentPath);
        const targetPath = path.join(outputDir, componentName, relativePath);

        if (stats.isDirectory()) {
          // 如果是目录，递归处理
          fs.mkdirSync(path.join(targetPath, file), { recursive: true });
          traverseDirectory(sourcePath, path.join(targetPath, file));
        } else {
          // 如果是文件，处理内容并写入
          try {
            const content = readAndReplace(sourcePath, componentName);

            fs.mkdirSync(targetPath, { recursive: true }); // 确保目标路径存在
            fs.writeFileSync(
              path.join(targetPath, content.file_name),
              content.body.join("\n")
            );
          } catch (error) {
            console.error(`处理文件 ${sourcePath} 时出错:`, error.message);
          }
        }
      });
    };

    traverseDirectory(directoryPath, outputDir);
    console.log(`文件夹已生成: ${path.join(outputDir, componentName)}`);
  } catch (error) {
    console.error("处理文件夹时出错:", error.message);
  }
}

// 读取文件并替换占位符
function readAndReplace(filePath, componentName) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const replacedContent = fileContent.replace(/\${ComponentName}/g, componentName);

  return JSON.parse(replacedContent);
}