// src/context/VisitedSectionsContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface VisitedSectionsContextType {
  visited: Set<string>;
  markVisited: (section: string) => void;
}

const VisitedSectionsContext = createContext<VisitedSectionsContextType | undefined>(undefined);

export const VisitedSectionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visited, setVisited] = useState<Set<string>>(new Set());

  const markVisited = (section: string) => {
    setVisited(prev => {
      const next = new Set(prev);
      next.add(section);
      return next;
    });
  };

  return (
    <VisitedSectionsContext.Provider value={{ visited, markVisited }}>
      {children}
    </VisitedSectionsContext.Provider>
  );
};

export const useVisitedSections = () => {
  const context = useContext(VisitedSectionsContext);
  if (!context) throw new Error('useVisitedSections must be inside VisitedSectionsProvider');
  return context;
};
