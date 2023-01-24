// Função Construtora --> objetos

function Pessoa (nome, sobrenome){
    const ID = 123456;

    const medotoInterno = function(){
        
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ": sou um método")
    }
}

const p1 = new Pessoa('Alex', 'Inácio');
const p2 = new Pessoa('Lionel', 'Messi')

console.log(p2.sobrenome);

p1.metodo();