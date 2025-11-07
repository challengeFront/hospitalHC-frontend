import { api } from "../lib/api";

export type Especialidade = { id_especialidade: number } & Record<string, any>;
export type EspecialidadeCreate = Omit<Especialidade, "id_especialidade">;
export type EspecialidadeUpdate = Partial<EspecialidadeCreate>;

export const EspecialidadesService = {
  listar: async (): Promise<Especialidade[]> => {
    const { data } = await api.get("/especialidades");
    return data ?? [];
  },
  criar: async (body: EspecialidadeCreate) => {
    await api.post("/especialidades", body);
  },
  atualizar: async (id: number, body: EspecialidadeUpdate) => {
    await api.put(`/especialidades/${id}`, body);
  },
  remover: async (id: number) => {
    await api.delete(`/especialidades/${id}`);
  },
};
