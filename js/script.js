
function sincronizar() {
    alert("Dados sincronizados com sucesso! O AgroNexus funciona offline e envia seus dados assim que detectar conexão.");
}

function falar() {
    var feedback = document.getElementById("textoIA");
    if (feedback) {
        feedback.innerText = "Comando de voz recebido: Analisando umidade do solo e previsão climática...";
        feedback.style.color = "#22c55e";
    }
}

var formContato = document.getElementById('formContato');

if (formContato) {
    var inputNome = document.getElementById('nome');
    var inputEmail = document.getElementById('email');
    var inputMensagem = document.getElementById('mensagem');
    var charCount = document.getElementById('charCount');

    inputMensagem.oninput = function() {
        var tamanho = inputMensagem.value.length;
        charCount.innerText = tamanho + " / 500";
        
        if (tamanho > 500) {
            charCount.style.color = "red";
        } else {
            charCount.style.color = "#a1a1aa";
        }
    };

    formContato.onsubmit = function(evento) {
        evento.preventDefault();
        var valido = true;
        inputNome.classList.remove('is-invalid');
        inputEmail.classList.remove('is-invalid');
        inputMensagem.classList.remove('is-invalid');

        var nomeValor = inputNome.value.trim();
        if (nomeValor === "") {
            mostrarErro(inputNome, "O nome não pode estar em branco.");
            valido = false;
        } else if (nomeValor.indexOf(" ") === -1) {
            mostrarErro(inputNome, "Por favor, insira seu nome completo (nome e sobrenome).");
            valido = false;
        }

        var emailValor = inputEmail.value.trim();
        if (emailValor === "") {
            mostrarErro(inputEmail, "O e-mail não pode estar em branco.");
            valido = false;
        } else if (emailValor.indexOf("@") === -1 || emailValor.indexOf(".") === -1) {
            mostrarErro(inputEmail, "Por favor, insira um e-mail válido contendo @ e ponto.");
            valido = false;
        }

        var msgValor = inputMensagem.value.trim();
        if (msgValor === "") {
            mostrarErro(inputMensagem, "A descrição não pode estar em branco.");
            valido = false;
        } else if (msgValor.length > 500) {
            mostrarErro(inputMensagem, "A mensagem deve ter no máximo 500 caracteres.");
            valido = false;
        }

        if (valido) {
            alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.");
            formContato.reset();
            charCount.innerText = "0 / 500";
        }
    };
}

function mostrarErro(input, mensagem) {
    input.classList.add('is-invalid');
    var divErro = input.nextElementSibling;
    if (divErro) {
        divErro.innerText = mensagem;
    }
}

function calcularLucro() {
    var precoIntermediario = 2.50;
    var precoDireto = 4.80;
    var inputQtd = document.getElementById('qtdProducao');
    var qtd = parseFloat(inputQtd.value);
    
    var resultado = document.getElementById('resultadoLucro');
    
    if (isNaN(qtd) || qtd <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }
    
    var lucroExtra = (precoDireto - precoIntermediario) * qtd;
    
    if (resultado) {
        resultado.innerHTML = "Com o AgroNexus, você ganharia <strong>R$ " + lucroExtra.toFixed(2) + "</strong> a mais nesta venda!";
        resultado.style.color = "#22c55e";
        resultado.style.fontWeight = "bold";
    }
}
