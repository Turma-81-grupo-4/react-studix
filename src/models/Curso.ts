import type Categorias from "./Categorias";
import type { Usuario } from "./Usuario";

export default interface Curso {
  id: number;
  titulo: string;
  descricao: string;
  data: string | Date;
  disponibilidade: boolean;
  vagas: number;
  categoria: Categorias | null;
  usuario: Usuario | null;
  participantes?: Usuario[];
}