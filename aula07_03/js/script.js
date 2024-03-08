// let entrada = prompt("Digite o seu nome: ");
// alert("Você Parabens: " + entrada);

// let n1 = prompt("Digite um numero: ");
// let n2 = prompt("Digite um numero: ");
// const num1 = parseFloat(n1);
// const num2 = parseFloat(n2);
// alert("Você Parabens: " + (num1 + num2));

// let n1 = parseInt(prompt("Digite um numero: "));
// if (n1 > 0) {
//     for (let i = 0; i < n1; i++) {
//         if (i != n1) {
//             if (i % 2 == 0) {
//                 console.log("Numero par: "+ i);
//             }
//         }
//     }
// }

// let n1 = parseInt(prompt("Digite uma senha ('12345'): "));
// if(n1 == 12345){
//     alert("Acesso concedido! ");
// }
// else{
//     alert("negado");
// }


// let n1 = parseInt(prompt("Quantos numeros deseja somar: "));
// var soma = 0;
// var num = 0;
// for (let i = 0; i < n1; i++) {
//     num = parseInt(prompt(`Nº${i+1}`));
//     soma = soma + num;
// }
// alert(`${soma}`);

// let numero = parseInt(prompt("Insira um numero: "));
// const divisores = [];

// for (let i = 1; i <= Math.floor(numero / 2); i++) {
//     if (numero % i === 0) {
//         divisores.push(i);
//     }
// }
// divisores.push(numero); 
// console.log("Os divisores de", numero, "são:", divisores);

let numero = parseInt(prompt("Insira um numero: "));
let i =2;
do {
    if(numero %i===0){
        
    }
    i++;
} while (i<numero);