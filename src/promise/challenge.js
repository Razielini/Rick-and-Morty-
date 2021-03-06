/**
 * PROS
 * - Facilmente Enlazable
 * - Es de mejor lectura
 * - Muy buena para asincronismo
 * CONTRA
 * - No maneja excepciones
 * - Error al no retornar los llamados
 * - Requiere polify tipo babel
 */


const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

console.time('fetchData')
fetchData(API)
  .then(data => {
    console.log(`Count :: ${data.info.count}`)
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then(data => {
    console.log(`Nombre :: ${data.name}`)
    return fetchData(`${data.origin.url}`)
  })
  .then(data => {
    console.log(`Dimension :: ${data.dimension}`)
  })
  .catch(err => console.log(err))
  .finally(() => {
    console.timeEnd('fetchData')
  })