var ciclo= document.getElementById("input_duty");
var ts= document.getElementById("input_ts");
var sel=document.getElementById("selector");
var t=document.getElementById("input_t");

var boton=document.getElementById("boton");
var controlador_js=document.getElementById("controlador");

var b0=0.0;
var r=document.getElementById("resultado");
var im=document.getElementById("imagen_res");
var wc=0.0;
var w=0.0;
var ro=0.0;
var tipo
var w2=0.0;
var s2=0.0;
var s3=0.0;
var s4=0.0;
var offset=0.0;
var s=0.0;
var a=0.0;
var num=0.0;
var r=document.getElementById("resultado");

var z=document.getElementById("dibujito"); //se obtiene el id desde el canvas
var lienzo= z.getContext('2d'); //se define el dibujo en 2d
lienzo.scale(1.3,1.3);


var duty=350;



function dibujar_linea()
{

    if(t.value<0)
    {
        t.value=1;
    }

    else if(t.value>100)
    {
        t.value=100;
    }


    if(ciclo.value<0)
    {
        ciclo.value=0;
    }
    else if(ciclo.value>100)
    {
        ciclo.value=100;
    }
    w=parseFloat(ciclo.value);
    w2=w.toFixed(2);
    lienzo.clearRect(0, 0, 380, 350);       //Se borra el canvas
    lienzo.fillStyle = "yellow";

    


    if(ciclo.value<10)
    {
        offset=65;
    }
    else
    {
        offset=30;
    }




    duty=300*(ciclo.value/100);
    lienzo.beginPath();
    lienzo.moveTo(0,250);
    lienzo.lineTo(300,250);
    lienzo.lineTo(300,270);
    lienzo.lineTo(0,270);
    lienzo.lineTo(0,250);


    lienzo.stroke();
    lienzo.fill();

    lienzo.moveTo(0,250);
    lienzo.lineTo(0,100);

    lienzo.lineTo(duty,100);
    lienzo.lineTo(duty,250);
    lienzo.moveTo(0,250);

    lienzo.stroke();
    lienzo.fill();
    lienzo.font = "60px Comic Sans MS";
    lienzo.fillStyle = "black";
    lienzo.textAlign = "center";
    ro=t.value.toString();
    lienzo.fillText("|", 300, 270);
    lienzo.font = "20px Comic Sans MS";
    lienzo.fillText("T="+ ro+"seg", 300, 300);

    s2=parseFloat(t.value);
    s3=s2.toFixed(2);
    s4=((ciclo.value*0.01*t.value).toFixed(2)).toString() ;
    lienzo.font = "60px Comic Sans MS";
    lienzo.fillText("|", duty, 100);
    lienzo.font = "20px Comic Sans MS";



    lienzo.fillText("Duty="+ s4+"seg", duty+offset, 30);
}
   






boton.addEventListener("click",dibujar_linea);