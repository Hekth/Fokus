const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const imgBanner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const timer = document.querySelector('.app__card-timer');
const timerBtn = document.querySelector('.app__card-primary-button');
const inputMusica = document.querySelector('.toggle-checkbox');
const iconeBtnTimer = document.querySelector('.app__card-primary-butto-icon');
const btnTextoTimer = document.querySelector('.app__card-primary-button>span');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const btnTimerSomIniciar = new Audio('/sons/play.wav');
const btnTimerSomParar = new Audio('/sons/pause.mp3');
const beep = new Audio('sons/beep.mp3');

let segundos = 1500;

musica.loop = true;


focoBtn.addEventListener('click', () => {
    segundos = 1500;
    alterarAtributo('foco');
});

curtoBtn.addEventListener('click', () => {
    segundos = 300;
    alterarAtributo('descanso-curto');
});

longoBtn.addEventListener('click', () => {
    segundos = 900;
    alterarAtributo('descanso-longo');
});

function alterarAtributo(valorAtributo) {
    pararContagem();
    alterarBtnContagem('play_arrow', 'Começar');
    mostrarNaTela();
    document.querySelector('.active').classList.remove('active');
    html.setAttribute('data-contexto', valorAtributo);
    imgBanner.setAttribute('src', `/imagens/${valorAtributo}.png`);
    switch(valorAtributo) {
        case 'foco':
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            focoBtn.classList.add('active');
            break;
        case 'descanso-curto':
            titulo.innerHTML = `
            Que tal dar uma respirada?<br> <strong class="app__title-strong"> Faça uma pausa curta!</strong>
            `;
            curtoBtn.classList.add('active');
            break;
        case 'descanso-longo':
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            longoBtn.classList.add('active');
            break;
        default:
            break;
    }
}
                
inputMusica.addEventListener('change', () => {
    if (inputMusica.checked) {
        musica.play();
    } else {
        musica.pause();
    }
});

let intervaloId = null;

timerBtn.addEventListener('click', iniciarContagemOuParar);

function iniciarContagemOuParar () {
    if (intervaloId) {
        pararContagem();
        alterarBtnContagem('play_arrow', 'Começar');
        btnTimerSomParar.play();
        return;
    }

    intervaloId = setInterval(contagemRegressiva, 1000);
    alterarBtnContagem('pause', 'Pausar');
    btnTimerSomIniciar.play();
}

function contagemRegressiva() {
    if (segundos <= 0) {
        beep.play();
        alert('Acabou o tempo!');
        alterarBtnContagem('play_arrow', 'Começar');
        if (html.getAttribute('data-contexto') === 'foco') {
            const evento = new CustomEvent('FocoFinalizado');
            document.dispatchEvent(evento);
        }
        pararContagem();
        return;
    }
    
    segundos -= 1;

    mostrarNaTela();
}

function pararContagem() {
    clearInterval(intervaloId);
    intervaloId = null;
}

function alterarBtnContagem(img, texto) {
    iconeBtnTimer.setAttribute('src', `/imagens/${img}.png`);
    btnTextoTimer.innerText = texto;
    
}

function mostrarNaTela() {
    //Date trabalha com milissegundos, por isso a multiplicação.
    const tempo = new Date(segundos*1000).toLocaleTimeString('pt-Br', {minute:"2-digit", second: "2-digit"});
    timer.innerText = `${tempo}`;
}

mostrarNaTela();