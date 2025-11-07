import { useEffect, useState } from "react";
import { ProntuariosService } from "../services/prontuarios";
import type { Prontuario} from "../services/prontuarios";


export default function Prontuarios() {
  const [lista, setLista] = useState<Prontuario[]>([]);
  const [form, setForm] = useState({ id_paciente: "", diagnostico: "" });

  async function carregar() {
    const dados = await ProntuariosService.listar();
    setLista(dados);
  }

  async function criar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await ProntuariosService.criar({
      id_paciente: Number(form.id_paciente || 0),
      diagnostico: form.diagnostico,
    });
    setForm({ id_paciente: "", diagnostico: "" });
    await carregar();
  }

  async function remover(id: number) {
    await ProntuariosService.remover(id);
    await carregar();
  }

  const handleInput =
    (campo: "id_paciente" | "diagnostico") =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [campo]: e.target.value });

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Prontuários</h1>

      <form onSubmit={criar} className="flex gap-3">
        <input className="border p-2 rounded" placeholder="ID Paciente" value={form.id_paciente} onChange={handleInput("id_paciente")} />
        <input className="border p-2 rounded flex-1" placeholder="Diagnóstico" value={form.diagnostico} onChange={handleInput("diagnostico")} />
        <button className="bg-[#004AA8] text-white px-4 py-2 rounded">Criar</button>
      </form>

      <ul className="bg-white rounded shadow divide-y">
        {lista.map((p) => (
          <li key={p.id_prontuario} className="p-3 flex justify-between">
            <span>#{p.id_prontuario} — Pac {p.id_paciente} — {p.diagnostico}</span>
            <button onClick={() => remover(p.id_prontuario)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
