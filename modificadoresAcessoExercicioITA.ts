// Exercício do site do ITA

class Corpo{
  constructor(protected massa:number, protected volume:number){
    this.massa = massa,
    this.volume = volume
  }
  
  public get densidade() : number {
    return this.massa/this.volume
  }
  
  public get dados() : string {
    return `massa:${this.massa}, volume:${this.volume}, densidade:${this.massa/this.volume}`
  }
  
  public set setMassa(value : number) {
    this.massa = value;
  }
  public set setVolume(value : number) {
    this.volume = value;
  }
}

//Definindo escopo para testes
const areiaFina = new Corpo(3000,2)

//testando getters
console.log(areiaFina.densidade); //1500
console.log(areiaFina.dados);  //massa:3000, volume:2, densidade:1500

//testando setters
areiaFina.setMassa = 4000
areiaFina.setVolume = 4
console.log(areiaFina.densidade); //1000

class Esfera extends Corpo{
  constructor(private altura:number, massa:number, volume:number){
    super(massa,volume)
  }
  public get raioAoQuadrado() : number {
    return this.volume/(this.altura*Math.PI)
  }
}
const esferaTeste = new Esfera(10,500,1000)
console.log(esferaTeste.raioAoQuadrado); //31.830988618379067
console.log(esferaTeste.densidade);  //0.5
