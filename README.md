# Desafio Alura decodificador de texto


Esse projeto foi proposto pela Alura como conclusão da formação para a trilha de iniciante em programação, onde vamos desenvolver, tanto o código que irá criptografar e descriptografar a mensagem, quanto a estética e estrutura da página. 

Foram usados as seguintes ferramentas: 

* JavaScript
* HTML
* CSS
* Vercel
* Figma
* Trello

## Organização do projeto

e como parte do desafio proposto, iremos realizar o desenvolvimento seguindo o Trello, com uma metodologia similar ao Scrum, oque é muito interessante pois esse projeto é um treinamento para oque é feito e cobrado no mercado.

![1000](https://i.imgur.com/jdht0Wk.png)

Trello é uma ferramenta de colaboração e gestão de projetos que permite organizar as suas tarefas em quadros, assim como criar um quadro e atribuí-lo a cada membro da sua equipe. Vou utilizar o Trello para gerir o desenvolvimento do projeto do decodificador de texto. 

e vou levar você para acompanhar o passo a passo desse projeto!


### Figma

antes de partimos para a estilização e o código, precisamos montar a estrutura. Para isso vou me basear no Figma compartilhado para a conclusão do projeto: 

![1000](https://i.imgur.com/xZMb5Gx.png)

o Figma é uma ferramenta de design que combina a acessibilidade da web com as funcionalidades de um aplicativo nativo. Uma das mais usadas no mercado para possibilitar o desenvolvedor  produzir uma página assim como o designer projetou.


Ele será usado para entendermos a estrutura do site, assim como o design para acessarmos informações como tamanho de imagens, cores, fontes etc.


## Estrutura HTML

após uma análise sobre os elementos chaves, consegui montar o HTML "o esqueleto do site" e para o campo de texto onde o usuário irá colocar a mensagem, tinha duas opções

### Texto
#### Input

O **elemento HTML `<input>`** é usado para criar controles interativos para formulários baseados na web **para receber dados do usuário**. A semântica de um `<input>` varia consideravelmente dependendo do valor de seu atributo `type`.


#### text area

O **elemento** HTML `<textarea>` representa um controle de edição para uma caixa de texto, útil quando você quer permitir ao usuário informar um texto extenso em formato livre, como um comentário ou formulário de retorno.


optei pelo `<textarea>` pois o input não é muito bom para textos longos pois ele não apresenta uma quebra de linha, mesmo que você altere o tamanho e largura via CSS. Oque diminui a facilidade do usuário visualizar o seu texto


### Imagens

Consegui pegar as imagens originais pelo próprio Figma, através do "export" ícones optei pelo formato SVG quanto a imagem da garota na água selecionei por PNG

### Botões

são eles que irão fazer "a mágica acontecer"

foram adicionados utilizando a tag `<button>`

### Rodapé

como um dos requisitos extras solicitados no <a href="https://trello.com/c/PW8gGma0/14-montar-elementos-da-p%C3%A1gina"> Trello</a>  adicionei um rodapé informando que foi desenvolvido por mim


### Resultado

em sua simplicidade o projeto ficou assim :


![1000](https://i.imgur.com/XTyhApv.png)



## Design da página

Nesta etapa usarei novamente o figma mas dessa vez irei mais a fundo, buscando entender as cores e atributos de cada elemento

### Definição das cores

Primeiro vamos definir a paleta cores principais e secundárias, baseado no projeto do Figma.

para isso criaremos variáveis no CSS usando comando `:root` no qual para esse projeto fiz assim:

```
:root {

    --cor-branco: #FFFFFF;

    --cor-fundo: #F3F5FC;

    --cor-azul: #0A3871;

    --cor-cinzaClaro: #D8DFE8;

    --cor-cinzaMedio: #495057;

    --cor-cinzaEscuro: #343A40;

}
```


na tag `<textarea>` eu adicionei um placeholder e para editar a cor do placeholder tive que usar o seguinte comando

## Importando Fontes

pelo figma pude perceber que a família de fonte usadas a inter com os pesos  400 e 700

então importei elas pelo <a href="https://fonts.google.com/"> Google Fonts</a> com o comando

```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=sw
```


e adicionei essa fonte principal como uma variável também 

```


:root {

    --cor-branco: #FFFFFF;

    --cor-fundo: #F3F5FC;

    --cor-azul: #0A3871;

    --cor-azul-escuro:#052051;

    --cor-cinzaClaro: #D8DFE8;

    --cor-cinzaMedio: #495057;

    --cor-cinzaEscuro: #343A40;

    --fonte-principal: "inter",sans-serif;
 

}
```

## Estilização dos elementos


 font-family: "inter",sans-serif;

    font-weight: 700;

    font-size: 24px;

    color: var(--cor-cinzaEscuro);

    margin-bottom: 20px;

}


### Estilização do corpo e do cabeçalho

Defini um fundo claro para o corpo e apliquei a fonte principal em todo o texto:


```
body {
    background-color: var(--cor-fundo);
    font-family: var(--fonte-principal);
    font-weight: 400;
    color: var(--cor-cinzaMedio);
    font-size: 12px;
}

.cabecalho {
    padding: 40px; 
    height: 40px;
}

```

### Estrutura da página

Utilizei flexbox para alinhar os elementos principais da página, dividindo-a em duas seções principais: uma para controle de criptografia e outra para exibir os resultados:


```
.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 70px;
}

.secao_de_controle {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.painel_resultado {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFFFF;
    width: 450px;
    height: 944px;
    border-radius: 32px;
    gap: 100px;
    box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.521);
}

```

### Estilização dos elementos de texto e botões

O campo de texto foi estilizado para se ajustar ao design proposto, com um tamanho grande e uma cor azul:


```
.secao_de_controle_texto {
    background-color: var(--cor-fundo);
    border: none;
    width: 680px;
    height: 600px; 
    font: "Inter";
    font-size: 32px;
    color: var(--cor-azul);
    font-weight: 400;
    outline: none;
    line-height: 150%;
}

.secao_de_controle_texto::placeholder {
    color: var(--cor-azul);
}

```


Os botões de criptografar e descriptografar foram estilizados para se diferenciar visualmente e fornecer feedback ao usuário quando interagidos:

```
.secao_de_controle_botoes {
    display: flex;
    gap: 20px;
    margin-top: 10px;
}

.secao_de_controle_botao_criptografar {
    width: 328px;
    height: 67px;
    border-radius: 24px;
    background-color: var(--cor-azul);
    color: #FFFFFF;
    border: none;
}

.secao_de_controle_botao_criptografar:hover {
    background-color: var(--cor-azul-escuro);
}

.secao_de_controle_botao_descriptografar {
    width: 328px;
    height: 67px;
    border-radius: 24px;
    background-color: var(--cor-fundo);
    color: #FFFFFF;
    border: 2px solid var(--cor-azul);
    color: var(--cor-azul);
}

.secao_de_controle_botao_descriptografar:hover {
    background-color: var(--cor-cinzaClaro);
}

```


### Botão de copiar

O botão de copiar foi configurado para ficar desativado inicialmente e mudar de cor quando ativado:


```
.botao_copiar {
    width: 328px;
    height: 67px;
    border-radius: 24px;
    background-color: var(--cor-fundo);
    color: #FFFFFF;
    border: 2px solid var(--cor-azul);
    color: var(--cor-azul);
}

.botao_copiar:disabled {
    background-color: black;
    color: black;
}

.botao_copiar:not(:disabled):hover {
    background-color: var(--cor-cinzaClaro);
}

```


## Código JavaScript

A lógica do projeto foi implementada em JavaScript para manipular os textos inseridos pelo usuário, criptografando e descriptografando conforme as regras definidas. E adicionei uma função para copiar o texto resultante para a área de transferência para que fique como o  projeto no Figma.

### Função de criptografia

A função `criptografar` substitui as letras do texto conforme as regras especificadas:


```
function criptografar() {
    let texto = document.querySelector('.secao_de_controle_texto').value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    atualizarResultado(textoCriptografado);
    document.querySelector(".botao_copiar").removeAttribute("disabled");
}

```

### Função de descriptografia

A função `descriptografar` reverte o texto criptografado para o original:

```
function descriptografar() {
    let texto = document.querySelector('.secao_de_controle_texto').value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    atualizarResultado(textoDescriptografado);
    document.querySelector(".botao_copiar").removeAttribute("disabled");
}

```

### Atualização do resultado

A função `atualizarResultado` exibe o texto criptografado ou descriptografado na seção de resultado:


```
function atualizarResultado(mensagem) {
    let painelResultadoTexto = document.querySelector('.painel_resultado_texto');
    painelResultadoTexto.innerHTML = `<h2 class="painel_resultado_titulo">Resultado:</h2><p class="painel_resultado_paragrafo">${mensagem}</p>`;
}

```


### Função para copiar o texto

A função `copiarTexto` copia o texto resultante para a área de transferência:


```
function copiarTexto() {
    let painelResultadoParagrafo = document.querySelector('.painel_resultado_paragrafo');
    let textoParaCopiar = painelResultadoParagrafo.textContent;

    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        alert('Texto copiado para a área de transferência!');
    }, function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}

// Adiciona a funcionalidade de copiar o texto ao clicar no botão
document.querySelector('.botao_copiar').onclick = copiarTexto;

```


## Resultado Final

Após implementar todas as funcionalidades e estilizações, o projeto final ficou assim:

![1000](https://i.imgur.com/mRS1F5U.png)

Agora você pode criptografar e descriptografar suas mensagens de forma simples e prática com esta aplicação.

Espero que este guia tenha sido útil e que você tenha aprendido bastante com este projeto!