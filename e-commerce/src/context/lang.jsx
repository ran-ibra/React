import { createContext, useState } from "react";

export const Lang = createContext();

export default function Language({ children }) {
  const [lang, setLang] = useState("en"); 

  const value = { lang, setLang };

  return (
    <Lang.Provider value={value}>
      {children}
    </Lang.Provider>
  );
}
