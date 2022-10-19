const jsonData = require('./datos2.json');
let jsonDataObj = JSON.parse(JSON.stringify(jsonData));
const cocheMasNuevoSA = jsonDataObj.filter(el => el.pais==='South Africa').sort(((a, b) => a.anio_coche - b.anio_coche));
console.log(cocheMasNuevoSA[cocheMasNuevoSA.length-1].cuenta_bancaria);