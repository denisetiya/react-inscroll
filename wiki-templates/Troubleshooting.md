# Troubleshooting

Common issues and their solutions when using React InScroll.

## 🚫 Animations Not Working

### Problem: No animations are visible

**Possible Causes:**
1. CSS file not imported
2. Provider not wrapping components
3. JavaScript disabled
4. Elements not in viewport

**Solutions:**

#### 1. Import CSS File
```tsx
// ✅ Correct
import 'react-inscroll/styles/animations.css';

// ❌ Missing CSS import
import { InScrollProvider, InScrollElement } from 'react-inscroll';
```

#### 2. Wrap with Provider
```tsx
// ✅ Correct
function App() {
  return (
    <InScrollProvider>
      <InScrollElement animation="fade-up">
        <div>Content</div>
      </InScrollElement>
    </InScrollProvider>
  );
}

// ❌ Missing Provider
function App() {
  return (
    <InScrollElement animation="fade-up">
      <div>Content</div>
    </InScrollElement>
  );
}
```

#### 3. Check Browser Support
React InScroll requires Intersection Observer API support:
- Chrome 58+
- Firefox 55+
- Safari 12.1+
- Edge 79+

For older browsers, add a polyfill:
```bash
npm install intersection-observer
```

```tsx
import 'intersection-observer';
```

---

## ⚡ Performance Issues

### Problem: Animations are laggy or janky

**Solutions:**

#### 1. Reduce Simultaneous Animations
```tsx
// ❌ Too many at once
{items.map((item, index) => (
  <InScrollElement animation="zoom-in">
    <Item key={index}>{item}</Item>
  </InScrollElement>
))}

// ✅ Staggered delays
{items.map((item, index) => (
  <InScrollElement 
    animation="zoom-in" 
    delay={index * 50}
  >
    <Item key={index}>{item}</Item>
  </InScrollElement>
))}
```

#### 2. Use `once: true` for Better Performance
```tsx
// ✅ Better performance
<InScrollProvider config={{ once: true }}>
  <App />
</InScrollProvider>
```

#### 3. Optimize CSS
```css
/* ✅ Use transform and opacity for best performance */
.my-element {
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
}

/* ❌ Avoid animating layout properties */
.my-element {
  top: 20px; /* Causes layout recalculation */
}
```

---

## 🔧 TypeScript Issues

### Problem: Type errors with animation props

**Solutions:**

#### 1. Import Types Correctly
```tsx
// ✅ Correct type import
import type { AnimationType } from 'react-inscroll';

const animation: AnimationType = 'fade-up';
```

#### 2. Use Proper Component Props
```tsx
// ✅ Correct typing
import type { InScrollElementProps } from 'react-inscroll';

const MyComponent: React.FC<InScrollElementProps> = (props) => {
  return <InScrollElement {...props} />;
};
```

---

## 📱 Mobile Issues

### Problem: Animations don't work on mobile

**Solutions:**

#### 1. Check iOS Safari Support
iOS Safari 12.2+ is required. For older versions:
```tsx
// Add viewport meta tag
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### 2. Reduce Motion Preference
Respect user's motion preferences:
```css
@media (prefers-reduced-motion: reduce) {
  .inscroll-element {
    animation: none !important;
    transition: none !important;
  }
}
```

#### 3. Optimize for Touch Devices
```tsx
// Use lighter animations on mobile
const isMobile = window.innerWidth < 768;

<InScrollElement 
  animation={isMobile ? "fade-up" : "zoom-in"}
  duration={isMobile ? 400 : 600}
>
  <Content />
</InScrollElement>
```

---

## 🔄 State Management Issues

### Problem: Animations conflict with state updates

**Solution: Use Keys for Re-animation**
```tsx
import { useClickableAnimation } from 'react-inscroll';

function ClickableCard() {
  const { animationKey, clickableProps } = useClickableAnimation();

  return (
    <InScrollElement 
      key={animationKey} // Forces re-animation
      animation="zoom-in"
      {...clickableProps}
    >
      <div>Click to replay</div>
    </InScrollElement>
  );
}
```

---

## 🎨 Styling Issues

### Problem: Animations interfere with existing CSS

**Solutions:**

#### 1. CSS Specificity Issues
```css
/* ✅ Use more specific selectors */
.my-component .inscroll-element {
  /* Your custom styles */
}

/* ❌ Generic selectors might be overridden */
.inscroll-element {
  /* Might not apply */
}
```

#### 2. Z-index Problems
```css
/* ✅ Ensure proper stacking context */
.inscroll-element {
  position: relative;
  z-index: 1;
}
```

#### 3. Transform Origin Issues
```css
/* ✅ Set appropriate transform origin */
.inscroll-element {
  transform-origin: center center;
}
```

---

## 🔍 Debugging Tips

### Enable Debug Mode
```tsx
<InScrollProvider config={{ debug: true }}>
  <App />
</InScrollProvider>
```

### Check Element Visibility
```tsx
import { useInView } from 'react-inscroll';

function DebugComponent() {
  const [ref, inView] = useInView();
  
  console.log('Element in view:', inView);
  
  return <div ref={ref}>Debug element</div>;
}
```

### Inspect Animation Classes
Open browser DevTools and check if these classes are applied:
- `.inscroll-element` - Base class
- `.inscroll-animate` - When animating
- `.inscroll-animated` - After animation

---

## 🆘 Getting Help

If you're still experiencing issues:

1. **Check the Console** - Look for JavaScript errors
2. **Validate Your Setup** - Compare with [Getting Started](Getting-Started)
3. **Search Issues** - Check [GitHub Issues](https://github.com/denisetiya/react-inscroll/issues)
4. **Create a Minimal Reproduction** - Isolate the problem
5. **Report the Bug** - [Open a new issue](https://github.com/denisetiya/react-inscroll/issues/new)

### Issue Template
When reporting bugs, include:
- React version
- React InScroll version
- Browser and version
- Minimal code reproduction
- Expected vs actual behavior

---

## 📚 Related Documentation

- [🎯 Getting Started](Getting-Started)
- [📖 API Reference](API-Reference)
- [⚙️ Configuration Guide](Configuration-Guide)
- [💡 Examples & Tutorials](Examples-and-Tutorials)

---

**Still stuck? Don't hesitate to ask for help! 🤝**
