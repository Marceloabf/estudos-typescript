//Typescript - Aula 1 - Tipagem
// Começo de tipagem
const nome:string = "Marcelo";

const nomeAlunos:string[] = ["Eduardo", "Samira", "Filomena"];
const alunos:Array<string> = ["Eduardo", "Samira", "Filomena"]; //Interface

// Tuple - especificar o tipo de cada um dos elementos
let animais:[string,string,string];
animais = ["cachorro", "coelho", "gato"];

// Boolean
const aprovado:boolean = true;

// Number
const numeroAlunos:number = 23;

// Enum

//any - evitar ao máximo
const infosAPI:any[] = [true,"oi", 32, 99, "teste"];

//void
function teste(msg:"oi"):void {
  console.log(msg);
}

// null undefined
const u:undefined = undefined;
const n:null = null;

//Object
function novaFunçao(object:object){
  //...
}
novaFunçao({
  chave1:1,
  chave2:2,
  chave3:3
})

//Never
function loopInfinito():never {
  while(true){
    //...
  }
}

function error(msg:string):never{
  throw new Error(msg)
}

function falhaSistema(){
  return error('Ops, algo deu errado')
}

//Union types
function mostrarNota(nota:number | string){
  console.log(`Sua nota foi ${nota}`);
}
mostrarNota(10)
mostrarNota('10')

//Alias - criar tipos

type Aluno = {
  nome: string,
  sobrenome: string;
  idade: number,
  solteiro: boolean
};
const alunosManha: Aluno[] = [
  {
    nome:'fernando',
    sobrenome:'da Silva',
    idade: 23,
    solteiro: false
  },
  {
    nome:'Amaral',
    sobrenome:'Arruda',
    idade: 29,
    solteiro: true 
  }
]

type fruta = {
  nome:string,
  cor:string,
  pesoMax:number,
  semente:boolean
}
const amora:fruta = {
  nome:"amora",
  cor:"roxo",
  pesoMax:100,
  semente:false
}


//Exercício 1
type post = {
  postId:number,
  id:number,
  name:string,
  email:string,
  body:string
}
const req1:post = {
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}