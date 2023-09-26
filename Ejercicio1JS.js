/*Parte 1: Manipulación de Cadenas

Escribe una función llamada capitalizarPalabras que tome una cadena de texto y devuelva la misma cadena con la primera letra de cada palabra en mayúscula. Por ejemplo, si la entrada es "hola mundo", la función debería devolver "Hola Mundo".*/

function capitalizarPalabras (cadena){
    let resultadoCdena=cadena.charAt(0).toLocaleUpperCase();
    for (let i=1; i<cadena.length; i++){
        if(cadena.charAt(i-1)=== ' ' && cadena.charAt(i)!= ' '){
            resultadoCdena += ` ${cadena.charAt(i).toLocaleUpperCase()}`
        }else{
            resultadoCdena+=cadena.charAt(i);
        }
    }

    return resultadoCdena;
}

console.log(capitalizarPalabras('hola   mundo'))

/*Crea una función llamada invertirCadena que tome una cadena y la invierta. Por ejemplo, si la entrada es "JavaScript", la función debería devolver "tpircSavaJ".*/

function invertirCadena(cadena){
    let cadenaInvertida='';
    let cadenaArrayAux = cadena.split('');
    cadenaArrayAux.reverse();
    cadenaInvertida = cadenaArrayAux.join('');
    return cadenaInvertida; 
}

console.log(invertirCadena('JavaScript'));

/*Implementa una función llamada contarVocales que tome una cadena y devuelva el número de vocales que contiene. Considera tanto vocales mayúsculas como minúsculas.*/

function contarVocales(cadena){
    let contador =0;
    let vocales = 'aeiou'
    for(let i=0; i<cadena.length; i++){
        if (vocales.includes(cadena.charAt(i).toLocaleLowerCase())){
            contador+=1;
        }
    }

    return contador;
}

console.log(contarVocales('Hola Mundo Adios'));

/*Escribe una función llamada eliminarDuplicados que tome una cadena y elimine cualquier carácter duplicado, dejando solo una aparición de cada carácter en la cadena resultante. Por ejemplo, si la entrada es "programming", la función debería devolver "progamin".*/

function eliminarDuplicados(cadena){
    let sinDuplicar='';
    for (let i=0; i<cadena.length; i++){
        if(!sinDuplicar.includes(cadena.charAt(i))){
            sinDuplicar+= cadena.charAt(i);
        }
    }

    return sinDuplicar;
}

console.log(eliminarDuplicados('programming'));