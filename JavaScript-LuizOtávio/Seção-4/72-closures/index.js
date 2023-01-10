function retornaFuncao(){
    const nome = 'Alex'
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao();

console.log(funcao)