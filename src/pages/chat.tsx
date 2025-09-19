interface ChatProps {
  setPage: (page: number) => void;
}

function Chat({ setPage }: ChatProps) {
  return (
    <div className="min-h-screen flex">
      {/* Menu lateral */}
      <aside className="w-64 bg-[#0F8E89] text-white flex flex-col items-center py-6">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/NOVO-LOGO-HC.png"
            alt="Hospital das Clínicas"
            className="h-32 mx-auto"
          />
        </div>

        {/* Menu */}
        <nav className="flex flex-col w-full px-4 space-y-2 font-semibold">
          <button onClick={() => setPage(3)} className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">PERFIL</button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">FAQ</button>
          <button className="bg-[#0C6E6A] py-2 rounded text-center">CONTATO</button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">AGENDAMENTO</button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">TELECONSULTA</button>
        </nav>

        {/* Extras */}
        <div className="mt-auto w-full px-4 space-y-2">
          <button className="bg-[#0C6E6A] py-2 rounded w-full flex items-center justify-center gap-2">
            🎤 Assistente de voz
          </button>
          <button className="bg-[#0C6E6A] py-2 rounded w-full flex items-center justify-center gap-2">
            👥 Integrantes
          </button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        {/* Barra superior */}
        <header className="flex justify-between items-center px-6 py-4 border-b">
          {/* Barra de pesquisa */}
          <div className="flex items-center w-1/2">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full border border-[#0F8E89] rounded-full px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Botões direita */}
          <div className="flex items-center gap-6 font-semibold">
            <button>🚶 Modo Idoso</button>
            <button>👤 Perfil</button>
            <button onClick={() => setPage(3)}>🚪 Sair</button>
          </div>
        </header>

        {/* Chat */}
        <main className="flex-1 p-6 flex flex-col space-y-4 overflow-y-auto">
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
              <p>
                Claro! Com qual especialidade médica você gostaria de marcar a consulta?
              </p>
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
        </main>

        {/* Input de mensagem */}
        <footer className="p-4 border-t flex items-center gap-3">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-[#0F8E89] text-white px-4 py-2 rounded-full hover:bg-[#0c6e6a] transition">
            ➤
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Chat;
