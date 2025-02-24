let numero = prompt("Digite um número inteiro positivo:");


while (isNaN(numero) || numero <= 0) {
  numero = prompt("Número inválido. Digite um número inteiro positivo:");

}

numero = parseInt(numero);


var fatorial = 1;
for(i= 1; i <= numero; i++){

    fatorial *= i;  



};
alert('O resultado do seu numero e: ' +fatorial); 


window.location.href = "../../index.html";