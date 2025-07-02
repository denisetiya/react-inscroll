import { useContext } from 'react';
import { InScrollContext } from '../context/InScrollContext';
import type { InScrollConfig } from '../types';

export function useInScrollConfig(): InScrollConfig {
  const context = useContext(InScrollContext);
  return context || {};
}
