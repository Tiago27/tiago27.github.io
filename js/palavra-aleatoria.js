class PalavrasAleatorias {
    constructor(arr) {
        this.palavras = arr;
        this.arrayNum = [];
        this.max = this.palavras.length;
    }


    aleatorio() {

        return Math.floor((Math.random() * this.max));
    }

    numeroRepetido(numero, arrayPalavras) {
        var repetido = false;
        var tamanho = arrayPalavras.length;

        for (var i = 0; i < tamanho; i++) {

            if (this.arrayNum[i] == numero) {
                repetido = true;
            }
            if (this.arrayNum.length == this.max && this.arrayNum[tamanho - 1] != numero) {
                this.arrayNum = [];
                repetido = false;
            }
        }


        return repetido;
    }

    indicePalavras(arr) {
        var repetido = false;
        var num = 0;

        while (true) {
            num = this.aleatorio()
            repetido = this.numeroRepetido(num, arr);

            if (!repetido) {
                this.arrayNum.push(num);
                break;
            }
        }

        console.log(this.arrayNum);
        return num;
    }
    addArray(arr) {
        this.palavras = arr;
        this.max = arr.length;
    }
    palavraAleatoria(palavras) {

        return this.palavras[this.indicePalavras(this.palavras)];
    }


}


