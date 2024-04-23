const meuBotao = document.querySelector('#MyButon');
const cont = document.querySelector('#contar');
var idade = document.getElementById('idades');

// meuBotao.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(idade.value);
//     const p = document.createElement("h1");
//     if (idade === "") {
//         if (idade.value > 18) {
//             const texto = document.createTextNode("Maior de idade!");
//             p.appendChild(texto);
//             meuBotao.parentNode.insertBefore(p, meuBotao.nextElementSibling);
//         }
//         else {
//             const texto = document.createTextNode("Menor de idade");
//             p.appendChild(texto);
//             meuBotao.parentNode.insertBefore(p, meuBotao.nextElementSibling);
//         }
//     }
// })
let contador = 0;
cont.addEventListener('click', () => {
    const aqui = document.getElementById('aqui');
    // aqui.value += contador;
    contador++;
    aqui.innerText = `Contador: ${contador}`;

    let aleatorio = Math.floor(Math.random() * 7);
    alert("A dado aleatorio até 6: "+aleatorio)
    
})

const alterBG = document.getElementById('alterBG');

alterBG.addEventListener('click', () => {
    document.body.style = 'background: green'
});

