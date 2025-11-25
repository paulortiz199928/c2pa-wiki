/**
 * English FAQ data for Schema.org FAQPage
 *
 * Source: src/content/docs/getting-started/faq.md
 * Selected: Top 10 high-value questions for SEO optimization
 *
 * Selection criteria:
 * - High search volume keywords
 * - Clear, concise answers (200-300 words)
 * - Covers diverse user intents (understanding, comparison, cost)
 *
 * Target keywords:
 * - "what is c2pa"
 * - "can c2pa be removed"
 * - "c2pa vs blockchain"
 * - "nikon c2pa"
 * - "c2pa cost"
 * - "c2pa ai detection"
 *
 * @see .internal/FAQ_SCHEMA_IMPLEMENTATION.md
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "What is the C2PA?",
    answer: "C2PA (Coalition for Content Provenance and Authenticity) is an open standard for verifying the origin and editing history of digital content through cryptographically signed metadata. It embeds tamper-evident provenance information into images, videos, audio, and documents. The coalition was formed in 2021 by merging Adobe's Content Authenticity Initiative and Microsoft/BBC's Project Origin."
  },
  {
    question: "How does C2PA work?",
    answer: "C2PA embeds a cryptographically signed 'manifest' into media files containing information about creation, edits, and authorship. The manifest is signed with a private key using the same technology as HTTPS certificates. When content is edited, the previous manifest becomes an 'ingredient' and a new manifest is created referencing the old one, preserving the chain of provenance. Any tampering breaks the signature, allowing anyone to verify authenticity and detect modifications."
  },
  {
    question: "What problems does C2PA solve?",
    answer: "C2PA addresses several critical challenges in digital media: misinformation by verifying that news photos and videos haven't been manipulated, AI content transparency by identifying AI-generated or AI-modified content, proving authenticity of real footage against deepfakes, enabling proper attribution to credit original creators, demonstrating copyright ownership and licensing, and restoring confidence in digital media. It provides a technical foundation for trust in the digital content ecosystem."
  },
  {
    question: "Is C2PA the same as watermarking?",
    answer: "No. C2PA and watermarks serve different purposes. C2PA uses invisible metadata with rich structured data and cryptographic signatures for tamper detection, while watermarks are usually visible marks containing limited information designed to resist removal. C2PA focuses on transparency when present - proving authenticity and provenance. Watermarks focus on persistence when attacked - marking ownership. C2PA is easy to remove but provides verifiable information when present, whereas watermarks are designed to survive attacks but carry minimal information."
  },
  {
    question: "Can C2PA be removed?",
    answer: "Yes, C2PA can be removed by stripping metadata, taking screenshots, or re-encoding files. This is by design, not a flaw. C2PA proves authenticity when present, not prevents removal. The absence of C2PA is itself informative, suggesting possible tampering. The goal is transparency, not DRM-style protection. Platforms can flag content without provenance, and as authentic content increasingly adopts C2PA, content without it becomes more suspicious. Think of it like a seal on a medicine bottle - easy to break, but you know if it's been opened."
  },
  {
    question: "Does C2PA use blockchain?",
    answer: "No. C2PA uses traditional PKI (Public Key Infrastructure) - the same proven technology as HTTPS and SSL certificates. It uses X.509 certificates and digital signatures, with no cryptocurrency, tokens, or transaction fees involved. Verification works offline without requiring an internet connection, and is much faster and simpler than blockchain implementations. Some organizations optionally add blockchain timestamping as a supplement, but it's not part of the core C2PA specification."
  },
  {
    question: "What file formats does C2PA support?",
    answer: "C2PA currently supports a wide range of formats: Images (JPEG, PNG, WebP, AVIF, HEIC/HEIF, TIFF, DNG, SVG, GIF), Video (MP4, MOV, AVI), Audio (WAV, MP3, M4A), and Documents (PDF). Additional formats like WebM are in active development. The specification is designed to be extensible, allowing support for new formats as they emerge."
  },
  {
    question: "What is Nikon C2PA?",
    answer: "Nikon is developing C2PA support for their professional cameras. The Z6 III is planned to receive C2PA firmware in 2025, enabling in-camera signing of photos with provenance metadata at the moment of capture. Features will include in-camera signing without post-processing, recording of camera model, serial number, settings, and GPS location, private key storage in secure hardware, and immediate authenticity verification. This is ideal for photojournalism, legal evidence, and professional photography where proving authenticity from capture is essential."
  },
  {
    question: "Can C2PA detect AI-generated images?",
    answer: "C2PA doesn't automatically detect AI content - it records what the creator declares. AI tools like DALL-E 3 and Adobe Firefly can add C2PA manifests explicitly stating content is 'AI-generated' with details about the AI model used. This relies on honest disclosure by the AI service and proves the content came from that service if properly signed. However, C2PA cannot detect undeclared AI content. It works best as part of a complementary approach with AI detection tools, not as a replacement for them."
  },
  {
    question: "How much does C2PA cost?",
    answer: "The C2PA specification itself is free and open with no license fees. Implementation costs vary: open-source SDKs are completely free, signing certificates from Certificate Authorities cost approximately $200-500 per year (S/MIME certificates $200-300, document signing certificates $300-500), optional Hardware Security Modules for key storage range from $500-$5000+, and development time varies by project scope. Free tools are available including c2patool command-line utility, all official SDKs, and web-based verification services."
  }
];
