import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, '../public/logo.svg');
const outDir = path.join(__dirname, '../public');

const icons = [
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'apple-touch-icon.png', size: 180 },
];

(async () => {
  for (const icon of icons) {
    await sharp(src)
      .resize(icon.size, icon.size)
      .png()
      .toFile(path.join(outDir, icon.name));
    console.log(`Generated ${icon.name}`);
  }
})(); 