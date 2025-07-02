# React InScroll - Development Guide

## 🎉 Library React InScroll Berhasil Dibuat!

Library AOS (Animate On Scroll) versi React yang lengkap dengan TypeScript support telah berhasil dibuat. Berikut adalah ringkasan fitur dan cara penggunaannya:

## ✨ Fitur Lengkap

### 🎨 25+ Animasi Cantik
- **Fade**: fade-up, fade-down, fade-left, fade-right, fade-up-right, fade-up-left, fade-down-right, fade-down-left
- **Flip**: flip-up, flip-down, flip-left, flip-right  
- **Slide**: slide-up, slide-down, slide-left, slide-right
- **Zoom**: zoom-in, zoom-out, zoom-in-up, zoom-in-down, zoom-in-left, zoom-in-right, zoom-out-up, zoom-out-down, zoom-out-left, zoom-out-right

### 🛠️ Fitur Teknis
- ✅ TypeScript support penuh
- ✅ Intersection Observer API untuk performa optimal
- ✅ Global dan per-element configuration
- ✅ CSS animations yang smooth
- ✅ React hooks custom
- ✅ Provider pattern untuk konfigurasi global

## 📁 Struktur Library

```
src/lib/
├── index.ts                    # Main export file
├── types.ts                    # TypeScript definitions
├── styles/animations.css       # CSS animations
├── context/
│   └── InScrollContext.ts      # React Context
├── hooks/
│   ├── useInView.ts           # Intersection Observer hook
│   └── useInScrollConfig.ts   # Configuration hook
└── components/
    ├── InScrollProvider.tsx    # Global provider
    └── InScrollElement.tsx     # Animation component
```

## 🚀 Cara Penggunaan

### 1. Basic Usage
```tsx
import { InScrollProvider, InScrollElement } from './lib';
import './lib/styles/animations.css';

function App() {
  return (
    <InScrollProvider config={{ duration: 600, once: true }}>
      <InScrollElement animation="fade-up">
        <h1>Hello World!</h1>
      </InScrollElement>
    </InScrollProvider>
  );
}
```

### 2. Advanced Configuration
```tsx
<InScrollProvider config={{
  duration: 800,
  delay: 100,
  once: true,
  offset: 120,
  easing: 'ease-in-out'
}}>
  <InScrollElement 
    animation="slide-left" 
    delay={200}
    duration={1000}
    as="section"
  >
    <div>Custom configured element</div>
  </InScrollElement>
</InScrollProvider>
```

### 3. Staggered Animations
```tsx
<div>
  <InScrollElement animation="fade-up" delay={0}>
    <h1>First</h1>
  </InScrollElement>
  <InScrollElement animation="fade-up" delay={200}>
    <h2>Second</h2>
  </InScrollElement>
  <InScrollElement animation="fade-up" delay={400}>
    <h3>Third</h3>
  </InScrollElement>
</div>
```

## 🔧 Development Commands

```bash
# Run development server with demo
npm run dev

# Build library for production
npm run build:lib

# Build TypeScript declarations only
npm run build:types

# Build JavaScript bundle only  
npm run build:js

# Clean build artifacts
npm run clean

# Lint code
npm run lint
```

## 📦 Build Output

After running \`npm run build:lib\`, you'll get:

```
dist/
├── index.js                 # Main bundle
├── index.d.ts              # TypeScript declarations
├── styles/
│   ├── index.css           # Bundled CSS
│   └── animations.css      # Original CSS
├── components/             # Individual component files
├── hooks/                  # Individual hook files
├── context/               # Context files
└── types.d.ts             # Type definitions
```

## 🌐 Demo

Jalankan \`npm run dev\` dan buka http://localhost:5173 untuk melihat demo lengkap dengan berbagai animasi.

## 🎯 API Reference

### InScrollProvider Props
- \`config\`: Global configuration object
- \`children\`: React nodes

### InScrollElement Props  
- \`animation\`: Animation type (required)
- \`delay\`: Animation delay in ms
- \`duration\`: Animation duration in ms
- \`once\`: Animate only once
- \`mirror\`: Animate when scrolling past
- \`offset\`: Trigger offset in pixels
- \`as\`: HTML element type
- \`children\`: React nodes

### useInView Hook
```tsx
const { ref, inView, entry } = useInView({
  threshold: 0.1,
  triggerOnce: true
});
```

## 🎨 Customization

### Custom CSS
Anda bisa menambahkan animasi custom dengan menambahkan CSS:

```css
[data-inscroll='my-custom-animation'] {
  opacity: 0;
  transform: rotateY(90deg);
}

[data-inscroll='my-custom-animation'].inscroll-animate {
  opacity: 1;
  transform: rotateY(0deg);
}
```

### Custom Configuration
```tsx
const customConfig = {
  duration: 1200,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  once: false,
  mirror: true,
  offset: 200
};
```

## 🏆 Prestasi

✅ Library AOS versi React berhasil dibuat!  
✅ TypeScript support penuh  
✅ 25+ animasi cantik  
✅ Performance optimal dengan Intersection Observer  
✅ API yang mudah digunakan  
✅ Demo yang menakjubkan  
✅ Build system yang lengkap  

Library react-inscroll siap untuk dipublikasi ke NPM atau digunakan dalam proyek React Anda!
