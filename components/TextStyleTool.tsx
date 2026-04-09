"use client";

import { useState } from "react";

const transforms: { name: string; fn: (s: string) => string }[] = [
  {
    name: "MAIÚSCULAS",
    fn: (s) => s.toUpperCase(),
  },
  {
    name: "minúsculas",
    fn: (s) => s.toLowerCase(),
  },
  {
    name: "AlTeRnAdO",
    fn: (s) =>
      s
        .split("")
        .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join(""),
  },
  {
    name: "I n v e r t i d o",
    fn: (s) => s.split("").reverse().join(""),
  },
  {
    name: "T̲r̲a̲ç̲a̲d̲o̲",
    fn: (s) => s.split("").map((c) => c + "\u0332").join(""),
  },
  {
    name: "T̶a̶c̶h̶a̶d̶o̶",
    fn: (s) => s.split("").map((c) => c + "\u0336").join(""),
  },
];

export default function TextStyleTool() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, name: string) => {
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
    <section className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5 text-white">
            <h2 className="text-xl font-bold">Estilos de Texto</h2>
            <p className="text-green-100 text-sm mt-1">Transforme seu texto</p>
          </div>

          <div className="p-6">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite ou cole seu texto aqui..."
              rows={3}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>
        </div>

        {input && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {transforms.map((t) => {
              const result = t.fn(input);
              return (
                <div
                  key={t.name}
                  className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-3"
                >
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-500 mb-1">{t.name}</p>
                    <p className="text-gray-900 text-sm truncate">{result}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(result, t.name)}
                    className="shrink-0 text-xs bg-green-50 hover:bg-green-100 text-green-700 font-medium py-1.5 px-3 rounded-lg transition-colors"
                  >
                    {copied === t.name ? "✓" : "Copiar"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
