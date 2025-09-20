

interface LoginProps {
  setPage: (page: number) => void;
}

 function Login({ setPage }: LoginProps) {
  // ajuste a cor para o exato verde-água do seu Figma se quiser
  const aqua = "#0F8E89"; // troque por o hex do Figma se precisar

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
            style={{ color: "#0F8E89" }} // seu verde do Figma
            >
            Bem-vindo ao Hospital das Clínicas
            </h1>
            <p
            className="mt-1 font-semibold text-lg md:text-xl"
            style={{ color: "#0F8E89" }}
            >
            Sua saúde em primeiro lugar!
            </p>
        </div>
        </section>


      {/* Card de login (mais largo) */}
      <main className="flex flex-1 items-start justify-center">
        <div
          className="mt-6 bg-white rounded-2xl shadow-lg w-full
                     max-w-[780px] p-8 md:p-12"
        >
          <h3 className="text-center text-xl font-bold text-blue-900 mb-6">
            LOGIN
          </h3>

          {/* E-mail */}
          <label className="block text-left text-gray-700 mb-1">E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Senha */}
          <label className="block text-left text-gray-700 mb-1">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-end mb-5">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Esqueci minha senha
            </a>
          </div>

          {/* Botões lado a lado */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setPage(3)}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg
                         font-semibold hover:bg-blue-700 transition"
            >
              Entrar
            </button>
            <span className="text-gray-600 font-semibold">ou</span>
            <button
              onClick={() => setPage(2)}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg
                         font-semibold hover:bg-green-700 transition"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;


