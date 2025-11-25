/**
 * English HowTo data for Quick Start Guide
 *
 * Source: src/content/docs/getting-started/quick-start.md
 * Focus: "How to verify C2PA content" - highest search intent
 *
 * Target keywords:
 * - "how to verify c2pa"
 * - "how to use c2pa"
 * - "c2pa verification guide"
 * - "check c2pa content"
 *
 * @see .internal/SEO_STRATEGY.md
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
  image?: string;
}

export const quickStartHowTo: HowToData = {
  name: "How to Verify C2PA Content",
  description: "Learn how to verify the authenticity and provenance of digital content using C2PA (Coalition for Content Provenance and Authenticity) tools. This guide covers three methods: online tool, browser extension, and command-line verification.",
  totalTime: "PT5M", // 5 minutes
  steps: [
    {
      name: "Visit the Content Credentials Verify Tool",
      text: "Open your web browser and navigate to https://contentcredentials.org/verify. This is Adobe's official free tool for verifying C2PA content, requiring no installation or account creation.",
      url: "https://contentcredentials.org/verify"
    },
    {
      name: "Upload Your Content File",
      text: "Drag and drop any image, video, or document onto the verification page. Supported formats include JPEG, PNG, MP4, MOV, PDF, and many others. The file is analyzed locally in your browser for privacy.",
      url: "https://c2pa.wiki/getting-started/quick-start/#method-1-online-tool-easiest"
    },
    {
      name: "Review Provenance Information",
      text: "Examine the displayed provenance data including creator identity, editing history, timestamps, tools used, and signature validation status. A green checkmark indicates the content has not been tampered with since signing.",
      url: "https://c2pa.wiki/getting-started/quick-start/#verifying-c2pa-content"
    },
    {
      name: "Check the Signature Status",
      text: "Verify that the signature shows as 'Valid'. If the signature is broken or shows warnings, the content may have been modified after signing or the signing certificate may have issues. Valid signatures confirm the content's integrity.",
      url: "https://c2pa.wiki/getting-started/faq/#5-can-c2pa-be-removed"
    },
    {
      name: "Explore the Editing History (Optional)",
      text: "If the content has been edited, review the complete provenance chain showing all modifications. Each edit creates a new manifest that references the previous version as an 'ingredient', creating a traceable history from original to current state.",
      url: "https://c2pa.wiki/getting-started/faq/#2-how-it-works"
    }
  ]
};
