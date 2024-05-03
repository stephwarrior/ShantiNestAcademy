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
      nom: "Tapis SNA",
      prix: 20,
      id: 1,
      variantes: [
        { nom: "Tapis SNA (Bleu)", couleur: "#8090DF", img: tapisBleu, id: 1 },
        { nom: "Tapis SNA (Jaune)", couleur: "#F29E0E", img: tapisJaune, id: 2 },
      ],
      count: 0,
    },
    {
      nom: "Bouteille SNA",
      prix: 20,
      id: 2,
      variantes: [
        { nom: "Bouteille SNA (Vert)", couleur: "#648D38", prix: 10, img: bouteilleVerte, id: 3 },
        { nom: "Bouteille SNA (Bleu)", couleur: "#7272FF", prix: 15, img: bouteilleBleu, id: 4 },
        { nom: "Bouteille SNA (Jaune)", couleur: "#F29E0E", prix: 20, img: bouteilleJaune, id: 5 },
        { nom: "Bouteille SNA (Rose)", couleur: "#E24977", prix: 10, img: bouteilleRose, id: 6 },
      ],
      count: 0,
    },
    {
      nom: "Chandail SNA",
      prix: 20,
      id: 3,
      variantes: [
        { nom: "Chandail SNA (Noir)", couleur: "#000", prix: 25, img: chandailNoir, id: 8, count: 0 },
        { nom: "Chandail SNA (Rouge)", couleur: "#990000", prix: 25, img: chandailRouge, id: 9, count: 0 },
      ],
      count: 0,
    },
    { nom: "Tasse SNA", prix: 15, img: tasseSNA, id: 4, count: 0 },

    {
      nom: "Hoodie SNA",
      prix: 20,
      id: 5,
      variantes: [
        { nom: "Hoodie SNA (Noir)", couleur: "#000", prix: 25, img: hoodieNoir, id: 8, count: 0 },
        { nom: "Hoodie SNA (Mauve)", couleur: "#4D284F", prix: 25, img: hoodieMauve, id: 9, count: 0 },
      ],
      count: 0,
    },
    {
      nom: "Top SNA",
      prix: 20,
      id: 6,
      variantes: [
        { nom: "Top SNA (Rouge)", couleur: "#990000", prix: 15, img: topRouge, id: 12, count: 0 },
        { nom: "Top SNA (Vert)", couleur: "#009900", prix: 15, img: topVert, id: 13, count: 0 },
      ],
      count: 0,
    },
  ],
};
