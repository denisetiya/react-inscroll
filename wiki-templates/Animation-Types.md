# Animation Types

React InScroll provides 25+ animation types to bring your content to life. Each animation is carefully crafted for smooth performance and visual appeal.

## 🎭 Fade Animations

Fade animations combine opacity changes with directional movement.

### Basic Fade
```tsx
<InScrollElement animation="fade-up">Content fades up</InScrollElement>
<InScrollElement animation="fade-down">Content fades down</InScrollElement>
<InScrollElement animation="fade-left">Content fades left</InScrollElement>
<InScrollElement animation="fade-right">Content fades right</InScrollElement>
```

### Diagonal Fade
```tsx
<InScrollElement animation="fade-up-left">Content fades up-left</InScrollElement>
<InScrollElement animation="fade-up-right">Content fades up-right</InScrollElement>
<InScrollElement animation="fade-down-left">Content fades down-left</InScrollElement>
<InScrollElement animation="fade-down-right">Content fades down-right</InScrollElement>
```

**Best for:** Text content, cards, hero sections

---

## 🔍 Zoom Animations

Zoom animations scale elements while animating their position.

### Basic Zoom
```tsx
<InScrollElement animation="zoom-in">Scale from small to normal</InScrollElement>
<InScrollElement animation="zoom-out">Scale from large to normal</InScrollElement>
```

### Directional Zoom
```tsx
<InScrollElement animation="zoom-in-up">Scale and move up</InScrollElement>
<InScrollElement animation="zoom-in-down">Scale and move down</InScrollElement>
<InScrollElement animation="zoom-in-left">Scale and move left</InScrollElement>
<InScrollElement animation="zoom-in-right">Scale and move right</InScrollElement>
<InScrollElement animation="zoom-out-up">Scale down and move up</InScrollElement>
<InScrollElement animation="zoom-out-down">Scale down and move down</InScrollElement>
<InScrollElement animation="zoom-out-left">Scale down and move left</InScrollElement>
<InScrollElement animation="zoom-out-right">Scale down and move right</InScrollElement>
```

**Best for:** Images, buttons, call-to-action elements

---

## 🔄 Flip Animations

Flip animations create 3D rotation effects.

```tsx
<InScrollElement animation="flip-up">3D flip on X-axis (upward)</InScrollElement>
<InScrollElement animation="flip-down">3D flip on X-axis (downward)</InScrollElement>
<InScrollElement animation="flip-left">3D flip on Y-axis (leftward)</InScrollElement>
<InScrollElement animation="flip-right">3D flip on Y-axis (rightward)</InScrollElement>
```

**Best for:** Cards, panels, interactive elements

---

## ➡️ Slide Animations

Slide animations move elements from one position to another.

```tsx
<InScrollElement animation="slide-up">Slide from bottom</InScrollElement>
<InScrollElement animation="slide-down">Slide from top</InScrollElement>
<InScrollElement animation="slide-left">Slide from right</InScrollElement>
<InScrollElement animation="slide-right">Slide from left</InScrollElement>
```

**Best for:** Sidebars, navigation menus, content blocks

---

## ✨ Special Animations

Unique animations for special effects.

```tsx
<InScrollElement animation="bounce-in">Bouncy entrance effect</InScrollElement>
<InScrollElement animation="pulse">Pulsing scale effect</InScrollElement>
<InScrollElement animation="shake">Horizontal shake effect</InScrollElement>
<InScrollElement animation="flash">Flash opacity effect</InScrollElement>
<InScrollElement animation="float-up">Gentle floating upward</InScrollElement>
<InScrollElement animation="scale-up">Simple scale increase</InScrollElement>
```

**Best for:** Attention-grabbing elements, notifications, highlights

---

## 🎨 Animation Combinations

You can create sophisticated effects by combining animations with delays:

### Staggered List
```tsx
{items.map((item, index) => (
  <InScrollElement 
    key={index}
    animation="fade-up"
    delay={index * 100}
  >
    <ListItem>{item}</ListItem>
  </InScrollElement>
))}
```

### Card Gallery
```tsx
<div className="grid">
  <InScrollElement animation="zoom-in" delay={0}>
    <Card>Card 1</Card>
  </InScrollElement>
  <InScrollElement animation="zoom-in" delay={200}>
    <Card>Card 2</Card>
  </InScrollElement>
  <InScrollElement animation="zoom-in" delay={400}>
    <Card>Card 3</Card>
  </InScrollElement>
</div>
```

---

## ⚙️ Animation Properties

Each animation can be customized with these properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `duration` | `number` | `600` | Animation duration in ms |
| `delay` | `number` | `0` | Delay before animation starts |
| `easing` | `string` | `'ease'` | CSS easing function |
| `once` | `boolean` | `true` | Animate only once |
| `mirror` | `boolean` | `false` | Reverse on scroll out |

### Example with Custom Properties
```tsx
<InScrollElement 
  animation="fade-up"
  duration={1000}
  delay={300}
  easing="cubic-bezier(0.4, 0, 0.2, 1)"
  once={false}
  mirror={true}
>
  <div>Highly customized animation</div>
</InScrollElement>
```

---

## 🎯 Choosing the Right Animation

### For Text Content
- `fade-up` - Classic and readable
- `slide-up` - Modern and clean
- `fade-left/right` - Good for alternating layouts

### For Images
- `zoom-in` - Draws attention
- `fade-up` - Subtle and elegant
- `flip-up` - Playful and engaging

### For Buttons/CTAs
- `zoom-in` - Emphasizes importance
- `bounce-in` - Fun and attention-grabbing
- `pulse` - Subtle call to action

### For Cards/Panels
- `flip-up` - Interactive feel
- `zoom-in-up` - Sophisticated
- `slide-up` - Clean and professional

---

## 🔧 Custom CSS Variables

You can customize animation behavior with CSS variables:

```css
:root {
  --inscroll-duration: 800ms;
  --inscroll-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --inscroll-distance: 60px;
  --inscroll-scale: 0.8;
  --inscroll-rotation: 180deg;
}
```

---

## 📱 Performance Tips

1. **Use `once: true`** for better performance on long pages
2. **Avoid too many simultaneous animations**
3. **Use appropriate delays** to stagger animations
4. **Choose lighter animations** for mobile devices

---

**Next:** [⚙️ Configuration Guide](Configuration-Guide) | [💡 Examples & Tutorials](Examples-and-Tutorials)
