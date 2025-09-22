import { useState, useEffect } from "react";

function ModoIdoso() {
  const [ativo, setAtivo] = useState(false);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const alternarModo = () => {
    setAtivo((prev) => !prev);
    setMostrarMensagem(true);

    setTimeout(() => setMostrarMensagem(false), 3000);
  };

  // ✅ Aplica ou remove a classe no <body>
  useEffect(() => {
    if (ativo) {
      document.body.classList.add("modo-idoso");
    } else {
      document.body.classList.remove("modo-idoso");
    }
  }, [ativo]);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={alternarModo}
        className={`flex flex-col items-center px-3 py-2 rounded-md transition ${
          ativo ? "bg-yellow-500 text-black" : "bg-transparent"
        }`}
      >
        <span className="text-3xl">🧓</span>
        <span className="text-sm font-semibold">Modo Idoso</span>
      </button>

      {mostrarMensagem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md">
            <h2 className="text-xl font-bold text-[#004A80]">
              {ativo ? "🧓 Modo Idoso Ativado" : "Modo Idoso Desativado"}
            </h2>
            <p className="mt-3 text-gray-700">
              {ativo
                ? "Os textos e botões foram aumentados para facilitar a leitura."
                : "O layout voltou ao tamanho normal."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModoIdoso;

