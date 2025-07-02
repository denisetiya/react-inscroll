# Getting Started with React InScroll

Welcome to React InScroll! This guide will help you get up and running with beautiful scroll animations in your React application.

## 📦 Installation

Choose your preferred package manager:

### NPM
```bash
npm install react-inscroll
```

### Yarn
```bash
yarn add react-inscroll
```

### PNPM
```bash
pnpm add react-inscroll
```

## 🎯 Basic Setup

### Step 1: Import Required Components

```tsx
import { InScrollProvider, InScrollElement } from 'react-inscroll';
import 'react-inscroll/styles/animations.css';
```

### Step 2: Wrap Your App with Provider

```tsx
function App() {
  return (
    <InScrollProvider>
      {/* Your app content */}
    </InScrollProvider>
  );
}
```

### Step 3: Add Your First Animation

```tsx
function App() {
  return (
    <InScrollProvider>
      <div>
        <h1>Welcome to my website</h1>
        
        <InScrollElement animation="fade-up">
          <p>This paragraph will fade up when it comes into view!</p>
        </InScrollElement>
        
        <InScrollElement animation="zoom-in" delay={200}>
          <div className="card">
            This card will zoom in with a 200ms delay
          </div>
        </InScrollElement>
      </div>
    </InScrollProvider>
  );
}
```

## ⚙️ Basic Configuration

### Global Configuration

You can set global defaults for all animations:

```tsx
<InScrollProvider 
  config={{
    duration: 800,     // Animation duration in milliseconds
    once: false,       // Animate every time element comes into view
    mirror: true,      // Reverse animation when element leaves view
    offset: 120,       // Trigger offset in pixels from viewport
    easing: 'ease'     // CSS easing function
  }}
>
  {/* Your app */}
</InScrollProvider>
```

### Per-Element Configuration

Override global settings for specific elements:

```tsx
<InScrollElement 
  animation="fade-up"
  duration={1000}
  delay={300}
  once={true}
  offset={50}
>
  <div>Custom configured element</div>
</InScrollElement>
```

## 🎭 Common Animation Types

Here are some popular animations to get you started:

### Fade Animations
```tsx
<InScrollElement animation="fade-up">Fade from bottom</InScrollElement>
<InScrollElement animation="fade-down">Fade from top</InScrollElement>
<InScrollElement animation="fade-left">Fade from right</InScrollElement>
<InScrollElement animation="fade-right">Fade from left</InScrollElement>
```

### Zoom Animations
```tsx
<InScrollElement animation="zoom-in">Scale up</InScrollElement>
<InScrollElement animation="zoom-out">Scale down</InScrollElement>
```

### Slide Animations
```tsx
<InScrollElement animation="slide-up">Slide from bottom</InScrollElement>
<InScrollElement animation="slide-left">Slide from right</InScrollElement>
```

## 🔧 TypeScript Support

React InScroll is written in TypeScript and provides full type safety:

```tsx
import type { AnimationType, InScrollConfig } from 'react-inscroll';

const config: InScrollConfig = {
  duration: 600,
  once: true
};

const animationType: AnimationType = 'fade-up';
```

## 🎨 Custom Styling

You can add custom CSS classes to animated elements:

```tsx
<InScrollElement 
  animation="fade-up" 
  className="my-custom-class"
>
  <div>Styled content</div>
</InScrollElement>
```

```css
.my-custom-class {
  background: linear-gradient(45deg, #667eea, #764ba2);
  padding: 2rem;
  border-radius: 12px;
}
```

## 🚀 Next Steps

Now that you have the basics down, explore more advanced features:

- [📖 API Reference](API-Reference) - Complete documentation
- [🎭 Animation Types](Animation-Types) - All available animations
- [⚙️ Configuration Guide](Configuration-Guide) - Advanced setup
- [💡 Examples & Tutorials](Examples-and-Tutorials) - Practical examples

## 🆘 Need Help?

- Check the [🔧 Troubleshooting](Troubleshooting) guide
- Browse [💡 Examples & Tutorials](Examples-and-Tutorials)
- [🐛 Report an issue](https://github.com/denisetiya/react-inscroll/issues)

---

**Happy coding! 🎉**
