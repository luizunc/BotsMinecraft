# Bot Minecraft - Auto Captcha

Este projeto é um script Node.js que utiliza a biblioteca `mineflayer` para criar e conectar múltiplos bots a um servidor de Minecraft. Os bots são projetados para passar automaticamente por verificações de captcha e simular a atividade de jogadores.

## Funcionalidades

- **Conexão em Massa:** Conecta uma quantidade configurável de bots a um servidor de Minecraft
- **Auto Captcha:** Passa automaticamente por verificações de captcha clicando na opção correta
- **Nomes Aleatórios:** Gera nicks únicos para cada bot com base em um prefixo e sufixos aleatórios
- **Movimentação Autônoma:** Cada bot realiza movimentos aleatórios (andar, correr, pular) e olha em direções diferentes
- **Chat Automático:** Envia mensagens predefinidas no chat do servidor em intervalos de tempo
- **Configuração Fácil:** Todas as principais variáveis podem ser facilmente alteradas no início do arquivo `bot.js`

## Pré-requisitos

Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina. A instalação do Node.js já inclui o `npm` (Node Package Manager).

## Instalação

1. Clone este repositório ou baixe os arquivos
2. Navegue até o diretório do projeto no seu terminal
3. Execute o comando abaixo para instalar as dependências necessárias:

```bash
npm install
```

## Configuração

Abra o arquivo `bot.js` em um editor de texto. Você pode configurar o comportamento dos bots alterando as seguintes constantes no início do arquivo:

### Configurações do Servidor
- `host`: O endereço IP do servidor Minecraft
- `port`: A porta do servidor (o padrão é `25565`)

### Configurações dos Bots
- `quantidade`: O número total de bots que você deseja conectar
- `nickBase`: O prefixo usado para gerar os nicks dos bots
- `delay`: O intervalo de tempo (em milissegundos) entre a conexão de cada bot

### Mensagens
- `mensagens`: Um array de strings com as mensagens que os bots enviarão no chat

### Exemplo de Configuração
```javascript
const host = 'meuservidor.com';
const port = 25565;
const quantidade = 100;
const nickBase = 'meubot';
const delay = 1000;
const mensagens = [
  'Olá!',
  'Como vai?',
  'Bom dia!'
];
```

## Como Usar

Após a instalação e configuração, execute o seguinte comando no terminal para iniciar os bots:

```bash
node bot.js
```

O script começará a conectar os bots um por um, de acordo com o `delay` configurado. Você verá os logs no console para cada bot que:

- Entrar no servidor
- Passar pelo captcha automaticamente
- Enviar mensagens no chat
- For kickado ou encontrar um erro

## Funcionalidades Avançadas

### Auto Captcha
O bot detecta automaticamente quando uma janela de captcha é aberta e clica na opção correta (configurada para slot 15 - lã vermelha, representando "Minecraft não é original").

### Movimentação Inteligente
Cada bot realiza movimentos aleatórios para simular comportamento humano:
- Movimentos: frente, trás, esquerda, direita
- 50% de chance de correr
- 30% de chance de pular
- Olhar em direções aleatórias

### Sistema de Mensagens
Os bots enviam mensagens aleatórias do array configurado em intervalos de 6-12 segundos.

## ⚠️ Aviso

Este script foi criado para fins educacionais e de teste. O uso deste bot para sobrecarregar ou atacar servidores de Minecraft é uma violação dos termos de serviço da maioria dos servidores e pode resultar em seu banimento permanente. Use com responsabilidade e apenas em servidores onde você tem permissão para usar bots.

## Solução de Problemas

### Erro de Conexão
- Verifique se o IP e porta do servidor estão corretos
- Certifique-se de que o servidor aceita conexões vanilla (sem mods/Forge)

### Bot não passa pelo captcha
- Verifique se o slot configurado (15) contém a opção correta
- Ajuste o delay se necessário para dar tempo do inventário carregar

### Erro de memória
- Reduza a quantidade de bots se seu computador não conseguir processar muitos simultaneamente

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT. 
