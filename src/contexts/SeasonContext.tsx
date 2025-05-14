import React, { createContext, useState, ReactNode } from "react";

interface SeasonContextType {
  season: string;
  setSeason: (season: string) => void;
}

export const SeasonContext = createContext<SeasonContextType>({
  season: "",
  setSeason: () => {},
});

export const SeasonProvider = ({ children }: { children: ReactNode }) => {
  const [season, setSeason] = useState("2023");
  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};
