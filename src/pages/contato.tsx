import { useNavigate } from "react-router-dom";

function Contato() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
        <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
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

        <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => navigate("/integrantes")}>
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-[#F6FAFB] p-6">
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
            <button onClick={() => navigate("/perfil")} className="text-center">
              <div className="text-3xl">👤</div>
              <p className="text-sm">Perfil</p>
            </button>
            <button onClick={() => navigate("/")} className="text-center">
              <div className="text-3xl">🚪</div>
              <p className="text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Formulário de contato */}
        <section className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex flex-col items-center mb-6">
            <span className="text-5xl">📞</span>
            <h1 className="text-2xl font-bold mt-2 text-[#004A80]">Contato</h1>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Nome</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">E-mail</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                placeholder="Digite seu e-mail"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Telefone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Mensagem</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                rows={4}
                placeholder="Escreva sua mensagem..."
              />
            </div>

            <button
              type="submit"
              className="bg-[#0F8E89] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0c6e6a] transition"
            >
              Enviar mensagem
            </button>
          </form>

          {/* Informações extras */}
          <div className="mt-6 text-center text-gray-700">
            <p><b>Telefone:</b> (11) 4002-8922</p>
            <p><b>E-mail:</b> contato@hc.com.br</p>
            <p><b>Endereço:</b> Av. Paulista, 1234 - São Paulo/SP</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contato;

