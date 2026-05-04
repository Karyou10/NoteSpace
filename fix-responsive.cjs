const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace w-[1216px] with w-full max-w-[1216px] for anything over 300px
  content = content.replace(/w-\[(\d+)px\]/g, (match, p1) => {
    const width = parseInt(p1, 10);
    if (width > 300) {
      return `w-full max-w-[${width}px]`;
    }
    return match;
  });

  // Replace large horizontal paddings like px-[112px] with px-4 md:px-[112px]
  content = content.replace(/px-\[(\d+)px\]/g, (match, p1) => {
    const padding = parseInt(p1, 10);
    if (padding > 32) {
      return `px-4 md:px-[${padding}px]`;
    }
    return match;
  });

  // Replace large fixed left values like left-[112px] with left-4 md:left-[112px]
  content = content.replace(/left-\[(\d+)px\]/g, (match, p1) => {
    const left = parseInt(p1, 10);
    if (left > 32) {
      return `left-4 md:left-[${left}px]`;
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const targetDirs = [
  path.join(__dirname, 'src', 'imports'),
  path.join(__dirname, 'src', 'app')
];

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir, processFile);
  }
});
