class Auto {
    Acelerar(velocidadactual: number, incremento: number): number {
        return velocidadactual + incremento;
    }
    frenar(velocidadactual: number, desicremento: number): number{
        const nuevavelocidad = velocidadactual - desicremento;
    return nuevavelocidad < 0 ? 0 : nuevavelocidad;
    }
    recorrer(distancia: number, tiempo: number): number{
        if (tiempo === 0) return 0;
        return distancia / tiempo;
    }
}
const auto = new Auto();
console.log("Velocidad tras acelerar:", auto.Acelerar(50,20));
console.log("Velocidad tras frenar:", auto.frenar(70,30));
console.log("Velocidad media:", auto.recorrer(120,2));
