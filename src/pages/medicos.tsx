import { useEffect, useState } from "react";
import { MedicosService } from "../services/medicos";
import type { Medico } from "../services/medicos";


export default function Medicos() {
  const [lista, setLista] = useState<Medico[]>([]);
  const [form, setForm] = useState({ nome: "", crm: "", id_especialidade: "" });

  async function carregar() {
    const dados = await MedicosService.listar();
    setLista(dados);
  }

  async function criar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await MedicosService.criar({
      nome: form.nome,
      crm: form.crm,
      id_especialidade: Number(form.id_especialidade || 0),
    });
    setForm({ nome: "", crm: "", id_especialidade: "" });
    await carregar();
  }

  async function remover(id: number) {
    await MedicosService.remover(id);
    await carregar();
  }

  const handleInput =
    (campo: "nome" | "crm" | "id_especialidade") =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [campo]: e.target.value });

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Médicos</h1>

      <form onSubmit={criar} className="flex gap-3">
        <input className="border p-2 rounded flex-1" placeholder="Nome" value={form.nome} onChange={handleInput("nome")} />
        <input className="border p-2 rounded flex-1" placeholder="CRM" value={form.crm} onChange={handleInput("crm")} />
        <input className="border p-2 rounded flex-1" placeholder="ID Especialidade" value={form.id_especialidade} onChange={handleInput("id_especialidade")} />
        <button className="bg-[#004AA8] text-white px-4 py-2 rounded">Criar</button>
      </form>

      <ul className="bg-white rounded shadow divide-y">
        {lista.map((m) => (
          <li key={m.id_medico} className="p-3 flex justify-between">
            <span>{m.nome} — CRM {m.crm}</span>
            <button onClick={() => remover(m.id_medico)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
