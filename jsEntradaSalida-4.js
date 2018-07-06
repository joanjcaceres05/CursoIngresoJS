/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	nombre = prompt("ingrese su nombre aqui");
	document.getElementById('elNombre').value = nombre;
}

