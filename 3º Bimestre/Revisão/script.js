class Pessoa{
    nome;
    idade;
    notaLPL;
    notaMAT;
    notaAW1;

    calcularMedia() {
        const media = Math.floor((this.notaAW1 + this.notaLPL + this.notaMAT) / 3);
        return media;
    }

    calcularIdade(anoFuturo) {
        const idadeFuturo = this.idade + (anoFuturo - 2023);
        return idadeFuturo;
    }
}

let pessoa = new Pessoa();

pessoa.nome = prompt("Qual o seu nome?");
pessoa.idade = Number(prompt("Qual sua idade?"));
pessoa.notaLPL = Number(prompt("Qual foi sua nota em Português?"));
pessoa.notaMAT = Number(prompt("Qual foi sua nota em Matemática?"));
pessoa.notaAW1 = Number(prompt("Qual foi sua nota em Desenvolvimento WEB?"));
const anoFuturo = Number(prompt("Digite um ano futuro para saber a sua idade:"));
const corFavorita = prompt("Qual sua cor favorita (em inglês)?");
let numeros = prompt("Digite 9 números separados por um espaço \" \":")

document.getElementsByTagName("p")[0].innerText = pessoa.nome;
document.getElementsByTagName("p")[1].innerText = pessoa.idade;
document.getElementsByTagName("p")[2].innerText = pessoa.calcularIdade(anoFuturo);

for(i = 0; i < 3; ++i){
    document.getElementsByTagName("h1")[i].style.color = corFavorita.toLowerCase();
}
document.getElementsByTagName("h1")[2].innerText = "Em " + anoFuturo + " você terá:";

document.getElementsByTagName("th")[0].style.backgroundColor = corFavorita.toLowerCase();
document.getElementsByTagName("th")[1].style.backgroundColor = corFavorita.toLowerCase();

document.getElementsByTagName("td")[1].innerText = pessoa.notaLPL;
document.getElementsByTagName("td")[3].innerText = pessoa.notaMAT;
document.getElementsByTagName("td")[5].innerText = pessoa.notaAW1;
document.getElementsByTagName("td")[7].innerText = pessoa.calcularMedia();

let divisao = numeros.split(" ");

for(i = 0; i < 9; ++i){
    document.getElementsByClassName("td2")[i].innerText = divisao[i];
}