// Example usage of react-inscroll library
import React from 'react';
import { InScrollProvider, InScrollElement } from 'react-inscroll';
import 'react-inscroll/styles/animations.css';

function ExampleApp() {
  return (
    <InScrollProvider config={{ duration: 600, offset: 100 }}>
      <div style={{ height: '300vh', padding: '50px' }}>
        
        {/* Header - animasi sekali saja */}
        <InScrollElement animation="fade-up" once={true}>
          <h1 style={{ textAlign: 'center', marginBottom: '100px' }}>
            Welcome to React InScroll!
          </h1>
        </InScrollElement>

        {/* Section 1 - animasi berulang */}
        <div style={{ marginTop: '50vh', marginBottom: '50vh' }}>
          <InScrollElement animation="slide-left" once={false} mirror={true}>
            <div style={{ 
              padding: '30px', 
              background: '#3b82f6',
              color: 'white',
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <h2>Animasi Berulang (once=false, mirror=true)</h2>
              <p>Box ini akan muncul setiap kali terlihat dan hilang ketika keluar dari layar. Scroll naik-turun untuk melihat efeknya!</p>
            </div>
          </InScrollElement>
        </div>

        {/* Section 2 - animasi sekali saja */}
        <div style={{ marginBottom: '50vh' }}>
          <InScrollElement animation="zoom-in" once={true}>
            <div style={{ 
              padding: '30px', 
              background: '#10b981',
              color: 'white',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h2>Animasi Sekali Saja (once=true)</h2>
              <p>Box ini hanya akan muncul sekali ketika pertama kali terlihat. Tidak akan muncul lagi meskipun di-scroll ulang.</p>
            </div>
          </InScrollElement>
        </div>

        {/* Section 3 - kombinasi animasi */}
        <div>
          <InScrollElement animation="fade-up" once={false} delay={0}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
              Staggered Animations
            </h2>
          </InScrollElement>

          <InScrollElement animation="fade-up" once={false} delay={200}>
            <div style={{ 
              padding: '20px', 
              background: '#8b5cf6',
              color: 'white',
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <p>Item 1 - Delay 200ms</p>
            </div>
          </InScrollElement>

          <InScrollElement animation="fade-up" once={false} delay={400}>
            <div style={{ 
              padding: '20px', 
              background: '#f59e0b',
              color: 'white',
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <p>Item 2 - Delay 400ms</p>
            </div>
          </InScrollElement>

          <InScrollElement animation="fade-up" once={false} delay={600}>
            <div style={{ 
              padding: '20px', 
              background: '#ef4444',
              color: 'white',
              borderRadius: '10px'
            }}>
              <p>Item 3 - Delay 600ms</p>
            </div>
          </InScrollElement>
        </div>

      </div>
    </InScrollProvider>
  );
}

export default ExampleApp;
