/*
Una nevera inteligente puede contener alimentos y/o bebidas. Tanto un alimento como una bebida tienen características comunes, como un nombre e información nutricional asociada, por ejemplo. Luego, también poseen características diferenciadoras como, por ejemplo, la cantidad (en gramos para los alimentos y litros para las bebidas).

La nevera debe llevar un control de las unidades disponibles de cada alimento y/o bebida almacenada en su interior. Cuando la cantidad de un alimento o bebida llegue a cero, debe añadir dicho alimento o bebida a una lista de la compra. El usuario de la nevera puede añadir o consumir alimentos y/o bebidas, así como consultar la lista de la compra en cualquier momento.

Programe las entidades necesarias para modelar lo anterior y cree múltiples instancias de diferentes alimentos y/o bebidas.
*/

/**
 * @brief Interfaz que define las propiedades de un alimento
 */
interface Alimento {
  nombre: string;
  informacionNutricional: string;
  cantidad: number;
}

/**
 * @brief Clase que representa una bebida
 *
 */
export class Nevera implements Alimento {
  nombre: string;
  informacionNutricional: string;
  cantidad: number;
  listaCompra: Alimento[] = [];

  constructor(
    nombre: string,
    informacionNutricional: string,
    cantidad: number,
  ) {
    this.nombre = nombre;
    this.informacionNutricional = informacionNutricional;
    this.cantidad = cantidad;
  }

  anadirAlimento(alimento: Alimento) {
    this.listaCompra.push(alimento);
  }

  consumirAlimento(alimento: Alimento) {
    this.listaCompra.pop();
  }

  consultarListaCompra() {
    return this.listaCompra;
  }
}
