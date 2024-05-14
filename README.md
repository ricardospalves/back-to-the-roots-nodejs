# 🐢🚀 Back to the roots: Node.js

Node.js do zero sem frameworks e sem dependências.

🇺🇸 This doc have been translated into [English](https://github.com/ricardospalves/back-to-the-roots-nodejs/blob/main/README_EN.md).

## Tabela de conteúdos

- [Sobre o Node.js](#sobre-o-nodejs)
  - [Introdução ao Node.js](#introdução-ao-nodejs)
  - [O que é o motor V8 do Google?](#o-que-é-o-motor-v8-do-google)
  - [O Modelo de Single Thread do Node.js](#o-modelo-de-single-thread-do-nodejs)
  - [I/O assíncrono não bloqueante](#io-assíncrono-não-bloqueante)
- [Preparando o ambiente](#preparando-o-ambiente)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Licença](#licença)

## Sobre o Node.js

Nesta seção, vamos explorar a fascinante jornada histórica do [Node.js](https://nodejs.org), desvendar
suas características marcantes e revelar algumas curiosidades intrigantes sobre
essa poderosa tecnologia.

### Introdução ao Node.js

Ao contrário do que muitos pensam (inclusive eu 😅), o Node.js não é uma
linguagem de programação, na verdade o Node.js é um ambiente de desenvolvimento
para JavaScript. Ele foi projetado sobre o motor V8 do Google, fornecendo um
espaço para a execução de código JavaScript no servidor.

### O que é o motor V8 do Google?

O motor V8 é um mecanismo desenvolvido pelo Google para interpretar e executar
código JavaScript. Inicialmente, ele foi utilizado no navegador Chrome. Em 2008,
o Google tornou o projeto Open Source como parte do projeto Chromium, permitindo
à comunidade entender melhor o funcionamento do motor. Foi a partir dessa
compreensão que o Node.js foi concebido.

### O Modelo de Single Thread do Node.js

O Single Thread refere-se ao fato de que o ambiente de tempo de execução do
Node.js opera em um único thread principal para manipular todas as operações de
entrada e saída (I/O), eventos e execução de código. Isso significa que, ao
contrário de muitos servidores tradicionais que usam múltiplos threads para
manipular várias solicitações concorrentes, o Node.js executa todas as operações
em uma única linha de execução.

Apesar da natureza Single Thread do Node.js, ele consegue delegar operações para
o sistema operacional ou para threads de pool de threads, permitindo que o
thread principal continue a lidar com outras solicitações, para isso é
importante entender o que é I/O assíncrono não bloqueante.

### I/O assíncrono não bloqueante

A eficiência do Node.js é impulsionada pelo seu modelo de I/O assíncrono não
bloqueante. Em sistemas tradicionais, operações de entrada e saída (I/O), como
leitura de arquivos ou consultas de banco de dados, frequentemente bloqueiam a
execução de código até que a operação seja concluída, o que pode levar à
subutilização do processador e tempos de resposta lentos.

No entanto, o Node.js adota uma abordagem diferente. Quando uma operação de I/O
é iniciada, em vez de esperar que ela seja concluída antes de continuar, o
Node.js delega essa tarefa ao sistema operacional e continua a executar outras
operações. Isso é possível graças à natureza assíncrona e não bloqueante das
operações de I/O no Node.js.

Vamos exemplificar com uma analogia:

Imagine uma cafeteria com apenas um atendente. Quando um cliente faz um pedido
de café, em vez de esperar que o café seja preparado antes de atender o próximo
cliente, o atendente anota o pedido, inicia a preparação do café e, enquanto
isso, atende outros clientes, aceitando mais pedidos ou entregando itens
prontos, como bolos ou sanduíches. Quando o café está pronto, o atendente o
entrega ao cliente.

Vamos ver esse conceito aplicado no código.

```js
import { readFile } from "node:fs";

console.log("Início do programa");

readFile("exemplo.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Erro ao ler o arquivo:", error);
    return;
  }

  console.log("Conteúdo do arquivo:", data);
});

console.log("Fim do programa");
```

Neste exemplo, o código inicia imprimindo "Início do programa" no console. Em
seguida, ele chama `readFile` para ler o conteúdo de um arquivo chamado
"exemplo.txt". Esta operação é não bloqueante, o que significa que o Node.js
continuará executando outras operações, como a impressão de "Fim do programa"
no console, enquanto aguarda a conclusão da leitura do arquivo. Quando a leitura
do arquivo é concluída, o callback é chamado e o conteúdo do arquivo é impresso
no console. Se ocorrer algum erro durante a leitura do arquivo, uma mensagem de
erro será impressa.

Essa abordagem permite que o Node.js mantenha a responsividade e a eficiência,
lidando com muitas operações de I/O simultaneamente sem ficar bloqueado,
tornando-o ideal para aplicações de alto desempenho e escalabilidade.

---

## Preparando o ambiente

### Pré-requisitos

Tenha certeza que tenha o Node.js instalado na sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

### Instalação

1. Clone este repositório para a sua máquina:

```bash
https://github.com/ricardospalves/back-to-the-roots-nodejs
```

2. Navegue para a pasta do repositório:

```bash
cd back-to-the-roots-nodejs
```

## Licença

Este projeto é software livre e de código aberto lançado sob a [Licença MIT](https://github.com/ricardospalves/back-to-the-roots-nodejs/blob/main/LICENSE).
