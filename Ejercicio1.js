const jsonData = require('./datos2.json');
let jsonDataObj = JSON.parse(JSON.stringify(jsonData));
const dineroChina1993 = jsonDataObj.filter(el => el.anio_coche===1993 && el.pais==='China')
                        .reduce((acumulado,sig) => acumulado+parseFloat(sig.precio_coche.replace("$","")),0);
