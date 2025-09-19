type PerfilProps = {
  setPage: (page: number) => void;
};

function Perfil({ setPage }: PerfilProps) {
  const aqua = "#0F8E89";

  return (
    <div className="min-h-screen bg-[#CDE6E7] flex flex-col">
      {/* Barra superior */}
      <header className="flex items-center justify-between px-3 py-4">
        <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-20" />
        </div>

        <nav className="flex gap-5 text-lg md:text-xl font-semibold">
          <button className="hover:text-blue-700">🧓 Modo Idoso</button>
          <button className="hover:text-blue-700">👤 Perfil</button>
          <button onClick={() => setPage(1)} className="hover:text-blue-700">
            🚪 Sair
          </button>
        </nav>
      </header>

      <div className="flex flex-1">
        {/* Menu lateral */}
        <aside className="w-64 bg-[#0F8E89] text-white flex flex-col py-6">
          <ul className="space-y-4 text-lg font-semibold px-6">
            <li className="bg-[#159b95] rounded-md px-3 py-2 cursor-pointer">
              PERFIL
            </li>
            <li className="hover:bg-[#159b95] rounded-md px-3 py-2 cursor-pointer">
              FAQ
            </li>
            <li className="hover:bg-[#159b95] rounded-md px-3 py-2 cursor-pointer">
              CONTATO
            </li>
            <li className="hover:bg-[#159b95] rounded-md px-3 py-2 cursor-pointer">
              AGENDAMENTO
            </li>
          </ul>

          <div className="mt-auto space-y-4 px-6">
            <button className="flex items-center gap-2 hover:underline">
              🎤 Assistente de voz
            </button>
            <button className="flex items-center gap-2 hover:underline">
              👥 Integrantes
            </button>
          </div>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6" style={{ color: aqua }}>
            Perfil
          </h1>

          <div className="bg-[#8dd3d1] rounded-lg p-6 flex items-center gap-6 max-w-2xl">
            <div>
              <p className="font-semibold">Nome: Conceição de Jesus</p>
              <p className="font-semibold">E-mail: conceicaojesus@gmail.com</p>
              <p className="font-semibold">CPF: 123.654.789-0</p>
            </div>

            <img
              src="/foto-senhora.png"
              alt="Foto de perfil"
              className="w-28 h-28 rounded-full object-cover border-2 border-white"
            />
          </div>

          <button
            onClick={() => alert("Função de editar ainda não implementada")}
            className="mt-6 bg-[#0F8E89] text-white font-semibold px-6 py-3
                       rounded-full hover:bg-[#0c6e6a] transition"
          >
            Editar perfil
          </button>
        </main>
      </div>
    </div>
  );
}

export default Perfil;