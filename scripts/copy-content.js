const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, '../content');
const targetDir = path.join(__dirname, '../public/content');

// Ensure the target directory exists
fs.ensureDirSync(targetDir);

// Copy the content directory
fs.copySync(sourceDir, targetDir, {
  filter: (src) => {
    // Only copy markdown files
    return src.endsWith('.md');
  },
});

console.log('Content directory copied to public folder'); 