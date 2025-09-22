import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Voz from "../components/voz";
import ModoIdoso from "../components/modoidoso";

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const navigate = useNavigate();

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  // Lista de perguntas e respostas
  const faqs = [
    {
      q: "Como marcar consulta SUS?",
      a: "As marcações de consultas médicas para as diversas especialidades do Hospital das Clínicas são realizadas pelo Sistema CROSS – Central de Regulação de Ofertas de Serviços de Saúde, da Secretaria de Estado da Saúde de São Paulo. Orientamos que o paciente procure uma UBS, AMA ou AME próximo de sua residência para solicitar o agendamento, que será definido conforme a disponibilidade de vagas e critérios clínicos estabelecidos pela rede pública.",
    },
    {
      q: "Solicitação de prontuário e laudo médico.",
      a: "Para solicitar prontuário ou laudos médicos, o paciente ou responsável legal deve comparecer ao Setor de Arquivo Médico e Estatística (SAME) do HC, apresentando documento de identificação e, quando necessário, procuração. Também é possível realizar a solicitação pelo portal eletrônico do hospital, mediante cadastro prévio.",
    },
    {
      q: "Salários de funcionários.",
      a: "Os salários dos funcionários do Hospital das Clínicas seguem as tabelas salariais estabelecidas pela Universidade de São Paulo (USP) e pela Secretaria de Estado da Saúde. Informações detalhadas podem ser consultadas no Portal da Transparência do Governo do Estado de São Paulo.",
    },
    {
      q: "Como fazer cursos no HCFMUSP.",
      a: "O HC oferece diversos cursos de capacitação e extensão por meio da Escola de Educação Permanente (EEP). As inscrições podem ser realizadas no site da EEP, onde estão disponíveis cursos presenciais e online voltados a profissionais de saúde e público em geral.",
    },
    {
      q: "Informações sobre indicadores da Instituição.",
      a: "O Hospital das Clínicas disponibiliza periodicamente relatórios institucionais com dados de desempenho, qualidade e segurança do paciente. Esses indicadores podem ser consultados no portal oficial do HC, na seção “Transparência e Resultados”.",
    },
    {
      q: "Qual o horário de atendimento?",
      a: "O Pronto-Socorro do HC funciona 24 horas por dia, todos os dias da semana. Já os ambulatórios atendem de segunda a sexta-feira, das 7h às 19h, com consultas previamente agendadas. Para casos de urgência, procure diretamente o pronto-socorro ou a unidade de saúde mais próxima.",
    },
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
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-14 sm:h-16 md:h-20" />
        </div>

        <nav className="flex flex-col gap-2 w-full text-center font-semibold text-xs sm:text-sm md:text-lg">
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/home")}>
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/perfil")}>
            PERFIL
          </button>
          <button className="bg-[#0F8E89] py-2">FAQ</button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/contato")}>
            CONTATO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/agendamento")}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/teleconsulta")}>
            TELECONSULTA
          </button>
        </nav>

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

        {/* FAQ */}
        <section className="max-w-4xl mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#004A80]">FAQ</h1>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`rounded-lg p-4 transition cursor-pointer ${
                  open === i
                    ? "bg-[#0F8E89] text-white"
                    : "bg-white border border-gray-300 text-gray-800"
                }`}
              >
                <button
                  className="flex justify-between w-full font-semibold text-left text-sm sm:text-base"
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <span>{open === i ? "▲" : "▼"}</span>
                </button>
                {open === i && (
                  <p
                    className={`mt-3 text-sm sm:text-base ${
                      open === i ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default FAQ;



