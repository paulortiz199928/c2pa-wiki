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
    {,
      name: 'View provenance information:',,
      text: '- Creator identity - Editing history - Signature status - Original content (if available) Try it now with sample images from: https://contentauthenticity.org/examples For automatic verification while browsing:',
      url: 'https://contentcredentials.org/verify',
    },
    {,
      name: 'Install [Content Credentials Extension](https://chrome.google.com/webstore)',,
      text: '- Available for Chrome, Edge, Brave',
    },
    {,
      name: 'Click icon to view provenance details',,
      text: 'For developers and power users:   ` File: photo.jpg Status: ✓ Valid C2PA signature Creator: John Doe (john@example.com) Created: 2025-11-21T10:30:00',
    }
  ]
};
