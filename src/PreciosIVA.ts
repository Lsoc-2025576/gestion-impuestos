//esta funcion calcula el IVA y subTotal se le multiplica por la tasa que es 0.12, ese valor de 0.12 nos lo da const iva = calcularIVA(subtotal, 0.12); en main
export const calcularIVA = (subTotal: number, tasa: number): number => {
    return subTotal * tasa;
}

