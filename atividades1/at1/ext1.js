let numero = prompt("Digite um número inteiro positivo:");


while (isNaN(numero) || numero <= 0 || numero % 1 !== 0) {
  numero = prompt("Número inválido. Digite um número inteiro positivo:");
}

if (numero % 2 === 0) {
  alert(numero + " é um número par.");
} else {
  alert(numero + " é um número ímpar.");
}

window.location.href = "../../index.html";