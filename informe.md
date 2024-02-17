---
title: Informe
layout: template
filename: informe.md
---

# Informe

# Práctica 5 - Objetos, clases e interfaces

Realizada por Inés Garrote Fontenla [alu0101512297@ull.edu.es](alu0101512297@ull.edu.es)  
Enlace al repositorio de Github asociado a la práctica [ll-esit-inf-dsi-23-24-prct05-vscode-inesgarrote](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-inesgarrote.git)

## Introducción

En esta práctica aprenderemos a utilizar Objetos, Clases e Interfaces en TypeScript. Para ello, se nos pide realizar dos ejercicios que nos ayudarán a comprender el funcionamiento de estos elementos.

Además, al mismo tiempo que realizamos los ejercicicios usaremos herramientas tales como Typedoc que permite generar documentación automática a partir de comentarios en el código fuente y de la información sobre tipos proporcionada por TypeScript.

También usaremos Mocha y Chai que las utilizaremos para incorporar desarrollo dirigido por pruebas (TDD) en nuestra práctica. Mocha proporciona la estructura y la ejecución de pruebas, mientras que Chai se centra en las aserciones, facilitando la escritura y lectura de pruebas más expresivas

Tambíen nos introduciremos en los principios de SOLID, que son un conjunto de cinco principios de diseño de código orientado a objetos que se utilizan para diseñar software más fácil de mantener y extender. Además de herramientas tales como Instambull y Coveralls que nos ayudarán a realizar un seguimiento de la cobertura de nuestras pruebas.

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
