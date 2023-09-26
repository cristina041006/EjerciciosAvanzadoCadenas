/*Parte 2: Validación de Formatos

Crea una función llamada validarEmail que tome una cadena y determine si es una dirección de correo electrónico válida. Debe verificar si la cadena tiene el formato adecuado de una dirección de correo electrónico.*/
function validarEmail (cadena) {
    let posicionArroba = cadena.indexOf('@');
    let posicionPunto = cadena.lastIndexOf('.');
    let validado =false;
    if (posicionArroba!=0 && posicionArroba<posicionPunto && posicionArroba+1!=posicionPunto && posicionPunto+1!=cadena.length){
        validado=true;
    }

    return validado;
}

console.log(validarEmail('asdasd@gmail.com'));
console.log(validarEmail('@gmail.com'));
console.log(validarEmail('asdasd@.com'));
console.log(validarEmail('as.dasd@gmailcom'));
console.log(validarEmail('asdasd@gmail.'));

/*Implementa una función llamada esTelefono que tome una cadena y determine si representa un número de teléfono válido. Debe tener en cuenta diferentes formatos de números de teléfono, como "(123) 456-7890" o "1234567890".*/

function esTelefono (cadena) {
    let valido = true;
    let numeros ='0123456789';    
    if (cadena.length===9){
        for (let i=0; i<cadena.length && valido; i++){
            if(!numeros.includes(cadena.charAt(i))){
                valido=false;
            }
        } 
    }else if (cadena.length===14){
        if(cadena.charAt(0)!='(' || cadena.charAt(4)!=")" || cadena.charAt(9)!='-' ){
            valido=false
        }

        for (let i=1; i<cadena.length && valido; i++){
            if (i!=4 && i!=5 && i!=9){
              if(!numeros.includes(cadena.charAt(i))){
                valido=false;
                }  
            }
            
        }
    }else{
        valido=false;
    }

    return valido;
}


console.log(esTelefono('123456789'));
console.log(esTelefono('6789'));
console.log(esTelefono('1234AB789'));
console.log(esTelefono('(123) 456-7890'));
console.log(esTelefono('(123456-7890'));
console.log(esTelefono('(12A) 456-7890'));
console.log(esTelefono('(123) 456-7A90'));

