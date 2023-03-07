const frase = prompt('Escriba una frase.');
let vocales = 'Las vocales son: ';
for (const letra of frase) {
    if (/[aeiouáéíóúü]/i.test(letra)) {
		vocales = `${vocales}${letra}-`
	};
};
vocales = vocales.substring(0, vocales.length - 1);
document.write(`${vocales}.`);