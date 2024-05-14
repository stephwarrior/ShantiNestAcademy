// images.js
export const tapisBleu = require("@/img/PageBoutique/tapisSNABleu.png");
export const tapisJaune = require("@/img/PageBoutique/tapisSNAJaune.png");
export const bouteilleBleu = require("@/img/PageBoutique/bouteilleSNABleu.png");
export const bouteilleRose = require("@/img/PageBoutique/bouteilleSNARose.png");
export const bouteilleVerte = require("@/img/PageBoutique/bouteilleSNAVert.png");
export const tasseSNA = require("@/img/PageBoutique/tasseSNA.png");
export const bouteilleJaune = require("@/img/PageBoutique/bouteilleSNAJaune.png");
export const chandailNoir = require("@/img/PageBoutique/chandailSNARouge.png");
export const chandailRouge = require("@/img/PageBoutique/chandailSNARouge.png");
export const hoodieNoir = require("@/img/PageBoutique/hoodieNoir.png");
export const hoodieMauve = require("@/img/PageBoutique/hoodieMauve.png");
export const topRouge = require("@/img/PageBoutique/topRougeFemme.png");
export const topVert = require("@/img/PageBoutique/topVertFemme.png");

export default {
  articles: [
    {
      nom: "Tapis SNA (Bleu)", // Nom de la variante par défaut
      prix: 20,
      img: tapisBleu, // Image de la variante par défaut
      varianteActuelle: 1, // ID de la variante par défaut
      count: 0,
      variantes: [
        { nom: "Tapis SNA (Bleu)", couleur: "#8090DF", prix: 20, img: tapisBleu, id: 1 },
        { nom: "Tapis SNA (Jaune)", couleur: "#F29E0E", prix: 20, img: tapisJaune, id: 2 },
      ],
    },
    {
      nom: "Bouteille SNA (Vert)",
      img: bouteilleVerte,
      prix: 15,
      varianteActuelle: 3,
      count: 0,
      variantes: [
        { nom: "Bouteille SNA (Vert)", couleur: "#648D38", prix: 15, img: bouteilleVerte, id: 3 },
        { nom: "Bouteille SNA (Bleu)", couleur: "#7272FF", prix: 20, img: bouteilleBleu, id: 4 },
        { nom: "Bouteille SNA (Jaune)", couleur: "#F29E0E", prix: 10, img: bouteilleJaune, id: 5 },
        { nom: "Bouteille SNA (Rose)", couleur: "#E24977", prix: 20, img: bouteilleRose, id: 6 },
      ],
    },
    {
      nom: "Chandail SNA (Noir)",
      img: chandailNoir,
      prix: 20,
      varianteActuelle: 8,
      count: 0,
      variantes: [
        { nom: "Chandail SNA (Noir)", couleur: "#000", prix: 20, img: chandailNoir, id: 8, count: 0 },
        { nom: "Chandail SNA (Rouge)", couleur: "#990000", prix: 25, img: chandailRouge, id: 9, count: 0 },
      ],
    },
    { nom: "Tasse SNA", prix: 15, img: tasseSNA, id: 4, count: 0 },

    {
      nom: "Hoodie SNA (Noir)",
      img: hoodieNoir,
      prix: 40,
      varianteActuelle: 10,
      count: 0,
      variantes: [
        { nom: "Hoodie SNA (Noir)", couleur: "#000", prix: 40, img: hoodieNoir, id: 10, count: 0 },
        { nom: "Hoodie SNA (Mauve)", couleur: "#4D284F", prix: 35, img: hoodieMauve, id: 11, count: 0 },
      ],
    },
    {
      nom: "Top SNA (Rouge)",
      img: topRouge,
      prix: 15,
      varianteActuelle: 12,
      count: 0,
      variantes: [
        { nom: "Top SNA (Rouge)", couleur: "#990000", prix: 15, img: topRouge, id: 12, count: 0 },
        { nom: "Top SNA (Vert)", couleur: "#009900", prix: 15, img: topVert, id: 13, count: 0 },
      ],
    },
  ],
};
