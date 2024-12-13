/*
 * @Author: wxingheng
 * @Date: 2024-12-11 15:03:28
 * @LastEditTime: 2024-12-11 17:37:29
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /Revox/lib/file_name_paths/generate.js
 */

const fs = require("fs");
const path = require("path");


// 模版所在的目录
const templateDir = path.resolve(__dirname, "../../");

// 用户执行revox generate命令时的目录
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
  const file_name = args[1];
  const name = args[2];

  if (!file_name || !name) {
    console.error("请提供有效的命令和名称");
    return;
  }

  try {
    // 将 file_name 转换为绝对路径
    const file_name_path = path.join(templateDir, `./tmp/${file_name}`);
    console.log(file_name_path);
    // 根据 file_name， 判断是文件还是文件夹
    const stats = fs.statSync(file_name_path);
    console.log(stats.isDirectory(), stats.isFile());
    if (stats.isFile()) {
      generateFile(file_name_path, name);
    }
    if (stats.isDirectory()) {
      generateContents(file_name_path, name);
    }
  } catch (error) {
    console.error("文件或文件夹不存在:", file_name, error);
    return;
  }


};



// 生成单个文件
function generateFile(file_name_path, name) {
  const sourcePath = file_name_path;
  const content = JSON.parse(fs
    .readFileSync(sourcePath, "utf-8")
    .replace(/\${ComponentName}/g, name));
  const fileContent = content.body.join("\n");
  // 需要使用 projectRoot 路径
  fs.writeFileSync(path.join(projectRoot, content.file_name), fileContent);
  console.log(`文件 ${path.join(projectRoot, content.file_name)} 已生成`);
}

// 生成文件夹
function generateContents(file_name_path, name) {
  const templatePath = file_name_path;
  // 递归遍历目录的函数
  function traverseDirectory(currentPath, targetBasePath) {
    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      const sourcePath = path.join(currentPath, file);
      const stats = fs.statSync(sourcePath);

      // 计算相对路径，用于在目标目录中创建相同的结构
      const relativePath = path.relative(templatePath, currentPath);
      const targetPath = path.join(projectRoot, name, relativePath);

      if (stats.isDirectory()) {
        // 如果是目录，递归处理
        fs.mkdirSync(path.join(targetPath, file), { recursive: true });
        traverseDirectory(sourcePath, path.join(targetPath, file));
      } else {
        // 如果是文件，处理内容并写入
        try {
          const content = JSON.parse(fs
            .readFileSync(sourcePath, "utf-8")
            .replace(/\${ComponentName}/g, name));

          const fileContent = content.body.join("\n");

          // 确保目标目录存在
          fs.mkdirSync(targetPath, { recursive: true });

          // 写入文件
          fs.writeFileSync(
            path.join(targetPath, content.file_name),
            fileContent
          );
        } catch (error) {
          console.error(`Error processing file ${sourcePath}:`, error);
        }
      }
    });
  }

  // 开始递归遍历
  traverseDirectory(templatePath, projectRoot);
  console.log(`文件夹 ${path.join(projectRoot, name)} 已生成`);
}
