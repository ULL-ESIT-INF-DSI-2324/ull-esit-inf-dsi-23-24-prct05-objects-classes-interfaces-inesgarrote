/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Práctica 05
 * @author Inés Garrote Fontenla alu0101512297@ull.edu.es
 * @date 19 feb 2024
 * @file ejercicio-modi.1.ts:
 * @brief
 */

// Enumerado que contiene la lista de posibles alergias
enum Alergenos {
  Huevo = 1,
  Cacahuete = 2,
  Marisco = 4,
  Fresa = 8,
  Tomate = 16,
  Chocolate = 32,
  Polen = 64,
  Gato = 128,
}

/**
 * @brief Función que recibe un número entero positivo y devuelve un array con las alergias
 * @param num número entero positivo
 * @returns array con las alergias correspondientes al número
 */
export function getAllergens(num: number): Alergenos[] | undefined {
  if (!Number.isInteger(num) || num <= 0) {
    // si el numero no es entero positivo o no es un numero
    return undefined;
  }
  let alergias: Alergenos[] = []; // array de alergenos
  // si el numero es multiplo de 256, 512, 1024, etc, devolvemos el array vacio
  if (num % 256 === 0) {
    return alergias;
  }
  /* Si es mayor que 255 
      Ejemplo:
      Para el caso de getAllergens(257) seria 256 + 1, entonces tendriamos solo en cuenta el 1 y por eso tiene que ser [Parpadear].
      Para el caso de getAllergens(515) seria 512 + 1 + 2, entonces tendriamos solo en cuenta el 1 y el 2 por eso tiene que ser [Parpadear, Parpadear dos veces].
      */
  if (num > 255) {
    num %= 256;
  }

  const AlergenosArray = Object.values(Alergenos).reverse() as Alergenos[]; // array de alergias en orden inverso
  // recorremos el array de alergias y vamos restando el numero a cada alergia, si el numero es mayor o igual que la alergia, la añadimos al array de alergias y restamos el numero
  // uso de reduce para ir acumulando las alergias
  // asi se usa reduce: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  alergias = AlergenosArray.reduce((acc: Alergenos[], alergeno: Alergenos) => {
    if (num >= alergeno) {
      // introducimos la alergia en formato string el array

      acc.push(alergeno);
      num -= alergeno;
    }
    return acc;
  }, alergias);

  return alergias;
}
