import { useNavigate, useLocation } from "react-router-dom";

function Perfil() {
  const dados = {
    nome: "Conceição de Jesus",
    email: "conceicaojesus@gmail.com",
    cpf: "123.654.789-0",
    telefone: "(11) 98765-4321",
    nascimento: "15/04/1950",
    endereco: "Rua das Flores, 123 - São Paulo/SP",
    cartaoSUS: "898 0012 3456 7890",
    convenio: "Unimed - Nacional Especial",
  };

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "bg-[#0F8E89]" : "hover:bg-[#0F8E89]";

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
        <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
          <button className={`${isActive("/home")} py-2`} onClick={() => navigate("/home")}>
            PÁGINA INICIAL
          </button>
          <button className={`${isActive("/perfil")} py-2`} onClick={() => navigate("/perfil")}>
            PERFIL
          </button>
          <button className={`${isActive("/faq")} py-2`} onClick={() => navigate("/faq")}>
            FAQ
          </button>
          <button className={`${isActive("/contato")} py-2`} onClick={() => navigate("/contato")}>
            CONTATO
          </button>
          <button className={`${isActive("/agendamento")} py-2`} onClick={() => navigate("/agendamento")}>
            AGENDAMENTO
          </button>
          <button className={`${isActive("/teleconsulta")} py-2`} onClick={() => navigate("/teleconsulta")}>
            TELECONSULTA
          </button>
        </nav>

        <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={() => navigate("/integrantes")}
          >
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-[#F6FAFB] p-6">
        {/* Barra superior com pesquisa */}
        <header className="flex justify-between items-center gap-6 mb-6">
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
            <button className="text-center" onClick={() => navigate("/perfil")}>
              <div className="text-3xl">👤</div>
              <p className="text-sm">Perfil</p>
            </button>
            <button onClick={() => navigate("/")} className="text-center">
              <div className="text-3xl">🚪</div>
              <p className="text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Perfil */}
        <section>
          <h1 className="text-2xl font-bold mb-6 text-[#004A80]">Perfil</h1>

          <div className="bg-[#CDE6E7] rounded-lg p-6 max-w-2xl shadow-md space-y-3">
            <p className="font-semibold">Nome: {dados.nome}</p>
            <p className="font-semibold">E-mail: {dados.email}</p>
            <p className="font-semibold">CPF: {dados.cpf}</p>
            <p className="font-semibold">Telefone: {dados.telefone}</p>
            <p className="font-semibold">Data de Nascimento: {dados.nascimento}</p>
            <p className="font-semibold">Endereço: {dados.endereco}</p>
            <p className="font-semibold">Cartão SUS: {dados.cartaoSUS}</p>
            <p className="font-semibold">Convênio: {dados.convenio}</p>
          </div>

          <button
            onClick={() => alert("Função de editar ainda não implementada")}
            className="mt-6 bg-[#0F8E89] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0c6e6a] transition"
          >
            Editar perfil
          </button>
        </section>
      </main>
    </div>
  );
}

export default Perfil;

