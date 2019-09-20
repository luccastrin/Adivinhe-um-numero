var valor_digitado = document.getElementById('txt_digitado');
var botao_palpite = document.getElementById('botao');

var palpite = document.getElementById('palpite');
var numero_tentativas = document.getElementById('numero_tentativas');
var valor_baixo_alto = document.getElementById('baixoOuAlto');

var contagem_palpites = 1;
var botao_reinicio;

var numero_aleatorio = Math.floor(Math.random() * 100) + 1;

function enviarPalpite() {
    var palpite_usuario = Number(valor_digitado.value);

    if( contagem_palpites === 1 ) {
        palpite.innerHTML = 'Palpites anteriores: ';
    }
        palpite.innerHTML += palpite_usuario + ' ';

    if( palpite_usuario === numero_aleatorio ) {
        numero_tentativas.innerHTML = 'Parabéns! Você Acertou!';
        numero_tentativas.style.backgroundColor = 'green';
        numero_tentativas.style.color = 'white';
        valor_baixo_alto.innerHTML = '';
        configFimDeJogo();
    } else if( contagem_palpites === 10 ) {
        numero_tentativas.innerHTML = 'Fim de Jogo!';
        numero_tentativas.style.backgroundColor = 'red';
        numero_tentativas.style.color = 'white';
        valor_baixo_alto.innerHTML = '';
        configFimDeJogo();
    } else {
        numero_tentativas.innerHTML = 'Valor errado.';
        numero_tentativas.style.backgroundColor = 'red';

        if( palpite_usuario < numero_aleatorio ) {
            valor_baixo_alto.innerHTML = 'O valor digitado está muito baixo.';
        } else if( palpite_usuario > numero_aleatorio ) {
            valor_baixo_alto.innerHTML = 'O valor digitado está muito alto.';
        }
    }
    contagem_palpites++;
    valor_digitado.value = '';
    valor_digitado.focus();
}

function configFimDeJogo() {
    valor_digitado.disabled = true;
    botao_palpite.disabled = true;

    botao_reinicio = document.createElement('button');
    botao_reinicio.innerHTML = 'Iniciar novo jogo';
    document.body.appendChild(botao_reinicio);
    botao_reinicio.style.fontSize = '15px';
    botao_reinicio.style.textTransform = 'uppercase';
    botao_reinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagem_palpites = 1;
    var reinicio_div = document.getElementById('resultado');

    for( var i = 0; i < reinicio_div.length; i++ ) {
        reinicio_div[i] = '';
    }
    botao_reinicio.parentNode.removeChild(botao_reinicio);

    valor_digitado.disabled = false;
    botao_palpite.disabled = false;

    valor_baixo_alto.style.backgroundColor = 'rgb(182, 255, 198)';
}