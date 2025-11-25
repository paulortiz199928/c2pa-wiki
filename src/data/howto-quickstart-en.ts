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
      name: 'Visit https://contentcredentials.org/verify',
      text: '',
      url: 'https://contentcredentials.org/verify'
    },
    {
      name: 'Drag and drop any image/video/document',
      text: ''
    },
    {
      name: 'View provenance information:',
      text: '- Creator identity - Editing history - Signature status - Original content (if available)'
    }
  ]
};
