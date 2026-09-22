import { createContext } from 'react';

export const RadioGroupContext = createContext<{ name: string } | null>(null);
