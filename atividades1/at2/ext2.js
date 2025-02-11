let numero = prompt("Digite um número inteiro positivo:");


while (isNaN(numero) || numero <= 0 || numero % 1 !== 0) {
  numero = prompt("Número inválido. Digite um número inteiro positivo:");

}
numero = parseInt(numero);

if( numero === 1 ){
    alert(numero + " o numero nao e primo.");  
}else{
    let quant = 0; 
 
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      quant++; 
    }
  }

  if (quant === 2) {
    alert(numero + " é um número primo.");
  } else {
    alert(numero + " não é um número primo.");
  }
}



