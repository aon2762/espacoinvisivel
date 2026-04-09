"use client";

import { useState } from "react";

const invisibleChars = [
  { name: "Espaço de Largura Zero", char: "\u200B", unicode: "U+200B" },
  { name: "Espaço sem Quebra", char: "\u00A0", unicode: "U+00A0" },
  { name: "Espaço de Largura de Figura", char: "\u2007", unicode: "U+2007" },
  { name: "Espaço de Largura Estreita", char: "\u202F", unicode: "U+202F" },
  { name: "Espaço Matemático Fino", char: "\u2009", unicode: "U+2009" },
  { name: "Separador de Palavras", char: "\u2060", unicode: "U+2060" },
];

export default function InvisibleTool() {
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedChar, setSelectedChar] = useState(invisibleChars[0]);
  const [count, setCount] = useState(1);

  const handleCopy = async (char: string, name: string) => {
    const text = char.repeat(count);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(name);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(name);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 text-white">
            <h2 className="text-xl font-bold">Copiar Espaço Invisível</h2>
            <p className="text-blue-100 text-sm mt-1">
              Selecione o tipo e clique em copiar
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Espaço Invisível
              </label>
              <select
                value={selectedChar.unicode}
                onChange={(e) => {
                  const found = invisibleChars.find(
                    (c) => c.unicode === e.target.value
                  );
                  if (found) setSelectedChar(found);
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {invisibleChars.map((c) => (
                  <option key={c.unicode} value={c.unicode}>
                    {c.name} ({c.unicode})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantidade: {count}
              </label>
              <input
                type="range"
                min={1}
                max={20}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1</span>
                <span>20</span>
              </div>
            </div>

            <button
              onClick={() => handleCopy(selectedChar.char, selectedChar.name)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-sm"
            >
              {copied === selectedChar.name
                ? "✓ Copiado!"
                : "📋 Copiar Espaço Invisível"}
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {invisibleChars.map((c) => (
            <div
              key={c.unicode}
              className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-between gap-3"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{c.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{c.unicode}</p>
              </div>
              <button
                onClick={() => handleCopy(c.char, c.name)}
                className="shrink-0 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-1.5 px-3 rounded-lg transition-colors"
              >
                {copied === c.name ? "✓" : "Copiar"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
