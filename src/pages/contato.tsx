import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Voz from "../components/voz";
import ModoIdoso from "../components/modoidoso";

interface ContatoFormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

function Contato() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset, // 👈 IMPORTANTE: adiciona o reset
    formState: { errors },
  } = useForm<ContatoFormData>();

  const onSubmit = (data: ContatoFormData) => {
    console.log("Mensagem enviada:", data);
    alert("Mensagem enviada com sucesso!");

    reset(); // 👈 aqui ele limpa todos os campos depois de enviar
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL – fixo e responsivo */}
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

        {/* Ações extras no menu */}
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

        {/* Formulário de contato */}
        <section className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex flex-col items-center mb-6">
            <span className="text-5xl">📞</span>
            <h1 className="text-xl sm:text-2xl font-bold mt-2 text-[#004A80]">Contato</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Nome</label>
              <input
                type="text"
                {...register("nome", { required: "O nome é obrigatório" })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none text-sm md:text-base"
                placeholder="Digite seu nome"
              />
              {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">E-mail</label>
              <input
                type="email"
                {...register("email", { required: "O e-mail é obrigatório" })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none text-sm md:text-base"
                placeholder="Digite seu e-mail"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">Telefone</label>
              <input
                type="tel"
                {...register("telefone", { required: "O telefone é obrigatório" })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none text-sm md:text-base"
                placeholder="(11) 99999-9999"
              />
              {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone.message}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">Mensagem</label>
              <textarea
                {...register("mensagem", { required: "A mensagem é obrigatória" })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none text-sm md:text-base"
                rows={4}
                placeholder="Escreva sua mensagem..."
              />
              {errors.mensagem && <p className="text-red-500 text-sm">{errors.mensagem.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-[#0F8E89] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0c6e6a] transition"
            >
              Enviar mensagem
            </button>
          </form>

          {/* Informações extras */}
          <div className="mt-6 text-center text-gray-700 text-sm md:text-base">
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




