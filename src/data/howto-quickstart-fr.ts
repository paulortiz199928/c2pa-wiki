/**
 * Français HowTo Données - Guide de démarrage rapide
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
}

export const quickStartHowTo: HowToData = {
  name: "Comment vérifier le contenu C2PA",
  description: "Apprenez à vérifier l'authenticité et l'origine du contenu numérique à l'aide des outils C2PA. Ce guide couvre trois méthodes : les outils en ligne, les extensions de navigateur et la vérification en ligne de commande.",
  totalTime: "PT5M",
  steps: [
    {
      name: "Accéder à l'outil de vérification Content Credentials",
      text: "Ouvrez un navigateur Web et visitez https://contentcredentials.org/verify. Il s'agit de l'outil gratuit officiel d'Adobe pour vérifier le contenu C2PA, sans installation ni création de compte requise.",
      url: "https://contentcredentials.org/verify"
    },
    {
      name: "Téléchargez votre fichier de contenu",
      text: "Glissez-déposez n'importe quelle image, vidéo ou document sur la page de vérification. Les formats pris en charge incluent JPEG, PNG, MP4, MOV, PDF et plus encore. Le fichier est analysé localement dans le navigateur pour protéger la confidentialité.",
      url: "https://c2pa.wiki/fr/getting-started/quick-start/"
    },
    {
      name: "Examiner les informations de provenance",
      text: "Examinez les données de provenance affichées, y compris l'identité du créateur, l'historique des modifications, l'horodatage, les outils utilisés et l'état de vérification de la signature. Une coche verte indique que le contenu n'a pas été falsifié depuis la signature.",
      url: "https://c2pa.wiki/fr/getting-started/quick-start/"
    },
    {
      name: "Vérifier l'état de la signature",
      text: "Vérifiez que la signature s'affiche comme 'Valide'. Si la signature est corrompue ou affiche des avertissements, le contenu peut avoir été modifié après la signature, ou il peut y avoir un problème avec le certificat de signature. Une signature valide confirme l'intégrité du contenu.",
      url: "https://c2pa.wiki/fr/getting-started/faq/"
    }
  ]
};
