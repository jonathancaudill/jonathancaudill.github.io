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

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  try {
    if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(filePath + '.tmp');
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(filePath)
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(filePath + '.tmp');
    }
    fs.renameSync(filePath + '.tmp', filePath);
    console.log(`Compressed: ${filePath}`);
  } catch (err) {
    console.error(`Failed to compress ${filePath}:`, err);
  }
}

(async () => {
  const images = getAllImageFiles(publicDir);
  for (const img of images) {
    await compressImage(img);
  }
  console.log('Image compression complete!');
})(); 