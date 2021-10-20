window.onload = function () {
	var url = document.location.href,
		params = url.split('?')[1].split('&'),
		data = {}, tmp;
	for (var i = 0, l = params.length; i < l; i++) {
		tmp = params[i].split('=');
		console.log("temp0=" + tmp[0]);
		console.log("temp1=" + tmp[1]);
		data[tmp[0]] = tmp[1];
	}

var resultado= parseInt(data.num1)+parseInt(data.num2);
var resu2= "null";
if(resultado==232){
   resu2="Felicidades!!! Ganaste";
} else{
resu2="Suerte para la proxima";
}

	console.log("valor de numero 1 " + data.num1);
console.log("valor de numero 2 " +data.num2);
document.getElementById("result").value= resultado;
document.getElementById("premio").value= resu2;


}
