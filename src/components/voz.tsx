import { useState } from "react";

function AssistenteVozSimulacao() {
  const [ativo, setAtivo] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const toggleAssistente = () => {
    if (!ativo) {
      // Ativar
      setAtivo(true);
      setMensagem("ativado");
      setTimeout(() => setMensagem(""), 3000);
    } else {
      // Desativar
      setAtivo(false);
      setMensagem("desativado");
      setTimeout(() => setMensagem(""), 3000);
    }
  };

  return (
    <>
      {/* Botão no menu lateral */}
      <button
        onClick={toggleAssistente}
        className={`flex flex-col items-center px-3 py-2 rounded-md transition ${
          ativo ? "bg-[#0F8E89] text-white" : "hover:bg-[#0F8E89]"
        }`}
      >
        <span className="text-3xl">🎤</span>
        <span className="text-sm">Assistente de voz</span>
      </button>

      {/* Mensagem temporária */}
      {mensagem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
            {mensagem === "ativado" ? (
              <>
                <h2 className="text-xl font-bold text-[#004A80] mb-4">
                  🎤 Assistente de Voz Ativado
                </h2>
                <p className="text-gray-700 mb-2">
                  O comando por voz foi ativado! 
                </p>
                <p className="text-gray-600">
                  Para <b>desativar</b>, clique novamente no botão do assistente.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-red-600 mb-4">
                  ❌ Assistente de Voz Desativado
                </h2>
                <p className="text-gray-700">
                  O comando por voz foi encerrado. Clique novamente no botão se
                  quiser ativar de novo.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AssistenteVozSimulacao;


