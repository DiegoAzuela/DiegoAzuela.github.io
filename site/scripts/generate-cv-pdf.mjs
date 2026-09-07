/**
 * Regenerate public/cv/Diego-Azuela-CV.pdf from the /cv/print page.
 *
 *   npm run build          # (or have `npm run dev` running)
 *   npm run cv:pdf
 *
 * Needs a running server: uses the preview server on port 4321 by default,
 * override with CV_PDF_URL.
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const url = process.env.CV_PDF_URL ?? 'http://localhost:4321/cv/print';
let preview;

async function reachable() {
  try {
    await fetch(url);
    return true;
  } catch {
    return false;
  }
}

if (!(await reachable())) {
  console.log('Starting preview server…');
  preview = spawn('npm', ['run', 'preview', '--', '--port', '4321'], {
    stdio: 'ignore',
    shell: true,
  });
  for (let i = 0; i < 40 && !(await reachable()); i++) await sleep(500);
}

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.pdf({
  path: 'public/cv/Diego-Azuela-CV.pdf',
  preferCSSPageSize: true,
  printBackground: true,
});
await browser.close();
preview?.kill();
console.log('Wrote public/cv/Diego-Azuela-CV.pdf');
process.exit(0);
