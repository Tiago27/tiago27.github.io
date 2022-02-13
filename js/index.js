var letra = new Letras('galinha');
var aleatorio = new PalavrasAleatorias(arrayDePalavrasAleatorias);
var tecla = document.querySelector('body');
var form = document.getElementById('form-text');
var divForm = document.querySelector('.div-adicionar-palavra');
var textArea = document.querySelector('.textarea');
var btnSalvar = document.querySelector('.btn-salvar-palavra');
var btnCancelar = document.querySelector('.btn-cancelar');
var divJogo = document.querySelector('.div-jogo');
var btnNovoJogo = document.querySelector('.btn-novo-jogo');
var btnDesistir = document.querySelector('.btn-desistir');
var divInicio = document.querySelector('.div-inicio');
var btnComecar = document.querySelector('.btn-jogar');
var btnAdicionar = document.querySelector('.btn-adicionar');
var comecarJogo = false;


tecla.addEventListener('keydown', function (event) {
    var teclas = event.key;
    if (comecarJogo) {
        letra.verificaLetras(teclas.toUpperCase());
    }
});

btnComecar.addEventListener('click', function (event) {
    event.preventDefault();

    letra.iniciaJogo(aleatorio.palavraAleatoria(arrayDePalavrasAleatorias));
    divInicio.classList.add('esconde');
    divJogo.classList.remove('esconde');
    comecarJogo = true;
});

btnAdicionar.addEventListener('click', (event) => {
    event.preventDefault();
    divInicio.classList.add('esconde');
    divForm.classList.remove('esconde');
});

btnSalvar.addEventListener('click', (event) => {
    event.preventDefault();
    divForm.classList.add('esconde');
    divJogo.classList.remove('esconde');
    comecarJogo = true;
    //console.log(textArea.value.toUpperCase());
    aleatorio.addArray(adicionaPalavras(textArea.value.toUpperCase()));
    letra.iniciaJogo(aleatorio.palavraAleatoria());
    form.reset();
});

btnCancelar.addEventListener('click', (event) => {
    event.preventDefault();
    divInicio.classList.remove('esconde');
    divForm.classList.add('esconde');
    camecarJogo = false;
});

btnNovoJogo.addEventListener('click', (event) => {
    event.preventDefault();
    letra.iniciaJogo(aleatorio.palavraAleatoria());
});

btnDesistir.addEventListener('click', (event) => {
    event.preventDefault();
    comecarJogo = false;
    divInicio.classList.remove('esconde');
    divJogo.classList.add('esconde');
});