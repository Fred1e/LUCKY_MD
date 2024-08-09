const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"☔"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner or ғʀᴇᴅɪᴇ ᴛᴇᴄʜ");
  }

  const {exec}=require("child_process")

    repondre("LUCKY-MD V5 bot Restarting ⏳");

  exec("pm2 restart all");
  

  



})
