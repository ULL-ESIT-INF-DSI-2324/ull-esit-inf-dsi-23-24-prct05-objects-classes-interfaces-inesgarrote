[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/FvgIFuXc)

# Práctica 5 - Objetos, clases e interfaces

Práctica 5 de la asignatura Desarrollo de Sistemas.  
Realizada por Inés Garrote Fontenla [alu0101512297@ull.edu.es](alu0101512297@ull.edu.es)

---

# Informe

Realizada por Inés Garrote Fontenla [alu0101512297@ull.edu.es](alu0101512297@ull.edu.es)
Enlace al repositorio de Github asociado a la práctica [ll-esit-inf-dsi-23-24-prct05-vscode-inesgarrote](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-inesgarrote.git)

## Introducción

En esta práctica aprenderemos a utilizar Objetos, Clases e Interfaces en TypeScript. Para ello, se nos pide realizar dos ejercicios que nos ayudarán a comprender el funcionamiento de estos elementos.

Además, al mismo tiempo que realizamos los ejercicicios usaremos herramientas tales como Typedoc que permite generar documentación automática a partir de comentarios en el código fuente y de la información sobre tipos proporcionada por TypeScript.

También usaremos Mocha y Chai que las utilizaremos para incorporar desarrollo dirigido por pruebas (TDD) en nuestra práctica. Mocha proporciona la estructura y la ejecución de pruebas, mientras que Chai se centra en las aserciones, facilitando la escritura y lectura de pruebas más expresivas

Tambíen nos introduciremos en los principios de SOLID, que son un conjunto de cinco principios de diseño de código orientado a objetos que se utilizan para diseñar software más fácil de mantener y extender. Además de herramientas tales como Instambull y Coveralls que nos ayudarán a realizar un seguimiento de la cobertura de nuestras pruebas.

## Configuración de Coveralls
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-inesgarrote/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-inesgarrote?branch=main)

## Ejercicios

Para poder aprender los conceptos de la práctica, se realizaron una serie de ejercicios que se detallan a continuación.

### Ejercicio 1 - Gestor de referencias bibliográficas

El objetivo del ejercicio es diseñar e implementar un gestor de referencias bibliográficas en TypeScript. Este gestor debe ser capaz de almacenar, consultar y exportar información sobre diferentes tipos de elementos bibliográficos, como artículos de revistas, contribuciones a congresos, capítulos de libros, libros, trabajos de fin de grado, trabajos de fin de máster, entre otros.

El desarrollo debe cumplir con ciertas funcionalidades clave:

- Almacenamiento de información: El gestor debe ser capaz de almacenar información sobre múltiples elementos bibliográficos. Cada elemento bibliográfico debe contener al menos los siguientes elementos de información: título, autor o autores, palabras clave, resumen, fecha de publicación, páginas y editorial. Además, se destaca que algunos elementos pueden tener información adicional según su tipología.

- Formato IEEE: Independientemente de la tipología del elemento bibliográfico, el gestor debe ser capaz de generar una referencia en formato IEEE para cada uno de ellos. Este formato puede variar según la tipología del elemento, por ejemplo, la referencia IEEE de un artículo de revista puede diferir de la de un capítulo de libro.

- Mostrar información en formato tabla: El gestor debe ser capaz de mostrar la información almacenada en formato de tabla utilizando console.table. Esto facilita la visualización y consulta de la información almacenada.

- Búsquedas y filtrado: Debe ser posible realizar búsquedas de elementos bibliográficos por palabras clave y filtrar los resultados por campos como título, autores, fecha de publicación y editorial. Esto facilita la recuperación de información específica.

- Exportación en formato IEEE: Se debe proporcionar la capacidad de exportar los resultados de una búsqueda en formato IEEE. Esto permitirá a los usuarios obtener referencias bibliográficas en un formato estándar para su uso posterior.

Para ello, se implementó el siguiente código:

**Interfaz ElementoBibliografico**:

```typescript
interface ElementoBibliografico {
  titulo: string;
  autor: string[];
  palabras_clave: string[];
  resumen: string;
  fecha: string;
  paginas: string;
  editorial: string;
  n_revista?: number; // para revista
  volumen?: number; // para revista
  n_congreso?: string; // para congreso
  n_editores?: string[]; // Para capitulo de libro
  n_libro?: string; // Para capitulo de libro
  ciudad?: string; // Para libro/capitulo de libro
  tipo_trabajo?: string; // TFG o TFM
  departamento?: string; // TFG o TFM
  universidad?: string; // TFG o TFM
  pais?: string; // TFG o TFM
  FormatoIEEE: () => void; // referencia para cada elemento bibliografico en formato IEEE
}
```

- Define la estructura común que deben tener todos los elementos bibliográficos.
- Incluye propiedades como titulo, autor, palabras_clave, resumen, fecha, etc. También incluye propiedades opcionales que dependen de la tipología del elemento bibliográfico.
- Contiene un método FormatoIEEE que se espera que implementen todas las clases que implementan esta interfaz.

### Clases que implementan la interfaz ElementoBibliografico

**ArticuloRevista**:

```typescript
export class ArticuloRevista implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autor: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha: string,
    public paginas: string,
    public editorial: string,
    public n_revista: number,
    public volumen: number,
  ) {}
  FormatoIEEE() {
    const autoresString = this.autor.join(", ");
    return `${autoresString}, "${this.titulo}", ${this.editorial}, vol. ${this.volumen}, no. ${this.n_revista}, pp. ${this.paginas}, ${this.fecha}.`;
  }
}
```

- Representa un artículo de revista.
- Implementa la interfaz ElementoBibliografico.
- Incluye un método FormatoIEEE que devuelve una referencia en formato IEEE para un artículo de revista.

**ContribucionCongreso**:

```typescript
export class ContribuicionCongreso implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autor: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha: string,
    public paginas: string,
    public editorial: string,
    public n_congreso: string,
  ) {}
  FormatoIEEE() {
    const autoresString = this.autor.join(", ");
    return `${autoresString}, "${this.titulo}", ${this.n_congreso}, ${this.fecha},  pp. ${this.paginas}.`;
  }
}
```

- Representa una contribución a congreso.
- Implementa la interfaz ElementoBibliografico.
- Incluye un método FormatoIEEE que devuelve una referencia en formato IEEE para una contribución a congreso.

**CapituloLibro**:

```typescript
export class CapituloLibro implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autor: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha: string,
    public paginas: string,
    public editorial: string,
    public n_libro: string,
    public n_editores: string[],
    public ciudad: string,
  ) {}
  FormatoIEEE() {
    const autoresString = this.autor.join(", ");
    const editoresString = this.n_editores.join(", ");
    return `${autoresString}, "${this.titulo}", in ${editoresString} (Eds.), ${this.n_libro}, ${this.ciudad}, ${this.editorial}, ${this.fecha}, pp. ${this.paginas}.`;
  }
}
```

- Representa un capítulo de libro.
- Implementa la interfaz ElementoBibliografico.
- Incluye un método FormatoIEEE que devuelve una referencia en formato IEEE para un capítulo de libro.

**Libro**:

```typescript
export class Libro implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autor: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha: string,
    public paginas: string,
    public editorial: string,
    public n_libro: string,
    public n_editores: string[],
    public ciudad: string,
  ) {}
  FormatoIEEE() {
    const autoresString = this.autor.join(", ");
    const editoresString = this.n_editores.join(", ");
    return `${autoresString}, "${this.titulo}", in ${editoresString} (Eds.), ${this.n_libro}, ${this.ciudad}, ${this.editorial}, ${this.fecha}, pp. ${this.paginas}.`;
  }
}
```

- Representa un libro.
- Implementa la interfaz ElementoBibliografico.
- Incluye un método FormatoIEEE que devuelve una referencia en formato IEEE para un libro.

**TrabajoFinGrado**:

```typescript
export class TrabajoFinGrado implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autor: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha: string,
    public paginas: string,
    public editorial: string,
    public tipo_trabajo: string,
    public departamento: string,
    public universidad: string,
    public pais: string,
  ) {}
  FormatoIEEE() {
    const autoresString = this.autor.join(", ");
    return `${autoresString}, "${this.titulo}", ${this.tipo_trabajo}, ${this.departamento}, ${this.universidad}, ${this.pais}, ${this.fecha}, pp. ${this.paginas}.`;
  }
}
```

- Representa un trabajo de fin de grado.
- Implementa la interfaz ElementoBibliografico.
- Incluye un método FormatoIEEE que devuelve una referencia en formato IEEE para un trabajo de fin de grado.

### Clase GestorReferenciasBibliograficas

```typescript
export class GestorBibliografico {
  constructor(public bibliografia: ElementoBibliografico[] = []) {}

  addElementoBibliografico(elemento: ElementoBibliografico) {
    this.bibliografia.push(elemento);
  }

  MostrarPorConsola(): void {
    console.table(this.bibliografia);
  }

  BusquedaElemento(filtro: string, valor: string): ElementoBibliografico[] {
    return this.bibliografia.filter((elemento) => {
      const valorLower = valor.toLowerCase();

      switch (filtro) {
        case "palabra_clave":
          return elemento.palabras_clave.some((palabra) =>
            palabra.toLowerCase().includes(valorLower),
          );
          break;
        case "titulo":
          return elemento.titulo.toLowerCase().includes(valorLower);
          break;
        case "autor":
          return elemento.autor.some((autor) =>
            autor.toLowerCase().includes(valorLower),
          );
          break;
        case "fecha":
          return elemento.fecha.toLowerCase().includes(valorLower);
          break;
        case "editorial":
          return elemento.editorial.toLowerCase().includes(valorLower);
          break;
        default:
          return false;
      }
    });
  }
  ExportarIEEEFormat(filtro: string, palabra_clave: string): string {
    const resultados = this.BusquedaElemento(filtro, palabra_clave);
    return resultados.map((elemento) => elemento.FormatoIEEE()).join("\n\n");
  }
}
```

- Representa un gestor bibliográfico que almacena una lista de elementos bibliográficos.
- Incluye métodos como addElementoBibliografico, MostrarPorConsola, BusquedaElemento y ExportarIEEEFormat.

**Constructor**:

```typescript
constructor(public bibliografia: ElementoBibliografico[] = []) {}
```

El constructor inicializa la instancia de la clase con una bibliografía, que es un array vacío por defecto.

**addElementoBibliografico(elemento: ElementoBibliografico): void**:

```typescript
addElementoBibliografico(elemento: ElementoBibliografico) {
  this.bibliografia.push(elemento);
}
```

Agrega un nuevo elemento bibliográfico a la lista de bibliografía.

**MostrarPorConsola(): void**:

```typescript
MostrarPorConsola(): void {
  console.table(this.bibliografia);
}
```

Muestra la bibliografía por consola en formato de tabla.

**BusquedaElemento(filtro: string, valor: string): ElementoBibliografico[]**:

```typescript
BusquedaElemento(filtro: string, valor: string): ElementoBibliografico[] {
  return this.bibliografia.filter((elemento) => {
    // ... lógica de búsqueda según el filtro y el valor
  });
}
```

Realiza una búsqueda en la bibliografía según un filtro y un valor proporcionados. Devuelve un array con los elementos encontrados.

**ExportarIEEEFormat(filtro: string, palabra_clave: string): string**:

```typescript
ExportarIEEEFormat(filtro: string, palabra_clave: string): string {
  const resultados = this.BusquedaElemento(filtro, palabra_clave);
  return resultados.map((elemento) => elemento.FormatoIEEE()).join("\n\n");
}
```

Exporta la bibliografía que cumple con ciertos criterios (filtrada por un filtro y un valor) en formato IEEE. Devuelve una cadena con las referencias en formato IEEE.

Por último, se realizaron pruebas para la función implementada. Se creó un archivo de pruebas llamado ejercicio-1.spec.ts que contiene pruebas para la función implementada.

### Ejercicio 2 - Menús saludables orientados a objetos

El objetivo de este ejercicio es diseñar e implementar un conjunto de clases e interfaces orientadas a objetos para automatizar la creación de menús saludables. Se espera que el diseño incluya las siguientes clases:

**MenuSolution (Solución de Menú)**:

- Representa una solución al problema de diseñar un menú saludable.
- Debe contener la lógica para organizar y gestionar la combinación de platos que forman el menú.

**MenuInstance (Instancia de Menú)**:

- Representa una instancia específica del problema, que incluye información sobre los platos disponibles, sus puntuaciones nutricionales e insalubridad, y el grado máximo de insalubridad permitido en el menú.
- Proporciona métodos para configurar y acceder a los detalles de los platos y sus propiedades.

**Solver (Solver o Solucionador)**:

- Implementa la funcionalidad de tres heurísticas de resolución diseñadas anteriormente.
- Debe ser capaz de generar soluciones para el problema de diseño del menú saludable utilizando las heurísticas propuestas.

El diseño y la implementación deben reflejar la estructura lógica del problema y permitir la interacción entre las clases de manera coherente. Además, se espera que las clases sigan los principios de la programación orientada a objetos, como encapsulamiento, herencia y polimorfismo, para facilitar la extensibilidad y mantenibilidad del código.

Además, en la última clase de Teoría aprendimos acerca de los principios SOLID y Patrón de comportamiento Strategy, por lo que en este ejercicio se ha aplicado.

Para ello, se implementó el siguiente código:

**Definición del tipo Dish**:

```typescript
export type Dish = [number, number]; // [nutriScore, unhealthyScore]
```

Se define un tipo Dish que representa un plato con dos valores numéricos: nutriScore (puntuación nutricional) y unhealthyScore (puntuación de insalubridad).

**Clase MenuInstance**:

```typescript
export class MenuInstance {
  constructor(
    public dishes: Dish[], // conjunto de platos
    public maxUnhealthyScore: number, // puntuación máxima de insalubridad
  ) {}
}
```

MenuInstance es una clase que representa una instancia del problema del menú saludable.
Tiene un constructor que recibe un conjunto de platos (dishes) y la puntuación máxima de insalubridad permitida (maxUnhealthyScore).

**Clase MenuSolution**:

```typescript
export class MenuSolution {
  constructor(
    public selectedDishes: Dish[],
    public totalUnhealthyScore: number,
  ) {}
}
```

MenuSolution es una clase que representa una solución al problema del menú saludable.
Tiene un constructor que recibe los platos seleccionados (selectedDishes) y la puntuación total de insalubridad (totalUnhealthyScore).

**Interfaz SortingStrategy**:

```typescript
export interface SortingStrategy {
  sort(dishes: Dish[]): Dish[];
}
```

SortingStrategy es una interfaz que define las estrategias de ordenación.

**Clase Solver**:

```typescript
export class Solver {
  private sortingStrategy: SortingStrategy;

  constructor(sortingStrategy: SortingStrategy) {
    this.sortingStrategy = sortingStrategy;
  }

  setSortingStrategy(sortingStrategy: SortingStrategy): void {
    this.sortingStrategy = sortingStrategy;
  }

  designHealthyMenu(menuInstance: MenuInstance): MenuSolution {
    // ...
  }
}
```

- Solver es una clase que implementa la funcionalidad para resolver el problema del menú saludable.
- Tiene un atributo sortingStrategy que representa la estrategia de ordenación actual.
- El método setSortingStrategy permite cambiar la estrategia de ordenación en tiempo de ejecución.
- El método designHealthyMenu utiliza la estrategia de ordenación actual para diseñar un menú saludable.

**Implementaciones de SortingStrategy**:

```typescript
export class SortByNutritionalValue implements SortingStrategy {
  sort(dishes: Dish[]): Dish[] {
    return dishes.slice().sort((a, b) => b[0] - a[0]);
  }
}

export class SortByUnhealthyScore implements SortingStrategy {
  sort(dishes: Dish[]): Dish[] {
    return dishes.slice().sort((a, b) => a[1] - b[1]);
  }
}

export class SortByNutritionalRatio implements SortingStrategy {
  sort(dishes: Dish[]): Dish[] {
    return dishes.slice().sort((a, b) => b[0] / b[1] - a[0] / a[1]);
  }
}
```

Estas clases implementan la interfaz SortingStrategy y proporcionan algoritmos específicos de ordenación.

- SortByNutritionalValue ordena los platos por valor nutricional descendente.
- SortByUnhealthyScore ordena los platos por grado de insalubridad ascendente.
- SortByNutritionalRatio ordena los platos por ratio valor nutricional / grado de insalubridad descendente.

Por último, se realizaron pruebas para la función implementada. Se creó un archivo de pruebas llamado ejercicio-2.spec.ts que contiene pruebas para la función implementada.

## Conclusiones y Problemas Encontrados

En esta práctica se ha aprendido a utilizar Objetos, Clases e Interfaces en TypeScript. Además, se ha aprendido a utilizar herramientas como Typedoc, Mocha y Chai, Instambull y Coveralls.

Lo más complicado para mí fue entender el ejercicio1 y cómo implementar las clases y las interfaces. Me pareció un ejercicio largo y tedioso. Por otro lado, enteder los Principios SOLID y el Patrón de comportamiento Strategy me resultó difícil, ya que era algo nuevo para mí y no sabía cómo aplicarlo.

Tambíen me surgieron algunas dudas con lo del cubrimiento de código, ya que a menudo me salen ciertas líneas que no están cubiertas y no sé cómo solucionarlo. Pero puede configurar Coveralls sin dificultad.
