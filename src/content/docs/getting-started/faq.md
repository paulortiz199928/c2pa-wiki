---
title: Frequently Asked Questions
description: Common questions about C2PA answered
sidebar:
  order: 2
lastUpdated: 2025-11-24
---

Find answers to the most common questions about C2PA.

## General Questions

### What is C2PA?

C2PA (Coalition for Content Provenance and Authenticity) is an open technical standard that provides publishers, creators, and consumers the ability to trace the origin of different types of media.

### How does C2PA work?

C2PA adds cryptographically signed metadata ("manifests") to media files. These manifests contain information about:
- Who created the content
- When it was created
- What tools were used
- What edits were made
- Whether AI was involved

Any tampering with the content breaks the cryptographic signature, making modifications detectable.

### Is C2PA blockchain-based?

No. C2PA uses standard PKI (Public Key Infrastructure), similar to HTTPS certificates. It does not require or use blockchain technology.

## Security & Privacy

### Can C2PA be removed?

Yes, by design. C2PA metadata can be stripped from files. However, C2PA's goal is to prove authenticity **when present**, rather than preventing removal.

Think of it like a watermark - it proves authenticity when intact, but can be removed.

### Does C2PA track users?

No. C2PA is about content provenance, not user tracking. The standard includes privacy protections:
- No automatic geolocation
- Selective disclosure of information
- Creator control over what's included

## Technical Questions

### What file formats are supported?

C2PA currently supports:
- **Images**: JPEG, PNG, WebP, AVIF
- **Video**: MP4, MOV, WebM
- **Audio**: MP3, WAV, AAC
- **Documents**: PDF (in development)

### Can C2PA detect AI-generated images?

Not automatically. C2PA records what creators **declare**. If an AI tool adds "AI-generated" to the manifest, then yes. But C2PA itself doesn't detect AI - it relies on honest disclosure.

### Which cameras and software support C2PA?

**Cameras**:
- Leica (M11-P, SL3)
- Sony (Alpha 1, A9 III, A7S III, A7 IV)
- Nikon (Z6 III - coming 2025)

**Software**:
- Adobe Photoshop & Lightroom
- Capture One
- Open-source tools (c2pa-rs, c2pa-node)

## Adoption & Cost

### Is C2PA free to use?

The **standard and tools are free**. However:
- **Certificates**: Required for signing (~$50-500/year)
- **Implementation**: Development costs vary
- **Open-source tools**: Free

### Who is using C2PA?

**Major Adopters**:
- Adobe, Microsoft, Google
- BBC, New York Times, Reuters
- Leica, Nikon, Sony, Canon
- OpenAI, Meta (AI content labeling)

## Implementation

### How do I get started?

1. Read our [Quick Start Guide](/c2pa-wiki/getting-started/quick-start/)
2. Try the [online verifier](https://contentcredentials.org/verify)
3. Install the [c2pa-node](https://github.com/contentauth/c2pa-node-v2) SDK
4. Get a signing certificate

### Where can I get help?

- [C2PA Official Forums](https://c2pa.org/)
- [GitHub Discussions](https://github.com/paulortiz199928/awesome-c2pa/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/c2pa) (tag: c2pa)

## More Questions?

Can't find your answer?

- Check the [full documentation](/c2pa-wiki/specifications/)
- Ask in [GitHub Discussions](https://github.com/paulortiz199928/awesome-c2pa/discussions)
- Read the [official specifications](https://c2pa.org/specifications/)
