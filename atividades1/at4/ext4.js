let info = prompt("Digite a variável que será analisada:");


if (!isNaN(info) && info.trim() !== "") {
    alert("Sua variável é um número.");
} 

else if (info.toLowerCase() === "true" || info.toLowerCase() === "false") {
    alert("Sua variável é um booleano.");
} 

else {
    alert("Sua variável é uma string.");
}


window.location.href = "../../index.html";
