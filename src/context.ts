import { createContext, useContext } from 'react';

export interface AppContext {
  port: number;
}

export const context = createContext<AppContext | null>(null);

export function useAppContext() {
  const data = useContext(context);

  if (!data) {
    throw new Error(
      'You must wrap useAppContext in an AppContext Provider (<App />)'
    );
  }

  return data;
}
