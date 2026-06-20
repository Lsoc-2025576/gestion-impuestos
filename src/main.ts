//importamos nuestras funciones
import { subTotal } from "./calcularSubtotal.js";
import { calcularIVA } from "./PreciosIVA.js";
import { calcularTotal } from "./total.js";

//Aqui ponemos la lista de los precios: audifnos/100, teclado/250, monitor/350
const precios = [100, 250, 350];

//le aplicamos los valores que deben tener los parametros
const subtotal = subTotal(precios);
const iva = calcularIVA(subtotal, 0.12);
const total = calcularTotal(subtotal, iva);

//muestra los resultados
console.log("===============================");
console.log("    REPORTE DE VENTAS          ");
console.log("===============================");
console.log(`Tu carrito de compras: ${precios} audifnos, teclado, monitor`);
console.log(`Subtotal: ${subtotal}`);
console.log(`IVA: ${iva}`);
console.log(`Total: ${total}`);

