document.body.style.backgroundColor = "yellow";

var num1 = Number(prompt("Digite um número:"))
var num2 = Number(prompt("Digite outro número:"))
var rslt = num1 + num2
alert(num1 + " + " + num2 + " é igual à: " + rslt)

var nome2 = prompt("Digite seu nome:")
var idade2 = Number(prompt("Digite sua idade:"))

document.write(`<br><br><br><br>Seu nome é: ${nome2}. Sua idade é: ${idade2} anos. Seu nome tem ${nome2.length} letras. Seu nome em minúsculo é "${nome2.toLowerCase()}". Seu nome em maiúsculo é "${nome2.toUpperCase()}"`)