const clickBtn = ()=>{
    document.querySelector('.image').setAttribute('src', 'https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg');

    let nomes = document.getElementsByClassName('nome');
    
    for (let index = 0; index < nomes.length; index++) {
        document.getElementById('idListaNomes').innerHTML += nomes[index].textContent + '<br/>';
        nomes[index].setAttribute('style', 'color: green');
    }
}


function MostarBotao(params) {
    let divOculta = document.getElementById('idDivOculta');
    let btnMostrar = document.getElementById('mostrar');
    let btnOcultar = document.getElementById('ocultar');

    if(params === 'mostrar'){
        if(divOculta.style.display === 'none'){
            divOculta.style.display = 'block'
        }
    }
    else if(params === 'ocultar'){
        if(divOculta.style.display === 'block'){
            divOculta.style.display = 'none'
        }
    }

    console.log(params);
}