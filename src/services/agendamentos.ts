import { api } from "../lib/api";

export type Agendamento = { id_agendamento: number } & Record<string, any>;
export type AgendamentoCreate = Omit<Agendamento, "id_agendamento">;
export type AgendamentoUpdate = Partial<AgendamentoCreate>;

export const AgendamentosService = {
  listar: async (): Promise<Agendamento[]> => {
    const { data } = await api.get("/agendamentos");
    return data ?? [];
  },
  criar: async (body: AgendamentoCreate) => {
    await api.post("/agendamentos", body);
  },
  atualizar: async (id: number, body: AgendamentoUpdate) => {
    await api.put(`/agendamentos/${id}`, body);
  },
  remover: async (id: number) => {
    await api.delete(`/agendamentos/${id}`);
  },
};
