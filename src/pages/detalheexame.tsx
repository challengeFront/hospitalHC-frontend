import { useParams, useNavigate } from "react-router-dom";

function DetalheExame() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Simulação de dados dos exames (mesmo array da página ResultadosExames)
  const exames = [
    {
      data: "05/06/2025",
      tipo: "Hemograma Completo",
      medico: "Dr. João Martins",
      status: "Disponível",
      resultado: "Todos os parâmetros dentro da normalidade.",
    },
    {
      data: "12/05/2025",
      tipo: "Raio-X Tórax",
      medico: "Dr. Carlos Mendes",
      status: "Disponível",
      resultado: "Imagem sem alterações significativas.",
    },
  ];

  // pegar o exame certo pelo índice da URL
  const exame = id ? exames[parseInt(id) - 1] : null;

  if (!exame) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">Exame não encontrado</h1>
        <button
          onClick={() => navigate("/exames")}
          className="mt-4 bg-[#0F8E89] text-white px-4 py-2 rounded-full"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-[#004A80]">
        Detalhes do Exame
      </h1>

      <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 max-w-2xl space-y-4">
        <p><b>Data:</b> {exame.data}</p>
        <p><b>Exame:</b> {exame.tipo}</p>
        <p><b>Médico:</b> {exame.medico}</p>
        <p><b>Status:</b> {exame.status}</p>
        <p><b>Resultado:</b> {exame.resultado}</p>
      </div>

      <button
        onClick={() => navigate("/exames")}
        className="mt-6 bg-[#0F8E89] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0c6e6a] transition"
      >
        Voltar
      </button>
    </div>
  );
}

export default DetalheExame;

