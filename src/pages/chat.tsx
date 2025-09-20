interface ChatProps {
  setPage: (page: number) => void;
}

function Chat({ setPage }: ChatProps) {
  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
           <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        {/* Navegação */}
        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(3)}>
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(6)}>
            PERFIL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(7)}>
            FAQ
          </button>
          <button className="bg-[#0F8E89] py-2" onClick={() => setPage(14)}>
            CONTATO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(9)}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(8)}>
            TELECONSULTA
          </button>
        </nav>

        {/* Extras */}
        <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => setPage(10)}>
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <div className="flex-1 flex flex-col">
        {/* Barra superior com pesquisa */}
        <header className="flex justify-between items-center gap-6 mb-6 px-6 py-4 border-b bg-white">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Pesquisar no sistema..."
              className="flex-1 outline-none text-gray-700"
            />
            <span className="text-gray-500">🔍</span>
          </div>

          <div className="flex gap-8">
            <button className="text-center">
              <div className="text-3xl">🧓</div>
              <p className="text-sm">Modo Idoso</p>
            </button>
            <button className="text-center" onClick={() => setPage(6)}>
              <div className="text-3xl">👤</div>
              <p className="text-sm">Perfil</p>
            </button>
            <button onClick={() => setPage(1)} className="text-center">
              <div className="text-3xl">🚪</div>
              <p className="text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Área de Chat */}
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

