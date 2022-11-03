c=0;
const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const botaoTrocaCor = document.querySelector('#troca_cor');
const imagemDoRobo = document.querySelector('.robo');
const cores = ['Azul','Amarelo','Branco','Rosa','Vermelho','Preto'];
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.parentNode,evento.target.dataset.peca);
    })
})

botaoTrocaCor.addEventListener('click', (evento) => {
    trocaCor();
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
    if(operacao === "+") {
        peca.value++;
    }else {
        peca.value--;
    }
}

function atualizaEstatisticas(operacao, controle, peca) {
    estatisticas.forEach( (elemento) => {
        if(operacao === "+") {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        }else{
                elemento.textContent = parseInt(elemento.textContent) - (pecas[peca][elemento.dataset.estatistica]);
        } 
    });
}

function trocaCor() {
    imagemDoRobo.src = "img/imagens-do-robotron/Robotron 2000 - " + cores[c] + "/Robotron 2000 - " + cores[c] + ".png";
    c++;
    if(c==6) c=0;
}


