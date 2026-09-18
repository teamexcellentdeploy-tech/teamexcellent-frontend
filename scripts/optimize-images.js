import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function optimizeDirectory(dirPath, options = {}) {
  const { maxWidth = 600, quality = 82 } = options;
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (!stat.isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const outPath = path.join(dirPath, `${baseName}.webp`);

    try {
      const inputBuffer = fs.readFileSync(fullPath);
      const image = sharp(inputBuffer);
      const metadata = await image.metadata();

      let pipeline = sharp(inputBuffer);
      if (metadata.width && metadata.width > maxWidth) {
        pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
      }

      const outputBuffer = await pipeline
        .webp({ quality, effort: 6 })
        .toBuffer();

      fs.writeFileSync(outPath, outputBuffer);

      const newStat = fs.statSync(outPath);
      console.log(`Optimized ${file} (${(stat.size / 1024).toFixed(1)} KB) -> ${path.basename(outPath)} (${(newStat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

async function main() {
  console.log('--- Optimizing JEE Result Images ---');
  await optimizeDirectory(path.join(rootDir, 'public', 'jee-result'), { maxWidth: 420, quality: 80 });

  console.log('--- Optimizing NEET Result Images ---');
  await optimizeDirectory(path.join(rootDir, 'public', 'neet-result'), { maxWidth: 480, quality: 80 });

  console.log('--- Optimizing src/assets Images ---');
  await optimizeDirectory(path.join(rootDir, 'src', 'assets'), { maxWidth: 1000, quality: 80 });

  console.log('--- Optimizing public root Images ---');
  const publicDir = path.join(rootDir, 'public');
  
  // Convert logo-1_transparent.jpg.jpeg if exists
  const legacyLogo = path.join(publicDir, 'logo-1_transparent.jpg.jpeg');
  if (fs.existsSync(legacyLogo)) {
    const outLogoWebp = path.join(publicDir, 'logo-1_transparent.webp');
    await sharp(legacyLogo)
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outLogoWebp);
    console.log('Generated logo-1_transparent.webp');
  }

  // Generate logo192.png and logo512.png for PWA / manifest / schema
  const sourceFavicon = path.join(publicDir, 'Favicon.webp');
  if (fs.existsSync(sourceFavicon)) {
    await sharp(sourceFavicon).resize(192, 192).png().toFile(path.join(publicDir, 'logo192.png'));
    await sharp(sourceFavicon).resize(512, 512).png().toFile(path.join(publicDir, 'logo512.png'));
    console.log('Generated logo192.png and logo512.png');
  }

  console.log('--- All image optimization complete! ---');
}

main().catch(console.error);
