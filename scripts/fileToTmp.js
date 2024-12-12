const fs = require('fs');
const path = require('path');

/**
 * Converts a file into the specified JSON format.
 * @param {string} inputFilePath - Path to the input file.
 * @param {string} outputFilePath - Path to save the resulting JSON file.
 * @param {string} componentName - Name of the component (for placeholders in the template).
 */
function convertFileToJson(inputFilePath, outputFilePath, componentName) {
    if (!fs.existsSync(inputFilePath)) {
        console.error('Input file does not exist:', inputFilePath);
        return;
    }

    // Read the file content
    const fileContent = fs.readFileSync(inputFilePath, 'utf-8');

    // Split file content into an array of lines
    const lines = fileContent.split('\n');

    // Construct JSON object
    const jsonContent = {
        body: lines,
        file_name: componentName
    };

    // Write JSON to the output file
    fs.writeFileSync(outputFilePath, JSON.stringify(jsonContent, null, 2), 'utf-8');
    console.log('Conversion complete. JSON saved to:', outputFilePath);
}


// 用户执行脚本时时的目录
 const projectRoot = process.cwd();

 const file_name = "index.tsx"

// Example usage
const inputFilePath = path.resolve(projectRoot, file_name); // Replace with your file path
const outputFilePath = path.resolve(projectRoot, `${file_name}.json`); // Replace with your desired output path
const componentName = file_name; // Replace with your desired component name

convertFileToJson(inputFilePath, outputFilePath, componentName);