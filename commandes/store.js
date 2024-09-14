const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format, styletext } = require(__dirname + "/../framework/mesfonctions");
//const {police}=require(__dirname+"/../framework/mesfonctions")
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({ nomCom: "cpu", categorie: "deploy" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre } = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    if (s.MODE_PUBLIC != "oui") {
        mode = "private";
    }
    var emoji = { "Général": "", "Logo": "", "hentai": "", "weeb": "", "Recherche": "", "conversion": "", "groupe": "","Téléchargement":"" };
    cm.map(async (com, index) => { if (!coms[com.categorie])
        coms[com.categorie] = []; coms[com.categorie].push(com.nomCom); });
    const temps = moment(moment()).format("HH:MM:SS");
    moment.tz.setDefault('asia/karachi ').locale("id");
    const date = moment.tz("asia/karachi").format("DD/MM/YYYY");
    console.log("date" + date);
    console.log("temps " + temps);
    let menuMsg = " *𝐿𝑈𝐶𝛫𝑌 𝛭𝐷*\n\n";
    /*menuMsg+=`
    
    
    
    Owner : ${s.NOM_OWNER} \n       || Commandes : ${cm.length} \n        || Date : ${date}\n || Heure : ${temps} \n || Mémoire : ${format(os.totalmem()-os.freemem())}/${format(os.totalmem())}\n || Plateforme : ${os.platform()}\n || Developpeur : Djalega++ \n\n ╰────────────────`;
    
    
    
    
      
    ╚═════ ▓▓ ࿇ ▓▓ ═════╝*/
    /* menuMsg+=`
   ╔════ ▓▓ ࿇ ▓▓ ════╗
   
   ||
   ||     Préfixe : ${s.prefixe}
   ||      Owner : ${s.NOM_OWNER}
   ||      Commandes : ${cm.length}
   ||      Date : ${date}
   ||      Heure : ${temps}
   ||      Mémoire : ${format(os.totalmem()-os.freemem())}/${format(os.totalmem())}                   {Plateforme : ${os.platform()}
   ||  Développeurs : Djalega++||Luffy
   ||
   ╚════ ▓▓ ࿇ ▓▓ ════╝`;*/
    menuMsg += `
𝙷𝙴𝙻𝙻𝙾𝚆 : ${ms.pushName}
Response Speed 0.0093 _Second_ 
 0.007519999518990517 _miliseconds_

Runtime : 1 hour, 34 minutes, 55 seconds

ðŸ’» Info Server
RAM: 117.3 GB / 125.72 GB

_NodeJS Memory Usaage_
rss         : 165.25 MB
heapTotal   : 62.66 MB
heapUsed    : 49.72 MB
external    : 33.21 MB
arrayBuffers: 29.87 MB

_Total CPU Usage_
AMD Ryzen 5 3600 6-Core Processor (3961.333333333333 MHZ)
- *user* : 65.92%
- *nice* : 0.00%
- *sys*  : 20.61%
- *idle* : 13.47%
- *irq*  : 0.00%
_CPU Core(s) Usage (12 Core CPU)_
1. AMD Ryzen 5 3600 6-Core Processor (3949 MHZ)
- *user* : 66.87%
- *nice* : 0.00%
- *sys*  : 20.18%
- *idle* : 12.94%
- *irq*  : 0.00%

2. AMD Ryzen 5 3600 6-Core Processor (3949 MHZ)
- *user* : 67.82%
- *nice* : 0.00%
- *sys*  : 12.61%
- *idle* : 19.57%
- *irq*  : 0.00%

3. AMD Ryzen 5 3600 6-Core Processor (3949 MHZ)
- *user* : 66.77%
- *nice* : 0.00%
- *sys*  : 20.29%
- *idle* : 12.95%
- *irq*  : 0.00%

4. AMD Ryzen 5 3600 6-Core Processor (3949 MHZ)
- *user* : 65.12%
- *nice* : 0.00%
- *sys*  : 21.69%
- *idle* : 13.19%
- *irq*  : 0.00%

5. AMD Ryzen 5 3600 6-Core Processor (3949 MHZ)
- *user* : 64.55%
- *nice* : 0.00%
- *sys*  : 22.22%
- *idle* : 13.23%
- *irq*  : 0.00%

6. AMD Ryzen 5 3600 6-Core Processor (3949 MHZ)
- *user* : 64.58%
- *nice* : 0.00%
- *sys*  : 22.23%
- *idle* : 13.18%
- *irq*  : 0.00%

7. AMD Ryzen 5 3600 6-Core Processor (3974 MHZ)
- *user* : 66.02%
- *nice* : 0.00%
- *sys*  : 20.93%
- *idle* : 13.05%
- *irq*  : 0.00%

8. AMD Ryzen 5 3600 6-Core Processor (3974 MHZ)
- *user* : 71.50%
- *nice* : 0.00%
- *sys*  : 15.27%
- *idle* : 13.23%
- *irq*  : 0.00%

9. AMD Ryzen 5 3600 6-Core Processor (3974 MHZ)
- *user* : 65.79%
- *nice* : 0.00%
- *sys*  : 21.12%
- *idle* : 13.09%
- *irq*  : 0.00%

10. AMD Ryzen 5 3600 6-Core Processor (3974 MHZ)
- *user* : 64.58%
- *nice* : 0.00%
- *sys*  : 22.01%
- *idle* : 13.40%
- *irq*  : 0.00%

11. AMD Ryzen 5 3600 6-Core Processor (3973 MHZ)
- *user* : 64.22%
- *nice* : 0.00%
- *sys*  : 22.44%
- *idle* : 13.34%
- *irq*  : 0.00%

12. AMD Ryzen 5 3600 6-Core Processor (3973 MHZ)
- *user* : 64.18%
- *nice* : 0.00%
- *sys*  : 22.45%
- *idle* : 13.38%
- *irq*  : 0.00%
𝙽𝚘𝚝𝚎 : 𝚋𝚘𝚝 𝚊𝚛𝚎𝚗'𝚝 𝚏𝚘𝚛 𝚏𝚛𝚎𝚎
𝚔𝚎𝚎𝚙 𝚞𝚜𝚒𝚗𝚐 Lucky 𝚖𝚍\n\n`;
    for (const cat in coms) {
        if (!emoji[cat]) {
            emoji[cat] = "";
        }
        menuMsg += ``;
        for (const cmd of coms[cat]) {
            menuMsg += "";
        }
    }
    var link = "https://telegra.ph/file/892c055ce22115dcc0efb.jpg";
    try {
        zk.sendMessage(dest, { image: { url: link }, caption: menuMsg, footer: "©TKM INC" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
});
/*


module.exports.commande =()=>
  {
    var nomCom=["list2","m","fonctions"];
    var reaction="🐞"
    var categorie="général"


    return {nomCom,reaction,categorie,execute}
  
  // };*

  

 //var g=[];






  

  

  




var tt=[]

 async  function execute(dest,zok,commandeOptions?)
  {

    var link = "https://wallpapercave.com/uwp/uwp3860299.jpeg"
    // var listCom =listeCommande()
    let msg= "  ╩═══ * Ƶ𝓞ｋØ𝓊 * ╩═══\n\n"


//const listeCommande= async ()=> {
  var tab=[];var tabCmd=[];
    const tabCat= {};
  const readDir = util.promisify(fs.readdir);
  const readFile = util.promisify(fs.readFile);
  //console.log("ch " + __dirname + '../')
  var chemin= './commandes/'
  var nomFichier = await readDir(__dirname)
//console.log("installation des plugins ... ")
  nomFichier.forEach((fichier) => {
    if (fichier.endsWith(".js")) {
      //console.log(fichier+" installé ✅")
      // var { commande } = require(/**/ //'../'+chemin.replace(/./, '')+*/__dirname+'/'+fichier.split('.js')[0])
//  var infoCom = commande()
//  if(!infoCom.categorie) infoCom.categorie="général"
// tabCat[infoCom.categorie].push(infoCom.nomCom[0])
//  tabCmd[infoCom.nomCom[0]]
/*  for(a of infoCom.categorie)
     {
       if(!msg.includes(a))
       {
       msg+=a+"\n"
       msg+=infoCom.nomCom[0]+"\n"
       }else{msg+=infoCom.nomCom[0]+"\n"}
       
     }*/
//msg+=infoCom.categorie+infoCom.nomCom[0]
//msg+=`🪰 ${infoCom.nomCom[0]} `+"\n"
// tu = infoCom.nomCom[1]
/*  for(var b=0;b<=infoCom.nomCom[0].length;b++)
     {
       msg+=infoCom.nomCom[b]
     }*/
/** ************************** */
// for (var a of infoCom.nomCom[0])      {
// console.log("aaaa "+a +" "+typeof a)
//  tu.push(a)
// msg+=a.normalize()+"\n"
// msg+=infoCom.nomCom[0]
// msg+=infoCom.nomCom[0]
// msg+=infoCom.nomCom[0]
//   tu[a]=infoCom.nomCom[0]
//  tt.push(infoCom.nomCom[a])
//tabCmd[a] = infoCom.execute
// reaction[a]=infoCom.reaction
// }
/** ********************************************* */
//    }
//console.log("installation de plugins terminé 👍🏿")
// return tab
// })
// console.log("fichier "+typeof nomFichier)
//var txt="";
/* for(var ctg in tabCat)
   {
     txt+=ctg;
     txt+=tabCat.nomCom
   }*/
//}
//var coms={}
/* tabCmd.map
   (async (cmds)=>
     {
       if(!coms[cmds.categerie])
 coms[cmds.categorie]="général"
 coms[cmds.categorie].push(cmds)
       
     }
   
   
   
)*/
/* for(let a=0;a<=listeCommande.length;a++)
   {
     msg +=tt[a]
   }*/
/*
   for(const categorie in tabCat)
      {
        msg+="*"+categorie+"*"+"\n"
      
    for(const comm of tabCat[categorie])
      {
        msg+=+'\n'+comm
      }}

    await zok.sendMessage(dest,{image :{url:link},caption:msg+txt});

    */
//   
// }
