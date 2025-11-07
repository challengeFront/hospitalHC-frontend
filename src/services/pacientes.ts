import { api } from "../lib/api";

export interface Paciente {
  id_paciente: number;
  nome: string;
  cpf: string;
}

export const PacientesService = {
  listar: async (): Promise<Paciente[]> => {
    const { data } = await api.get("/pacientes");
    return data;
  },
  criar: async (body: Omit<Paciente, "id_paciente">) => {
    await api.post("/pacientes", body);
  },
  remover: async (id: number) => {
    await api.delete(`/pacientes/${id}`);
  },
};
