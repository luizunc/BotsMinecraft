const mineflayer = require('mineflayer');
//
// Configurações
//
const host = 'ip';                        // IP do servidor (ex: localhost)
const port = 25565;                      // Porta do servidor (25565) padrão do minecraft
const quantidade = 1000;               // Quantidade de bots (1000)
const nickBase = 'prefixbot';          // Prefixo do nick dos bots
const delay = 500;                    // 0.5 segundos entre cada bot (500)

  //
  // Mensagens enviadas pelos Bots
  //
const mensagens = [
  'Mensagem 1',
  'Mensagem 2',
  'Mensagem 3',
  'Mensagem 4',
  'Mensagem 5'
];

function gerarNick(base, i) {
  //
  // Adiciona um número e 3 letras aleatórias ao nick
  //
  const letras = Math.random().toString(36).substring(2, 5);
  return `${base}${i}${letras}`;
}

function movimentoAleatorio(bot) {
  //
  // Movimentos
  //
  const movimentos = ['forward', 'back', 'left', 'right'];
  const movimento = movimentos[Math.floor(Math.random() * movimentos.length)];
  const correr = Math.random() < 0.5; // 50% de chance de correr
  const pular = Math.random() < 0.3;  // 30% de chance de pular

  //
  // Iniciar movimento
  //
  bot.setControlState(movimento, true);
  if (correr) bot.setControlState('sprint', true);
  if (pular) bot.setControlState('jump', true);

  //
  // Parar movimento após um tempo aleatório
  //
  setTimeout(() => {
    bot.setControlState(movimento, false);
    if (correr) bot.setControlState('sprint', false);
    if (pular) bot.setControlState('jump', false);
  }, 1000 + Math.random() * 2000); // Move por 1-3 segundos

  //
  // Olhar para direções aleatórias (simula mouse do player)
  //
  const yaw = Math.random() * Math.PI * 2;
  const pitch = (Math.random() - 0.5) * Math.PI / 2;
  bot.look(yaw, pitch, true);
}

function mensagemAleatoria(bot) {
  const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
  bot.chat(msg);
}

function criarBot(i) {
  const username = gerarNick(nickBase, i);
  const bot = mineflayer.createBot({ host, port, username, version: '1.8.9' });

  bot.on('login', () => {
    console.log(`Bot ${username} entrou no servidor!`);
    // Movimentação e chat aleatório
    setInterval(() => movimentoAleatorio(bot), 4000 + Math.random() * 4000); // a cada 4-8s
    setInterval(() => mensagemAleatoria(bot), 6000 + Math.random() * 6000); // a cada 6-12s
  });

  bot.on('kicked', (reason) => {
    console.log(`Bot ${username} foi kickado! Motivo:`, reason);
  });

  bot.on('error', (err) => {
    console.log(`Erro no bot ${username}:`, err);
  });

  // Interação com o inventário ao abrir janela
  bot.on('windowOpen', async (window) => {
    try {
      console.log(`Bot ${username}: Janela aberta! Selecionando a opção 'Minecraft não é original' (lã vermelha, slot 15)...`);
      setTimeout(async () => {
        const slot15 = window.slots[15];
        if (slot15) {
          await bot.clickWindow(15, 0, 0);
          console.log(`Bot ${username}: Selecionou a opção 'Minecraft não é original'!`);
          setTimeout(() => {
            mensagemAleatoria(bot);
          }, 500);
        } else {
          console.log(`Bot ${username}: Slot 15 está vazio ou indefinido.`);
        }
      }, 500);
    } catch (e) {
      console.log(`Erro ao clicar no slot 15:`, e);
    }
  });
}
//
// Função para criar bots com delay
//
async function iniciarBots() {
  for (let i = 1; i <= quantidade; i++) {
    criarBot(i);
    await new Promise(res => setTimeout(res, delay));
  }
}

iniciarBots(); 

//FUTURAS MELHORIAS NO SISTEMA DE ANT-CAPTCHAS
