import { useEffect, useState } from "react";
import { AgendamentosService, Agendamento } from "../services/agendamentos";

export default function Agendamentos() {
  const [lista, setLista] = useState<Agendamento[]>([]);
  const [form, setForm] = useState({ id_paciente: "", id_medico: "", data: "" });

  async function carregar() {
    const dados = await AgendamentosService.listar();
    setLista(dados);
  }

  async function criar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await AgendamentosService.criar({
      id_paciente: Number(form.id_paciente || 0),
      id_medico: Number(form.id_medico || 0),
      data: form.data,
    });
    setForm({ id_paciente: "", id_medico: "", data: "" });
    await carregar();
  }

  async function remover(id: number) {
    await AgendamentosService.remover(id);
    await carregar();
  }

  const handleInput =
    (campo: "id_paciente" | "id_medico" | "data") =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [campo]: e.target.value });

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Agendamentos</h1>

      <form onSubmit={criar} className="grid gap-3 md:grid-cols-4">
        <input className="border p-2 rounded" placeholder="ID Paciente" value={form.id_paciente} onChange={handleInput("id_paciente")} />
        <input className="border p-2 rounded" placeholder="ID Médico" value={form.id_medico} onChange={handleInput("id_medico")} />
        <input className="border p-2 rounded" placeholder="Data (YYYY-MM-DD)" value={form.data} onChange={handleInput("data")} />
        <button className="bg-[#004AA8] text-white px-4 py-2 rounded">Criar</button>
      </form>

      <ul className="bg-white rounded shadow divide-y">
        {lista.map((a) => (
          <li key={a.id_agendamento} className="p-3 flex justify-between">
            <span>#{a.id_agendamento} — Pac {a.id_paciente} — Med {a.id_medico} — {a.data}</span>
            <button onClick={() => remover(a.id_agendamento)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
