# Examples

This directory contains various examples of how to use React InScroll in different scenarios.

## Basic Examples

### 1. Simple Fade Animation

```tsx
import { InScrollProvider, InScrollElement } from 'react-inscroll';
import 'react-inscroll/styles/animations.css';

function BasicExample() {
  return (
    <InScrollProvider>
      <div className="container">
        <InScrollElement animation="fade-up">
          <h1>Welcome to my website!</h1>
        </InScrollElement>
        
        <InScrollElement animation="fade-up" delay={200}>
          <p>This content fades in with a delay.</p>
        </InScrollElement>
      </div>
    </InScrollProvider>
  );
}
```

### 2. Different Animation Types

```tsx
function AnimationShowcase() {
  return (
    <InScrollProvider>
      <div className="showcase">
        {/* Fade animations */}
        <InScrollElement animation="fade-up">
          <div className="card">Fade Up</div>
        </InScrollElement>
        
        <InScrollElement animation="fade-left">
          <div className="card">Fade Left</div>
        </InScrollElement>
        
        {/* Zoom animations */}
        <InScrollElement animation="zoom-in">
          <div className="card">Zoom In</div>
        </InScrollElement>
        
        <InScrollElement animation="zoom-out">
          <div className="card">Zoom Out</div>
        </InScrollElement>
        
        {/* Flip animations */}
        <InScrollElement animation="flip-up">
          <div className="card">Flip Up</div>
        </InScrollElement>
        
        {/* Slide animations */}
        <InScrollElement animation="slide-right">
          <div className="card">Slide Right</div>
        </InScrollElement>
      </div>
    </InScrollProvider>
  );
}
```

## Advanced Examples

### 3. Global Configuration

```tsx
function ConfiguredApp() {
  const config = {
    duration: 1000,    // Slower animations
    once: false,       // Repeat animations
    mirror: true,      // Reverse on scroll out
    offset: 200,       // Trigger earlier
    easing: 'ease-in-out'
  };

  return (
    <InScrollProvider config={config}>
      <div className="app">
        <InScrollElement animation="fade-up">
          <h1>Configured animations</h1>
        </InScrollElement>
        
        <InScrollElement animation="zoom-in">
          <p>These use global configuration</p>
        </InScrollElement>
      </div>
    </InScrollProvider>
  );
}
```

### 4. Individual Element Configuration

```tsx
function CustomConfigExample() {
  return (
    <InScrollProvider>
      <div className="content">
        {/* Override global settings for specific elements */}
        <InScrollElement 
          animation="fade-up"
          duration={2000}
          delay={500}
          once={true}
          easing="cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <h1>Slow, delayed animation</h1>
        </InScrollElement>
        
        <InScrollElement 
          animation="bounce-in"
          duration={600}
          mirror={false}
        >
          <div className="bounce-card">
            Quick bounce animation
          </div>
        </InScrollElement>
      </div>
    </InScrollProvider>
  );
}
```

### 5. Interactive Animations

```tsx
import { useClickableAnimation } from 'react-inscroll';

function InteractiveExample() {
  return (
    <InScrollProvider>
      <div className="interactive-demo">
        <ClickableCard animation="fade-up" />
        <ClickableCard animation="zoom-in" />
        <ClickableCard animation="flip-left" />
      </div>
    </InScrollProvider>
  );
}

function ClickableCard({ animation }) {
  const { animationKey, isAnimating, clickableProps } = useClickableAnimation();

  return (
    <div className="relative">
      <InScrollElement 
        key={animationKey}
        animation={animation}
        {...clickableProps}
      >
        <div className="interactive-card">
          <h3>{animation}</h3>
          <p>Click to replay!</p>
        </div>
      </InScrollElement>
      
      {!isAnimating && (
        <div className="replay-badge">
          🔄 Click to replay
        </div>
      )}
    </div>
  );
}
```

### 6. Using the useInView Hook

```tsx
import { useInView } from 'react-inscroll';

function VisibilityDetector() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <div ref={ref} className="detector">
      <h3>Visibility Status</h3>
      <p>
        This element is {inView ? 'visible' : 'hidden'}
      </p>
      <div className={`indicator ${inView ? 'active' : ''}`}>
        {inView ? '👀' : '🫥'}
      </div>
    </div>
  );
}

function ConditionalContent() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="conditional-content">
      {inView && (
        <div className="content-appears">
          <h3>Content appears when visible!</h3>
          <p>This content only renders when the container is in view.</p>
        </div>
      )}
    </div>
  );
}
```

### 7. Staggered Animations

```tsx
function StaggeredList() {
  const items = [
    'First item',
    'Second item', 
    'Third item',
    'Fourth item',
    'Fifth item'
  ];

  return (
    <InScrollProvider>
      <div className="list">
        <InScrollElement animation="fade-up">
          <h2>Staggered List</h2>
        </InScrollElement>
        
        {items.map((item, index) => (
          <InScrollElement 
            key={index}
            animation="fade-up"
            delay={index * 100} // Stagger by 100ms
          >
            <div className="list-item">
              {item}
            </div>
          </InScrollElement>
        ))}
      </div>
    </InScrollProvider>
  );
}
```

### 8. Complex Layout Example

```tsx
function LandingPage() {
  return (
    <InScrollProvider config={{ duration: 800, once: false }}>
      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <InScrollElement animation="fade-up" delay={200}>
            <h1>Amazing Product</h1>
          </InScrollElement>
          <InScrollElement animation="fade-up" delay={400}>
            <p>The best solution for your needs</p>
          </InScrollElement>
          <InScrollElement animation="zoom-in" delay={600}>
            <button className="cta-button">Get Started</button>
          </InScrollElement>
        </section>

        {/* Features Section */}
        <section className="features">
          <InScrollElement animation="fade-up">
            <h2>Features</h2>
          </InScrollElement>
          
          <div className="features-grid">
            <InScrollElement animation="fade-right" delay={100}>
              <FeatureCard icon="⚡" title="Fast" />
            </InScrollElement>
            <InScrollElement animation="fade-up" delay={200}>
              <FeatureCard icon="🔒" title="Secure" />
            </InScrollElement>
            <InScrollElement animation="fade-left" delay={300}>
              <FeatureCard icon="📱" title="Responsive" />
            </InScrollElement>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <InScrollElement animation="flip-up">
            <h2>What people say</h2>
          </InScrollElement>
          
          <InScrollElement animation="slide-up" delay={200}>
            <TestimonialCard />
          </InScrollElement>
        </section>
      </div>
    </InScrollProvider>
  );
}
```

### 9. Gallery with Different Animations

```tsx
function AnimatedGallery() {
  const images = [
    { src: 'image1.jpg', animation: 'fade-up' },
    { src: 'image2.jpg', animation: 'fade-down' },
    { src: 'image3.jpg', animation: 'zoom-in' },
    { src: 'image4.jpg', animation: 'flip-left' },
    { src: 'image5.jpg', animation: 'slide-right' },
    { src: 'image6.jpg', animation: 'bounce-in' }
  ];

  return (
    <InScrollProvider>
      <div className="gallery">
        <InScrollElement animation="fade-up">
          <h2>Photo Gallery</h2>
        </InScrollElement>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <InScrollElement 
              key={index}
              animation={image.animation}
              delay={index * 150}
            >
              <div className="gallery-item">
                <img src={image.src} alt={`Gallery item ${index + 1}`} />
              </div>
            </InScrollElement>
          ))}
        </div>
      </div>
    </InScrollProvider>
  );
}
```

### 10. Form with Animated Fields

```tsx
function AnimatedForm() {
  return (
    <InScrollProvider>
      <form className="animated-form">
        <InScrollElement animation="fade-up">
          <h2>Contact Us</h2>
        </InScrollElement>
        
        <InScrollElement animation="fade-right" delay={100}>
          <div className="form-field">
            <label>Name</label>
            <input type="text" />
          </div>
        </InScrollElement>
        
        <InScrollElement animation="fade-left" delay={200}>
          <div className="form-field">
            <label>Email</label>
            <input type="email" />
          </div>
        </InScrollElement>
        
        <InScrollElement animation="fade-up" delay={300}>
          <div className="form-field">
            <label>Message</label>
            <textarea rows={4} />
          </div>
        </InScrollElement>
        
        <InScrollElement animation="zoom-in" delay={400}>
          <button type="submit">Send Message</button>
        </InScrollElement>
      </form>
    </InScrollProvider>
  );
}
```

## CSS Styling Examples

### Custom Animation Styles

```css
/* Custom card styles */
.card {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
}

.interactive-card {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.interactive-card:hover {
  transform: translateY(-2px);
}

.replay-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  pointer-events: none;
}

/* Custom animation variables */
.slow-animation {
  --inscroll-duration: 2000ms;
}

.bouncy-animation {
  --inscroll-easing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

These examples show various ways to use React InScroll in your applications. Mix and match different animations, configurations, and patterns to create engaging user experiences!
