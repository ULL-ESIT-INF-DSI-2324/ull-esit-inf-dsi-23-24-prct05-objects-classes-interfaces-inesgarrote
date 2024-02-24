/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Práctica
 * @author Inés Garrote Fontenla alu0101512297@ull.edu.es
 * @date 08 feb 2024
 * @file ejercicio-modi.spects:
 * @brief
 */

import "mocha";
import { expect } from "chai";
import { getAllergens } from "../src/ejercicio-modi-1";

describe("getAllergens function tests", () => {
  it("getAllergens(144) should return [Gato, Tomate]", () => {
    expect(getAllergens(144)).to.be.eql([128, 16]);
  });

  it("getAllergens(129 should return [Gato, Huevo]", () => {
    expect(getAllergens(129)).to.be.eql([128, 1]);
  });
  it("getAllergens(257) should return [Huevo]", () => {
    expect(getAllergens(257)).to.be.eql([1]);
  });
  it("getAllergens(256) should return []", () => {
    expect(getAllergens(256)).to.be.eql([]);
  });
  it("getAllergens(515) should return [Cacahuete, Huevo]", () => {
    expect(getAllergens(515)).to.be.eql([2, 1]);
  });
  it("getAllergens(84) should return [Polen, Tomate, Marisco]", () => {
    expect(getAllergens(84)).to.be.eql([64, 16, 4]);
  });
  it("getAllergens(-14) should return undefined", () => {
    expect(getAllergens(-14)).to.be.undefined;
  });
});
