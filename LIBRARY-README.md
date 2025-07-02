# React InScroll

A React library for animating elements on scroll, inspired by AOS (Animate On Scroll). Built with TypeScript and designed for modern React applications.

## Features

- 🎨 **25+ Beautiful Animations** - Fade, slide, zoom, and flip effects
- 🎯 **TypeScript Support** - Full type safety and IntelliSense
- 🚀 **Performance Optimized** - Uses Intersection Observer API
- 🎛️ **Highly Configurable** - Global and per-element configuration
- 📱 **Responsive** - Works great on all device sizes
- 🎪 **Easy to Use** - Simple API with sensible defaults

## Installation

```bash
npm install react-inscroll
# or
yarn add react-inscroll
# or
pnpm add react-inscroll
```

## Quick Start

```tsx
import { InScrollProvider, InScrollElement } from 'react-inscroll';
import 'react-inscroll/styles';

function App() {
  return (
    <InScrollProvider config={{ duration: 600, once: true }}>
      <div>
        <InScrollElement animation="fade-up">
          <h1>Hello World!</h1>
        </InScrollElement>
        
        <InScrollElement animation="slide-left" delay={200}>
          <p>This paragraph slides in from the left</p>
        </InScrollElement>
        
        <InScrollElement animation="zoom-in" duration={800}>
          <div>This div zooms in with custom duration</div>
        </InScrollElement>
      </div>
    </InScrollProvider>
  );
}
```

## Available Animations

### Fade
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `fade-up-right`, `fade-up-left`, `fade-down-right`, `fade-down-left`

### Flip
- `flip-up`, `flip-down`, `flip-left`, `flip-right`

### Slide
- `slide-up`, `slide-down`, `slide-left`, `slide-right`

### Zoom
- `zoom-in`, `zoom-out`
- `zoom-in-up`, `zoom-in-down`, `zoom-in-left`, `zoom-in-right`
- `zoom-out-up`, `zoom-out-down`, `zoom-out-left`, `zoom-out-right`

## API Reference

### InScrollProvider

Wrap your app or component tree with `InScrollProvider` to set global configuration.

```tsx
<InScrollProvider config={config}>
  {children}
</InScrollProvider>
```

#### Config Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `offset` | `number` | `120` | Offset (in px) from the original trigger point |
| `delay` | `number` | `0` | Delay animation (in ms) |
| `duration` | `number` | `400` | Duration of animation (in ms) |
| `easing` | `string` | `'ease'` | CSS easing function |
| `once` | `boolean` | `false` | Whether animation should happen only once |
| `mirror` | `boolean` | `false` | Whether elements should animate out while scrolling past them |
| `anchorPlacement` | `string` | `'top-bottom'` | Defines which position of the element on the screen should trigger animation |

### InScrollElement

Animate individual elements with `InScrollElement`.

```tsx
<InScrollElement
  animation="fade-up"
  delay={200}
  duration={600}
  once={true}
  as="section"
>
  {children}
</InScrollElement>
```

#### Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `animation` | `AnimationType` | ✅ | Animation type to apply |
| `delay` | `number` | ❌ | Override global delay |
| `duration` | `number` | ❌ | Override global duration |
| `easing` | `string` | ❌ | Override global easing |
| `once` | `boolean` | ❌ | Override global once setting |
| `mirror` | `boolean` | ❌ | Override global mirror setting |
| `offset` | `number` | ❌ | Override global offset |
| `as` | `React.ElementType` | ❌ | HTML element or React component to render (default: 'div') |

### useInView Hook

For advanced use cases, you can use the `useInView` hook directly:

```tsx
import { useInView } from 'react-inscroll';

function MyComponent() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView ? 'In view!' : 'Not in view'}
    </div>
  );
}
```

## Examples

### Different Elements

```tsx
<InScrollElement animation="fade-up" as="section">
  <h2>Section Title</h2>
</InScrollElement>

<InScrollElement animation="slide-left" as="article">
  <p>Article content</p>
</InScrollElement>

<InScrollElement animation="zoom-in" as="button">
  Click me!
</InScrollElement>
```

### Staggered Animations

```tsx
<div>
  <InScrollElement animation="fade-up" delay={0}>
    <h1>First</h1>
  </InScrollElement>
  
  <InScrollElement animation="fade-up" delay={100}>
    <h2>Second</h2>
  </InScrollElement>
  
  <InScrollElement animation="fade-up" delay={200}>
    <h3>Third</h3>
  </InScrollElement>
</div>
```

### Custom Styling

```tsx
<InScrollElement
  animation="slide-right"
  className="my-custom-class"
  style={{ backgroundColor: 'red' }}
>
  <div>Custom styled element</div>
</InScrollElement>
```

## Browser Support

React InScroll uses the Intersection Observer API, which is supported in:

- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

For older browsers, consider using a polyfill.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT

## Changelog

### v1.0.0
- Initial release with 25+ animations
- TypeScript support
- Intersection Observer API
- Global and per-element configuration
