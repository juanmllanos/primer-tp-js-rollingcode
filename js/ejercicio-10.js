const numero = Number(prompt('Escribe un numero'));
switch (0) {
	case numero % 2:
	case numero % 3:
	case numero % 5:
	case numero % 7:
		document.write(`Es numero ${numero} es divisible por al menos uno de los siguientes numeros: 2, 3, 5 o 7.`);
		break;
	default:
		document.write(`Es numero ${numero} no es divisible por ninguno de los siguientes numeros: 2, 3, 5 o 7.`);
		break;
};