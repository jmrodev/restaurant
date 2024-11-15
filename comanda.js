import PromptSync from "prompt-sync";
import { comida, bebida, mesas } from "./data.js";

const prompt = PromptSync();

const comanda = () => {
    let total = 0;
    let comidaPedido = [];
    let bebidaPedido = [];
    console.log("Comida: ");
    comida.forEach((comida, index) => {
        console.log(`${index + 1}. ${comida.nombre} - ${comida.precio}€`);
    });
    let mesa = prompt("Introduce el número de mesa: ");

    let opcion = prompt("Elige una comida: ");
    while (opcion != 0) {
        let comidaElegida = comida[parseInt(opcion) - 1];
        comidaPedido.push(comidaElegida);
        total += comidaElegida.precio;
        opcion = prompt("Elige una comida (0 para salir): ");
    }
    console.log("Bebida: ");
    bebida.forEach((bebida, index) => {
        console.log(`${index + 1}. ${bebida.nombre} - ${bebida.precio}€`);
    });
    opcion = prompt("Elige una bebida: ");
    while (opcion != 0) {
        let bebidaElegida = bebida[parseInt(opcion) - 1];
        bebidaPedido.push(bebidaElegida);
        total += bebidaElegida.precio;
        opcion = prompt("Elige una bebida (0 para salir): ");
    }
    console.log("Comanda: ");
    console.log("Comida: ");
    comidaPedido.forEach(comida => {
        console.log(`${comida.nombre} - ${comida.precio}€`);
        mesas[mesa].comida.push(comida);

    });
    console.log("Bebida: ");
    bebidaPedido.forEach(bebida => {
        console.log(`${bebida.nombre} - ${bebida.precio}€`);
        mesas[mesa].bebida.push(bebida);

    });
    mesas[mesa].total += total;

}

const verComanda = () => {
    let mesa = prompt("Introduce el número de mesa: ");
    console.log("Comida: ");
    mesas[mesa].comida.forEach(comida => {
        console.log(`${comida.nombre} - ${comida.precio}€`);
    });
    console.log("Bebida: ");
    mesas[mesa].bebida.forEach(bebida => {
        console.log(`${bebida.nombre} - ${bebida.precio}€`);
    });
    console.log(`Total: ${mesas[mesa].total}€`);
}

export { comanda, verComanda };