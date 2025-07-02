import { createContext } from 'react';
import type { InScrollConfig } from '../types';

export const InScrollContext = createContext<InScrollConfig | undefined>(undefined);
