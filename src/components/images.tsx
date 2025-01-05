import AC from "../images/AC_modified.png";
import Ares from "../images/Ares_modified.png";
import Death from "../images/Death_modified.png";
import fairy from "../images/fairy_modified.png";
import femme from "../images/femme_modified.png";
import hunter from "../images/hunter_modified.png";
import ice from "../images/ice_modified.png";
import phenix from "../images/phenix_modified.png";
import SNK from "../images/SNK_modified.png";
import Dragon from "../images/dragon_modified.png";
import KingLion from "../images/KingLion_originale.jpg";
import loup from "../images/loup_originale.jpeg";
import template from "../images/template.jpeg";
import Animaux from "../images/Animaux.png";
import Areignee from "../images/Araignee.png";
import cerf from "../images/cerf.png";
import Corbeau from "../images/Corbeau.png";
import CraneSombre from "../images/CraneSombre.png";
import demon from "../images/demon.png";
import demon_netB from "../images/demon_netB.png";
import homme from "../images/homme.png";
import LoupColorer from "../images/LoupColorer.png";
import LoupSombre from "../images/LoupSombre.png";
import mainEtFil from "../images/mainEtFil.png";
import miroir from "../images/miroir.png";
import musique from "../images/musique.png";
import oeuil from "../images/oeuil.png";
import papillion from "../images/papillion.png";
import Perso from "../images/Perso.png";
import Scropion from "../images/Scorpion.png";
import Solo from "../images/Solo.png";
import vox_canina from "../images/vox_canina.png";

const images = [
  {
    name: "Vox Canina",
    src: vox_canina,
    alt: "Vox Canina",
    favorite: false,
    number: 2,
    themes: ["Logo", "Chien"],
  },
  {
    name: "Solo leveling",
    src: Solo,
    alt: "Solo leveling",
    favorite: true,
    number: 2,
    themes: ["Manga", "Anime"],
  },
  {
    name: "Scorpion",
    src: Scropion,
    alt: "Scorpion",
    favorite: true,
    number: 2,
    themes: ["Scorpion", "Insecte", "Animaux"],
  },
  {
    name: "Perso",
    src: Perso,
    alt: "Perso",
    favorite: true,
    number: 2,
    themes: ["Avatar"],
  },
  {
    name: "Papillion",
    src: papillion,
    alt: "Papillion",
    favorite: true,
    number: 2,
    themes: ["Papillion", "Insecte", "Animaux"],
  },
  {
    name: "Oeuil",
    src: oeuil,
    alt: "Oeuil",
    favorite: true,
    number: 2,
    themes: ["Oeuil", "Simple", "Tatouage"],
  },
  {
    name: "Musique",
    src: musique,
    alt: "Musique",
    favorite: true,
    number: 2,
    themes: ["Musique"],
  },
  {
    name: "Miroir",
    src: miroir,
    alt: "Miroir",
    favorite: true,
    number: 2,
    themes: ["Miroir"],
  },
  {
    name: "Main et Fil",
    src: mainEtFil,
    alt: "Main et Fil",
    favorite: true,
    number: 2,
    themes: ["Main", "Fil"],
  },
  {
    name: "Loup Colorer",
    src: LoupColorer,
    alt: "Loup Colorer",
    favorite: true,
    number: 2,
    themes: ["Simple", "Loup", "Animaux"],
  },
  {
    name: "Loup Sombre",
    src: LoupSombre,
    alt: "Loup Sombre",
    favorite: true,
    number: 2,
    themes: ["Simple", "Loup", "Animaux"],
  },
  {
    name: "Homme",
    src: homme,
    favorite: true,
    number: 2,
    themes: ["Humain"],
  },
  {
    name: "Demon",
    src: demon,
    alt: "Demon",
    favorite: true,
    number: 2,
    themes: ["Fantastique", "Demon"],
  },
  {
    name: "Demon",
    src: demon_netB,
    alt: "Demon",
    favorite: true,
    number: 2,
    themes: ["Fantastique", "Demon"],
  },
  {
    name: "Crane Sombre",
    src: CraneSombre,
    alt: "Crane Sombre",
    favorite: true,
    number: 2,
    themes: ["Crane", "Mort"],
  },
  {
    name: "Corbeau",
    src: Corbeau,
    alt: "Corbeau",
    favorite: true,
    number: 2,
    themes: ["Animaux", "Oiseau"],
  },
  {
    name: "Cerf",
    src: cerf,
    alt: "Cerf",
    favorite: true,
    number: 2,
    themes: ["Animaux", "Cerf"],
  },
  {
    name: "Araignée",
    src: Areignee,
    alt: "Araignée",
    favorite: true,
    number: 2,
    themes: ["Animaux", "Insecte"],
  },
  {
    name: "Animaux",
    src: Animaux,
    alt: "Animaux",
    favorite: true,
    number: 2,
    themes: ["Animaux"],
  },
  {
    name: "Template",
    src: template,
    alt: "Template",
    favorite: false,
    number: 1,
    themes: ["Template"],
  },
  {
    name: "Assasiation Classroom",
    src: AC,
    alt: "Assasiation Classroom",
    favorite: true,
    number: 2,
    themes: ["Manga", "Anime", "pancarte"],
  },
  {
    name: "Ares",
    src: Ares,
    alt: "Ares",
    favorite: true,
    number: 2,
    themes: ["Astrologie"],
  },
  {
    name: "Death Note",
    src: Death,
    alt: "Death Note",
    favorite: true,
    number: 2,
    themes: ["Manga", "Anime", "pancarte"],
  },
  {
    name: "Dragon Aquatique",
    src: Dragon,
    alt: "Dragon Aquatique",
    favorite: true,
    number: 2,
    themes: ["Dragon", "Fantastique"],
  },
  {
    name: "Fairy Tail",
    src: fairy,
    alt: "Fairy Tail",
    favorite: true,
    number: 2,
    themes: ["Manga", "Anime", "pancarte"],
  },
  {
    name: "Femme Juculaire",
    src: femme,
    alt: "Femme Juculaire",
    favorite: false,
    number: 1,
    sensible: true,
    themes: ["Femme", "Suicide"],
  },
  {
    name: "Hunter X Hunter",
    src: hunter,
    alt: "Hunter X Hunter",
    favorite: true,
    number: 2,
    themes: ["Manga", "Anime", "pancarte"],
  },
  {
    name: "Yuri on Ice",
    src: ice,
    alt: "Yuri on ice",
    favorite: true,
    number: 2,
    themes: ["Manga", "Anime", "pancarte"],
  },
  {
    name: "Le Roi Lion",
    src: KingLion,
    alt: "Le Roi Lion",
    favorite: true,
    number: 2,
    themes: ["Film", "Disney"],
  },
  {
    name: "Loup Tatoo",
    src: loup,
    alt: "Loup Tatoo",
    favorite: true,
    number: 2,
    themes: ["Simple", "Tatoo"],
  },
  {
    name: "phenix",
    src: phenix,
    alt: "phenix",
    favorite: true,
    number: 2,
    themes: ["Fantastique"],
  },
  {
    name: "L'attaque des titans",
    src: SNK,
    alt: "L'attaque des titans",
    favorite: true,
    number: 2,
    themes: ["Manga", "Anime", "pancarte"],
  },
];

export default images;
