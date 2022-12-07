function rojo()
		{
            t1.style.color="#FF0000";
		}
		function negro()
		{
            t1.style.color="#000000";
		}

(document).ready(function(){
    $("tr:even").css("background-color");
});


function evaluacion()
{
var resultado;
if(document.getElementById('top1').checked)
{
 alert("Equipos Italianos");

}
if(document.getElementById('top2').checked)
{
 resultado = "Ladrillos";
 
}
if(document.getElementById('top3').checked)
{
 resultado = "Equipos Brasileños";
}
if(document.getElementById('top4').checked)
{
 resultado = "Cemento";
}
if(document.getElementById('top5').checked)
{
 resultado = "Equipos Americanos";
}
if(document.getElementById('top6').checked)
{
 resultado = "Arena";
}
if(document.getElementById('top7').checked)
{
 resultado = "Agregados";
}
if(document.getElementById('top8').checked)
{
 resultado = alert("Madera");
}

formulario.res.value = "Se selecciono: " + resultado;
document.querySelectorAll('[type=radio]').forEach((x) => 
x.checked = false);
}
