import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageExtensions = ['.png', '.jpg', '.jpeg'];
const publicDir = path.join(process.cwd(), 'public');

function getAllImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImageFiles(filePath));
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

async function convertToWebp(filePath) {
  const outPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`Converted to WebP: ${outPath}`);
  } catch (err) {
    console.error(`Failed to convert ${filePath} to WebP:`, err);
  }
}

(async () => {
  const images = getAllImageFiles(publicDir);
  for (const img of images) {
    await convertToWebp(img);
  }
  console.log('WebP conversion complete!');
})(); 