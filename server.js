const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3001;

var myFetcher = function(req, res, next) {
  function getAllArtItems() {
    fetch(
      'https://mazurs-careful-panda.s1.umbraco.io/umbraco/rest/v1/content/published/'
    )
      .then(res => res.json())
      .then(showItems);
  }

  const s = ['dk', 'pl', 'de'];

  function showItems(data) {
    for (var i = 0; i < s.length; i++) {
      let chosenData = data._embedded.content[i].properties;
      let dataStigified = JSON.stringify(chosenData, null, 2);
      fs.writeFile(
        `dist/unibrew/assets/i18n/` + s[i] + `.json`,
        dataStigified,
        udalosie
      );
    }
  }
  getAllArtItems();

  function udalosie() {
    console.log('udalosie');
  }

  next();
};
app.use(myFetcher);
app.use(express.static(__dirname + '/dist/unibrew'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname));
});

const server = http.createServer(app);

server.listen(port, () => console.log('Running...'));
