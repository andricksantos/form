//funciones
	var mostrarValor = function(x){
		
			//document.getElementById('msjs').style.color="blue";
		var inputMsj = document.getElementById('msjs');
        var inputMora =  document.getElementById('f4');
        var selecdia = document.getElementById("listaOpciones");


       switch (selecdia) {
		    case 0:
		       if (selecdia.value = "Justo a tiempo") {
        			inputMsj.value = mj2;
        			inputMora.value = mo2;
		        break;
		    case 1:
		       if (selecdia.value = "Tiempo recargado") {
		        	inputMsj.value = mj3;
		        	inputMora.value = mo3;
		        break;
		    case 2:
		       if (selecdia.value = "Tiempo sobrepasado") {
        			inputMsj.value = mj4;
        			inputMora.value = mo4;
		        break;
		    case 3:
		        if (selecdia.value = "Tiempo alto" ) {
        			inputMsj.value = mj5;
        			inputMora.value = mo5;
		        break;
		    case 4:
		        if (selecdia.value = "Tiempo elevado" ) {
        			inputMsj.value = mj6;
        			inputMora.value = mo6; 
		        break;
		    case 5:
		        console.log("se mamut")
		        break;
		}

    }


function calcularinteres(numero1, numero2) {
	var numero1 = document.getElementById("f3").value;
	var numero2 = document.getElementById("f4").value;
	
	var resultado = numero1 * numero2;
	//alert (resultado);
	document.getElementById("resultado").value = resultado; 
	//document.write(resultado)
	//console.log(resultado);
}

function Mostrardias(fx,fy){
	//var fecha1= "12/06/2008";
	var fecha1=fx.value;
	var dia1= fecha1.substr(0,2);
	var mes1= fecha1.substr(3,2);
	var anyo1= fecha1.substr(6);
	
	//var fecha2= "29/06/2008";
	var fecha2=fy.value;
	var dia2= fecha2.substr(0,2);
	var mes2= fecha2.substr(3,2);
	var anyo2= fecha2.substr(6);

	var nuevafecha1= new Date(anyo1+","+mes1+","+dia1);
	var nuevafecha2= new Date(anyo2+","+mes2+","+dia2);

	var Dif= nuevafecha2.getTime() - nuevafecha1.getTime();
	var dias= Math.floor(Dif/(1000*24*60*60));
	
	document.getElementById('diitas').innerHTML = dias;
}

function color(){
	var radiovalor = document.getElementsByName("radSize");

	if(radiovalor[0].checked==true){
		document.getElementById('eti').style.color='#0b3df2';
	}
	if(radiovalor[1].checked==true){
		document.getElementById('eti').style.color='#f51313';
	}
	if(radiovalor[2].checked==true){
		document.getElementById('eti').style.color='#0fa43e';
	}

}

function validarEntero(valor){
	//intentar converitr entero
	//si es un número entonces no lo afecta,
	//pero sino entonces lo convierte
	valor = parseInt(valor);
	//comprobar si es un valor numérico
	if(isNaN(valor)){
		//si esto es verdad (no es un número) entonces
		//devuelva el valor cadena vacía
		return "";
	}
	else{
		//En caso contrario (Si era número) devualva el valor
		return valor;
	}
}
function MostrarFecha(){
	var fecha;
	var meses=new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	fecha=new Date();
	var cadena=fecha.getDate()+'/'+meses[fecha.getMonth()]+'/'+fecha.getFullYear();
	document.getElementById('etiqueta').innerHTML = cadena;
	var fecha1=document.getElementById("f1");
	alert(fecha1);
}
function valida_envia(){
	//validar el nombre
	if(document.fvalida.nombre.value.length==0){
		alert("Tiene que escribir su nombre");
		document.fvalida.nombre.focus() ;
		return 0;
	}
	//Validar la edad, tiene que ser número entero mayor que 18
	edad = document.fvalida.edad.value;
	edad = validarEntero(edad);
	document.fvalida.edad.value=edad;
	if(edad==""){
		alert("Tiene que introducir un número entero en su edad.");
		document.fvalida.edad.focus();
		return 0;
	}
	else{
		if(edad<18){
			alert("Debe escribir una edad mayor o igual a 18 años.");
			return 0;
		}
	}
	//Validar en interés
	if(document.fvalida.interes.selectedIndex==0){
		alert("Debe seleccionar un motivo de su contacto!");
		document.fvalida.interes.focus();
		return 0;
	}
	alert("Muchas gracias por enviar el formulario");
	MostrarFecha();
	//Mostrardias();
}

/*function selectlist() {

	var list = document.getElementById("list");
	document.getElementById("msjs").innerHTML = list.options[list.selectedIndex].text;
}
*/





