import { useEffect, useState } from "react";
import { PacientesService } from "../services/pacientes";
import type { Paciente } from "../services/pacientes";

export default function Pacientes() {
  const [lista, setLista] = useState<Paciente[]>([]);
  const [form, setForm] = useState({ nome: "", cpf: "" });

  async function carregar() {
    const dados = await PacientesService.listar();
    setLista(dados);
  }

  async function criar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await PacientesService.criar(form);
    setForm({ nome: "", cpf: "" });
    await carregar();
  }

  async function remover(id: number) {
    await PacientesService.remover(id);
    await carregar();
  }

  // handler tipado para inputs
  const handleInput =
    (campo: "nome" | "cpf") =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [campo]: e.target.value });

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Pacientes</h1>

      <form onSubmit={criar} className="flex gap-3">
        <input
          className="border p-2 rounded flex-1"
          placeholder="Nome"
          value={form.nome}
          onChange={handleInput("nome")}
        />
        <input
          className="border p-2 rounded flex-1"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleInput("cpf")}
        />
        <button className="bg-[#004AA8] text-white px-4 py-2 rounded">
          Criar
        </button>
      </form>

      <ul className="bg-white rounded shadow divide-y">
        {lista.map((p) => (
          <li key={p.id_paciente} className="p-3 flex justify-between">
            <span>
              {p.nome} — {p.cpf}
            </span>
            <button
              onClick={() => remover(p.id_paciente)}
              className="text-red-600"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
