import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Voz from "../components/voz";

function Agendamento() {
  const navigate = useNavigate();

  const [tipo, setTipo] = useState<"presencial" | "teleconsulta">("presencial");
  const [busca, setBusca] = useState("");
  const [selecionadoEspecialidade, setSelecionadoEspecialidade] = useState<string | null>(null);
  const [selecionadoDia, setSelecionadoDia] = useState<string | null>(null);
  const [selecionadoHorario, setSelecionadoHorario] = useState<string | null>(null);

  const [especialidades, setEspecialidades] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setEspecialidades([
        "Clínica geral",
        "Cardiologia",
        "Dermatologia",
        "Ginecologia",
        "Neurologia",
        "Otorrinolaringologia",
        "Pneumologia",
      ]);
    }, 500);
  }, []);

  const filtradas = especialidades.filter((e) =>
    e.toLowerCase().includes(busca.toLowerCase())
  );

  const diasDisponiveis = ["05/10/2025", "06/10/2025", "07/10/2025", "10/10/2025"];
  const horariosDisponiveis = ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"];

  return (
    // mantém layout em linha SEMPRE (menu à esquerda)
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL – sempre à esquerda, com largura responsiva */}
      <aside
        className="
          w-40 sm:w-48 md:w-64 shrink-0
          bg-[#004A80] text-white flex flex-col items-center py-6
          sticky top-0 h-screen overflow-y-auto
        "
      >
        <div className="flex items-center gap-3 mb-6">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-14 sm:h-16 md:h-20" />
        </div>

        <nav className="flex flex-col gap-2 w-full text-center font-semibold text-xs sm:text-sm md:text-lg">
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/home")}>
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/perfil")}>
            PERFIL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/faq")}>
            FAQ
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/contato")}>
            CONTATO
          </button>
          <button className="bg-[#0F8E89] py-2" onClick={() => navigate("/agendamento")}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/teleconsulta")}>
            TELECONSULTA
          </button>
        </nav>

        <div className="mt-8 flex flex-col gap-6 items-center">
         <div className="mt-10 flex flex-col gap-6 items-center">
            <Voz />
          <button className="flex flex-col items-center" onClick={() => navigate("/integrantes")}>
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
          </div>
       
          <button className="text-center">
              <div className="text-2xl md:text-3xl">🧓</div>
              <p className="text-[11px] sm:text-xs md:text-sm">Modo Idoso</p>
            </button>
        </div>
      </aside>

      {/* CONTEÚDO – ocupa o restante, sem criar rolagem horizontal */}
      <main className="flex-1 min-w-0 bg-[#F6FAFB] p-3 sm:p-4 md:p-6 overflow-x-hidden">
        {/* Barra superior com pesquisa */}
        <header className="flex justify-between items-center gap-3 sm:gap-4 mb-6 px-3 sm:px-4 py-3 border-b bg-white rounded">
          <div className="flex items-center border border-gray-300 rounded-full px-3 sm:px-4 py-2 bg-white w-full max-w-md">
            <input
              type="text"
              placeholder="Pesquisar no sistema..."
              className="flex-1 outline-none text-gray-700 text-sm md:text-base"
            />
            <span className="text-gray-500">🔍</span>
          </div>

          <div className="hidden xs:flex gap-3 sm:gap-6">
            
            <button onClick={() => navigate("/perfil")} className="text-center">
              <div className="text-2xl md:text-3xl">👤</div>
              <p className="text-[11px] sm:text-xs md:text-sm">Perfil</p>
            </button>
            <button onClick={() => navigate("/")} className="text-center">
              <div className="text-2xl md:text-3xl">🚪</div>
              <p className="text-[11px] sm:text-xs md:text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Agendamento */}
        <section className="max-w-4xl mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#004A80]">
            Agendamento
          </h1>

          {/* Botões de escolha */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
            <button
              onClick={() => setTipo("presencial")}
              className={`px-4 sm:px-5 md:px-6 py-2 rounded-full font-semibold ${
                tipo === "presencial" ? "bg-[#0F8E89] text-white" : "bg-gray-400 text-white"
              }`}
            >
              Presencial
            </button>
            <button
              onClick={() => setTipo("teleconsulta")}
              className={`px-4 sm:px-5 md:px-6 py-2 rounded-full font-semibold ${
                tipo === "teleconsulta" ? "bg-[#0F8E89] text-white" : "bg-gray-400 text-white"
              }`}
            >
              Teleconsulta
            </button>
          </div>

          {/* Campo de busca + sugestões */}
          <div className="mb-4">
            <label className="font-semibold block mb-2">Selecione a especialidade:</label>
            <div className="flex flex-col border border-gray-300 rounded-lg bg-white">
              <input
                type="text"
                placeholder="Digite a especialidade"
                className="p-2 outline-none text-sm md:text-base"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              {busca.length > 0 && (
                <ul className="divide-y max-h-48 overflow-y-auto">
                  {filtradas.length > 0 ? (
                    filtradas.map((e, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          setSelecionadoEspecialidade(e);
                          setBusca(e);
                        }}
                        className="p-2 hover:bg-[#CDE6E7] cursor-pointer text-[#0F8E89] font-medium"
                      >
                        {e}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">Nenhuma especialidade encontrada</li>
                  )}
                </ul>
              )}
            </div>
          </div>

          {/* Escolha de dia */}
          {selecionadoEspecialidade && (
            <div className="mb-4">
              <label className="font-semibold block mb-2">Escolha o dia da consulta:</label>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {diasDisponiveis.map((dia, i) => (
                  <button
                    key={i}
                    onClick={() => setSelecionadoDia(dia)}
                    className={`px-3 sm:px-4 py-2 rounded-full font-medium ${
                      selecionadoDia === dia ? "bg-[#0F8E89] text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {dia}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Escolha de horário */}
          {selecionadoDia && (
            <div className="mb-4">
              <label className="font-semibold block mb-2">Escolha o horário disponível:</label>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {horariosDisponiveis.map((hora, i) => (
                  <button
                    key={i}
                    onClick={() => setSelecionadoHorario(hora)}
                    className={`px-3 sm:px-4 py-2 rounded-full font-medium ${
                      selecionadoHorario === hora ? "bg-[#0F8E89] text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confirmação */}
          {selecionadoEspecialidade && selecionadoDia && selecionadoHorario && (
            <div className="mt-6 p-4 bg-[#CDE6E7] rounded-lg font-semibold text-[#004A80] text-sm md:text-base">
              ✅ Consulta de <b>{selecionadoEspecialidade}</b> marcada para o dia <b>{selecionadoDia}</b> às{" "}
              <b>{selecionadoHorario}</b> ({tipo}).
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Agendamento;




