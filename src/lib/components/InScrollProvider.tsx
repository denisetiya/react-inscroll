import React from 'react';
import type { InScrollConfig } from '../types';
import { InScrollContext } from '../context/InScrollContext';

interface InScrollProviderProps {
  children: React.ReactNode;
  config?: InScrollConfig;
}

export function InScrollProvider({ children, config = {} }: InScrollProviderProps) {
  const defaultConfig: InScrollConfig = {
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
    disable: false,
    startEvent: 'DOMContentLoaded',
    animatedClassName: 'inscroll-animate',
    initClassName: 'inscroll-init',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    ...config,
  };

  return (
    <InScrollContext.Provider value={defaultConfig}>
      {children}
    </InScrollContext.Provider>
  );
}
