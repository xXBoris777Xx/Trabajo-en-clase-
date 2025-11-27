class Estudiantes{
    agregarNota(promedio: number, nuevanota: number): number {
return (promedio + nuevanota) /2;
    }
    aprobar(nota: number, minima: number): boolean{
        return nota >= minima;
    }
    calcularFaltas(faltas:number, nuevas: number): number {
        return faltas +  nuevas;
    }
}