import { createContext, type ReactNode, useState } from "react";
import type { UsuarioLogin } from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
  usuario: UsuarioLogin;
  setUsuario: React.Dispatch<React.SetStateAction<UsuarioLogin>>; 
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}


interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  //const [usuario, setUsuario] = useState<UsuarioLogin>({} as UsuarioLogin);

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 2, 
    nome: "Nome do Usuário Fixo", // Opcional, pode ser qualquer coisa para fins de teste
    usuario: "usuario_fixo@email.com", // Opcional
    senha: "", // Não precisa da senha
    foto: "",
    token: "SEU_TOKEN_AQUI", // Opcional, mas você já está fixando no FormCurso
    funcao: "",
    data: new Date().toISOString(),
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);
      ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso")
    } catch (error) {
      ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro")
    }
    setIsLoading(false);
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
      funcao: "",
      data: new Date().toISOString(),
    });
  }

  return (
    <AuthContext.Provider
      value={{ usuario, setUsuario, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function ToastAlerta(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}

