import { createContext, useContext, useState } from "react";

interface AtualizaCursosContextProps {
  atualizar: number;
  notificar: () => void;
}

const AtualizaCursosContext = createContext<AtualizaCursosContextProps>({
  atualizar: 0,
  notificar: () => {},
});

export function useAtualizaCursos() {
  return useContext(AtualizaCursosContext);
}

export function AtualizaCursosProvider({ children }: { children: React.ReactNode }) {
  const [atualizar, setAtualizar] = useState(0);

  function notificar() {
    setAtualizar((prev) => prev + 1);
  }

  return (
    <AtualizaCursosContext.Provider value={{ atualizar, notificar }}>
      {children}
    </AtualizaCursosContext.Provider>
  );
}