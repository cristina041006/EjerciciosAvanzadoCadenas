/*Parte 4: Análisis de Palíndromos

Crea una función llamada esPalindromoFrase que tome una cadena de texto y determine si es un palíndromo de frase. Debe ignorar espacios, puntuación y diferenciar mayúsculas de minúsculas. Por ejemplo, "Anita lava la tina" debería considerarse un palíndromo de frase.*/
function esPalindromoFrase(cadena) {
    let esPalindromo =false;
    let cadenaSinEspacios ='';
    for (let i=0; i<cadena.length; i++){
        if(cadena.charAt(i)!=' '){
            cadenaSinEspacios+=cadena.charAt(i).toLocaleLowerCase();
        }
    }
    let cadenaArrayAux = cadenaSinEspacios.split('');
    cadenaArrayAux.reverse()
    let cadenaAlreves = cadenaArrayAux.join('');

    if(cadenaSinEspacios===cadenaAlreves){
        esPalindromo=true;
    }

    return esPalindromo;
}

console.log(esPalindromoFrase('Anita lava la tina'));
console.log(esPalindromoFrase('Anita lava la tinaja'));

/*Implementa una función llamada encontrarPalindromos que tome una cadena de texto y devuelva una lista de todas las palabras que son palíndromos. Por ejemplo, si la entrada es "radar nivel hola mundo", la función debería devolver ["radar", "nivel"].*/

function encontrarPalindromos (cadena){
    let palindromos = []
    let cadenaArrayAux = cadena.split(' ');
    for (let i=0; i<cadenaArrayAux.length; i++){
        if (esPalindromoFrase(cadenaArrayAux[i])) {
            palindromos.push(cadenaArrayAux[i]);
        }
    }

    return palindromos
}

console.log(encontrarPalindromos('radar nivel hola mundo'));