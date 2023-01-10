// IIFE -> Immediately invoked function expression
(function(){

    const sobrenome = 'Inacio';
    function criaNome (nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Alex'))
    }
    falaNome();
})();

