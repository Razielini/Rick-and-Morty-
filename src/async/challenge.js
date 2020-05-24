/**
 * PRO
 * - Uso de Try/Catch
 * - Mas entendible
 * CONTRA
 * - Esperar a cada llamado (tiempo1 + tiempo2 + tiempo3)
 * - Requiere un polify como babel
 */
const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
  console.time('anotherFunction')
  try {
    const data = await fetchData(url_api)
    const character = await fetchData(`${API}${data.results[0].id}`)
    const origin =  await fetchData(`${character.origin.url}`)

    console.log('data ::', data.info.count)
    console.log('character ::', character.name)
    console.log('origin ::', origin.dimension)
  } catch (error) {
    console.error(error);
  }
  console.timeEnd('anotherFunction')
}

console.log('Before C')
anotherFunction(API)
console.log('After C')