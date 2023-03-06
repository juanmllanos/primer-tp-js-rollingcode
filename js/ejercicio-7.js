const numeroUno = parseInt(prompt('Escriba un numero.'));
const numeroDos = parseInt(prompt('Escriba un numero.'));
const numeroTres = parseInt(prompt('Escriba un numero.'));
let mayorNumero = numeroUno;
if (mayorNumero > numeroDos) {
	mayorNumero = mayorNumero;
} else {
	mayorNumero = numeroDos;
};
if (mayorNumero > numeroTres) {
	mayorNumero = mayorNumero;
} else {
	mayorNumero = numeroTres;
};
document.write(mayorNumero);