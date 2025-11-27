class Hospital{
    calculardosis(peso: number, mgPorkg: number): number{
        return peso * mgPorkg;
    }
    calcularIMC(peso: number, altura: number): number {
        if (altura === 0) return 0;
        return peso / (altura * altura);
    }
    registrarVisita(visitaActual: number, nuevas: number): number{
        return visitaActual + nuevas;
    }
}