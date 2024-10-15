async function check_route(url) {
  fetch(url).then(function (reponse) {
    if (reponse.ok == true) {
      return console.log("all is good");
    }
  }).catch(function (erreur) {
    return console.log("shit happens");
  })
}

check_route("https://docs.cdp.coinbase.com/coinbase-app/docs/welcome#data-endpoints");