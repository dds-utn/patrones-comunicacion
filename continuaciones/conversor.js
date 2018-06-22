const withDelay = require("./withDelay")

function convertir(millas, cont) {
  withDelay(() => cont(1.6 * millas) ) ;
}

convertir(1, (kms) => {
  console.log(kms);
});

console.log("Llame al convertir");