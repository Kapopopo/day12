const fs = require('fs');
let results = [];

fs.createReadStream("data.csv").on("data", function (caca) {
  results += caca;
}).on("end", () => {
  console.log(results);
}).on("error", function (erreur) {
  console.error("error", erreur);
});
