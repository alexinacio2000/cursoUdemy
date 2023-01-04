// Declaração de função 
function fala (){
    console.log("Fala comigo Bebe")
};

fala();

//First-Class Object (Objetos de primeira classe)
//Function Expression
const nome = function (){
    console.log("Meu nome é: ")
}

nome();

function executaFuncao (funcao){
    funcao()
}

executaFuncao(nome);

//Arrow Function
