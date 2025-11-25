---
title: Official Tools & Libraries
description: Official C2PA tools and SDKs
sidebar:
  order: 1
lastUpdated: 2025-11-24
---

Official tools and SDKs maintained by the C2PA organization and Content Authenticity Initiative.

## SDKs & Libraries

### Rust

**[c2pa-rs](https://github.com/contentauth/c2pa-rs)** - Reference implementation
- Official Rust SDK for creating and validating C2PA manifests
- Most complete and up-to-date implementation
- Used as the basis for other language bindings

```bash
cargo add c2pa
```

### JavaScript/TypeScript

**[c2pa-node-v2](https://github.com/contentauth/c2pa-node-v2)** - Node.js bindings
- Official Node.js bindings for the C2PA Rust SDK
- Works in Node.js environments
- Full support for signing and verification

```bash
npm install c2pa-node
```

**[c2pa-js](https://github.com/contentauth/c2pa-js)** - Browser library
- JavaScript library for reading C2PA manifests in browsers
- Client-side verification
- Lightweight and fast

```bash
npm install c2pa
```

### Python

**[c2pa-python](https://github.com/contentauth/c2pa-python)** - Python bindings
- Official Python bindings for the C2PA Rust SDK
- Easy integration with Python projects

```bash
pip install c2pa-python
```

### Java

**[c2pa-java](https://github.com/contentauth/c2pa-java)** - Java bindings
- Java bindings for the C2PA SDK
- Integration with Java applications

### Other Languages

- **[c2pa-c](https://github.com/contentauth/c2pa-c)** - C and C++ bindings
- **[c2pa-ios](https://github.com/contentauth/c2pa-ios)** - iOS SDK

## Command Line Tools

### C2PA CLI

**[c2pa-rs/cli](https://github.com/contentauth/c2pa-rs/tree/main/cli)** - Official command-line tool

Features:
- Create, read, and validate C2PA content
- Cross-platform: Windows, macOS, Linux
- Supports images, videos, audio

Installation:
```bash
# Via cargo
cargo install c2pa-cli

# Via npm
npm install -g c2pa-cli
```

Usage examples:
```bash
# Read manifest
c2pa image.jpg

# Sign a file
c2pa sign input.jpg output.jpg --manifest manifest.json

# Verify
c2pa verify image.jpg
```

## Web Tools

### Content Credentials Verify

**[contentcredentials.org/verify](https://contentcredentials.org/verify)**
- Official web tool for verifying C2PA content
- Drag-and-drop interface
- No installation required

## Developer Resources

- [Official Documentation](https://opensource.contentauthenticity.org/docs)
- [Getting Started Guide](https://opensource.contentauthenticity.org/docs/getting-started)
- [API Reference](https://opensource.contentauthenticity.org/docs/api)
- [GitHub Organization](https://github.com/contentauth/)

## Next Steps

- Try the [Quick Start Guide](/getting-started/quick-start/)
- Read the [Specifications](/specifications/)
- Join the [Community](/community/contributing/)
