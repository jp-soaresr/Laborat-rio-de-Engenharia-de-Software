// Adiciona o Bootstrap ao head
const linkBootstrap = document.createElement("link");
linkBootstrap.rel = "stylesheet";
linkBootstrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
document.head.appendChild(linkBootstrap);

// Adiciona um arquivo CSS externo para melhor organização
const linkCSS = document.createElement("link");
linkCSS.rel = "stylesheet";
linkCSS.href = "styles.css";
document.head.appendChild(linkCSS);

// Criação da estrutura principal da calculadora
const container = document.createElement("div");
container.className = "container mt-5 d-flex justify-content-center";
document.getElementById("primeira").appendChild(container);

const calculadora = document.createElement("div");
calculadora.className = "calculadora";
container.appendChild(calculadora);

// Criando o display
const display = document.createElement("input");
display.className = "display";
display.setAttribute("readonly", "true");
calculadora.appendChild(display);

// Criando os botões individualmente
const botoesContainer = document.createElement("div");
botoesContainer.className = "botoes-container";
calculadora.appendChild(botoesContainer);

function criarBotao(texto, classe = "botao") {
    const botao = document.createElement("button");
    botao.textContent = texto;
    botao.className = classe;
    botao.addEventListener("click", () => processarEntrada(texto));
    return botao;
}

function criarLinha(...botoes) {
    const linha = document.createElement("div");
    linha.className = "linha";
    botoes.forEach(botao => linha.appendChild(botao));
    botoesContainer.appendChild(linha);
}

// Criando e organizando os botões na calculadora
criarLinha(criarBotao('C', "botao botao-danger"), criarBotao('9'), criarBotao('8'), criarBotao('7'), criarBotao('/', "botao botao-warning"));
criarLinha(criarBotao('6'), criarBotao('5'), criarBotao('4'), criarBotao('*', "botao botao-warning"));
criarLinha(criarBotao('3'), criarBotao('2'), criarBotao('1'), criarBotao('-', "botao botao-warning"));
criarLinha(criarBotao('0'), criarBotao(','), criarBotao('%', "botao botao-warning"), criarBotao('=', "botao botao-success"), criarBotao('+', "botao botao-warning"));

// Classe para manipular os cálculos
class Calculadora {
    constructor() {
        this.valorAtual = "";
        this.valorAnterior = "";
        this.operacao = null;
    }

    processarEntrada(valor) {
        if (!isNaN(valor) || valor === ',') {
            this.valorAtual += valor;
        } else if (valor === 'C') {
            this.valorAtual = "";
            this.valorAnterior = "";
            this.operacao = null;
        } else if (valor === '=') {
            this.calcularResultado();
        } else {
            this.valorAnterior = this.valorAtual;
            this.valorAtual = "";
            this.operacao = valor;
        }
        display.value = this.valorAtual || this.valorAnterior;
    }

    calcularResultado() {
        let resultado;
        const numAnterior = parseFloat(this.valorAnterior.replace(',', '.'));
        const numAtual = parseFloat(this.valorAtual.replace(',', '.'));
        
        switch (this.operacao) {
            case '+': resultado = numAnterior + numAtual; break;
            case '-': resultado = numAnterior - numAtual; break;
            case '*': resultado = numAnterior * numAtual; break;
            case '/': resultado = numAtual !== 0 ? numAnterior / numAtual : "Erro"; break;
            case '%': resultado = numAnterior * (numAtual / 100); break;
            default: resultado = "Erro";
        }
        
        this.valorAtual = resultado.toString().replace('.', ',');
        this.valorAnterior = "";
        this.operacao = null;
    }
}

const calculadoraObj = new Calculadora();

function processarEntrada(valor) {
    calculadoraObj.processarEntrada(valor);
}



// vamos criar as funçoes que iram fazer as contas, sendo que ao ser clicado em um numero devemos guardar a variavel dele para usar na funçoes, sendo que temos que fazer uma de adição, subtração, divisao, multiplicação, porcentagem, 
// sendo que o nosso estilo ainda esta muitoo feio, caso queira pode gerar um arquivo css para deixar os botoes de deteminados tamanhos e organizar eles melhor