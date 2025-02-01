


const {ezra} = require('../fredi/ezra');
var gis = require('g-i-s');


ezra({
  nomCom: "img",
  categorie: "luckymd-search",
  reaction: "📷"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('which image ? !');
    return;
  }

  const searchTerm = arg.join(" ");
  //repondre("termes " +searchTerm);
  gis(searchTerm,envoiImage);

  function envoiImage(e,r)
   {
        if(e){repondre("uuhh error to dowload your photo ")}else{for(var a=0;a<5;a++){zk.sendMessage(dest,{image:{url:r[a].url}},{quoted:ms});}}
    
   }

 //gis(searchTerm,envoiImage);
      
});
