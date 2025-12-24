import React, { createContext, useState, useContext, useEffect } from "react";

// PERBAIKAN 1: Import type secara eksplisit
import type { ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "id",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Cek apakah ada bahasa tersimpan di LocalStorage
  const savedLang = localStorage.getItem("appLanguage") as Language;
  const [language, setLanguage] = useState<Language>(savedLang || "id");

  // Simpan ke LocalStorage setiap kali bahasa berubah
  useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
