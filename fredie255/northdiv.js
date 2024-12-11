// Tableau des utilisateurs avec leurs informations et requêtes SQL
const players = [
  // north Division 

  // ainz 
  { 
    id: "22651463203@s.whatsapp.net", 
    nom: "Ainz",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM northdiv WHERE id = 8", 
    get_nc: "SELECT e6 FROM northdiv WHERE id = 8", 
    get_coupons: "SELECT e8 FROM northdiv WHERE id = 8", 
    get_golds: "SELECT e5 FROM northdiv WHERE id = 8",
    upd_np: "UPDATE northdiv SET e9 = $1 WHERE id = 8", 
    upd_nc: "UPDATE northdiv SET e6 = $1 WHERE id = 8", 
    upd_coupons: "UPDATE northdiv SET e8 = $1 WHERE id = 8", 
    upd_golds: "UPDATE northdiv SET e5 = $1 WHERE id = 8"
  }, 
  //Aizen
  { 
    id: "221774255562@s.whatsapp.net", 
    nom: "Aizen",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM northdiv WHERE id = 11", 
    get_nc: "SELECT e6 FROM northdiv WHERE id = 11", 
    get_coupons: "SELECT e8 FROM northdiv WHERE id = 11", 
    get_golds: "SELECT e5 FROM northdiv WHERE id = 11",
    upd_np: "UPDATE northdiv SET e9 = $1 WHERE id = 11", 
    upd_nc: "UPDATE northdiv SET e6 = $1 WHERE id = 11", 
    upd_coupons: "UPDATE northdiv SET e8 = $1 WHERE id = 11", 
    upd_golds: "UPDATE northdiv SET e5 = $1 WHERE id = 11"
  }, 

  //Central Division 

  // Hakuji
  { 
    id: "237671923647@s.whatsapp.net", 
    nom: "Hakuji",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM centraldiv WHERE id = 5", 
    get_nc: "SELECT e6 FROM centraldiv WHERE id = 5", 
    get_coupons: "SELECT e8 FROM centraldiv WHERE id = 5", 
    get_golds: "SELECT e5 FROM  centraldiv WHERE id = 5",
    upd_np: "UPDATE centraldiv SET e9 = $1 WHERE id = 5", 
    upd_nc: "UPDATE centraldiv SET e6 = $1 WHERE id = 5", 
    upd_coupons: "UPDATE centraldiv SET e8 = $1 WHERE id = 5", 
    upd_golds: "UPDATE centraldiv SET e5 = $1 WHERE id = 5"
  }, 
//Irito

  { 
    id: "237656431187@s.whatsapp.net", 
    nom: "Irito",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM centraldiv WHERE id = 4", 
    get_nc: "SELECT e6 FROM centraldiv WHERE id = 4", 
    get_coupons: "SELECT e8 FROM centraldiv WHERE id = 4", 
    get_golds: "SELECT e5 FROM  centraldiv WHERE id = 4",
    upd_np: "UPDATE centraldiv SET e9 = $1 WHERE id = 4", 
    upd_nc: "UPDATE centraldiv SET e6 = $1 WHERE id = 4", 
    upd_coupons: "UPDATE centraldiv SET e8 = $1 WHERE id = 4", 
    upd_golds: "UPDATE centraldiv SET e5 = $1 WHERE id = 4"
  },
  //rudeus
  { 
    id: "242064379833@s.whatsapp.net", 
    nom: "Rudeus",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM centraldiv WHERE id = 10", 
    get_nc: "SELECT e6 FROM centraldiv WHERE id = 10", 
    get_coupons: "SELECT e8 FROM centraldiv WHERE id = 10", 
    get_golds: "SELECT e5 FROM  centraldiv WHERE id = 10",
    upd_np: "UPDATE centraldiv SET e9 = $1 WHERE id = 10", 
    upd_nc: "UPDATE centraldiv SET e6 = $1 WHERE id = 10", 
    upd_coupons: "UPDATE centraldiv SET e8 = $1 WHERE id = 10", 
    upd_golds: "UPDATE centraldiv SET e5 = $1 WHERE id = 10"
  },/*
  { 
    id: "", 
    nom: "",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM centraldiv WHERE id = ", 
    get_nc: "SELECT e6 FROM centraldiv WHERE id = ", 
    get_coupons: "SELECT e8 FROM centraldiv WHERE id = ", 
    get_golds: "SELECT e5 FROM  centraldiv WHERE id = ",
    upd_np: "UPDATE centraldiv SET e9 = $1 WHERE id = ", 
    upd_nc: "UPDATE centraldiv SET e6 = $1 WHERE id = ", 
    upd_coupons: "UPDATE centraldiv SET e8 = $1 WHERE id = ", 
    upd_golds: "UPDATE centraldiv SET e5 = $1 WHERE id = "
  },
  { 
    id: "", 
    nom: "",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM centraldiv WHERE id = ", 
    get_nc: "SELECT e6 FROM centraldiv WHERE id = ", 
    get_coupons: "SELECT e8 FROM centraldiv WHERE id = ", 
    get_golds: "SELECT e5 FROM  centraldiv WHERE id = ",
    upd_np: "UPDATE centraldiv SET e9 = $1 WHERE id = ", 
    upd_nc: "UPDATE centraldiv SET e6 = $1 WHERE id = ", 
    upd_coupons: "UPDATE centraldiv SET e8 = $1 WHERE id = ", 
    upd_golds: "UPDATE centraldiv SET e5 = $1 WHERE id = "
  },
 { 
    id: "", 
    nom: "",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM centraldiv WHERE id = ", 
    get_nc: "SELECT e6 FROM centraldiv WHERE id = ", 
    get_coupons: "SELECT e8 FROM centraldiv WHERE id = ", 
    get_golds: "SELECT e5 FROM  centraldiv WHERE id = ",
    upd_np: "UPDATE centraldiv SET e9 = $1 WHERE id = ", 
    upd_nc: "UPDATE centraldiv SET e6 = $1 WHERE id = ", 
    upd_coupons: "UPDATE centraldiv SET e8 = $1 WHERE id = ", 
    upd_golds: "UPDATE centraldiv SET e5 = $1 WHERE id = "
  }, */

  // West Division

  // regulus
  { 
    id: "243970490637@s.whatsapp.net", 
    nom: "regulus",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = 11", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = 11", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = 11", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = 11",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = 11", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = 11", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = 11", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = 11"
}, 

//Hajime
{ 
    id: "237678054208@s.whatsapp.net", 
    nom: "Hajime",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = 10", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = 10", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = 10", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = 10",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = 10", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = 10", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = 10", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = 10"
},
//William
{ 
    id: "", 
    nom: "Willian",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = 9", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = 9", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = 9", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = 9",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = 9", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = 9", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = 9", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = 9"
}, 
//Tempest

{ 
    id: "", 
    nom: "Tempest",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = 8", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = 8", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = 8", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = 8",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = 8", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = 8", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = 8", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = 8"
},

  //Sept
{ 
    id: "224662340162@s.whatsapp.net", 
    nom: "sept",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = 7", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = 7", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = 7", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = 7",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = 7", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = 7", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = 7", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = 7"
},
  //SoloMoe
{ 
    id: "221705825600@s.whatsapp.net", 
    nom: "SoloMoe",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = 6", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = 6", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = 6", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = 6",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = 6", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = 6", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = 6", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = 6"
}, 
  //Aether
{ 
    id: "24160264024@s.whatsapp.net", 
    nom: "Aether",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = 4", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = 4", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = 4", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = 4",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = 4", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = 4", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = 4", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = 4"
}, 
//Nash

{ 
    id: "237650821851@s.whatsapp.net", 
    nom: "Nash",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = 2", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = 2", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = 2", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = 2",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = 2", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = 2", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = 2", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = 2"
}, 
//vanitas

{ 
    id: "221763699741@s.whatsapp.net", 
    nom: "Vanitas",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = 1", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = 1", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = 1", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = 1",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = 1", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = 1", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = 1", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = 1"
} 


 /* { 
    id: "", 
    nom: "",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM westdiv WHERE id = ", 
    get_nc: "SELECT e6 FROM westdiv WHERE id = ", 
    get_coupons: "SELECT e8 FROM westdiv WHERE id = ", 
    get_golds: "SELECT e5 FROM westdiv WHERE id = ",
    upd_np: "UPDATE westdiv SET e9 = $1 WHERE id = ", 
    upd_nc: "UPDATE westdiv SET e6 = $1 WHERE id = ", 
    upd_coupons: "UPDATE westdiv SET e8 = $1 WHERE id = ", 
    upd_golds: "UPDATE westdiv SET e5 = $1 WHERE id = "
 }*/

// East Division

 /* { 
    id: "", 
    nom: "",
    cln_np: 'e9',
    cln_nc: "e6",
    cln_coupons: "e8", 
    cln_golds: "e5",
    get_np: "SELECT e9 FROM eastdiv WHERE id = ", 
    get_nc: "SELECT e6 FROM eastdiv WHERE id = ", 
    get_coupons: "SELECT e8 FROM eastdiv WHERE id = ", 
    get_golds: "SELECT e5 FROM eastdiv WHERE id = ",
    upd_np: "UPDATE eastdiv SET e9 = $1 WHERE id = ", 
    upd_nc: "UPDATE eastdiv SET e6 = $1 WHERE id = ", 
    upd_coupons: "UPDATE eastdiv SET e8 = $1 WHERE id = ", 
    upd_golds: "UPDATE eastdiv SET e5 = $1 WHERE id = "
  }, */
  
];

module.exports = players;
