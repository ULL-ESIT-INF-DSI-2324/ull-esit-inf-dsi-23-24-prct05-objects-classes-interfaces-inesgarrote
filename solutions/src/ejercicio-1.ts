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

interface ElementoBibliografico {
    titulo: string;
    autor: string[];
    palabras_clave: string[];
    resumen: string;
    fecha: string;
    paginas: number;
    editorial: string;
    n_revista?: number; // para revista
    volumen?: number; // para revista
    
}

class ArticuloRevista implements ElementoBibliografico{
  constructor(public titulo: string, public autor: string[], public palabras_clave: string[], public resumen: string, public fecha: string, public paginas: number, public editorial: string, public n_revista: number, public volumen: number) {}

}

class ContribuicionCongreso implements ElementoBibliografico{
  constructor(public titulo: string, public autor: string[], public palabras_clave: string[], public resumen: string, public fecha: string, public paginas: number, public editorial: string) {}
}

class CapituloLibro implements ElementoBibliografico{
  constructor(public titulo: string, public autor: string[], public palabras_clave: string[], public resumen: string, public fecha: string, public paginas: number, public editorial: string) {}

}

    
class Libro implements ElementoBibliografico{
  constructor(public titulo: string, public autor: string[], public palabras_clave: string[], public resumen: string, public fecha: string, public paginas: number, public editorial: string) {}
}

class TrabajoFinTitulacion implements ElementoBibliografico{
  constructor(public titulo: string, public autor: string[], public palabras_clave: string[], public resumen: string, public fecha: string, public paginas: number, public editorial: string) {}
}

class GestorBibliografico {
    private bibliografia: ElementoBibliografico[] = [];

    addElementoBibliografico(elemento: ElementoBibliografico) {
        this.bibliografia.push(elemento);
    }

    MostrarPorConsola(): void{
        console.table(this.bibliografia);
    }

    BusquedaPalabraClave(palabra_clave: string): ElementoBibliografico[] {
      return this.bibliografia.filter((elemento) => 
        elemento.palabras_clave.includes(palabra_clave)
      );
    }

    BusquedaCampo(campo: string, valor: string): ElementoBibliografico[] {
        return this.bibliografia.filter((elemento) =>
         elemento[campo] === valor
        );
    }

    ExportarIEEE(elementos: bibliografia[]): string {

    }
}

const gestor = new GestorBibliografico();

const articulo_revista = new ArticuloRevista('DIGNEA: A tool to generate diverse and discriminatory instance suites for optimisation domains',
 ['A.Marrero', 'E.Segredo', 'C.León', 'E.Hart'],
 ['Instance generation', 'Novelty search', 'Evolutionary algorithm', 'Optimisation', 'Knapsack problem'],
  'To advance research in the development of optimisation algorithms, it is crucial to have access to large test-beds of diverse and discriminatory instances from a domain that can highlight strengths and weaknesses of different algorithms. The DIGNEA tool enables diverse instance suites to be generated for any domain, that are also discriminatory with respect to a set of solvers of the user choice. Written in C++, and delivered as a repository and as a Docker image, its modular and template-based design enables it to be easily adapted to multiple domains and types of solvers with minimal effort. This paper exemplifies how to generate instances for the Knapsack Problem domain.',
  '22-05-2023',
  7,
  'ELSEVIER',
  101355, // Nº revista
  22
);