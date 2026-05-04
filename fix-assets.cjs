const fs = require('fs');
const path = require('path');

const files = [
  'src/imports/Login-18-607.tsx',
  'src/imports/LandingPage.tsx',
  'src/imports/DashboardEmptyState.tsx',
  'src/imports/Dashboard.tsx',
  'src/imports/CreateAnAccount.tsx',
  'src/app/pages/Notes.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /import\s+(\w+)\s+from\s+["']figma:asset\/[a-f0-9]+\.png["'];?/g;
    content = content.replace(regex, 'const $1 = "https://placehold.co/400";');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced in ${file}`);
  }
});
