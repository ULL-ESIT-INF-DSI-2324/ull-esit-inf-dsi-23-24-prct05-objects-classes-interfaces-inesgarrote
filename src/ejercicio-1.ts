/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Práctica 05: Objetos, clases e interfaces
 * @author Inés Garrote Fontenla alu0101512297@ull.edu.es
 * @date 16 feb 2024
 * @file ejercicio-1.ts: Ejercicio 1 de la Práctica 5
 * @brief
 */

/**
 * @brief Interfaz ElementoBibliografico
 */
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

/**
 * @brief Clase ArticuloRevista
 * @param titulo: string
 * @param autor: string[]
 * @param palabras_clave: string[]
 * @param resumen: string
 * @param fecha: string
 * @param paginas: string
 * @param editorial: string
 * @param n_revista: number
 * @param volumen: number
 
 */
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

/**
 * @brief Clase ContribuicionCongreso
 * @param titulo: string
 * @param autor: string[]
 * @param palabras_clave: string[]
 * @param resumen: string
 * @param fecha: string
 * @param paginas: string
 * @param editorial: string
 * @param n_congreso: string
 */
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

/**
 * @brief Clase CapituloLibro
 * @param titulo: string
 * @param autor: string[]
 * @param palabras_clave: string[]
 * @param resumen: string
 * @param fecha: string
 * @param paginas: string
 * @param editorial: string
 * @param n_editores: string[]
 * @param n_libro: string
 * @param ciudad: string
 * @param pais: string
 * @param tipo_trabajo: string
 * @param departamento: string
 * @param universidad: string
 * @param pais: string
 */
export class CapituloLibro implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autor: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha: string,
    public paginas: string,
    public editorial: string,
    public n_editores: string[],
    public n_libro: string,
    public ciudad: string,
  ) {}
  FormatoIEEE() {
    const autoresString = this.autor.join(", ");
    return `${autoresString}, "${this.titulo}", ${this.n_libro}, ${this.n_editores}, ${this.ciudad}, ${this.editorial}, ${this.fecha},  pp. ${this.paginas}.`;
  }
}

/**
 * @brief Clase Libro
 * @param titulo: string
 * @param autor: string[]
 * @param palabras_clave: string[]
 * @param resumen: string
 * @param fecha: string
 * @param paginas: string
 * @param editorial: string
 * @param ciudad: string
 */
export class Libro implements ElementoBibliografico {
  constructor(
    public titulo: string,
    public autor: string[],
    public palabras_clave: string[],
    public resumen: string,
    public fecha: string,
    public paginas: string,
    public editorial: string,
    public ciudad: string,
  ) {}
  FormatoIEEE() {
    const autoresString = this.autor.join(", ");
    return `${autoresString}, "${this.titulo}", ${this.ciudad}, ${this.editorial}, ${this.fecha}.`;
  }
}

/**
 * @brief Clase TrabajoFinTitulacion
 * @param titulo: string
 * @param autor: string[]
 * @param palabras_clave: string[]
 * @param resumen: string
 * @param fecha: string
 * @param paginas: string
 * @param editorial: string
 * @param tipo_trabajo: string
 * @param departamento: string
 * @param universidad: string
 * @param ciudad: string
 * @param pais: string
 */
export class TrabajoFinTitulacion implements ElementoBibliografico {
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
    public ciudad: string,
    public pais: string,
  ) {}
  FormatoIEEE() {
    const autoresString = this.autor.join(", ");
    return `${autoresString}, "${this.titulo}", ${this.tipo_trabajo}, ${this.departamento}, ${this.universidad}, ${this.ciudad},${this.pais} ${this.fecha}.`;
  }
}

/**
 * @brief Clase GestorBibliografico
 * @param bibliografia: ElementoBibliografico[]
 * @method addElementoBibliografico
 * @method MostrarPorConsola
 * @method BusquedaElemento
 * @method ExportarIEEEFormat
 */
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

const articulo_revista_1 = new ArticuloRevista(
  "DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains",
  ["A.Marrero", "E.Segredo", "C.León", "E.Hart"],
  [
    "Instance generation",
    "Novelty search",
    "Evolutionary algorithm",
    "Optimisation",
    "Knapsack problem",
  ],
  "To advance research in the development of optimisation algorithms, it is crucial to have access to large test-beds of diverse and discriminatory instances from a domain that can highlight strengths and weaknesses of different algorithms. The DIGNEA tool enables diverse instance suites to be generated for any domain, that are also discriminatory with respect to a set of solvers of the user choice. Written in C++, and delivered as a repository and as a Docker image, its modular and template-based design enables it to be easily adapted to multiple domains and types of solvers with minimal effort. This paper exemplifies how to generate instances for the Knapsack Problem domain.",
  "22-05-2023",
  "7", // paginas
  "ELSEVIER",
  101355, // Nº revista
  22,
);

const articulo_revista_2 = new ArticuloRevista(
  "Engaging Primary and Secondary School Students in Computer Science Through Computational Thinking Training",
  ["R.Herrero", "G.Miranda", "C.León", "E.Segredo"],
  [
    "Instance generation",
    "Novelty search",
    "Evolutionary algorithm",
    "Optimisation",
    "Knapsack problem",
  ],
  "Although Computer Science has grown to become one of the most highly demanded professional careers, every year, only a small percentage of students choose a degree directly related to Computer Science. Perhaps the problem lies in the lack of information that society has about Computer Science itself, and particularly about the work computer scientists do. No one doubts the role of Mathematics or Languages as core subjects in every primary and secondary education syllabus; however, Computer Science plays a negligible role in most current syllabuses. Only in a few countries have governments paid special attention to content related to Computer Science and to learning to analyze and solve problems the way computer scientists do (Computational Thinking). In this article, we present Piens@ Computacion@ULLmente , a project that provides a methodology to promote Computer Science through Computational Thinking activities among primary and secondary education students. The results obtained from an exhaustive statistical analysis of the data we collected demonstrate that the perception of Computer Science that pre-university students have can be improved through specific training. Moreover, we can also confirm that the performance of pre-university students involving Computational Thinking skills is independent of gender, particularly at the primary education level.",
  "05-04-2022",
  "13", // paginas
  "IEEE",
  1, // Nº revista
  11,
);

const contribucion_congreso_1 = new ContribuicionCongreso(
  "Generating Diverse and Discriminatory Knapsack Instances by Searching for Novelty in Variable Dimensions of Feature-Space",
  ["A.Marrero", "E.Segredo", "E.Hart", "J.Bossek", "A.Neumann"],
  [
    "Instance generation",
    "Novelty search",
    "Evolutionary computation",
    "Instance-space analysis",
    "Knapsack problem",
  ],
  "Generating new instances via evolutionary methods is commonly used to create new benchmarking data-sets, with a focus on attempting to cover an instance-space as completely as possible. Recent approaches have exploited Quality-Diversity methods to evolve sets of instances that are both diverse and discriminatory with respect to a portfolio of solvers, but these methods can be challenging when attempting to find diversity in a high-dimensional feature-space. We address this issue by training a model based on Principal Component Analysis on existing instances to create a low-dimension projection of the high-dimension feature-vectors, and then apply Novelty Search directly in the new low-dimension space. We conduct experiments to evolve diverse and discriminatory instances of Knapsack Problems, comparing the use of Novelty Search in the original feature-space to using Novelty Search in a low-dimensional projection, and repeat over a given set of dimensions. We find that the methods are complementary: if treated as an ensemble, they collectively provide increased coverage of the space. Specifically, searching for novelty in a low-dimension space contributes 56% of the filled regions of the space, while searching directly in the feature-space covers the remaining 44%.",
  "12-07-2023",
  "312–320", // paginas
  "ACM",
  "GECCO 23",
);

const contribucion_congreso_2 = new ContribuicionCongreso(
  "Dealing with a problematic roundabout by optimizing a traffic light system through evolutionary computation",
  ["F.Cruz", "E.Segredo", "G.Miranda"],
  [
    "Traffic light scheduling problem",
    "Evolutionary algorithm,",
    "Genetic algorithm",
    "Optimization",
    "Simulation",
    "SUMO",
  ],
  "The Padre Anchieta roundabout (Tenerife) takes on a substantial amount of traffic which, at peak times, often causes significant traffic jams. With the aim of alleviating traffic congestion, this paper analyses the possibility of installing a set of traffic lights in the roundabout. The duration of the phases of traffic lights are optimized through a genetic algorithm. SUMO, an open source traffic simulator, is used to evaluate the traffic of the area by considering real traffic data. Seven different scenarios are evaluated with respect to the roundabout, three of them without traffic lights and the other four with them. Simultaneously, the number of pedestrians, and the particular location of the traffic lights, are modified in each of the aforementioned scenarios, when applicable. To determine which parameters of the evolutionary algorithm provided the best results, a previous parameter setting study based on a statistical comparison procedure was performed. Particularly, the crossover operator and the population size, were analyzed. From the results obtained in the experimental assessment, we conclude that the use of an optimized traffic light system would not improve traffic flow in the roundabout. Another important conclusion is that the larger the number of pedestrians, the slower the traffic flow.",
  "08-07-2021",
  "305–306", // paginas
  "ACM",
  "GECCO 21",
);

const capitulo_libro = new CapituloLibro(
  "A Novelty-Search Approach to Filling an Instance-Space with Diverse and Discriminatory Instances for the Knapsack Problem",
  ["A.Marrero", "E.Segredo", "E.Hart", "C.Leon"],
  [
    "Instance generation",
    "Novelty search",
    "Evolutionary algorithm",
    "Knapsack problem",
    "Optimisation",
  ],
  "We propose a new approach to generating synthetic instances in the knapsack domain in order to fill an instance-space. The method uses a novelty-search algorithm to search for instances that are diverse with respect to a feature-space but also elicit discriminatory performance from a set of target solvers. We demonstrate that a single run of the algorithm per target solver provides discriminatory instances and broad coverage of the feature-space. Furthermore, the instances also show diversity within the performance-space, despite the fact this is not explicitly evolved for, i.e. for a given ‘winning solver’, the magnitude of the performance-gap between it and other solvers varies across a wide-range. The method therefore provides a rich instance-space which can be used to analyse algorithm strengths/weaknesses, conduct algorithm-selection or construct a portfolio solver.",
  "14-08-2022",
  "223–236",
  "Springer",
  ["G.Rudolph", "H.Aguirre", "G.Ochoa", "A.Kononova", "P.Kerschke", "T.Tušar"],
  "Parallel Problem Solving from Nature – PPSN XVII",
  "San Cristóbal de La Laguna",
);

const libro = new Libro(
  "Essential TypeScript 4: From Beginner to Pro",
  ["A.Freeman"],
  [
    "Instance generation",
    "Novelty search",
    "Evolutionary algorithm",
    "Knapsack problem",
    "Optimisation",
  ],
  "Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java with the flexibility of JavaScript, reducing typing errors and providing an easier path to JavaScript development.Author Adam Freeman explains how to get the most from TypeScript 4 in this second edition of his best-selling book. He begins by describing the TypeScript language and the benefits it offers and then shows you how to use TypeScript in real-world scenarios, including development with the DOM API, and popular frameworks such as Angular and React. He starts from the nuts-and-bolts and builds up to the most advanced and sophisticated features.Each topic is covered clearly and concisely, and is packed with the details you need to be effective. The most important features are given a no-nonsense, in-depth treatment and chapters include common problems and teach you how to avoid them.What You Will LearnGain a solid understanding of the TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to create client-side or server-side applications",
  "2021",
  "563",
  "Berkeley, CA: Apress L. P",
  "Londres",
);

const tfg = new TrabajoFinTitulacion(
  "Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.",
  ["C. Navarro"],
  [
    "Problema de optimización",
    "Problema de Enrutamiento de Vehículos",
    "Computación Evolutiva",
    "Desarrollo de Software",
  ],
  "El Multi Depot Cumulative Capacitated Vehicle Routing Problem es un problema de optimización de rutas de vehículos de reciente formulación. En él se busca minimizar el tiempo de llegada de una flota de vehículos a los clientes establecidos, ajustándose a la capacidad de los vehículos. Este problema puede resultar muy útil aplicado a situaciones de catástrofes naturales, donde el tiempo de llegada para socorrer a las posibles víctimas es crucial. La computación evolutiva nos proporciona mecanismos para resolver este tipo de problemas de optimización, pudiendo así, aportar nuevos resultados a los estudios previos. Es por ello que se ha optado por implementar un algoritmo memético para resolver el problema, realizando el estudio correspondiente sobre los resultados, así como la creación de una aplicación web para mostrar su funcionamiento. Para implementarlo, se ha extendido la librería GeneticsJS para adaptarla a las necesidades del problema.",
  "2021",
  "78",
  "Universidad de La Laguna",
  "TFG",
  "Departamento de Ingeniería Informática",
  "Universidad de La Laguna",
  "San Cristóbal de La Laguna",
  "España",
);

const tfm = new TrabajoFinTitulacion(
  "On the automatic planning of healthy and balanced menus.",
  ["A. Marrero"],
  [
    "menu planning",
    "computer science",
    "evolutionary computing",
    "multiobjective optimisation",
  ],
  "With the raise of diseases related with unhealthy lifestyles such as heartattacks, overweight, diabetes, etc., encouraging healthy and balanced patterns in the population is one of the most important action points for governments around the world. Furthermore, it is actually even a more critical situation when a high percentage of patients are children and teenagers whose habits consist merely.",
  "2019",
  "40",
  "Universidad de La Laguna",
  "TFM",
  "Departamento de Ingeniería Informática",
  "Universidad de La Laguna",
  "San Cristóbal de La Laguna",
  "España",
);

const gestor = new GestorBibliografico();
gestor.addElementoBibliografico(articulo_revista_1);
gestor.addElementoBibliografico(articulo_revista_2);
gestor.addElementoBibliografico(contribucion_congreso_1);
gestor.addElementoBibliografico(contribucion_congreso_2);
gestor.addElementoBibliografico(capitulo_libro);
gestor.addElementoBibliografico(libro);
gestor.addElementoBibliografico(tfg);
gestor.addElementoBibliografico(tfm);
// gestor.MostrarPorConsola();
//console.table(gestor.BusquedaElemento('autor','E.Segredo'));
console.log(gestor.ExportarIEEEFormat("palabra_clave", "Knapsack problem"));
/*
articulo_revista_1.FormatoIEEE();
console.log('-----------------------------------');
articulo_revista_2.FormatoIEEE();
console.log('-----------------------------------');
contribucion_congreso_1.FormatoIEEE();
console.log('-----------------------------------');
contribucion_congreso_2.FormatoIEEE();
console.log('-----------------------------------');
capitulo_libro.FormatoIEEE();
console.log('-----------------------------------');
libro.FormatoIEEE();
console.log('-----------------------------------');
tfg.FormatoIEEE();
console.log('-----------------------------------');
tfm.FormatoIEEE();
*/
