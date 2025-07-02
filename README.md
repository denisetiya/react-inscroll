# 🚀 React InScroll

<div align="center">

<img src="./public/logo.png" alt="React InScroll Logo" width="200" height="200" />

**Beautiful scroll animations for modern React applications**

[![npm version](https://img.shields.io/npm/v/react-inscroll.svg?style=flat-square)](https://www.npmjs.com/package/react-inscroll)
[![npm downloads](https://img.shields.io/npm/dm/react-inscroll.svg?style=flat-square)](https://www.npmjs.com/package/react-inscroll)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[🚀 Live Demo](https://react-inscroll-demo.vercel.app) • [📖 Documentation](https://github.com/denisetiya/react-inscroll/wiki) • [💻 Examples](https://github.com/denisetiya/react-inscroll/wiki/Examples-and-Tutorials)

</div>

---

## ✨ Features

- 🎭 **25+ Animation Types** - Fade, Zoom, Flip, Slide, and more
- 🎯 **TypeScript Ready** - Full type safety out of the box
- ⚡ **Performance Optimized** - Uses Intersection Observer API
- 🎨 **Highly Customizable** - Control duration, delay, offset, and more
- 📱 **Responsive** - Works seamlessly on all devices
- 🔄 **Flexible Behavior** - One-time or repeating animations
- 🪶 **Lightweight** - Minimal bundle size impact
- 🎪 **Interactive Demo** - Click to replay animations

## 🎬 Preview

<div align="center">
  <img src="https://github.com/denisetiya/react-inscroll/raw/main/assets/demo-preview.gif" alt="React InScroll Demo" width="800" />
</div>

*Smooth, performant scroll animations that bring your React components to life*

> 🚀 **[View Live Demo](https://react-inscroll-demo.vercel.app)** | 📖 **[Full Documentation](https://github.com/denisetiya/react-inscroll/wiki)** | 🎯 **[Getting Started Guide](https://github.com/denisetiya/react-inscroll/wiki/Getting-Started)**

## 📦 Installation

```bash
# npm
npm install react-inscroll

# yarn
yarn add react-inscroll

# pnpm
pnpm add react-inscroll
```

## 🚀 Quick Start

### 1. Import and Setup

```tsx
import { InScrollProvider, InScrollElement } from 'react-inscroll';
import 'react-inscroll/styles/animations.css';

function App() {
  return (
    <InScrollProvider>
      <div>
        <InScrollElement animation="fade-up">
          <h1>Hello, World! 👋</h1>
        </InScrollElement>
        
        <InScrollElement animation="zoom-in" delay={200}>
          <p>This text will zoom in after 200ms delay</p>
        </InScrollElement>
      </div>
    </InScrollProvider>
  );
}
```

### 2. Global Configuration

```tsx
<InScrollProvider 
  config={{
    duration: 800,     // Animation duration in ms
    once: false,       // Animate every time element comes into view
    mirror: true,      // Reverse animation when element leaves view
    offset: 120,       // Trigger offset in pixels
    easing: 'ease'     // CSS easing function
  }}
>
  {/* Your app components */}
</InScrollProvider>
```

## 🎭 Animation Types

### Fade Animations
```tsx
<InScrollElement animation="fade-up">Content</InScrollElement>
<InScrollElement animation="fade-down">Content</InScrollElement>
<InScrollElement animation="fade-left">Content</InScrollElement>
<InScrollElement animation="fade-right">Content</InScrollElement>
<InScrollElement animation="fade-up-left">Content</InScrollElement>
<InScrollElement animation="fade-up-right">Content</InScrollElement>
<InScrollElement animation="fade-down-left">Content</InScrollElement>
<InScrollElement animation="fade-down-right">Content</InScrollElement>
```

### Zoom Animations
```tsx
<InScrollElement animation="zoom-in">Content</InScrollElement>
<InScrollElement animation="zoom-out">Content</InScrollElement>
<InScrollElement animation="zoom-in-up">Content</InScrollElement>
<InScrollElement animation="zoom-in-down">Content</InScrollElement>
<InScrollElement animation="zoom-in-left">Content</InScrollElement>
<InScrollElement animation="zoom-in-right">Content</InScrollElement>
<InScrollElement animation="zoom-out-up">Content</InScrollElement>
<InScrollElement animation="zoom-out-down">Content</InScrollElement>
<InScrollElement animation="zoom-out-left">Content</InScrollElement>
<InScrollElement animation="zoom-out-right">Content</InScrollElement>
```

### Flip Animations
```tsx
<InScrollElement animation="flip-up">Content</InScrollElement>
<InScrollElement animation="flip-down">Content</InScrollElement>
<InScrollElement animation="flip-left">Content</InScrollElement>
<InScrollElement animation="flip-right">Content</InScrollElement>
```

### Slide Animations
```tsx
<InScrollElement animation="slide-up">Content</InScrollElement>
<InScrollElement animation="slide-down">Content</InScrollElement>
<InScrollElement animation="slide-left">Content</InScrollElement>
<InScrollElement animation="slide-right">Content</InScrollElement>
```

### Special Animations
```tsx
<InScrollElement animation="bounce-in">Content</InScrollElement>
<InScrollElement animation="pulse">Content</InScrollElement>
<InScrollElement animation="shake">Content</InScrollElement>
<InScrollElement animation="flash">Content</InScrollElement>
<InScrollElement animation="float-up">Content</InScrollElement>
<InScrollElement animation="scale-up">Content</InScrollElement>
```

## 🎯 Advanced Usage

### Individual Element Configuration

```tsx
<InScrollElement 
  animation="fade-up"
  delay={300}
  duration={1000}
  once={true}
  mirror={false}
  offset={50}
  easing="ease-in-out"
  as="section"  // Custom HTML tag
  className="my-custom-class"
>
  <h2>Advanced Configuration</h2>
</InScrollElement>
```

### Clickable Animations (Interactive Demo)

```tsx
import { useClickableAnimation } from 'react-inscroll';

function ClickableCard() {
  const { animationKey, isAnimating, clickableProps } = useClickableAnimation();

  return (
    <div className="relative">
      <InScrollElement 
        key={animationKey}
        animation="zoom-in"
        {...clickableProps}
      >
        <div className="card">
          Click me to replay animation! 🎭
        </div>
      </InScrollElement>
      {!isAnimating && (
        <div className="replay-badge">
          Click to replay
        </div>
      )}
    </div>
  );
}
```

### Custom Hook for Scroll Detection

```tsx
import { useInView } from 'react-inscroll';

function MyComponent() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <div ref={ref}>
      {inView ? '👀 I am visible!' : '🫥 I am hidden!'}
    </div>
  );
}
```

### Global Configuration Hook

```tsx
import { useInScrollConfig } from 'react-inscroll';

function MyComponent() {
  const config = useInScrollConfig();
  
  // Access global configuration
  console.log(config.duration); // 800
  console.log(config.once);     // false
  
  return <div>Component with config access</div>;
}
```

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `animation` | `AnimationType` | `'fade-up'` | Type of animation to apply |
| `duration` | `number` | `600` | Animation duration in milliseconds |
| `delay` | `number` | `0` | Delay before animation starts (ms) |
| `once` | `boolean` | `true` | Whether animation should occur only once |
| `mirror` | `boolean` | `false` | Whether to reverse animation on scroll out |
| `offset` | `number` | `100` | Trigger offset in pixels from viewport |
| `easing` | `string` | `'ease'` | CSS easing function |
| `as` | `string` | `'div'` | HTML tag to render |
| `className` | `string` | `''` | Additional CSS classes |

## 🎨 Animation Behavior

### Once vs Mirror

```tsx
// Animation happens only once (default)
<InScrollElement animation="fade-up" once={true}>
  <div>Animates once when first visible</div>
</InScrollElement>

// Animation repeats when scrolling up/down
<InScrollElement animation="fade-up" once={false} mirror={true}>
  <div>Animates every time it enters/leaves viewport</div>
</InScrollElement>
```

### Custom CSS Variables

```css
:root {
  --inscroll-duration: 800ms;
  --inscroll-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --inscroll-distance: 60px;
  --inscroll-scale: 0.8;
  --inscroll-rotation: 180deg;
}
```

## 🎪 Interactive Features

React InScroll comes with built-in interactive features for demos and presentations:

```tsx
// Cards that can be clicked to replay animations
function InteractiveDemo() {
  return (
    <div className="demo-grid">
      <ClickableCard animation="fade-up" delay={100}>
        <DemoCard title="Fade Up" />
      </ClickableCard>
      
      <ClickableCard animation="zoom-in" delay={200}>
        <DemoCard title="Zoom In" />
      </ClickableCard>
      
      <ClickableCard animation="flip-left" delay={300}>
        <DemoCard title="Flip Left" />
      </ClickableCard>
    </div>
  );
}
```

## 🏗️ Architecture

React InScroll is built with performance and developer experience in mind:

- **Intersection Observer API** for efficient scroll detection
- **React Context** for global configuration management
- **TypeScript** for complete type safety
- **CSS Animations** for smooth 60fps performance
- **Tree Shaking** friendly for minimal bundle size
- **Zero Dependencies** (except React)

## 📱 Browser Support

- ✅ Chrome 58+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 79+
- ✅ iOS Safari 12.2+
- ✅ Android Chrome 88+

*For older browsers, a polyfill for Intersection Observer API may be required.*

## 🔧 Troubleshooting

### Common Issues

**Q: Animations not working?**
```tsx
// Make sure to import the CSS file
import 'react-inscroll/styles/animations.css';

// And wrap your app with InScrollProvider
<InScrollProvider>
  <App />
</InScrollProvider>
```

**Q: TypeScript errors?**
```tsx
// Make sure you're importing types correctly
import type { AnimationType } from 'react-inscroll';
```

**Q: Performance issues?**
```tsx
// Use 'once: true' for better performance on long pages
<InScrollProvider config={{ once: true }}>
  <App />
</InScrollProvider>
```

## 📊 Bundle Size

| Package | Size (gzipped) |
|---------|----------------|
| Core Library | ~3.2kb |
| CSS Animations | ~2.1kb |
| **Total** | **~5.3kb** |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/denisetiya/react-inscroll.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build library
npm run build

# Build demo for Vercel
npm run build:vercel
```

### Project Structure

```
react-inscroll/
├── src/
│   ├── lib/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── context/        # React context
│   │   ├── styles/         # CSS animations
│   │   └── types.ts        # TypeScript definitions
│   ├── App.tsx            # Demo application
│   └── main.tsx           # Entry point
├── dist/                  # Built library
└── docs/                  # Documentation
```

## 📜 Changelog

See [CHANGELOG.md](CHANGELOG.md) for details about changes in each version.

## 📄 License

MIT © [Deni Setiya](https://github.com/denisetiya)

---

<div align="center">

**Made with ❤️ for the React community**

[⭐ Star this repo](https://github.com/denisetiya/react-inscroll) • [🐛 Report Issues](https://github.com/denisetiya/react-inscroll/issues) • [💡 Request Features](https://github.com/denisetiya/react-inscroll/issues/new)

</div>
