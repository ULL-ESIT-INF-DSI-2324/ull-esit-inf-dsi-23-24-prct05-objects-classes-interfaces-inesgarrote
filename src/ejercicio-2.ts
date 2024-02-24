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
 * @brief Interfaz para la estrategia de ordenación
 */
export interface SortingStrategy {
  sort(dishes: Dish[]): Dish[];
}

/**
 * @brief Clase Solver que implementa la funcionalidad de resolver el problema del menú saludable
 */
export class Solver {
  private sortingStrategy: SortingStrategy;

  constructor(sortingStrategy: SortingStrategy) {
    this.sortingStrategy = sortingStrategy;
  }

  /**
   * @brief Método para cambiar la estrategia de ordenación en tiempo de ejecución
   * @param sortingStrategy Nueva estrategia de ordenación
   */
  setSortingStrategy(sortingStrategy: SortingStrategy): void {
    this.sortingStrategy = sortingStrategy;
  }

  /**
   * @brief Método para diseñar un menú saludable según la estrategia de ordenación dada
   * @param menuInstance Instancia del problema del menú saludable
   * @returns Solución al problema del menú saludable
   */
  designHealthyMenu(menuInstance: MenuInstance): MenuSolution {
    let currentUnhealthyScore = 0;
    const selectedDishes: Dish[] = [];

    for (const dish of this.sortingStrategy.sort(menuInstance.dishes)) {
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

/**
 * @brief Implementación de la estrategia de ordenación por Valor Nutricional Descendente
 */
export class SortByNutritionalValue implements SortingStrategy {
  sort(dishes: Dish[]): Dish[] {
    return dishes.slice().sort((a, b) => b[0] - a[0]);
  }
}

/**
 * @brief Implementación de la estrategia de ordenación por Grado de Insalubridad Ascendente
 */
export class SortByUnhealthyScore implements SortingStrategy {
  sort(dishes: Dish[]): Dish[] {
    return dishes.slice().sort((a, b) => a[1] - b[1]);
  }
}

/**
 * @brief Implementación de la estrategia de ordenación por Ratio Valor Nutricional / Grado de Insalubridad Descendente
 */
export class SortByNutritionalRatio implements SortingStrategy {
  sort(dishes: Dish[]): Dish[] {
    return dishes.slice().sort((a, b) => b[0] / b[1] - a[0] / a[1]);
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

const solver = new Solver(new SortByNutritionalValue());
const menu1 = solver.designHealthyMenu(menuInstance);

solver.setSortingStrategy(new SortByUnhealthyScore());
const menu2 = solver.designHealthyMenu(menuInstance);

solver.setSortingStrategy(new SortByNutritionalRatio());
const menu3 = solver.designHealthyMenu(menuInstance);

console.log("Menú 1:", menu1);
console.log("Menú 2:", menu2);
console.log("Menú 3:", menu3);
