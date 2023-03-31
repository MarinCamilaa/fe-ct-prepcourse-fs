/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   let resultado = Math.pow (num, 2);
   return resultado;
      }
   
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:

function elevarAlCubo(num) {
   let resultado = Math.pow (num, 3);
   return resultado;
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
}

function elevar(num, exponent) {
   return Math.pow (num, exponent);
  
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
}

function redondearNumero(num) {
   let redondeo = Math.round (num);
   return redondeo
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}

function numeroRandom() {
   return Math.random();
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
