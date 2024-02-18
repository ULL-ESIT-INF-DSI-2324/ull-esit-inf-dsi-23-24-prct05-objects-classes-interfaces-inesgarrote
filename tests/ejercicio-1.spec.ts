/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Práctica 05: Objetos, clases e interfaces
 * @author Inés Garrote Fontenla alu0101512297@ull.edu.es
 * @date 17 feb 2024
 * @file ejercicio-1.spects: Fichero de pruebas Ejercicio 1 de la Práctica 5
 * @brief pruebas unitarias para las funciones del ejercicio 1
 */

import "mocha";
import { expect } from "chai";
import {
  ArticuloRevista,
  ContribuicionCongreso,
  CapituloLibro,
  Libro,
  TrabajoFinTitulacion,
  GestorBibliografico,
} from "../src/ejercicio-1";

describe("ArticuloRevista", () => {
  let articulo: ArticuloRevista; // Declara la variable fuera de beforeEach

  beforeEach(() => {
    articulo = new ArticuloRevista(
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
  });

  it("should create a new instance of ArticuloRevista", () => {
    expect(articulo).to.be.instanceOf(ArticuloRevista);
  });
  it("should return the correct citation", () => {
    expect(articulo.FormatoIEEE()).to.be.equal(
      'A.Marrero, E.Segredo, C.León, E.Hart, "DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains", ELSEVIER, vol. 22, no. 101355, pp. 7, 22-05-2023.',
    );
  });
});

describe("ContribuicionCongreso", () => {
  let contribucion: ContribuicionCongreso; // Declara la variable fuera de beforeEach

  beforeEach(() => {
    contribucion = new ContribuicionCongreso(
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
  });

  it("should create a new instance of ContribuicionCongreso", () => {
    expect(contribucion).to.be.instanceOf(ContribuicionCongreso);
  });
  it("should return the correct citation", () => {
    expect(contribucion.FormatoIEEE()).to.be.equal(
      'A.Marrero, E.Segredo, E.Hart, J.Bossek, A.Neumann, "Generating Diverse and Discriminatory Knapsack Instances by Searching for Novelty in Variable Dimensions of Feature-Space", GECCO 23, 12-07-2023,  pp. 312–320.',
    );
  });
});

describe("CapituloLibro", () => {
  let capitulo: CapituloLibro; // Declara la variable fuera de beforeEach

  beforeEach(() => {
    capitulo = new CapituloLibro(
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
      [
        "G.Rudolph",
        "H.Aguirre",
        "G.Ochoa",
        "A.Kononova",
        "P.Kerschke",
        "T.Tušar",
      ],
      "Parallel Problem Solving from Nature – PPSN XVII",
      "San Cristóbal de La Laguna",
    );
  });

  it("should create a new instance of CapituloLibro", () => {
    expect(capitulo).to.be.instanceOf(CapituloLibro);
  });

  it("should return the correct citation", () => {
    expect(capitulo.FormatoIEEE()).to.be.equal(
      'A.Marrero, E.Segredo, E.Hart, C.Leon, "A Novelty-Search Approach to Filling an Instance-Space with Diverse and Discriminatory Instances for the Knapsack Problem", Parallel Problem Solving from Nature – PPSN XVII, G.Rudolph,H.Aguirre,G.Ochoa,A.Kononova,P.Kerschke,T.Tušar, San Cristóbal de La Laguna, Springer, 14-08-2022,  pp. 223–236.',
    );
  });
});

describe("Libro", () => {
  let libro: Libro; // Declara la variable fuera de beforeEach

  beforeEach(() => {
    libro = new Libro(
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
  });

  it("should create a new instance of Libro", () => {
    expect(libro).to.be.instanceOf(Libro);
  });

  it("should return the correct citation", () => {
    expect(libro.FormatoIEEE()).to.be.equal(
      'A.Freeman, "Essential TypeScript 4: From Beginner to Pro", Londres, Berkeley, CA: Apress L. P, 2021.',
    );
  });
});

describe("TrabajoFinTitulacion", () => {
  let trabajo: TrabajoFinTitulacion; // Declara la variable fuera de beforeEach

  beforeEach(() => {
    trabajo = new TrabajoFinTitulacion(
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
  });

  it("should create a new instance of TrabajoFinTitulacion", () => {
    expect(trabajo).to.be.instanceOf(TrabajoFinTitulacion);
  });
  it("should return the correct citation", () => {
    expect(trabajo.FormatoIEEE()).to.be.equal(
      'C. Navarro, "Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.", TFG, Departamento de Ingeniería Informática, Universidad de La Laguna, San Cristóbal de La Laguna,España 2021.',
    );
  });
});

describe("GestorBibliografico", () => {
  let gestor: GestorBibliografico; // Declara la variable fuera de beforeEach
  let articulo: ArticuloRevista;
  let libro: Libro;
  beforeEach(() => {
    gestor = new GestorBibliografico();
    articulo = new ArticuloRevista(
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
    libro = new Libro(
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
  });
  it("should create a new instance of GestorBibliografico", () => {
    expect(gestor).to.be.instanceOf(GestorBibliografico);
  });
  it("should add a new reference", () => {
    gestor.addElementoBibliografico(articulo);
    expect(gestor.bibliografia).to.be.eql([articulo]);
  });
  it("should display correctly in console", () => {
    expect(() => gestor.MostrarPorConsola()).to.not.throw();
  });
  it("should return the correct search", () => {
    gestor.addElementoBibliografico(articulo);
    gestor.addElementoBibliografico(libro);
    expect(gestor.BusquedaElemento("autor", "A.Freeman")).to.be.eql([libro]);
  });
  it("should export the search to IEEE format", () => {
    gestor.addElementoBibliografico(articulo);
    gestor.addElementoBibliografico(libro);
    expect(gestor.ExportarIEEEFormat("autor", "A.Freeman")).to.be.equal(
      'A.Freeman, "Essential TypeScript 4: From Beginner to Pro", Londres, Berkeley, CA: Apress L. P, 2021.',
    );
  });
});
