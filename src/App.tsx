import { InScrollProvider, InScrollElement, useClickableAnimation } from './lib';
import type { AnimationType } from './lib';
import './lib/styles/animations.css';
import './App.css';

// Component untuk card yang bisa diklik
function ClickableCard({ animation, delay, children, className = "" }: {
  animation: AnimationType;
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  const { animationKey, isAnimating, clickableProps } = useClickableAnimation();

  return (
    <div className="relative">
      <InScrollElement 
        key={animationKey} 
        animation={animation} 
        delay={delay}
        className={className}
        {...clickableProps}
      >
        {children}
      </InScrollElement>
      {!isAnimating && (
        <div className="absolute top-2 right-2 opacity-50 text-xs bg-black/20 px-2 py-1 rounded-full text-white pointer-events-none">
          Click to replay
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <InScrollProvider config={{ duration: 800, once: false, offset: 120 }}>
      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 text-center px-6 ">
            <InScrollElement animation="fade-up" delay={200}>
              <h1 className="text-6xl md:text-8xl font-extralight mb-6 tracking-tight">
                React
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-light">
                  InScroll
                </span>
              </h1>
            </InScrollElement>

            <InScrollElement animation="fade-up" delay={600}>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
                Beautiful scroll animations for modern React applications
              </p>
            </InScrollElement>

            <InScrollElement animation="zoom-in" delay={1000}>
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                <span className="text-sm font-medium">25+ Animations</span>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <span className="text-sm font-medium">TypeScript</span>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <span className="text-sm font-medium">Performance Optimized</span>
              </div>
            </InScrollElement>
          </div>
        </section>

        {/* Fade Animations Section */}
        <section className="min-h-screen py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <InScrollElement animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
                  Fade Animations
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
              </div>
            </InScrollElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ClickableCard animation="fade-up" delay={100}>
                <div className="group p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl hover:shadow-xl transition-all duration-300 border border-blue-200/50">
                  <div className="w-12 h-12 bg-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fade Up</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Slides up with fade effect</p>
                </div>
              </ClickableCard>

              <ClickableCard animation="fade-down" delay={200}>
                <div className="group p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl hover:shadow-xl transition-all duration-300 border border-purple-200/50">
                  <div className="w-12 h-12 bg-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fade Down</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Slides down with fade effect</p>
                </div>
              </ClickableCard>

              <ClickableCard animation="fade-left" delay={300}>
                <div className="group p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl hover:shadow-xl transition-all duration-300 border border-green-200/50">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fade Left</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Slides left with fade effect</p>
                </div>
              </ClickableCard>

              <ClickableCard animation="fade-right" delay={400}>
                <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl hover:shadow-xl transition-all duration-300 border border-orange-200/50">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fade Right</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Slides right with fade effect</p>
                </div>
              </ClickableCard>
            </div>

            {/* Diagonal Fade Animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <ClickableCard animation="fade-up-left" delay={100}>
                <div className="group p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl hover:shadow-lg transition-all duration-300 border border-pink-200/50">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Fade Up Left</h4>
                  <p className="text-gray-600 text-xs">Diagonal fade animation</p>
                </div>
              </ClickableCard>

              <ClickableCard animation="fade-up-right" delay={200}>
                <div className="group p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl hover:shadow-lg transition-all duration-300 border border-cyan-200/50">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Fade Up Right</h4>
                  <p className="text-gray-600 text-xs">Diagonal fade animation</p>
                </div>
              </ClickableCard>

              <ClickableCard animation="fade-down-left" delay={300}>
                <div className="group p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl hover:shadow-lg transition-all duration-300 border border-indigo-200/50">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Fade Down Left</h4>
                  <p className="text-gray-600 text-xs">Diagonal fade animation</p>
                </div>
              </ClickableCard>

              <ClickableCard animation="fade-down-right" delay={400}>
                <div className="group p-6 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl hover:shadow-lg transition-all duration-300 border border-rose-200/50">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Fade Down Right</h4>
                  <p className="text-gray-600 text-xs">Diagonal fade animation</p>
                </div>
              </ClickableCard>
            </div>
          </div>
        </section>

        {/* Zoom Animations Section */}
        <section className="min-h-screen py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-6">
            <InScrollElement animation="zoom-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
                  Zoom Animations
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
              </div>
            </InScrollElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ClickableCard animation="zoom-in" delay={200}>
                <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Zoom In</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Scales from small to normal size with smooth easing</p>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
              </ClickableCard>

              <ClickableCard animation="zoom-out" delay={400}>
                <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Zoom Out</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Scales from large to normal size with smooth easing</p>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>
              </ClickableCard>

              <ClickableCard animation="zoom-in-up" delay={600}>
                <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Zoom In Up</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Combines zoom with upward movement</p>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  </div>
                </div>
              </ClickableCard>
            </div>

            {/* Additional Zoom Variations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ClickableCard animation="zoom-in-down" delay={100}>
                <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl mx-auto mb-3"></div>
                  <h4 className="font-semibold text-gray-900 text-sm">Zoom In Down</h4>
                </div>
              </ClickableCard>

              <ClickableCard animation="zoom-in-left" delay={200}>
                <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-xl mx-auto mb-3"></div>
                  <h4 className="font-semibold text-gray-900 text-sm">Zoom In Left</h4>
                </div>
              </ClickableCard>

              <ClickableCard animation="zoom-in-right" delay={300}>
                <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl mx-auto mb-3"></div>
                  <h4 className="font-semibold text-gray-900 text-sm">Zoom In Right</h4>
                </div>
              </ClickableCard>

              <ClickableCard animation="zoom-out-up" delay={400}>
                <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-400 to-purple-400 rounded-xl mx-auto mb-3"></div>
                  <h4 className="font-semibold text-gray-900 text-sm">Zoom Out Up</h4>
                </div>
              </ClickableCard>
            </div>

            {/* More Zoom Variations */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <InScrollElement animation="zoom-out-down" delay={100}>
                <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl text-center border border-emerald-200/50">
                  <h4 className="font-medium text-gray-900 text-sm">Zoom Out Down</h4>
                </div>
              </InScrollElement>

              <InScrollElement animation="zoom-out-left" delay={200}>
                <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl text-center border border-amber-200/50">
                  <h4 className="font-medium text-gray-900 text-sm">Zoom Out Left</h4>
                </div>
              </InScrollElement>

              <InScrollElement animation="zoom-out-right" delay={300}>
                <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl text-center border border-slate-200/50">
                  <h4 className="font-medium text-gray-900 text-sm">Zoom Out Right</h4>
                </div>
              </InScrollElement>
            </div>
          </div>
        </section>

        {/* Flip Animations Section */}
        <section className=" py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <InScrollElement animation="flip-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
                  Flip Animations
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-green-400 to-teal-400 mx-auto"></div>
              </div>
            </InScrollElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ClickableCard animation="flip-up" delay={100}>
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Flip Up</h3>
                    <p className="text-blue-100 text-sm">3D rotation on X-axis</p>
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
              </ClickableCard>

              <ClickableCard animation="flip-down" delay={200}>
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 text-white shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Flip Down</h3>
                    <p className="text-purple-100 text-sm">3D rotation on X-axis</p>
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
              </ClickableCard>

              <ClickableCard animation="flip-left" delay={300}>
                <div className="relative h-48 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Flip Left</h3>
                    <p className="text-green-100 text-sm">3D rotation on Y-axis</p>
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
              </ClickableCard>

              <ClickableCard animation="flip-right" delay={400}>
                <div className="relative h-48 bg-gradient-to-br from-orange-600 to-orange-800 rounded-3xl p-8 text-white shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Flip Right</h3>
                    <p className="text-orange-100 text-sm">3D rotation on Y-axis</p>
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
              </ClickableCard>
            </div>
          </div>
        </section>

        {/* Slide Animations Section */}
        <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <InScrollElement animation="slide-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extralight mb-4">
                  Slide Animations
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
              </div>
            </InScrollElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ClickableCard animation="slide-left" delay={200}>
                <div className="relative p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl border border-gray-600">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Slide Left</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Elements slide in from the right side with smooth translation effect.
                    Perfect for creating engaging user experiences.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg"></div>
                    <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </ClickableCard>

              <ClickableCard animation="slide-right" delay={400}>
                <div className="relative p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl border border-gray-600">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Slide Right</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Elements slide in from the left side with smooth translation effect.
                    Creates dynamic and fluid user interface interactions.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"></div>
                    <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </ClickableCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <ClickableCard animation="slide-up" delay={200}>
                <div className="p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold mb-3">Slide Up</h4>
                  <p className="text-gray-300 text-sm">Slides from bottom to current position</p>
                </div>
              </ClickableCard>

              <ClickableCard animation="slide-down" delay={400}>
                <div className="p-6 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold mb-3">Slide Down</h4>
                  <p className="text-gray-300 text-sm">Slides from top to current position</p>
                </div>
              </ClickableCard>
            </div>
          </div>
        </section>

        {/* Once vs Mirror Demo Section */}
        <section className="min-h-screen py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <InScrollElement animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
                  Behavior Control
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Control when and how animations trigger with <code className="px-2 py-1 bg-gray-100 rounded text-sm">once</code> and <code className="px-2 py-1 bg-gray-100 rounded text-sm">mirror</code> properties
                </p>
              </div>
            </InScrollElement>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <ClickableCard animation="fade-up" delay={200}>
                <div className="relative p-8 bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold">1x</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">once={`{true}`}</h3>
                      <p className="text-blue-600 font-medium">Animation Once (Default)</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Elemen ini hanya akan beranimasi sekali ketika pertama kali terlihat.
                    Scroll ke bawah lalu kembali ke atas - animasi tidak akan muncul lagi.
                  </p>
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <code className="text-sm text-blue-800">
                      {`<InScrollElement animation="fade-up" once={true}>`}
                    </code>
                  </div>
                </div>
              </ClickableCard>

              <ClickableCard animation="fade-up" delay={400}>
                <div className="relative p-8 bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold">∞</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">once={`{false}`} + mirror={`{true}`}</h3>
                      <p className="text-green-600 font-medium">Repeating Animation</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Elemen ini akan beranimasi setiap kali terlihat dan menghilang ketika keluar dari layar.
                    Coba scroll naik-turun berulang kali!
                  </p>
                  <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                    <code className="text-sm text-green-800">
                      {`<InScrollElement once={false} mirror={true}>`}
                    </code>
                  </div>
                </div>
              </ClickableCard>
            </div>

            {/* Interactive Demo Area */}
            <ClickableCard animation="zoom-in" delay={600}>
              <div className="relative p-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl text-white text-center shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Interactive Test Zone</h3>
                  <p className="text-xl text-purple-100 mb-8">
                    Scroll naik-turun untuk melihat perbedaan behavior animasi!
                  </p>
                  <div className="flex justify-center items-center gap-4">
                    <div className="w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-white/50 rounded-full animate-pulse delay-75"></div>
                    <div className="w-4 h-4 bg-white/70 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </ClickableCard>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="min-h-screen py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-6">
            <InScrollElement animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extralight mb-4">
                  Easy Implementation
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  Get started with just a few lines of code
                </p>
              </div>
            </InScrollElement>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <InScrollElement animation="slide-right" delay={200}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25"></div>
                  <div className="relative p-8 bg-gray-800 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">Basic Usage</h3>
                    <pre className="text-sm text-gray-300 overflow-x-auto leading-relaxed">
                      {`import { InScrollProvider, InScrollElement } from 'react-inscroll';
import 'react-inscroll/styles/animations.css';

function App() {
  return (
    <InScrollProvider>
      <InScrollElement animation="fade-up">
        <h1>Hello World!</h1>
      </InScrollElement>
    </InScrollProvider>
  );
}`}
                    </pre>
                  </div>
                </div>
              </InScrollElement>

              <InScrollElement animation="slide-left" delay={400}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25"></div>
                  <div className="relative p-8 bg-gray-800 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-bold mb-4 text-purple-400">Advanced Configuration</h3>
                    <pre className="text-sm text-gray-300 overflow-x-auto leading-relaxed">
                      {`<InScrollProvider config={{
  duration: 800,
  once: false,
  mirror: true,
  offset: 120
}}>
  <InScrollElement 
    animation="zoom-in-up" 
    delay={200}
    as="section"
  >
    <div>Custom Element</div>
  </InScrollElement>
</InScrollProvider>`}
                    </pre>
                  </div>
                </div>
              </InScrollElement>
            </div>

            <InScrollElement animation="fade-up" delay={600}>
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-6 bg-gray-800 rounded-full px-8 py-4 border border-gray-700">
                  <span className="text-cyan-400 font-semibold">25+ Animations</span>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <span className="text-purple-400 font-semibold">TypeScript Ready</span>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <span className="text-green-400 font-semibold">Performance Optimized</span>
                </div>
              </div>
            </InScrollElement>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <InScrollElement animation="fade-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Animate?
              </h3>
              <p className="text-gray-600 mb-8">
                Start creating beautiful scroll animations with React InScroll
              </p>
              <div className="flex justify-center gap-4">
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium">
                  npm install react-inscroll
                </div>
              </div>
            </InScrollElement>
          </div>
        </footer>

      </div>
    </InScrollProvider>
  );
}

export default App;
