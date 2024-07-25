function criptografar() {
    let texto = document.querySelector('.secao_de_controle_texto').value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    atualizarResultado(textoCriptografado);
    document.querySelector(".botao_copiar").removeAttribute("disabled")
}

function descriptografar() {
    let texto = document.querySelector('.secao_de_controle_texto').value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    atualizarResultado(textoDescriptografado);
    document.querySelector(".botao_copiar").removeAttribute("disabled")
}

function atualizarResultado(mensagem) {
    let painelResultadoTexto = document.querySelector('.painel_resultado_texto');
    painelResultadoTexto.innerHTML = `<h2 class="painel_resultado_titulo">Resultado:</h2><p class="painel_resultado_paragrafo">${mensagem}</p>`;
}

// Adiciona a função descriptografar ao botão correspondente
document.querySelector('.secao_de_controle_botao_descriptografar').onclick = descriptografar;

// Função para copiar o texto criptografado/descriptografado
function copiarTexto() {
    let painelResultadoParagrafo = document.querySelector('.painel_resultado_paragrafo');
    let textoParaCopiar = painelResultadoParagrafo.textContent;

    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        alert('Texto copiado para a área de transferência!');
    }, function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}

// Adiciona a funcionalidade de copiar o texto ao clicar no parágrafo do resultado
document.querySelector('.botao_copiar').onclick = copiarTexto;
