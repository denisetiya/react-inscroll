# Welcome to React InScroll Wiki

<div align="center">
  <img src="https://github.com/denisetiya/react-inscroll/public/logo.png" alt="React InScroll Logo" width="150" height="150" />
  
  **Beautiful scroll animations for modern React applications**
</div>

---

## 🚀 Quick Navigation

| Section | Description |
|---------|-------------|
| [🎯 Getting Started](Getting-Started) | Installation and basic setup |
| [📖 API Reference](API-Reference) | Complete API documentation |
| [🎭 Animation Types](Animation-Types) | All available animations |
| [⚙️ Configuration Guide](Configuration-Guide) | Setup and configuration options |
| [💡 Examples & Tutorials](Examples-and-Tutorials) | Step-by-step guides and examples |
| [🔄 Migration Guide](Migration-Guide) | Migrating from other libraries |
| [🔧 Troubleshooting](Troubleshooting) | Common issues and solutions |
| [🤝 Contributing](Contributing) | How to contribute to the project |

---

## ✨ What is React InScroll?

React InScroll is a modern, performant scroll animation library for React applications. It provides 25+ animation types with TypeScript support and uses the Intersection Observer API for optimal performance.

### Key Features

- 🎭 **25+ Animation Types** - Fade, Zoom, Flip, Slide, and more
- 🎯 **TypeScript Ready** - Full type safety out of the box
- ⚡ **Performance Optimized** - Uses Intersection Observer API
- 🎨 **Highly Customizable** - Control duration, delay, offset, and more
- 📱 **Responsive** - Works seamlessly on all devices
- 🔄 **Flexible Behavior** - One-time or repeating animations
- 🪶 **Lightweight** - Minimal bundle size (~5.3kb gzipped)

---

## 🚀 Quick Start

```tsx
import { InScrollProvider, InScrollElement } from 'react-inscroll';
import 'react-inscroll/styles/animations.css';

function App() {
  return (
    <InScrollProvider>
      <InScrollElement animation="fade-up">
        <h1>Hello, World! 👋</h1>
      </InScrollElement>
    </InScrollProvider>
  );
}
```

---

## 📦 Installation

```bash
# npm
npm install react-inscroll

# yarn
yarn add react-inscroll

# pnpm
pnpm add react-inscroll
```

---

## 🔗 Useful Links

- [📱 Live Demo](https://react-inscroll-demo.vercel.app)
- [💻 GitHub Repository](https://github.com/denisetiya/react-inscroll)
- [📦 NPM Package](https://www.npmjs.com/package/react-inscroll)
- [🐛 Report Issues](https://github.com/denisetiya/react-inscroll/issues)

---

## 📚 Documentation Structure

This wiki is organized into several sections:

1. **Getting Started** - For newcomers to React InScroll
2. **API Reference** - Detailed technical documentation
3. **Animation Types** - Visual guide to all animations
4. **Configuration** - Advanced setup and customization
5. **Examples** - Practical tutorials and use cases
6. **Migration** - Moving from other animation libraries
7. **Troubleshooting** - Solutions to common problems
8. **Contributing** - How to help improve React InScroll

---

*Happy animating! 🎉*
