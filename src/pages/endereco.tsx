interface EnderecoProps {
  setPage: (page: number) => void;
}

function Endereco({ setPage }: EnderecoProps) {
  const aqua = "#0F8E89";

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
          <button
            onClick={() => setPage(3)}
            className="hover:bg-[#0C6E6A] py-2 rounded text-center"
          >
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            PERFIL
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            FAQ
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            CONTATO
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            TELECONSULTA
          </button>
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

        {/* Área central */}
        <main className="flex-1 p-10">
          <h2 className="text-2xl font-bold text-[#0F8E89] mb-6">Endereço</h2>

          <iframe
            className="w-full h-96 rounded-lg shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.158430167192!2d-46.668957523987646!3d-23.563099361648103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c807d46f09%3A0x7df5b57a4bcb59a7!2sHospital%20das%20Cl%C3%ADnicas%20da%20FMUSP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
          ></iframe>

          {/* Rodapé com endereço */}
          <div className="mt-6 bg-[#CDE6E7] text-center font-semibold py-3 rounded">
            Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César, São Paulo - SP, 05403-000
          </div>
        </main>
      </div>
    </div>
  );
}

export default Endereco;



