import { mesas } from "./data.js";

import PrompSync from 'prompt-sync';
const prompt = PrompSync();

const reservarMesa=()=> { 
       verMesasReservadas();

    let numMesa = prompt("Introduce el número de mesa que quieres reservar: ");
    let clente= prompt("Introduce el nombre del cliente: ");
    let mesa = mesas.find(mesa => mesa.numMesa == numMesa);
    if (mesa) {
        if (mesa.reservada) {
            console.log("La mesa ya está reservada.");
        } else {
            mesa.reservada = true;
            mesa.nombreCliente = clente;
            console.log("Mesa reservada correctamente.");
            console.log(mesa);
            
        }
    } else {
        console.log("No existe la mesa.");
    }
}

const verMesasReservadas = () => {
    let mesasReservadas = mesas.filter(mesa => mesa.reservada);
    console.log("Mesas reservadas: ");
    mesasReservadas.forEach(mesa => {
        console.log(`Mesa: ${mesa.numMesa} Cliente: ${mesa.nombreCliente} `);
    });
}
const cancelarReserva = () => {
    verMesasReservadas();
    let numMesa = prompt("Introduce el número de mesa que quieres cancelar: ");
    let mesa = mesas.find(mesa => mesa.numMesa == numMesa);
    if (mesa) {
        if (mesa.reservada) {
            mesa.reservada = false;
            mesa.nombreCliente = "";
            console.log("Reserva cancelada correctamente.");
        } else {
            console.log("La mesa no está reservada.");
        }
    } else {
        console.log("No existe la mesa.");
    }
}

export { reservarMesa, verMesasReservadas, cancelarReserva };