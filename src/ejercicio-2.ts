/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Práctica 05: Objetos, clases e interfaces
 * @author Inés Garrote Fontenla alu0101512297@ull.edu.es
 * @date 16 feb 2024
 * @file ejercicio-2.ts: Ejercicio 2 de la Práctica 5
 * @brief
 */

// Creamos un alias de tipo para la tupla
export type Dish = [number, number]; // [nutriScore, unhealthyScore]

/**
 * @brief Clase MenuInstance que representa una instancia del problema del menú saludable
 */
export class MenuInstance {
  constructor(
    public dishes: Dish[], // conjunto de platos
    public maxUnhealthyScore: number, // puntuación máxima de insalubridad
  ) {}
}

/**
 * @brief Clase MenuSolution que representa una solución al problema del menú saludable
 */
export class MenuSolution {
  constructor(
    public selectedDishes: Dish[],
    public totalUnhealthyScore: number,
  ) {}
}

/**
 * @brief Clase Solver que implementa la funcionalidad de las tres heurísticas de resolución
 */
export class Solver {
  /**
   * @brief Heurística 1: Ordenar por Valor Nutricional Descendente
   * @param dishes
   * @returns lista de platos ordenada por valor nutricional descendente
   */
  static sortByNutritionalValue(dishes: Dish[]): Dish[] {
    return dishes.slice().sort((a, b) => b[0] - a[0]);
  }

  /**
   * @brief Heurística 2: Ordenar por Grado de Insalubridad Ascendente
   * @param dishes
   * @returns lista de platos ordenada por grado de insalubridad ascendente
   */
  static sortByUnhealthyScore(dishes: Dish[]): Dish[] {
    return dishes.slice().sort((a, b) => a[1] - b[1]);
  }

  /**
   * @brief Heurística 3: Ordenar por Ratio Valor Nutricional / Grado de Insalubridad Descendente
   * @param dishes
   * @returns lista de platos ordenada por ratio valor nutricional / grado de insalubridad descendente
   */
  static sortByNutritionalRatio(dishes: Dish[]): Dish[] {
    return dishes.slice().sort((a, b) => b[0] / b[1] - a[0] / a[1]);
  }

  /**
   * @brief Diseña un menú saludable según una heurística dada
   * @param menuInstance instancia del problema del menú saludable
   * @param heuristic heurística para ordenar los platos
   * @returns solución al problema del menú saludable
   */
  static designHealthyMenu(
    menuInstance: MenuInstance,
    heuristic: (dishes: Dish[]) => Dish[],
  ): MenuSolution {
    let currentUnhealthyScore = 0;
    const selectedDishes: Dish[] = [];

    for (const dish of heuristic(menuInstance.dishes)) {
      if (currentUnhealthyScore + dish[1] <= menuInstance.maxUnhealthyScore) {
        selectedDishes.push(dish);
        currentUnhealthyScore += dish[1];
      } else {
        break;
      }
    }

    return new MenuSolution(selectedDishes, currentUnhealthyScore);
  }
}

// Ejemplo de uso
const dishes: Dish[] = [
  [10, 5],
  [8, 3],
  [7, 2],
  [5, 1],
  [3, 1],
  [2, 1],
  [12, 6],
  [9, 4],
  [6, 3],
  [2, 1],
];

const maxUnhealthyScore = 8;

const menuInstance = new MenuInstance(dishes, maxUnhealthyScore);

const menu1 = Solver.designHealthyMenu(
  menuInstance,
  Solver.sortByNutritionalValue,
);
const menu2 = Solver.designHealthyMenu(
  menuInstance,
  Solver.sortByUnhealthyScore,
);
const menu3 = Solver.designHealthyMenu(
  menuInstance,
  Solver.sortByNutritionalRatio,
);

console.log("Menú 1:", menu1);
console.log("Menú 2:", menu2);
console.log("Menú 3:", menu3);
