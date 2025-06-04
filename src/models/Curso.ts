export default interface Curso {
  usuario: any;
  id: number;
  titulo: string;
  descricao: string;
  data: Date;
  disponibilidade: boolean;
  vagas: number;
  //categoria: Categoria | null;
  //usuario: Usuario | null;
}