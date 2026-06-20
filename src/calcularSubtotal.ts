//esta funcion nos sirve para calcular la lista de precios que tenemos en main 
// .reduce nos ayuda a contar los datos que tenemos en la lista de precios [100, 250, 350]
export const subTotal = (precios: number[]): number => {
    return precios.reduce((acumulador, precioReal) => acumulador + precioReal, 0)
};

