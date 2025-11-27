class retaurante {
    calcularTotal(precio: number, cantidad: number): number{
        return precio * cantidad;
    }
    aplicarDescuento(total: number, descuento: number): number {
        const valorDescuento = total * (descuento / 100);
        return total - valorDescuento;
    }
    calcularPropina(total: number, porcentaje: number): number {
        return total * (porcentaje / 100);
    }
}