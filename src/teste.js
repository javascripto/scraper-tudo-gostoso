const puppeteer = require('puppeteer');

async function getDolar() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.goto('https://www.google.com/search?q=dolar+para+real');

  const resultado = await page.evaluate(() => {
    const currencyInputSelector = '.a61j6.vk_gy.vk_sh.Hg3mWc';
    return document.querySelector(currencyInputSelector).value;
  });

  await browser.close();

  return 'O Dolar hoje está valendo R$ ' + Number(resultado.trim());
}

module.exports = getDolar;
