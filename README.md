# Bot Spammer para Minecraft

Este projeto é um script Node.js que utiliza a biblioteca `mineflayer` para criar e conectar múltiplos bots a um servidor de Minecraft. Os bots são projetados para simular a atividade de jogadores, realizando movimentos aleatórios e enviando mensagens de chat em intervalos regulares.

## Funcionalidades

- **Conexão em Massa:** Conecta uma quantidade configurável de bots a um servidor de Minecraft.
- **Nomes Aleatórios:** Gera nicks únicos para cada bot com base em um prefixo e sufixos aleatórios.
- **Movimentação Autônoma:** Cada bot realiza movimentos aleatórios (andar, correr, pular) e olha em direções diferentes para simular um comportamento mais humano.
- **Chat Automático:** Envia mensagens predefinidas no chat do servidor em intervalos de tempo.
- **Configuração Fácil:** Todas as principais variáveis, como endereço do servidor, quantidade de bots e mensagens, podem ser facilmente alteradas no início do arquivo `bot.js`.

## Pré-requisitos

Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina. A instalação do Node.js já inclui o `npm` (Node Package Manager).

## Instalação

1.  Clone este repositório ou baixe os arquivos.
2.  Navegue até o diretório do projeto no seu terminal.
3.  Execute o comando abaixo para instalar as dependências necessárias (neste caso, o `mineflayer`):

```bash
npm install
```

## Configuração

Abra o arquivo `bot.js` em um editor de texto. Você pode configurar o comportamento dos bots alterando as seguintes constantes no início do arquivo:

- `host`: O endereço IP do servidor Minecraft.
- `port`: A porta do servidor (o padrão é `25565`).
- `quantidade`: O número total de bots que você deseja conectar.
- `nickBase`: O prefixo usado para gerar os nicks dos bots.
- `delay`: O intervalo de tempo (em milissegundos) entre a conexão de cada bot.
- `mensagens`: Um array de strings com as mensagens que os bots enviarão no chat.

## Como Usar

Após a instalação e configuração, execute o seguinte comando no terminal para iniciar os bots:

```bash
node bot.js
```

O script começará a conectar os bots um por um, de acordo com o `delay` configurado. Você verá os logs no console para cada bot que entrar no servidor, for kickado ou encontrar um erro.

## ⚠️ Aviso

Este script foi criado para fins educacionais e de teste. O uso deste bot para sobrecarregar ou atacar servidores de Minecraft é uma violação dos termos de serviço da maioria dos servidores e pode resultar em seu banimento permanente. Use com responsabilidade. 