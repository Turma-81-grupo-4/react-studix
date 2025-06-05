import type Curso from "./Curso";

export default interface Categorias {
  id: number;
  categoria: string;
  curso?: Curso[] | null;
}
