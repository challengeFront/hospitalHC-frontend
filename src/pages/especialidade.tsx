import { useEffect, useState } from "react";
import { EspecialidadesService, Especialidade } from "../services/especialidades";

export default function Especialidades() {
  const [lista, setLista] = useState<Especialidade[]>([]);
  const [form, setForm] = useState({ nome: "" });

  async function carregar() {
    const dados = await EspecialidadesService.listar();
    setLista(dados);
  }

  async function criar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await EspecialidadesService.criar({ nome: form.nome });
    setForm({ nome: "" });
    await carregar();
  }

  async function remover(id: number) {
    await EspecialidadesService.remover(id);
    await carregar();
  }

  const handleInput =
    (campo: "nome") =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [campo]: e.target.value });

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Especialidades</h1>

      <form onSubmit={criar} className="flex gap-3">
        <input className="border p-2 rounded flex-1" placeholder="Nome" value={form.nome} onChange={handleInput("nome")} />
        <button className="bg-[#004AA8] text-white px-4 py-2 rounded">Criar</button>
      </form>

      <ul className="bg-white rounded shadow divide-y">
        {lista.map((e) => (
          <li key={e.id_especialidade} className="p-3 flex justify-between">
            <span>{e.nome}</span>
            <button onClick={() => remover(e.id_especialidade)} className="text-red-600">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
