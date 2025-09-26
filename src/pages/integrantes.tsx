import { useNavigate } from "react-router-dom";
import Voz from "../components/voz";
import ModoIdoso from "../components/modoidoso";

function Integrantes() {
  const navigate = useNavigate();

  const integrantes = [
    { nome: "Julia Queiroz de Oliveira", rm: "561583", sala: "1TDSPI" },
    { nome: "Maria Luiza Alves de Aquino", rm: "561802", sala: "1TDSPI" },
    { nome: "Juliana da Silva Stigliani", rm: "561171", sala: "1TDSPJ" },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside
        className="
          w-40 sm:w-48 md:w-64 shrink-0
          bg-[#004A80] text-white flex flex-col items-center py-6
          sticky top-0 h-screen overflow-y-auto
        "
      >
        <div className="flex items-center gap-3 mb-6">
         
          <button  onClick={() => navigate("/home")}>
            <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-14 sm:h-16 md:h-20" />
          </button>
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
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/agendamento")}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/teleconsulta")}>
            TELECONSULTA
          </button>
          <button className="bg-[#0F8E89] py-2">INTEGRANTES</button>
        </nav>

        {/* Extras */}
        <div className="mt-8 flex flex-col gap-6 items-center">
          <div className="mt-10 flex flex-col gap-6 items-center">
            <Voz />
            <button
              className="flex flex-col items-center"
              onClick={() => navigate("/integrantes")}
            >
              <span className="text-3xl">👥</span>
              <span className="text-sm">Integrantes</span>
            </button>
          </div>

          {/* Botão funcional do Modo Idoso */}
          <ModoIdoso />
        </div>
      </aside>

      {/* CONTEÚDO */}
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

        {/* Lista de Integrantes */}
        <section className="max-w-3xl mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-[#004A80]">
            Integrantes
          </h1>

          <ul className="space-y-3 text-sm sm:text-base md:text-lg">
            {integrantes.map((pessoa, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3"
              >
                <span className="font-semibold">{pessoa.nome}</span>
                <span className="text-gray-700">RM {pessoa.rm}</span>
                <span className="text-gray-600 italic">{pessoa.sala}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Integrantes;





