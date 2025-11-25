/**
 * HowTo data for Schema.org HowTo structured data
 * Language: Français
 *
 * Auto-generated from awesome-c2pa repository
 * Source: https://github.com/paulortiz199928/awesome-c2pa
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime: string;
  steps: HowToStep[];
}

export const quickStartHowTo: HowToData = {
  name: 'Comment vérifier le contenu C2PA',
  description: 'Apprenez à vérifier l&#39;authenticité et la provenance du contenu numérique à l&#39;aide des outils C2PA en seulement 5 minutes.',
  totalTime: 'PT5M',
  steps: [
    {,
      name: 'Visit Content Credentials Verify',,
      text: 'Open your web browser and navigate to https://contentcredentials.org/verify to access the official C2PA verification tool.',
      url: 'https://contentcredentials.org/verify',
    },
    {,
      name: 'Upload your media file',,
      text: 'Drag and drop your image, video, or document onto the verification page, or click to browse and select the file from your device.',
    },
    {,
      name: 'Review provenance information',,
      text: 'Examine the displayed information including creator identity, creation date, editing history, and signature validation status.',
    },
    {,
      name: 'Verify signature status',,
      text: 'Check that the signature shows as Valid with a green checkmark, confirming the content has not been tampered with since signing.',
    }
  ]
};
