import { useEffect, useState } from "react";
import { HistoricosService } from "../services/historicos";
import type { Historico } from "../services/historicos";


export default function Historicos() {
  const [lista, setLista] = useState<Historico[]>([]);
  const [form, setForm] = useState({ id_paciente: "", descricao: "" });

  async function carregar() {
    const dados = await HistoricosService.listar();
    setLista(dados);
  }

  async function criar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await HistoricosService.criar({
      id_paciente: Number(form.id_paciente || 0),
      descricao: form.descricao,
    });
    setForm({ id_paciente: "", descricao: "" });
    await carregar();
  }

  async function remover(id: number) {
    await HistoricosService.remover(id);
    await carregar();
  }

  const handleInput =
    (campo: "id_paciente" | "descricao") =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [campo]: e.target.value });

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Históricos</h1>

      <form onSubmit={criar} className="flex gap-3">
        <input className="border p-2 rounded" placeholder="ID Paciente" value={form.id_paciente} onChange={handleInput("id_paciente")} />
        <input className="border p-2 rounded flex-1" placeholder="Descrição" value={form.descricao} onChange={handleInput("descricao")} />
        <button className="bg-[#004AA8] text-white px-4 py-2 rounded">Criar</button>
      </form>

      <ul className="bg-white rounded shadow divide-y">
        {lista.map((h) => (
          <li key={h.id_historico} className="p-3 flex justify-between">
            <span>#{h.id_historico} — Pac {h.id_paciente} — {h.descricao}</span>
            <button onClick={() => remover(h.id_historico)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
