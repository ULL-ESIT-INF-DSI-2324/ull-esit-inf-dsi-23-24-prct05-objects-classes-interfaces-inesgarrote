import "mocha";
import { expect } from "chai";
import { Nevera } from "../src/ejercicio-modi-2";

describe ("Nevera class tests", () => {
 it("should create a Nevera", () => {
    const nevera = new Nevera("Leche", "Información nutricional", 2);
    expect(nevera.nombre).to.equal("Leche");
    expect(nevera.informacionNutricional).to.equal("Información nutricional");
    expect(nevera.cantidad).to.equal(2);
     });
    it("should add an item to the shopping list", () => {
        const nevera = new Nevera("Leche", "Información nutricional", 2);
        const alimento = {nombre: "Leche", informacionNutricional: "Información nutricional", cantidad: 0};
        nevera.anadirAlimento(alimento);
        expect(nevera.listaCompra).to.eql([alimento]);
    });
    it("should consume an item from the shopping list", () => {
        const nevera = new Nevera("Leche", "Información nutricional", 2);
        const alimento = {nombre: "Leche", informacionNutricional: "Información nutricional", cantidad: 0};
        nevera.anadirAlimento(alimento);
        nevera.consumirAlimento(alimento);
        expect(nevera.listaCompra).to.eql([]);
    });
    it("should return the shopping list", () => {
        const nevera = new Nevera("Leche", "Información nutricional", 2);
        const alimento = {nombre: "Leche", informacionNutricional: "Información nutricional", cantidad: 0};
        nevera.anadirAlimento(alimento);
        expect(nevera.consultarListaCompra()).to.eql([alimento]);
    });
});