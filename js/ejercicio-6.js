const numeroUno = parseInt(prompt('Ingrese un numero.'));
const numeroDos = parseInt(prompt('Ingrese un numero.'));
if (numeroUno > numeroDos) {
	document.write(`El numero mayor es ${numeroUno}`);
} else if (numeroDos > numeroUno){
	document.write(`El numero mayor es ${numeroDos}`);
} else {
	document.write(`Los numeros son iguales.`);
}