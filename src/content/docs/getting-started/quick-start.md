---
title: Quick Start Guide
description: Get started with C2PA in 5 minutes
sidebar:
  order: 1
lastUpdated: 2025-11-24
---

Get up and running with C2PA in just 5 minutes. This guide will walk you through the basics of understanding and implementing C2PA.

## What You'll Learn

- What C2PA is and how it works
- How to verify content with C2PA
- Basic implementation steps

## Prerequisites

- Basic understanding of digital media
- Familiarity with command-line tools (optional)

## Step 1: Understanding C2PA

C2PA (Coalition for Content Provenance and Authenticity) is an open technical standard that provides a way to verify the authenticity and provenance of digital content.

### Key Concepts

- **Manifest**: A JSON structure containing provenance information
- **Assertions**: Claims about the content (creator, edits, AI generation)
- **Signature**: Cryptographic proof of authenticity

## Step 2: Verify Content

The easiest way to start with C2PA is by verifying existing content.

### Using the Official Web Tool

1. Visit [Content Credentials Verify](https://contentcredentials.org/verify)
2. Upload an image or drag & drop a file
3. View the content's provenance information

### Using Command Line

```bash
# Install the C2PA tool
npm install -g c2pa-node

# Verify a file
c2pa verify image.jpg
```

## Step 3: Create C2PA Content

To add C2PA data to your own content:

```javascript
const c2pa = require('c2pa-node');

// Create a manifest
const manifest = {
  claim_generator: 'my-app/1.0',
  assertions: [
    {
      label: 'c2pa.actions',
      data: {
        actions: [{
          action: 'c2pa.created'
        }]
      }
    }
  ]
};

// Sign and embed
await c2pa.sign('input.jpg', 'output.jpg', manifest);
```

## Next Steps

- Read the [FAQ](/getting-started/faq/) for common questions
- Explore the [Specifications](/specifications/)
- Check out [Tools & Libraries](/tools/official/)

## Resources

- [C2PA Official Website](https://c2pa.org/)
- [GitHub Repository](https://github.com/c2pa-org)
- [Community Discussions](https://github.com/paulortiz199928/awesome-c2pa/discussions)
