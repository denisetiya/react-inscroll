# API Reference

## Components

### InScrollProvider

The main provider component that wraps your application and provides global configuration.

```tsx
<InScrollProvider config={config}>
  {children}
</InScrollProvider>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `InScrollConfig` | `{}` | Global configuration object |
| `children` | `ReactNode` | - | Child components |

#### InScrollConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `duration` | `number` | `600` | Animation duration in milliseconds |
| `delay` | `number` | `0` | Global delay for all animations |
| `once` | `boolean` | `true` | Whether animations should trigger only once |
| `mirror` | `boolean` | `false` | Whether to reverse animations when leaving viewport |
| `offset` | `number` | `100` | Trigger offset in pixels |
| `easing` | `string` | `'ease'` | CSS easing function |

---

### InScrollElement

The animated element component that applies scroll animations to its children.

```tsx
<InScrollElement animation="fade-up" delay={200}>
  <div>Animated content</div>
</InScrollElement>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | `AnimationType` | `'fade-up'` | Type of animation to apply |
| `delay` | `number` | `0` | Delay before animation starts |
| `duration` | `number` | - | Animation duration (inherits from provider) |
| `once` | `boolean` | - | Whether animation should occur only once |
| `mirror` | `boolean` | - | Whether to reverse animation on scroll out |
| `offset` | `number` | - | Trigger offset in pixels |
| `easing` | `string` | - | CSS easing function |
| `as` | `ElementType` | `'div'` | HTML element type to render |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | - | Content to animate |

---

## Hooks

### useInView

Hook for detecting when an element is in the viewport.

```tsx
const [ref, inView] = useInView(options);
```

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `options` | `UseInViewOptions` | `{}` | Configuration object |

#### UseInViewOptions

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `threshold` | `number \| number[]` | `0.1` | Intersection threshold |
| `rootMargin` | `string` | `'0px'` | Root margin for intersection |
| `triggerOnce` | `boolean` | `false` | Whether to trigger only once |

#### Returns

| Index | Type | Description |
|-------|------|-------------|
| `0` | `RefCallback<Element>` | Ref to attach to element |
| `1` | `boolean` | Whether element is in view |

#### Example

```tsx
function Component() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div ref={ref}>
      {inView ? 'Visible!' : 'Hidden'}
    </div>
  );
}
```

---

### useInScrollConfig

Hook for accessing global InScroll configuration.

```tsx
const config = useInScrollConfig();
```

#### Returns

| Type | Description |
|------|-------------|
| `InScrollConfig` | Current global configuration |

#### Example

```tsx
function Component() {
  const config = useInScrollConfig();
  
  return (
    <div>
      Duration: {config.duration}ms
    </div>
  );
}
```

---

### useClickableAnimation

Hook for creating interactive animations that can be replayed on click.

```tsx
const { animationKey, isAnimating, clickableProps } = useClickableAnimation();
```

#### Returns

| Property | Type | Description |
|----------|------|-------------|
| `animationKey` | `string` | Unique key for forcing re-animation |
| `isAnimating` | `boolean` | Whether animation is currently running |
| `clickableProps` | `object` | Props to spread on clickable element |

#### Example

```tsx
function ClickableCard() {
  const { animationKey, isAnimating, clickableProps } = useClickableAnimation();

  return (
    <InScrollElement 
      key={animationKey}
      animation="zoom-in"
      {...clickableProps}
    >
      <div>Click to replay!</div>
    </InScrollElement>
  );
}
```

---

## Types

### AnimationType

```tsx
type AnimationType = 
  // Fade animations
  | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right'
  | 'fade-up-left' | 'fade-up-right' | 'fade-down-left' | 'fade-down-right'
  
  // Zoom animations
  | 'zoom-in' | 'zoom-out'
  | 'zoom-in-up' | 'zoom-in-down' | 'zoom-in-left' | 'zoom-in-right'
  | 'zoom-out-up' | 'zoom-out-down' | 'zoom-out-left' | 'zoom-out-right'
  
  // Flip animations
  | 'flip-up' | 'flip-down' | 'flip-left' | 'flip-right'
  
  // Slide animations
  | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'
  
  // Special animations
  | 'bounce-in' | 'pulse' | 'shake' | 'flash' | 'float-up' | 'scale-up';
```

### InScrollConfig

```tsx
interface InScrollConfig {
  duration?: number;
  delay?: number;
  once?: boolean;
  mirror?: boolean;
  offset?: number;
  easing?: string;
}
```

### InScrollElementProps

```tsx
interface InScrollElementProps extends InScrollConfig {
  animation: AnimationType;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}
```

---

## CSS Classes

React InScroll uses CSS classes for animations. You can override these for custom styling:

### Animation Classes

- `.inscroll-element` - Base class for all animated elements
- `.inscroll-animate` - Applied when element should animate
- `.inscroll-animated` - Applied after animation completes

### Animation-specific Classes

Each animation type has its own class:
- `.inscroll-fade-up`
- `.inscroll-zoom-in`
- `.inscroll-flip-left`
- etc.

### Custom CSS Variables

```css
:root {
  --inscroll-duration: 600ms;
  --inscroll-easing: ease;
  --inscroll-distance: 60px;
  --inscroll-scale: 0.8;
  --inscroll-rotation: 180deg;
}
```

---

## Browser Support

React InScroll uses the Intersection Observer API, which is supported in:

- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

For older browsers, consider using a polyfill:

```bash
npm install intersection-observer
```

```tsx
import 'intersection-observer';
```
