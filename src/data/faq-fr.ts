/**
 * FAQ data for Schema.org FAQPage structured data
 * Language: Français
 *
 * Auto-generated from awesome-c2pa repository
 * Source: https://github.com/paulortiz199928/awesome-c2pa
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: 'Qu'est-ce que C2PA ?',
    answer: 'Réponse courte : C2PA est une norme ouverte pour vérifier l\'origine et l\'historique de modification du contenu numérique via des métadonnées signées cryptographiquement.
Détails : La Coalition for Content Provenance and Authenticity (C2PA) fournit une spécification technique pour intégrer des informations de provenance inviolables dans les images, vidéos, audio et documents. Elle a été formée en 2021 par la fusion de la Content Authenticity Initiative d\'Adobe et du Project Origin de Microsoft/BBC.'
  },
  {
    question: 'Comment ça fonctionne',
    answer: 'Réponse courte : C2PA intègre un « manifest » (manifeste) signé cryptographiquement dans les fichiers multimédias contenant des informations sur la création, les modifications et la paternité. Toute falsification brise la signature.
Flux technique :
1. Contenu créé → Manifest généré avec métadonnées
2. Manifest signé avec clé privée (comme les certificats HTTPS)
3. Manifest intégré dans le fichier
4. Contenu modifié → Le manifest précédent devient un « ingrédient »
5. Nouveau manifest créé référençant l\'ancien
6. Chaîne de provenance préservée
7. N\'importe qui peut vérifier la signature et détecter la falsification'
  },
  {
    question: 'Quels problèmes C2PA résout-il ?',
    answer: 'C2PA traite :
- Désinformation : Vérifier que les photos/vidéos d\'actualités n\'ont pas été manipulées
- Transparence du contenu IA : Identifier le contenu généré ou modifié par IA
- Deepfakes : Prouver l\'authenticité des images réelles
- Attribution : Créditer les créateurs originaux
- Droits d\'auteur : Démontrer la propriété et les licences
- Érosion de la confiance : Restaurer la confiance dans les médias numériques'
  },
  {
    question: 'C2PA est-il identique au tatouage numérique ?',
    answer: 'Non. Principales différences :

C2PA se concentre sur la transparence lorsqu\'il est présent, les tatouages sur la persistance lorsqu\'ils sont attaqués.'
  },
  {
    question: 'C2PA peut-il être supprimé ?',
    answer: 'Réponse courte : Oui, C2PA peut être supprimé en éliminant les métadonnées, en faisant des captures d\'écran ou en réencodant. C\'est par conception.
Pourquoi c\'est acceptable :
- C2PA prouve l\'authenticité lorsqu\'il est présent, n\'empêche pas la suppression
- L\'absence de C2PA est elle-même informative (falsification possible)
- L\'objectif est la transparence, pas la DRM
- Les plateformes peuvent signaler le contenu sans provenance
Analogie : Comme un sceau sur un flacon de médicament - facile à briser, mais vous savez s\'il a été ouvert.'
  },
  {
    question: 'C2PA utilise-t-il la blockchain ?',
    answer: 'Non. C2PA utilise la PKI traditionnelle (infrastructure à clé publique) - la même technologie que les certificats HTTPS/SSL.
Points clés :
- Utilise des certificats X.509 et des signatures numériques
- Pas de cryptomonnaie, jetons ou frais de transaction
- Fonctionne hors ligne (pas besoin d\'internet pour la vérification)
- Beaucoup plus rapide et plus simple que la blockchain
- Optionnel : Certaines implémentations ajoutent l\'horodatage blockchain en complément'
  },
  {
    question: 'Quels formats de fichiers C2PA prend-il en charge ?',
    answer: 'Actuellement pris en charge :
- Images : JPEG, PNG, WebP, AVIF, HEIC/HEIF, TIFF, DNG, SVG, GIF
- Vidéo : MP4, MOV, AVI
- Audio : WAV, MP3, M4A
- Documents : PDF
En développement : WebM, formats supplémentaires'
  },
  {
    question: 'Comment puis-je vérifier le contenu C2PA ?',
    answer: 'Méthode la plus simple :
- Visitez https://contentcredentials.org/verify
- Téléversez votre fichier
- Visualisez les informations de provenance
Ligne de commande :

Navigateur : Installez l\'extension Content Credentials (Chrome/Edge)
Par programmation : Utilisez les SDK C2PA (Rust, JS, Python, Go)'
  },
  {
    question: 'Comment ajouter C2PA à mon contenu ?',
    answer: 'Avec un logiciel :
- Adobe Photoshop/Lightroom (intégré)
- Appareils photo : Nikon Z9/Z8, Leica M11-P, série Sony Alpha
- Ligne de commande : c2patool (voir documentation)
Prérequis :
- Certificat d\'une autorité de certification de confiance (DigiCert, GlobalSign, etc.)
- Ou certificat auto-signé pour les tests
Voir : Guide de démarrage rapide pour des instructions pas à pas'
  },
  {
    question: 'Qu'est-ce que Nikon C2PA ?',
    answer: 'Réponse courte : Nikon développe la prise en charge C2PA pour ses appareils photo. Le Z6 III devrait recevoir le firmware C2PA en 2025, permettant la signature dans l\'appareil des photos avec des métadonnées de provenance.
Fonctionnalités (lorsque disponibles) :
- Signature dans l\'appareil (pas besoin de post-traitement)
- Enregistre le modèle d\'appareil, numéro de série, réglages, GPS
- Clé privée stockée dans un matériel sécurisé
- Vérifie l\'authenticité dès la capture
- Idéal pour le photojournalisme et les preuves légales
Note : En novembre 2025, les Z9 et Z8 ne prennent pas encore en charge C2PA malgré les annonces antérieures.'
  }
];
