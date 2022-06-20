"use strict";
//Typescript - Aula 1 - Tipagem
// Começo de tipagem
const nome = "Marcelo";
const nomeAlunos = ["Eduardo", "Samira", "Filomena"];
const alunos = ["Eduardo", "Samira", "Filomena"]; //menos utilizado, mais verboso.
// Tuple - especificar o tipo de cada um dos elementos
let animais;
animais = ["cachorro", "coelho", "gato"];
// Boolean
const aprovado = true;
// Number
const numeroAlunos = 23;
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["aprovado"] = "001";
    StatusAprovacao["pendente"] = "002";
    StatusAprovacao["reprovado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusAluno1 = StatusAprovacao.aprovado;
//any - evitar ao máximo
const infosAPI = [true, "oi", 32, 99, "teste"];
//void
function teste(msg) {
    console.log(msg);
}
// null undefined
const u = undefined;
const n = null;
//Object
function novaFunçao(object) {
    //...
}
novaFunçao({
    chave1: 1,
    chave2: 2,
    chave3: 3
});
//Never
function loopInfinito() {
    while (true) {
        //...
    }
}
function error(msg) {
    throw new Error(msg);
}
function falhaSistema() {
    return error('Ops, algo deu errado');
}
//Union types
function mostrarNota(nota) {
    console.log(`Sua nota foi ${nota}`);
}
mostrarNota(10);
mostrarNota('10');
const alunosManha = [
    {
        nome: 'fernando',
        sobrenome: 'da Silva',
        idade: 23,
        solteiro: false
    },
    {
        nome: 'Amaral',
        sobrenome: 'Arruda',
        idade: 29,
        solteiro: true
    }
];
const amora = {
    nome: 'amora',
    cor: 'roxo',
    pesoMax: 100,
    semente: false
};
const maracuja = {
    nome: 'maracuja',
    cor: 'amarelo',
    semente: true
};
//Type assertion
const minhaIdade = 24;
minhaIdade.toString();
//Realizei o type assertion para especificar o tipo de dado e tambem para ter o autocomplete dos métodos.
const input = document.getElementById('name');
//Type assetion para que o typescript saiba que é um input e não dê erro quando eu tentar acessar o value.
console.log(input.value);
const req1 = {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
};
