// images.js
export const tapisBleu = require("@/img/PageBoutique/tapisSNABleu.png");
export const tapisJaune = require("@/img/PageBoutique/tapisSNAJaune.png");
export const bouteilleBleu = require("@/img/PageBoutique/bouteilleSNABleu.png");
export const bouteilleRose = require("@/img/PageBoutique/bouteilleSNARose.png");
export const bouteilleVerte = require("@/img/PageBoutique/bouteilleSNAVert.png");
export const tasseSNA = require("@/img/PageBoutique/tasseSNA.png");
export const bouteilleJaune = require("@/img/PageBoutique/bouteilleSNAJaune.png");
export const chandailNoir = require("@/img/PageBoutique/chandailSNANoir.png");
export const chandailRouge = require("@/img/PageBoutique/chandailSNARouge.png");
export const hoodieNoir = require("@/img/PageBoutique/hoodieNoir.png");
export const hoodieMauve = require("@/img/PageBoutique/hoodieMauve.png");
export const topRouge = require("@/img/PageBoutique/topRougeFemme.png");
export const topVert = require("@/img/PageBoutique/topVertFemme.png");

export default {
  articles: [
    {
      nom: "Tapis SNA (Bleu)",
      prix: 20,
      img: tapisBleu,
      id: 1,
      count: 0,
    },
    { nom: "Tapis SNA (Jaune)", prix: 20, img: tapisJaune, id: 2, count: 0 },
    { nom: "Bouteille SNA (Vert)", prix: 10, img: bouteilleVerte, id: 3, count: 0 },
    { nom: "Bouteille SNA (Bleu)", prix: 15, img: bouteilleBleu, id: 4, count: 0 },
    { nom: "Bouteille SNA (Jaune)", prix: 20, img: bouteilleJaune, id: 5, count: 0 },
    { nom: "Bouteille SNA (Rose)", prix: 10, img: bouteilleRose, id: 6, count: 0 },
    { nom: "Tasse SNA", prix: 15, img: tasseSNA, id: 7, count: 0 },
    { nom: "Chandail SNA (Noir)", prix: 25, img: chandailNoir, id: 8, count: 0 },
    { nom: "Chandail SNA (Rouge)", prix: 25, img: chandailRouge, id: 9, count: 0 },
    { nom: "Hoodie SNA (Noir)", prix: 40, img: hoodieNoir, id: 10, count: 0 },
    { nom: "Hoodie SNA (Mauve)", prix: 40, img: hoodieMauve, id: 11, count: 0 },
    { nom: "Top SNA (Rouge)", prix: 15, img: topRouge, id: 12, count: 0 },
    { nom: "Top SNA (Vert)", prix: 15, img: topVert, id: 13, count: 0 },
  ],
};
