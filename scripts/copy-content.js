import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../src/content');
const targetDir = path.join(__dirname, '../public/content');

// Ensure the target directory exists
fs.ensureDirSync(targetDir);

// Copy all files from source to target
try {
  fs.copySync(sourceDir, targetDir, { overwrite: true });
  console.log('✅ Content files copied successfully from src/content to public/content');
} catch (error) {
  console.error('❌ Error copying content files:', error);
  process.exit(1);
} 