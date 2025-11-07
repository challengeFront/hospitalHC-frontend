import { api } from "../lib/api";

export type Prontuario = { id_prontuario: number } & Record<string, any>;
export type ProntuarioCreate = Omit<Prontuario, "id_prontuario">;
export type ProntuarioUpdate = Partial<ProntuarioCreate>;

export const ProntuariosService = {
  listar: async (): Promise<Prontuario[]> => {
    const { data } = await api.get("/prontuarios");
    return data ?? [];
  },
  criar: async (body: ProntuarioCreate) => {
    await api.post("/prontuarios", body);
  },
  atualizar: async (id: number, body: ProntuarioUpdate) => {
    await api.put(`/prontuarios/${id}`, body);
  },
  remover: async (id: number) => {
    await api.delete(`/prontuarios/${id}`);
  },
};
