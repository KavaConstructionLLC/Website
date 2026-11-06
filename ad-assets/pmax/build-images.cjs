// Crops Kava's real job photos into Performance Max image sizes.
// Run: NODE_PATH=<dir with sharp> node ad-assets/pmax/build-images.cjs
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const root = path.join(__dirname, '..', '..');
const photos = path.join(root, 'site/src/assets/photos');
const out = path.join(__dirname, 'images');

// Asset group -> source photos. Real Kava jobs only; crop, resize and a mild tone lift, nothing else.
const groups = {
  decks: ['decks-01', 'decks-02', 'decks-03', 'decks-04', 'decks-05', 'decks-06', 'decks-07', 'decks-09', 'decks-10', 'decks-11', 'decks-08', 'concrete-01'],
  extensions: ['porches-01', 'porches-02', 'porches-03', 'porches-07', 'porches-09', 'porches-10', 'porches-11', 'porches-12', 'porches-13', 'porches-04'],
  roofing: ['roofing-02', 'roofing-01', 'roofing-03', 'roofing-04', 'porches-10'],
};

const sizes = { landscape: [1200, 628], square: [1200, 1200], portrait: [960, 1200] };

// Tall photos that lose the subject in a 1.91:1 crop. They still run as square and portrait.
const noLandscape = ['decks-04', 'decks-05', 'decks-07', 'decks-09', 'decks-11', 'porches-04', 'roofing-01'];

async function crop(src, w, h, file) {
  await sharp(src)
    .rotate()
    .resize(w, h, { fit: 'cover', position: sharp.strategy.attention, kernel: 'lanczos3' })
    .modulate({ brightness: 1.03, saturation: 1.08 })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(file);
}

async function logos() {
  const logo = path.join(root, 'ad-assets/kava-logo.png');
  const dir = path.join(out, 'logo');
  fs.mkdirSync(dir, { recursive: true });
  const mark = await sharp(logo).resize(1000, 1000, { fit: 'contain', background: '#000' }).toBuffer();
  await sharp({ create: { width: 1200, height: 1200, channels: 3, background: '#000' } })
    .composite([{ input: mark, left: 100, top: 100 }]).png().toFile(path.join(dir, 'logo-square-1200.png'));
  const small = await sharp(logo).resize(260, 260, { fit: 'contain', background: '#000' }).toBuffer();
  const text = Buffer.from(`<svg width="880" height="300" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="130" fill="#ffffff" font-family="Arial Black, Arial" font-weight="900" font-size="128">KAVA</text>
    <text x="0" y="200" fill="#ffffff" font-family="Arial" font-weight="700" font-size="54" letter-spacing="5">CONSTRUCTION LLC</text>
    <text x="0" y="258" fill="#F0892B" font-family="Arial" font-weight="700" font-size="40">Morganton, NC</text></svg>`);
  await sharp({ create: { width: 1200, height: 300, channels: 3, background: '#000' } })
    .composite([{ input: small, left: 40, top: 20 }, { input: text, left: 330, top: 0 }])
    .png().toFile(path.join(dir, 'logo-landscape-1200x300.png'));
}

(async () => {
  for (const [group, list] of Object.entries(groups)) {
    for (const [name, [w, h]] of Object.entries(sizes)) {
      const dir = path.join(out, group, name);
      fs.mkdirSync(dir, { recursive: true });
      for (const p of list) {
        if (name === 'landscape' && noLandscape.includes(p)) continue;
        await crop(path.join(photos, `${p}.webp`), w, h, path.join(dir, `${p}-${w}x${h}.jpg`));
      }
    }
  }
  await logos();
  console.log('done');
})();
