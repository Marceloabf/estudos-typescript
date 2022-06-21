"use strict";
// Exercício do site do ITA
class Corpo {
    constructor(massa, volume) {
        this.massa = massa;
        this.volume = volume;
        this.massa = massa,
            this.volume = volume;
    }
    get densidade() {
        return this.massa / this.volume;
    }
    get dados() {
        return `massa:${this.massa}, volume:${this.volume}, densidade:${this.massa / this.volume}`;
    }
    set setMassa(value) {
        this.massa = value;
    }
    set setVolume(value) {
        this.volume = value;
    }
}
//Definindo escopo para testes
const areiaFina = new Corpo(3000, 2);
//testando getters
console.log(areiaFina.densidade); //1500
console.log(areiaFina.dados); //massa:3000, volume:2, densidade:1500
//testando setters
areiaFina.setMassa = 4000;
areiaFina.setVolume = 4;
console.log(areiaFina.densidade); //1000
class Esfera extends Corpo {
    constructor(altura, massa, volume) {
        super(massa, volume);
        this.altura = altura;
    }
    get raioAoQuadrado() {
        return this.volume / (this.altura * Math.PI);
    }
}
const esferaTeste = new Esfera(10, 500, 1000);
console.log(esferaTeste.raioAoQuadrado); //31.830988618379067
console.log(esferaTeste.densidade); //0.5
