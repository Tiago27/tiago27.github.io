class Letras {
    constructor() {
        this.chance = 9;
        this.divLetraErrada = document.querySelector('.letra-errada');
        this.palavras = "";
        this.letrasDigitadas = [];
        this.div = document.querySelector('.div-palavra');
        this.desenhaForca = new Forca();
        this.qtdLetra = 0;
    }

    verificaLetras(letra) {
        if (this.proceguir(letra)) {
            if (this.palavras.lastIndexOf(letra) > -1) {
                this.mostraLetra(letra);
            } else {
                this.mostraLetraErrada(letra);
            }
        }
    }

    proceguir(letra) {
        return this.chance > -1 
            && this.filtraTeclado(letra) 
            && !this.letraRepetidas(letra) 
            && this.palavras.length != this.qtdLetra;
    }

    filtraTeclado(letra) {
        if (letra.length == 1 && /[A-Za-z]/.test(letra)) {
            return true;
        } else {
            return false;
        }
    }

    letraRepetidas(letra) {
        if (this.letrasDigitadas.lastIndexOf(letra) == -1) {

            this.letrasDigitadas.push(letra);
            return false;
        } else {
            return true;
        }
    }

    mostraLetra(letra) {
        var letras = document.querySelectorAll('.letras');
        for (let index = 0; index < this.palavras.length; index++) {

            //console.log(letra == this.palavras[index]);
            if (letra == this.palavras[index]) {
                letras[index].classList.add('letra-certa');
                this.qtdLetra++;
                console.log(this.qtdLetra);
            }
        }
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
        //console.log(palavra);
    }

    reiniciarJogo() {
        var letras = document.querySelectorAll('.letras');
        var traco = document.querySelectorAll('.traco');
        
        if (letras.length > 0) {

            for (let i = 0; i < letras.length; i++) {
                letras[i].remove();
                traco[i].remove();
            }
        }
        this.letrasDigitadas = [];
        this.divLetraErrada.innerHTML = "";
        this.desenhaForca.limpaTela();
        this.qtdLetra = 0;
    }

    mostraLetraErrada(letra) {

        this.divLetraErrada.innerHTML += " " + letra;

        switch (this.chance--) {
            case 9:
                this.desenhaForca.base();
                break;
            case 8:
                this.desenhaForca.hasteVertical1();
                break;
            case 7:
                this.desenhaForca.hasteHorizontal();
                break;
            case 6:
                this.desenhaForca.hasteVertical2();
                break;
            case 5:
                this.desenhaForca.cabeca();
                break;
            case 4:
                this.desenhaForca.corpo();
                break;
            case 3:
                this.desenhaForca.bracoEsquerdo();
                break;
            case 2:
                this.desenhaForca.bracoDireito();
                break;
            case 1:
                this.desenhaForca.pernaEsquerda();
                break;
            case 0:
                this.desenhaForca.pernaDireita();
                break;

            default:
                break;
        }
    }

    iniciaJogo(palavra) {
        this.chance = 9;
        this.palavras = palavra;
        this.reiniciarJogo();    
        this.criarLinhas(palavra);
    }
}