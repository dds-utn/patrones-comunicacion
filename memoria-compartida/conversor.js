class ConversorAKms {

   convertir(millas) {
     this.kms = 1.6 * millas;
   }

}


const conversor = new ConversorAKms();
conversor.convertir(1);

console.log(conversor.kms);


// FULL SHARED MEMORY

/*
class ConversorAKms {

   convertir() {
     this.kms = 1.6 * this.millas;
   }

}


const conversor = new ConversorAKms();
conversor.millas = 1
conversor.convertir();

console.log(conversor.kms);

*/