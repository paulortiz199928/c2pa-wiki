/**
 * HowTo data for Schema.org HowTo structured data
 * Language: English
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
  name: 'How to Verify C2PA Content',
  description: 'Learn how to verify the authenticity and provenance of digital content using C2PA tools in just 5 minutes.',
  totalTime: 'PT5M',
  steps: [
    {
      name: '**Visit the verification tool**: Open your web browser and navigate to https://contentcredentials.org/verify to access the official C2PA verification tool.',
      text: '',
      url: 'https://contentcredentials.org/verify'
    },
    {
      name: '**Upload your media file**: Drag and drop your image, video, or document onto the verification page, or click to browse and select the file from your device.',
      text: ''
    },
    {
      name: '**Review provenance information**: Examine the displayed information including:',
      text: '- Creator identity - Creation date - Editing history - Tools and software used'
    },
    {
      name: '**Verify signature status**: Check that the signature shows as "Valid" with a green checkmark, confirming the content has not been tampered with since signing.',
      text: ''
    }
  ]
};
