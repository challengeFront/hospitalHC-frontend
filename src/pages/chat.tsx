import { useNavigate } from "react-router-dom";
import Voz from "../components/voz";
import ModoIdoso from "../components/modoidoso";

function Chat() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL – mesmo padrão do Agendamento */}
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
          <button className="bg-[#0F8E89] py-2" onClick={() => navigate("/contato")}>
            CONTATO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/agendamento")}>
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

          {/* Botão do Modo Idoso */}
          <ModoIdoso />
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 min-w-0 bg-[#F6FAFB] flex flex-col">
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

        {/* Área de Chat */}
        <section className="flex-1 p-4 sm:p-6 flex flex-col space-y-4 overflow-y-auto max-w-4xl mx-auto w-full">
          {/* Mensagem do assistente */}
          <div className="flex items-start">
            <div className="bg-[#CDE6E7] px-4 py-2 rounded-lg max-w-xl">
              <p>
                Olá! Eu sou a Helena, assistente virtual do Hospital das Clínicas.  
                Como posso te ajudar? Você pode: agendar consultas, consultar horários,  
                saber onde ficam os setores, entender exames ou falar com um atendente.
              </p>
            </div>
          </div>

          {/* Mensagem do usuário */}
          <div className="flex items-start justify-end">
            <div className="bg-gray-200 px-4 py-2 rounded-lg max-w-xl">
              <p>Olá! Eu gostaria de agendar uma consulta.</p>
            </div>
          </div>

          {/* Assistente */}
          <div className="flex items-start">
            <div className="bg-[#CDE6E7] px-4 py-2 rounded-lg max-w-xl">
              <p>Claro! Com qual especialidade médica você gostaria de marcar a consulta?</p>
            </div>
          </div>

          {/* Usuário */}
          <div className="flex items-start justify-end">
            <div className="bg-gray-200 px-4 py-2 rounded-lg max-w-xl">
              <p>Gostaria de uma consulta com um cardiologista.</p>
            </div>
          </div>

          {/* Assistente */}
          <div className="flex items-start">
            <div className="bg-[#CDE6E7] px-4 py-2 rounded-lg max-w-xl">
              <p>
                Perfeito! Temos horários disponíveis amanhã às 10h ou na sexta às 15h.  
                Qual prefere agendar?
              </p>
            </div>
          </div>

          {/* Usuário */}
          <div className="flex items-start justify-end">
            <div className="bg-gray-200 px-4 py-2 rounded-lg max-w-xl">
              <p>Amanhã às 10h está ótimo.</p>
            </div>
          </div>

          {/* Assistente */}
          <div className="flex items-start">
            <div className="bg-[#CDE6E7] px-4 py-2 rounded-lg max-w-xl">
              <p>
                Consulta marcada com sucesso! ✅  
                Um lembrete será enviado para o seu e-mail cadastrado.
              </p>
            </div>
          </div>
        </section>

        {/* Input de mensagem */}
        <footer className="p-3 sm:p-4 border-t flex items-center gap-3">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-1 border rounded-full px-3 sm:px-4 py-2 focus:outline-none text-sm md:text-base"
          />
          <button className="bg-[#0F8E89] text-white px-4 py-2 rounded-full hover:bg-[#0c6e6a] transition">
            ➤
          </button>
        </footer>
      </main>
    </div>
  );
}

export default Chat;





