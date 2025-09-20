interface CadastroProps {
  setPage: (page: number) => void;
}

function Cadastro({ setPage }: CadastroProps) {
  const aqua = "#0F8E89"; // cor verde-água do Figma

  return (
    <div className="min-h-screen bg-[#CDE6E7] flex flex-col">
      {/* Barra superior */}
      <header className="flex items-center justify-between px-3 py-4">
        {/* Logo + nome */}
        <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        {/* Ações */}
        <nav className="flex gap-5 text-lg md:text-xl font-semibold">
          <button className="hover:text-blue-700">🧓 Modo Idoso</button>
          <button className="hover:text-blue-700">🎤 Assistente de voz</button>
          <button className="hover:text-blue-700" onClick={() => setPage(10)}>👥 Integrantes</button>
        </nav>
      </header>

      {/* Título fora do card */}
      <section className="flex justify-center px-6 mt-4">
        <div className="w-full max-w-5xl text-center">
          <h1
            className="font-extrabold tracking-tight leading-tight text-3xl md:text-4xl"
            style={{ color: aqua }}
          >
            Cadastro no Hospital das Clínicas
          </h1>
          <p
            className="mt-1 font-semibold text-lg md:text-xl"
            style={{ color: aqua }}
          >
            Preencha seus dados para continuar
          </p>
        </div>
      </section>

      {/* Card de cadastro (mais largo) */}
      <main className="flex flex-1 items-start justify-center">
        <div
          className="mt-6 bg-white rounded-2xl shadow-lg w-full
                     max-w-[780px] p-8 md:p-12"
        >
          <h3 className="text-center text-xl font-bold text-[#0F8E89] mb-6">
            CADASTRO
          </h3>

          {/* Nome */}
          <label className="block text-left text-gray-700 mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full
                       focus:outline-none focus:ring-2 focus:ring-[#0F8E89]"
          />

          {/* E-mail */}
          <label className="block text-left text-gray-700 mb-1">E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full
                       focus:outline-none focus:ring-2 focus:ring-[#0F8E89]"
          />

          {/* CPF */}
          <label className="block text-left text-gray-700 mb-1">CPF</label>
          <input
            type="text"
            placeholder="Digite seu CPF"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full
                       focus:outline-none focus:ring-2 focus:ring-[#0F8E89]"
          />

          {/* Senha */}
          <label className="block text-left text-gray-700 mb-1">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full p-3 mb-6 border border-gray-300 rounded-full
                       focus:outline-none focus:ring-2 focus:ring-[#0F8E89]"
          />

          {/* Botão */}
          <button
            onClick={() => setPage(3)}
            className="w-full bg-[#0F8E89] text-white font-semibold py-3
                       rounded-full hover:bg-[#0c6e6a] transition"
          >
            Cadastrar
          </button>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;


