import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Voz from "../components/voz";
import ModoIdoso from "../components/modoidoso";

interface LoginFormData {
  email: string;
  senha: string;
}

function Login() {
  const navigate = useNavigate();
  const aqua = "#0F8E89"; // cor verde-água (do Figma)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login realizado:", data);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#CDE6E7] flex flex-col">
      {/* Barra superior */}
      <header className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        <div className="flex items-center gap-3">
          <img
            src="/NOVO-LOGO-HC.png"
            alt="Logo HC"
            className="h-12 sm:h-16 md:h-20"
          />
        </div>

        <nav className="flex gap-3 sm:gap-5 text-sm sm:text-base md:text-lg font-semibold">
          {/* Botão funcional do Modo Idoso */}
          <ModoIdoso />
          {/* Botão do Assistente de Voz */}
          <Voz />
        </nav>
      </header>

      {/* Título fora do card */}
      <section className="flex justify-center px-4 sm:px-6 mt-4">
        <div className="w-full max-w-4xl text-center">
          <h1
            className="font-extrabold tracking-tight leading-tight text-2xl sm:text-3xl md:text-4xl"
            style={{ color: aqua }}
          >
            Bem-vindo ao Hospital das Clínicas
          </h1>
          <p
            className="mt-1 font-semibold text-base sm:text-lg md:text-xl"
            style={{ color: aqua }}
          >
            Sua saúde em primeiro lugar!
          </p>
        </div>
      </section>

      {/* Card de login */}
      <main className="flex flex-1 items-start justify-center px-4 sm:px-6">
        <div className="mt-6 bg-white rounded-2xl shadow-lg w-full max-w-md sm:max-w-2xl md:max-w-3xl p-6 sm:p-8 md:p-12">
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-6">
            LOGIN
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            {/* E-mail */}
            <div>
              <label className="block text-left text-gray-700 mb-1 text-sm sm:text-base">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email", { required: "O e-mail é obrigatório" })}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Senha */}
            <div>
              <label className="block text-left text-gray-700 mb-1 text-sm sm:text-base">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("senha", {
                  required: "A senha é obrigatória",
                  minLength: { value: 6, message: "Mínimo de 6 caracteres" },
                })}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              {errors.senha && (
                <p className="text-red-600 text-sm">{errors.senha.message}</p>
              )}
            </div>

            <div className="flex justify-end mb-2">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Esqueci minha senha
              </a>
            </div>

            {/* Botões lado a lado */}
            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Entrar
              </button>
              <span className="text-gray-600 font-semibold">ou</span>
              <button
                type="button"
                onClick={() => navigate("/cadastro")}
                className="flex-1 bg-[#0F8E89] text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#0c6e6a] transition text-sm sm:text-base"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;







