const puppeteer = require('puppeteer');

async function robo() {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
}

robo().then(console.log);
