const teste = require('./teste');

(async () => {
  console.clear();
  const result = await teste();
  console.log(result);
  process.exit();
})();
