/*

- XMLHttpRequest
  .open('TIPO-SOLICITUD', 'URL', Asincrono?:Boolean)
  readyState
  4: Completado

  .status:
  200: OK

*/

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      console.log('Completado');
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
          const error = new Error(`Error :  ${url_api}`);
          return callback(error, null);
      }
    }
  }
  xhttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.error(`Error :: ${error1}`)
  fetchData (API + data1.results[0].id, function(error2, data2) {
    if (error2) return console.error(`Error :: ${error2}`)
    fetchData (data2.origin.url, function (error3, data3) {
      if (error3) return console.error(`Error :: ${error3}`)
      console.log(`Data 1 :: ${data1.info.count}`)
      console.log(`Data 2 :: ${data2.name}`)
      console.log(`Data 3 :: ${data3.dimension}`)
    })
  })
})