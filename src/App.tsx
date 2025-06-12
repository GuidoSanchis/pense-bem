import { useState } from "react";
import "./App.css";

function App() {
  const respostasCorretas = [
    [
      "A",
      "A",
      "D",
      "C",
      "B",
      "B",
      "A",
      "D",
      "D",
      "B",
      "A",
      "A",
      "D",
      "C",
      "B",
      "A",
      "B",
      "D",
      "A",
      "C",
      "A",
      "C",
      "C",
      "B",
      "D",
      "A",
      "B",
      "A",
      "B",
      "D",
    ],
    [
      "A",
      "C",
      "A",
      "C",
      "C",
      "B",
      "D",
      "D",
      "D",
      "B",
      "D",
      "A",
      "B",
      "A",
      "B",
      "A",
      "C",
      "A",
      "A",
      "B",
      "C",
      "A",
      "A",
      "B",
      "A",
      "D",
      "B",
      "B",
      "B",
      "C",
    ],
    [
      "D",
      "C",
      "D",
      "D",
      "A",
      "A",
      "C",
      "A",
      "A",
      "B",
      "C",
      "A",
      "A",
      "B",
      "A",
      "B",
      "D",
      "D",
      "C",
      "C",
      "B",
      "A",
      "D",
      "B",
      "A",
      "D",
      "B",
      "B",
      "D",
      "C",
    ],
    [
      "C",
      "C",
      "B",
      "A",
      "D",
      "B",
      "A",
      "D",
      "B",
      "B",
      "D",
      "C",
      "A",
      "A",
      "D",
      "B",
      "D",
      "A",
      "B",
      "C",
      "C",
      "D",
      "D",
      "C",
      "C",
      "D",
      "D",
      "A",
      "A",
      "C",
    ],
    [
      "F",
      "B",
      "B",
      "D",
      "D",
      "B",
      "B",
      "D",
      "A",
      "B",
      "D",
      "A",
      "B",
      "C",
      "C",
      "A",
      "D",
      "D",
      "D",
      "C",
      "D",
      "C",
      "B",
      "B",
      "B",
      "A",
      "C",
      "A",
      "D",
      "D",
    ],
  ];

  const [tentativas, setTentativas] = useState<number>(0);
  const [pontos, setPontos] = useState<number>(0);
  const [programaSelecionado, setProgramaSelecionado] = useState<number>(0);
  const [perguntaAtual, setPerguntaAtual] = useState<number>(1);

  function verificarResposta(resposta: string) {
    const respostaCorreta =
      respostasCorretas[programaSelecionado - 1][perguntaAtual - 1];
    if (resposta === respostaCorreta) {
      const pontosGanhos = 3 - tentativas;
      setPontos((prev) => prev + pontosGanhos);
      const audio = new Audio("./certo.mp3"); // ajuste o caminho se necessário
      audio.play();
      alert(`Correto! Você ganhou ${pontosGanhos} ponto(s).`);

      // Passa para a próxima pergunta
      setPerguntaAtual((prev) => prev + 1);
      setTentativas(0);
    } else {
      const audio = new Audio("./errou.mp3"); // ajuste o caminho se necessário
      audio.play();
      if (tentativas < 2) {
        setTentativas((prev) => prev + 1);
        alert("Errado! Tente novamente.");
      } else {
        alert(`Resposta errada. A correta era: ${respostaCorreta}`);
        setPerguntaAtual((prev) => prev + 1);
        setTentativas(0);
      }
    }
  }

  return (
    <div className="bg-[#f2c57c] w-full min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex ">
        <h1 className="text-[#578b4c] text-2xl font-bold">
          Pense Bem - Fórmula 1
        </h1>
      </div>
      <p>Teste seu conhecimento sobre a Fórmula 1</p>
      <img src="./capa.png" alt="" className="w-36 " />
      <a
        href="https://datassette.s3.us-west-004.backblazeb2.com/livros/pense_bem_-_senninha_-_a_historia_da_formula_1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-200 border-2 rounded-sm p-1 inline-block text-center"
      >
        Abrir Livro
      </a>

      <div className="flex flex-col w-[90%] max-w-96 items-center justify-center gap-2 border-2 rounded-md p-2 bg-[#f8f4d2] mb-4">
        {programaSelecionado !== 0 ? (
          <>
            <div className="flex items-center justify-center gap-2">
              <h2>
                Programa {programaSelecionado} - Pergunta {perguntaAtual}{" "}
              </h2>
            </div>
            <span className="text-sm text-gray-500">
              Tentativas: {tentativas} | Pontos: {pontos}
            </span>
            <button
              className="w-full h-10 border-1 border-gray-300 rounded-md bg-red-400 cursor-pointer hover:opacity-80 active:scale-95 transition"
              onClick={() => verificarResposta("A")}
            >
              Resposta A
            </button>
            <button
              className="w-full h-10 border-1 border-gray-300 rounded-md bg-blue-400 cursor-pointer hover:opacity-80 active:scale-95 transition"
              onClick={() => verificarResposta("B")}
            >
              Resposta B
            </button>
            <button
              className="w-full h-10 border-1 border-gray-300 rounded-md bg-yellow-400 cursor-pointer hover:opacity-80 active:scale-95 transition"
              onClick={() => verificarResposta("C")}
            >
              Resposta C
            </button>
            <button
              className="w-full h-10 border-1 border-gray-300 rounded-md bg-green-400 cursor-pointer hover:opacity-80 active:scale-95 transition"
              onClick={() => verificarResposta("D")}
            >
              Resposta D
            </button>
          </>
        ) : (
          <>
            <h2>Escolha um programa</h2>
            <p>Escolha um dos programas para iniciar o quiz:</p>
            <button
              className="w-full  border-1 border-gray-300 rounded-md bg-amber-50"
              onClick={() => setProgramaSelecionado(1)}
            >
              Programa 1
            </button>
            <button
              className="w-full  border-1 border-gray-300 rounded-md bg-amber-50"
              onClick={() => setProgramaSelecionado(2)}
            >
              Programa 2
            </button>
            <button
              className="w-full  border-1 border-gray-300 rounded-md bg-amber-50 "
              onClick={() => setProgramaSelecionado(3)}
            >
              Programa 3
            </button>
            <button
              className="w-full  border-1 border-gray-300 rounded-md bg-amber-50 "
              onClick={() => setProgramaSelecionado(4)}
            >
              Programa 4
            </button>
            <button
              className="w-full  border-1 border-gray-300 rounded-md bg-amber-50 "
              onClick={() => setProgramaSelecionado(5)}
            >
              Programa 5
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
