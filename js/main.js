/*---RELOJ---*/

function reloj()
    {
    horaActual = new Date();
    hora = horaActual.getHours();
    minuto = horaActual.getMinutes();
    segundo = horaActual.getSeconds();
    str_segundo = new String (segundo);
    if (str_segundo.length == 1)
      segundo = "0" + segundo;
      str_minuto = new String (minuto);
    if (str_minuto.length == 1)
      minuto = "0" + minuto;
      str_hora = new String (hora);
    if (str_hora.length == 1)
      hora = "0" + hora;  
      horaActual = hora + " : " + minuto;           
    document.getElementById("reloj").innerHTML=horaActual;
    setTimeout("reloj()",1000);
      if(horaActual == "00 : 01")
      {          
        
      }    
    }
/*---FECHA---*/
function fecha()
    {
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var fechaActual=new Date();
    fechaActual = diasSemana[fechaActual.getDay()] + ", " + fechaActual.getDate() + " de " + meses[fechaActual.getMonth()] + " de " + fechaActual.getFullYear();
    document.getElementById("fecha").innerHTML=fechaActual;
    }
/*---Funcion ver mas---*/
function vermas(id){
if(id=="mas"){
document.getElementById("desplegar").style.display="block";   
document.getElementById("mas").style.display="none"; 
}
else{
document.getElementById("desplegar").style.display="none";
document.getElementById("mas").style.display="inline";
}
} 
