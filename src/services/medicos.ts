import { api } from "../lib/api";

export type Medico = { id_medico: number } & Record<string, any>;
export type MedicoCreate = Omit<Medico, "id_medico">;
export type MedicoUpdate = Partial<MedicoCreate>;

export const MedicosService = {
  listar: async (): Promise<Medico[]> => {
    const { data } = await api.get("/medicos");
    return data ?? [];
  },
  criar: async (body: MedicoCreate) => {
    await api.post("/medicos", body);
  },
  atualizar: async (id: number, body: MedicoUpdate) => {
    await api.put(`/medicos/${id}`, body);
  },
  remover: async (id: number) => {
    await api.delete(`/medicos/${id}`);
  },
};
