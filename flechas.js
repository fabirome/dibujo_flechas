var teclas ={
 UP: 38,
 DOWN: 40,
 LEFT:37,
 RIGHT: 39
};


document.addEventListener("keyup", dibujarTeclado);

let area= document.getElementById("area_dibujo");
let papel = area.getContext("2d");
let x=150;
let y=150;
let colorcito="azul";
let movimiento=10;


function dibujandoLinea (color,x1,y1,x2,y2, lienzo)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.linewidth= 5;
lienzo.moveTo(x1, y1);
lienzo.lineTo(x2, y2);
lienzo.stroke();
lienzo.closePath();
}

function dibujarTeclado(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP:
        dibujandoLinea (colorcito,x,y,x,y-movimiento, papel);
        y = y-movimiento;
        break;
        case teclas.DOWN:
        dibujandoLinea (colorcito,x,y,x,y+movimiento, papel);
        y = y+movimiento;
        break;
        case teclas.LEFT:
        dibujandoLinea (colorcito,x,y,x-movimiento,y, papel);
        x = x - movimiento;
        break;
        case teclas.RIGHT:
        dibujandoLinea (colorcito,x,y,x+movimiento,y, papel);
        x = x + movimiento;
        break;  

    }
}