class Linhas {
    constructor() {
        
        this.div = document.querySelector('.div-palavra');
        this.palavras = new Palavras();
        //Traços dependem do array palavras que dependem de um json
        this.criarLinhas(this.palavras);
    }

    palavras(){
        this.gerarPalavra = new PalavrasAleatorias();
    }
    criarLinhas(palavra) {
        
        for (var i = 0; i < palavra.length; i++) {
            var traco = document.createElement('div');
            traco.classList.add('traco');
            var letra = document.createElement('div');
            letra.innerHTML = palavra[i].toUpperCase();
            letra.classList.add('letras');
            this.div.appendChild(traco);
            traco.appendChild(letra);
        }
        console.log(palavra);
    }
}