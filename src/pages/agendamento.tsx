import { useState } from "react";

interface AgendamentoProps {
  setPage: (page: number) => void;
}

function Agendamento({ setPage }: AgendamentoProps) {
  const [tipo, setTipo] = useState<"presencial" | "teleconsulta">("presencial");
  const [busca, setBusca] = useState("");
  const [mostrarLista, setMostrarLista] = useState(false);
  const [selecionado, setSelecionado] = useState<string | null>(null);

  const especialidades = [
    "Clínica geral",
    "Cardiologia",
    "Dermatologia",
    "Ginecologia",
    "Neurologia",
    "Otorrinolaringologia",
    "Pneumologia",
  ];

  const filtradas = especialidades.filter((e) =>
    e.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
        <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-28 mb-6" />

        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(1)}>
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(2)}>
            PERFIL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(3)}>
            FAQ
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(4)}>
            CONTATO
          </button>
          <button className="bg-[#0F8E89] py-2" onClick={() => setPage(5)}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(6)}>
            TELECONSULTA
          </button>
        </nav>

        <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-[#F6FAFB] p-6">
        {/* Barra superior */}
        <header className="flex justify-end items-center gap-8 mb-6">
          <button className="text-center">
            <div className="text-3xl">🧓</div>
            <p className="text-sm">Modo Idoso</p>
          </button>
          <button className="text-center">
            <div className="text-3xl">👤</div>
            <p className="text-sm">Perfil</p>
          </button>
          <button className="text-center">
            <div className="text-3xl">🚪</div>
            <p className="text-sm">Sair</p>
          </button>
        </header>

        {/* Agendamento */}
        <section>
          <h1 className="text-2xl font-bold mb-4 text-[#004A80]">
            Agendamento
          </h1>

          {/* Botões de escolha */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setTipo("presencial")}
              className={`px-6 py-2 rounded-full font-semibold ${
                tipo === "presencial"
                  ? "bg-[#0F8E89] text-white"
                  : "bg-gray-400 text-white"
              }`}
            >
              Presencial
            </button>
            <button
              onClick={() => setTipo("teleconsulta")}
              className={`px-6 py-2 rounded-full font-semibold ${
                tipo === "teleconsulta"
                  ? "bg-[#0F8E89] text-white"
                  : "bg-gray-400 text-white"
              }`}
            >
              Teleconsulta
            </button>
          </div>

          {/* Campo de busca */}
          <div className="mb-4">
            <label className="font-semibold block mb-2">
              Selecione a especialidade:
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white">
              <input
                type="text"
                placeholder="Digite a especialidade"
                className="flex-1 p-2 outline-none"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <button
                className="text-gray-700 font-bold text-lg ml-2"
                onClick={() => setMostrarLista(!mostrarLista)}
              >
                🔍
              </button>
            </div>
          </div>

          {/* Lista só aparece se clicar na lupa */}
          {mostrarLista && (
            <ul className="bg-white border border-gray-300 rounded-lg divide-y max-w-lg">
              {filtradas.map((e, i) => (
                <li
                  key={i}
                  onClick={() => setSelecionado(e)}
                  className="p-3 hover:bg-[#CDE6E7] cursor-pointer text-[#0F8E89] font-medium"
                >
                  {e}
                </li>
              ))}
              {filtradas.length === 0 && (
                <li className="p-3 text-gray-500">Nenhuma especialidade encontrada</li>
              )}
            </ul>
          )}

          {/* Mostra seleção */}
          {selecionado && (
            <p className="mt-4 font-semibold text-[#0F8E89]">
              ✅ {selecionado} selecionado
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Agendamento;
