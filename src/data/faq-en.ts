/**
 * FAQ data for Schema.org FAQPage structured data
 * Language: English
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
    question: 'What is the C2PA?',
    answer: 'Short answer: C2PA is an open standard for verifying the origin and editing history of digital content through cryptographically signed metadata.
Details: The Coalition for Content Provenance and Authenticity (C2PA) provides a technical specification for embedding tamper-evident provenance information into images, videos, audio, and documents. It was formed in 2021 by merging Adobe\'s Content Authenticity Initiative and Microsoft/BBC\'s Project Origin.'
  },
  {
    question: 'How it works',
    answer: 'Short answer: C2PA embeds a cryptographically signed "manifest" into media files containing information about creation, edits, and authorship. Any tampering breaks the signature.
Technical flow:
1. Content created → Manifest generated with metadata
2. Manifest signed with private key (like HTTPS certificates)
3. Manifest embedded in file
4. Content edited → Previous manifest becomes "ingredient"
5. New manifest created referencing old one
6. Chain of provenance preserved
7. Anyone can verify signature and detect tampering'
  },
  {
    question: 'What problems does C2PA solve?',
    answer: 'C2PA addresses:
- Misinformation: Verify news photos/videos haven\'t been manipulated
- AI content transparency: Identify AI-generated or AI-modified content
- Deepfakes: Prove authenticity of real footage
- Attribution: Credit original creators
- Copyright: Demonstrate ownership and licensing
- Trust erosion: Restore confidence in digital media'
  },
  {
    question: 'Is C2PA the same as watermarking?',
    answer: 'No. Key differences:

C2PA focuses on transparency when present, watermarks on persistence when attacked.'
  },
  {
    question: 'Can C2PA be removed?',
    answer: 'Short answer: Yes, C2PA can be removed by stripping metadata, taking screenshots, or re-encoding. This is by design.
Why it\'s acceptable:
- C2PA proves authenticity when present, not prevents removal
- Absence of C2PA is itself informative (possible tampering)
- Goal is transparency, not DRM
- Platforms can flag content without provenance
Analogy: Like a seal on a medicine bottle - easy to break, but you know if it\'s been opened.'
  },
  {
    question: 'Does C2PA use blockchain?',
    answer: 'No. C2PA uses traditional PKI (Public Key Infrastructure) - the same technology as HTTPS/SSL certificates.
Key points:
- Uses X.509 certificates and digital signatures
- No cryptocurrency, tokens, or transaction fees
- Works offline (no internet needed for verification)
- Much faster and simpler than blockchain
- Optional: Some implementations add blockchain timestamping as supplement'
  },
  {
    question: 'What file formats does C2PA support?',
    answer: 'Currently supported:
- Images: JPEG, PNG, WebP, AVIF, HEIC/HEIF, TIFF, DNG, SVG, GIF
- Video: MP4, MOV, AVI
- Audio: WAV, MP3, M4A
- Documents: PDF
In development: WebM, additional formats'
  },
  {
    question: 'How do I verify C2PA content?',
    answer: 'Easiest method:
- Visit https://contentcredentials.org/verify
- Upload your file
- View provenance information
Command-line:

Browser: Install Content Credentials extension (Chrome/Edge)
Programmatically: Use C2PA SDKs (Rust, JS, Python, Go)'
  },
  {
    question: 'How do I add C2PA to my content?',
    answer: 'Using software:
- Adobe Photoshop/Lightroom (built-in)
- Cameras: Nikon Z9/Z8, Leica M11-P, Sony Alpha series
- Command-line: c2patool (see docs)
Requirements:
- Certificate from trusted CA (DigiCert, GlobalSign, etc.)
- Or self-signed cert for testing
See: Quick Start Guide for step-by-step instructions'
  },
  {
    question: 'What is Nikon C2PA?',
    answer: 'Short answer: Nikon is developing C2PA support for their cameras. The Z6 III is planned to receive C2PA firmware in 2025, enabling in-camera signing of photos with provenance metadata.
Features (when available):
- In-camera signing (no post-processing needed)
- Records camera model, serial number, settings, GPS
- Private key stored in secure hardware
- Verifies authenticity from moment of capture
- Ideal for photojournalism and legal evidence
Note: As of November 2025, Z9 and Z8 do not yet support C2PA despite earlier announcements.'
  }
];
