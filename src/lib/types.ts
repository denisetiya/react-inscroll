import React from 'react';

export type AnimationType = 
  | 'fade-up'
  | 'fade-down' 
  | 'fade-left'
  | 'fade-right'
  | 'fade-up-right'
  | 'fade-up-left'
  | 'fade-down-right'
  | 'fade-down-left'
  | 'flip-up'
  | 'flip-down'
  | 'flip-left'
  | 'flip-right'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-in'
  | 'zoom-in-up'
  | 'zoom-in-down'
  | 'zoom-in-left'
  | 'zoom-in-right'
  | 'zoom-out'
  | 'zoom-out-up'
  | 'zoom-out-down'
  | 'zoom-out-left'
  | 'zoom-out-right';

export interface InScrollConfig {
  offset?: number;
  delay?: number;
  duration?: number;
  easing?: string;
  /** 
   * Jika true, animasi hanya akan muncul sekali saja ketika pertama kali terlihat.
   * Jika false, animasi akan muncul setiap kali elemen terlihat di layar.
   * Default: false
   */
  once?: boolean;
  /** 
   * Jika true, animasi akan hilang ketika elemen keluar dari layar dan muncul lagi ketika masuk.
   * Hanya bekerja jika once = false.
   * Default: false
   */
  mirror?: boolean;
  anchorPlacement?: 'top-bottom' | 'top-center' | 'top-top' | 'center-bottom' | 'center-center' | 'center-top' | 'bottom-bottom' | 'bottom-center' | 'bottom-top';
  disable?: boolean | 'phone' | 'tablet' | 'mobile';
  startEvent?: string;
  animatedClassName?: string;
  initClassName?: string;
  useClassNames?: boolean;
  disableMutationObserver?: boolean;
  debounceDelay?: number;
  throttleDelay?: number;
}

export interface InScrollElementProps extends React.HTMLAttributes<HTMLDivElement> {
  animation: AnimationType;
  offset?: number;
  delay?: number;
  duration?: number;
  easing?: string;
  /** 
   * Jika true, animasi hanya akan muncul sekali saja ketika pertama kali terlihat.
   * Jika false, animasi akan muncul setiap kali elemen terlihat di layar.
   */
  once?: boolean;
  /** 
   * Jika true, animasi akan hilang ketika elemen keluar dari layar dan muncul lagi ketika masuk.
   * Hanya bekerja jika once = false.
   */
  mirror?: boolean;
  anchorPlacement?: InScrollConfig['anchorPlacement'];
  children: React.ReactNode;
  as?: React.ElementType;
}

export interface UseInViewOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface UseInViewReturn {
  ref: React.RefObject<Element | null>;
  inView: boolean;
  entry?: IntersectionObserverEntry;
}
