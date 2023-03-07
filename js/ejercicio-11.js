const numero = Number(prompt('Escribe un numero'));

if (numero % 2 === 0) {
	document.write(`<p>El numero ${numero} es divisible por 2.</p>`);
};
if (numero % 3 === 0 ) {
	document.write(`<p>El numero ${numero} es divisible por 3.</p>`);
};
if (numero % 5 === 0) {
	document.write(`<p>El numero ${numero} es divisible por 5.</p>`);
};
if (numero % 7 === 0) {
	document.write(`<p>El numero ${numero} es divisible por 7.</p>`);
};