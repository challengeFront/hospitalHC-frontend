import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface FormData {
  nome: string;
  email: string;
  cpf: string;
  senha: string;
}

function Cadastro() {
  const aqua = "#0F8E89";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Cadastro realizado:", data);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#CDE6E7] flex flex-col">
      {/* Barra superior sem fundo branco */}
      <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-16 md:h-20" />
        </div>

        {/* Ações */}
        <nav className="flex flex-wrap justify-center gap-4 text-base md:text-lg font-semibold">
          <button className="hover:text-blue-700">🧓 Modo Idoso</button>
          <button className="hover:text-blue-700">🎤 Assistente de voz</button>
          <button
            className="hover:text-blue-700"
            onClick={() => navigate("/integrantes")}
          >
            👥 Integrantes
          </button>
        </nav>
      </header>

      {/* Título */}
      <section className="flex justify-center px-4 mt-6 text-center">
        <div className="w-full max-w-4xl">
          <h1
            className="font-extrabold tracking-tight leading-tight text-2xl sm:text-3xl md:text-4xl"
            style={{ color: aqua }}
          >
            Cadastro no Hospital das Clínicas
          </h1>
          <p
            className="mt-2 font-semibold text-base sm:text-lg md:text-xl"
            style={{ color: aqua }}
          >
            Preencha seus dados para continuar
          </p>
        </div>
      </section>

      {/* Card de cadastro */}
      <main className="flex flex-1 items-start justify-center px-4 pb-10">
        <div className="mt-6 bg-white rounded-2xl shadow-lg w-full max-w-[780px] p-6 sm:p-8 md:p-12">
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-[#0F8E89] mb-6">
            CADASTRO
          </h3>

          <form
            className="grid grid-cols-1 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Nome */}
            <div>
              <label className="block text-left text-gray-700 mb-1 text-sm md:text-base">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                {...register("nome", { required: "O nome é obrigatório" })}
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F8E89]"
              />
              {errors.nome && (
                <p className="text-red-600 text-sm">{errors.nome.message}</p>
              )}
            </div>

            {/* E-mail */}
            <div>
              <label className="block text-left text-gray-700 mb-1 text-sm md:text-base">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email", {
                  required: "O e-mail é obrigatório",
                  pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
                })}
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F8E89]"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* CPF */}
            <div>
              <label className="block text-left text-gray-700 mb-1 text-sm md:text-base">
                CPF
              </label>
              <input
                type="text"
                placeholder="Digite seu CPF"
                {...register("cpf", {
                  required: "O CPF é obrigatório",
                  pattern: {
                    value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                    message: "Formato válido: 000.000.000-00",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F8E89]"
              />
              {errors.cpf && (
                <p className="text-red-600 text-sm">{errors.cpf.message}</p>
              )}
            </div>

            {/* Senha */}
            <div>
              <label className="block text-left text-gray-700 mb-1 text-sm md:text-base">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("senha", {
                  required: "A senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "A senha deve ter pelo menos 6 caracteres",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F8E89]"
              />
              {errors.senha && (
                <p className="text-red-600 text-sm">{errors.senha.message}</p>
              )}
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="mt-4 w-full bg-[#0F8E89] text-white font-semibold py-3 rounded-full hover:bg-[#0c6e6a] transition"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;





