import "mocha";
import { expect } from "chai";
import {
  Dish,
  MenuInstance,
  MenuSolution,
  Solver,
  SortByNutritionalValue,
  SortByUnhealthyScore,
  SortByNutritionalRatio,
  SortingStrategy,
} from "../src/ejercicio-2";

describe("MenuInstance class tests", () => {
  it("should create a MenuInstance", () => {
    const menuInstance = new MenuInstance(
      [
        [5, 1],
        [7, 2],
        [3, 1],
        [8, 3],
        [5, 1],
        [2, 1],
        [12, 6],
        [9, 4],
        [6, 3],
        [2, 1],
      ],
      8,
    );

    expect(menuInstance.dishes).to.eql([
      [5, 1],
      [7, 2],
      [3, 1],
      [8, 3],
      [5, 1],
      [2, 1],
      [12, 6],
      [9, 4],
      [6, 3],
      [2, 1],
    ]);
    expect(menuInstance.maxUnhealthyScore).to.equal(8);
  });
});

describe("MenuSolution class tests", () => {
  it("should create a MenuSolution", () => {
    const menuSolution = new MenuSolution(
      [
        [12, 6],
        [10, 5],
      ],
      11,
    );

    expect(menuSolution.selectedDishes).to.eql([
      [12, 6],
      [10, 5],
    ]);
    expect(menuSolution.totalUnhealthyScore).to.equal(11);
  });
});

describe("Solver class tests", () => {
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

  it("should design a healthy menu using SortByNutritionalValue strategy", () => {
    const menuInstance = new MenuInstance(dishes, maxUnhealthyScore);
    const sortingStrategy: SortingStrategy = new SortByNutritionalValue();
    const solver = new Solver(sortingStrategy);
    const expectedOutput = new MenuSolution([[12, 6]], 6);
    const result = solver.designHealthyMenu(menuInstance);
    expect(result).to.eql(expectedOutput);
  });

  it("should design a healthy menu using SortByUnhealthyScore strategy", () => {
    const menuInstance = new MenuInstance(dishes, maxUnhealthyScore);
    const sortingStrategy: SortingStrategy = new SortByUnhealthyScore();
    const solver = new Solver(sortingStrategy);
    const expectedOutput = new MenuSolution(
      [
        [5, 1],
        [3, 1],
        [2, 1],
        [2, 1],
        [7, 2],
      ],
      6,
    );
    const result = solver.designHealthyMenu(menuInstance);
    expect(result).to.eql(expectedOutput);
  });

  it("should design a healthy menu using SortByNutritionalRatio strategy", () => {
    const menuInstance = new MenuInstance(dishes, maxUnhealthyScore);
    const sortingStrategy: SortingStrategy = new SortByNutritionalRatio();
    const solver = new Solver(sortingStrategy);
    const expectedOutput = new MenuSolution(
      [
        [5, 1],
        [7, 2],
        [3, 1],
        [8, 3],
      ],
      7,
    );
    const result = solver.designHealthyMenu(menuInstance);
    expect(result).to.eql(expectedOutput);
  });
});
