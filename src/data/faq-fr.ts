/**
 * Français FAQ Données (Version abrégée)
 *
 * Contient 5 questions les plus importantes, optimisé pour la recherche française
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "Qu'est-ce que C2PA ?",
    answer: "C2PA (Coalition for Content Provenance and Authenticity) est une norme ouverte pour vérifier l'origine et l'historique de modification du contenu numérique via des métadonnées signées cryptographiquement. Elle a été formée en 2021 par la fusion de la Content Authenticity Initiative d'Adobe et du Project Origin de Microsoft/BBC. C2PA fournit une spécification technique pour intégrer des informations de provenance inviolables dans les images, vidéos, audio et documents."
  },
  {
    question: "Comment ça fonctionne ?",
    answer: "C2PA intègre un 'manifest' (manifeste) signé cryptographiquement dans les fichiers multimédias contenant des informations sur la création, les modifications et la paternité. Toute falsification brise la signature. Flux technique : 1) Contenu créé → Manifest généré avec métadonnées ; 2) Manifest signé avec clé privée (comme les certificats HTTPS) ; 3) Manifest intégré dans le fichier ; 4) Contenu modifié → Le manifest précédent devient un 'ingrédient' ; 5) Nouveau manifest créé référençant l'ancien ; 6) Chaîne de provenance préservée ; 7) N'importe qui peut vérifier la signature et détecter la falsification."
  },
  {
    question: "C2PA peut-il être supprimé ?",
    answer: "Oui, C2PA peut être supprimé en supprimant les métadonnées, en prenant des captures d'écran ou en réencodant. C'est intentionnel. C2PA prouve l'authenticité lorsqu'il est présent, mais n'empêche pas la suppression. L'absence de C2PA est elle-même une information (falsification possible). L'objectif est la transparence, pas le DRM. Les plateformes peuvent signaler le contenu sans provenance."
  },
  {
    question: "C2PA utilise-t-il la blockchain ?",
    answer: "Non. C2PA utilise une PKI traditionnelle (Infrastructure à Clés Publiques) - la même technologie que les certificats HTTPS/SSL. Points clés : Utilise des certificats X.509 et des signatures numériques ; Pas de crypto-monnaie, de jetons ou de frais de transaction ; Fonctionne hors ligne (la vérification ne nécessite pas Internet) ; Beaucoup plus rapide et simple que la blockchain ; Optionnel : Certaines implémentations ajoutent des horodatages blockchain en complément."
  },
  {
    question: "Combien coûte C2PA ?",
    answer: "Spécification : Gratuite et ouverte (pas de frais de licence). Coûts de mise en œuvre : SDK open source gratuits ; Certificats CA environ 200-500 $/an (certificats S/MIME 200-300 $/an, certificats de signature de documents 300-500 $/an) ; HSM pour le stockage des clés 500-5000+ $ (optionnel) ; Temps de développement variable selon les situations. Outils gratuits : c2patool, SDK, vérification web - tout gratuit."
  }
];
