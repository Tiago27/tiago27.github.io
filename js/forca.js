class Forca {
    constructor() {
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext('2d');
        this.moveX = -90;
        this.moveY = 180;
    }

    desenha(xInicial, yInicial, xFinal, yFinal){
        this.ctx.beginPath();
        this.ctx.lineWidth = 2.5;
        this.ctx.moveTo(this.moveX + xInicial, yInicial - this.moveY);
        this.ctx.lineTo(this.moveX + xFinal, yFinal - this.moveY);
        this.ctx.stroke();
    }
    limpaTela() {
        this.ctx.clearRect(0, 0, 190, 270);
    }
    /*----- Forca -----*/
    base() {
        this.desenha(90, 450, 270, 450);
    }

    hasteVertical1() {
        this.desenha(130, 240, 130, 450);
    }

    hasteHorizontal() {
        this.desenha(130, 240, 240, 240);
    }

    hasteVertical2() {
        this.desenha(240, 240, 240, 270);
    }
    /*----- Boneco -----*/
    cabeca() {
        this.ctx.beginPath();
        this.ctx.arc(this.moveX + 240, 290 - this.moveY, 20, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    corpo() {
        this.desenha(240, 310, 240, 370);
    }

    bracoEsquerdo() {
        this.desenha(210, 350, 240, 320);
    }

    bracoDireito() {
        this.desenha(240, 320, 270, 350);
    }

    pernaEsquerda() {
        this.desenha(210, 400, 240, 370);
    }

    pernaDireita() {
        this.desenha(240, 370, 270, 400);
    }
}
