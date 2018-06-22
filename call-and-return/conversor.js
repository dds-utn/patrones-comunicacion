class ConversorAKms {
   convertir(millas) {
     return 1.6 * millas;
   }

}


const conversor = new ConversorAKms();
console.log(conversor.convertir(1))