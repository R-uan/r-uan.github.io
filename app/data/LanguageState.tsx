import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface LanguageContextValue {
  isPortuguese: boolean;
  setPortuguese: React.Dispatch<SetStateAction<boolean>>;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isPortuguese, setPortuguese] = useState<boolean>(true);
  return (
    <LanguageContext.Provider value={{ isPortuguese, setPortuguese }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context == null) throw new Error("Context used outside Provider");
  return context;
}
