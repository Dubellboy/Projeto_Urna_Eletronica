//Variáveis de controle de interface

let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector  ('.d-1-right');
let numeros = document.querySelector('.d-1-3');

//Variáveis controle de ambiente
let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i= 0; i < etapa.numeros; i++) {
        if(i===0) {
            numeroHtml += '<div class = "numero pisca"></div>'; 
        }
        numeroHtml += '<div class = "numero"></div>';
    }
    seuVotoPara.style.display ='none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.innerHTML = ''
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    alert("Acabou");
}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(numero!== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');//Parar de piscar o núemro preenchido

        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        }else {
            atualizaInterface();
        }
    }
};

function branco() {
    alert("clicou em BRANCO")
};

function corrige() {
    alert("clicou em CORRIGE")
};

function confirma() {
    alert("clicou em CONFIRMA")
};

comecarEtapa();