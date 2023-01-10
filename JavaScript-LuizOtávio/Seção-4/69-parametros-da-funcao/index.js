//Function - argumento que sustenta todos os argumentos

function funcao () {
    let total = 0;
    for(let argumento of arguments)
    total += argumento;
}

funcao();

function oq (a, b =2, c= 1){
    console.log(a + b + c)
}

oq(2, 3 , 5) 
        
function conta (operador, acumulador, ...numeros){
    for(let numero of numeros){                                                 
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero; 
    if (operador === '/') acumulador /= numero; 
    if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}

conta('*', 2, 2)
