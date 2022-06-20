//Typescript - Aula 1 - Tipagem
// Começo de tipagem
const nome:string = "Marcelo";

const nomeAlunos:string[] = ["Eduardo", "Samira", "Filomena"];
const alunos:Array<string> = ["Eduardo", "Samira", "Filomena"]; //menos utilizado, mais verboso.

// Tuple - especificar o tipo de cada um dos elementos
let animais:[string,string,string];
animais = ["cachorro", "coelho", "gato"];

// Boolean
const aprovado:boolean = true;

// Number
const numeroAlunos:number = 23;

// Enum
enum StatusAprovacao{
  aprovado = '001',
  pendente = '002',
  reprovado = '003'
}
const statusAluno1:StatusAprovacao = StatusAprovacao.aprovado
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

type Fruta = {
  nome:string,
  cor:string,
  pesoMax?:number,    //interrogação antes dos dois pontos significa que não é opicional.
  semente:boolean 
}
const amora:Fruta = {
  nome:'amora',
  cor:'roxo',
  pesoMax:100,
  semente:false
}
const maracuja:Fruta = {
  nome:'maracuja',
  cor:'amarelo',
  semente: true
}

//Type assertion
const minhaIdade:any = 24;
(minhaIdade as number).toString() 
//Realizei o type assertion para especificar o tipo de dado e tambem para ter o autocomplete dos métodos.

const input = document.getElementById('name') as HTMLInputElement; 
//Type assetion para que o typescript saiba que é um input e não dê erro quando eu tentar acessar o value.
console.log(input.value);
// const input =<HTMLInputElement>document.getElementById('name');

//Exercício 1
type Post = {
  postId:number,
  id:number,
  name:string,
  email:string,
  body:string
}
const req1:Post = {
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}