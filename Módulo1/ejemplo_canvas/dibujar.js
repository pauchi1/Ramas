let canvas = document.getElementById("areaDibujo");
let ctx = canvas.getContext("2d");

function dibujarRectangulo() {
    ctx.fillStyle =" #ED9280";
    ctx.fillRect(330, 80, 50, 70);
    ctx.fillStyle ="#ED9280";
    ctx.fillRect(220, 80, 50, 70);
    ctx.fillStyle ="#ED9280";
    ctx.fillRect(200, 180, 200, 100);
        ctx.fillStyle ="#ED9280";
    ctx.fillRect(220, 190, 160, 130);
}