import promptSync from 'prompt-sync';
import { reservarMesa, verMesasReservadas, cancelarReserva } from './reservas.js';
import { comanda, verComanda } from './comanda.js';

const prompt = promptSync();
while (true) {
    const option = prompt("1.Reservar mesa\n2.Ver mesas reservadas\n3.Cancelar reserva\n4.Salir\n5.Hacer pedido\n6.Ver comanda\n");
    switch (option) {
        case '1':
            console.log("Has elegido reservar una mesa.");
            reservarMesa();
           
            break;
        case '2':
            console.log("Has elegido ver las mesas reservadas.");
            verMesasReservadas();
            
            break;
        case '3':
            console.log("Has elegido cancelar una reserva.");
            cancelarReserva();
           
            break;
        case '4':
            console.log("Saliendo...");
            process.exit();
        
            break;
        case '5':
            console.log("Has el pedido de la carta");
            comanda();
           
            break;
        case '6':
            console.log("Has elegido ver la comanda de una mesa.");
            verComanda();
            
            break;
        default:
            console.log("Opción no válida.");
            break;
    }
}