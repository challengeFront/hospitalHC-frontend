import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Teleconsulta() {
  const navigate = useNavigate();

  // Lista inicial de consultas
  const [consultas, setConsultas] = useState([
    {
      id: 1,
      dia: "02/06/2025",
      horario: "08:30",
      medico: "Dra. Maria Aparecida Araujo",
      especialidade: "Clínica geral",
    },
    {
      id: 2,
      dia: "30/06/2025",
      horario: "10:00",
      medico: "Dra. Linda Fagundes",
      especialidade: "Cardiologista",
    },
  ]);

  // Estado para guardar consultas canceladas
  const [canceladas, setCanceladas] = useState<number[]>([]);

  // Exemplo de efeito colateral (pode ser usado para salvar no localStorage)
  useEffect(() => {
    console.log("Consultas canceladas:", canceladas);
  }, [canceladas]);

  // Função de cancelamento
  const cancelarConsulta = (id: number) => {
    setCanceladas([...canceladas, id]);
    setConsultas(consultas.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
        <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>
        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
          <button onClick={() => navigate("/home")} className="hover:bg-[#0F8E89] py-2">
            PÁGINA INICIAL
          </button>
          <button onClick={() => navigate("/perfil")} className="hover:bg-[#0F8E89] py-2">
            PERFIL
          </button>
          <button onClick={() => navigate("/faq")} className="hover:bg-[#0F8E89] py-2">
            FAQ
          </button>
          <button onClick={() => navigate("/contato")} className="hover:bg-[#0F8E89] py-2">
            CONTATO
          </button>
          <button onClick={() => navigate("/agendamento")} className="hover:bg-[#0F8E89] py-2">
            AGENDAMENTO
          </button>
          <button onClick={() => navigate("/teleconsulta")} className="bg-[#0F8E89] py-2">
            TELECONSULTA
          </button>
        </nav>

              <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => navigate("/integrantes")}>
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-[#F6FAFB] p-6">
        <header className="flex justify-between items-center gap-6 mb-6 px-6 py-4 border-b bg-white">
          <h1 className="text-2xl font-bold text-[#004A80]">Teleconsulta</h1>
        </header>

        <section>
          <p className="mb-6 font-medium">Teleconsultas agendadas:</p>

          {consultas.length > 0 ? (
            <div className="space-y-6">
              {consultas.map((c) => (
                <div key={c.id} className="bg-gray-100 rounded-xl shadow-md p-4">
                  <p><b>Dia:</b> {c.dia}</p>
                  <p><b>Horário:</b> {c.horario}</p>
                  <p><b>Médico:</b> {c.medico}</p>
                  <p><b>Especialidade:</b> {c.especialidade}</p>

                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() => cancelarConsulta(c.id)}
                      className="bg-[#0F8E89] text-white px-4 py-2 rounded-full hover:bg-[#0c6e6a]"
                    >
                      Cancelar consulta
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-full cursor-not-allowed">
                      Acessar consulta
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Nenhuma consulta agendada.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Teleconsulta;
''


