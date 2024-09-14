const {
  zokou
} = require("./../framework/zokou");
const {
  format,
  runtime
} = require('../framework/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const {
  performance
} = require('perf_hooks');
const conf = require('../set');

zokou(
  {
    nomCom: 'ping',
    categorie: 'General',
    reaction: '🚀',
    alias: ['p']
  },

  async (dest, zk, commandOptions) => {
    const {
      ms, arg, repondre
    } = commandOptions;
    const start = new Date().getTime();
    const msg = await zk.sendMessage(dest, {
      text: '*Testing Ping!!!*',
    }, {
      quoted: ms
    });
    const end = new Date().getTime();
    const ping = end - start;
    await zk.sendMessage(dest, {
      text: `*Pong*
 *${ping} ms*`, edit: {
        id: msg.key.id, remoteJid: dest
      }});
    await zk.sendMessage(dest, {
      react: {
        text: "⚙️", key: ms.key
      }})
  }
)

zokou(
  {
    nomCom: 'desc',
    reaction: 'ℹ',
    alias: ['i']
  },

  async (dest, zk, commandOptions) => {
    const {
      ms, arg, repondre
    } = commandOptions;
    // data
    const tumbUrl = 'https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg';
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
      return cpu
    });
    const cpu = cpus.reduce((last, cpu, _, {
      length
    }) => {
      last.total += cpu.total
      last.speed += cpu.speed / length
      last.times.user += cpu.times.user
      last.times.nice += cpu.times.nice
      last.times.sys += cpu.times.sys
      last.times.idle += cpu.times.idle
      last.times.irq += cpu.times.irq
      return last
    }, {
      speed: 0,
      total: 0,
      times: {
        user: 0,
        nice: 0,
        sys: 0,
        idle: 0,
        irq: 0
      }
    });
    let timestamp = speed();
    let latensi = speed() - timestamp;
    let neww = performance.now();
    let oldd = performance.now();
    const response = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
    RAM: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}

_NodeJS Memory Usaage_
    ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
    ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
    ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}`: ''}
    `.trim();
    await zk.sendMessage(dest, {
      text: response,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: `${conf.BOT}`,
          body: `${latensi.toFixed(4)} Second`,
          thumbnailUrl: `${tumbUrl}`,
          sourceUrl: global.link,
          mediaType: 1,
          renderLargerAbhinail: true
        }
      }
    }, {
      quoted: ms
    })
  }
);

zokou(
  {
    nomCom: 'runtime',
    reaction: '🚨',
    alias: ['uptime']
  },
  async (dest, zk, commandOptions) => {
    const {
      ms
    } = commandOptions;
    const tumbUrl = 'https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg';
    const runtimetext = `🚨 *Bot Have Been Running For ${runtime(process.uptime())}* 🚨`;
    zk.sendMessage(dest, {
      text: runtimetext,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: `${conf.BOT}`,
          body: `「 RUNTIME 」`,
          thumbnailUrl: tumbUrl,
          sourceUrl: global.link,
          mediaType: 1,
          renderLargerAbhinail: true
        }
      }
    }, {
      quoted: ms
    })
  }
);
    
