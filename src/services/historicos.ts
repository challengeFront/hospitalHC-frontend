import { api } from "../lib/api";

export type Historico = { id_historico: number } & Record<string, any>;
export type HistoricoCreate = Omit<Historico, "id_historico">;

export const HistoricosService = {
  listar: async (): Promise<Historico[]> => {
    const { data } = await api.get("/historicos");
    return data ?? [];
  },
  criar: async (body: HistoricoCreate) => {
    await api.post("/historicos", body);
  },
  remover: async (id: number) => {
    await api.delete(`/historicos/${id}`);
  },
};
