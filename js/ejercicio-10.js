const numero = Number(prompt('Escribe un numero'));
let esDivisible = false;
switch (0) {
	case numero % 2:
		esDivisible = true;
		break;
	case numero % 3:
		esDivisible = true;
		break;
	case numero % 5:
		esDivisible = true;
		break;
	case numero % 7:
		esDivisible = true;
		break;
};
if (esDivisible) {
	console.log(`Es numero ${numero} es divisible por al menos uno de los siguientes numeros: 2, 3, 5 o 7.`);
} else {
	console.log(`Es numero ${numero} no es divisible por al menos uno de los siguientes numeros: 2, 3, 5 o 7.`);
};