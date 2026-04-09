"use client";

import { useState } from "react";

const fontStyles: { name: string; transform: (text: string) => string }[] = [
  {
    name: "𝗡𝗲𝗴𝗿𝗶𝘁𝗼",
    transform: (text) => {
      return text
        .split("")
        .map((c) => {
          const code = c.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d400 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d41a + code - 97);
          if (code >= 48 && code <= 57) return String.fromCodePoint(0x1d7ce + code - 48);
          return c;
        })
        .join("");
    },
  },
  {
    name: "𝘐𝘵á𝘭𝘪𝘤𝘰",
    transform: (text) => {
      return text
        .split("")
        .map((c) => {
          const code = c.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d434 + code - 65);
          if (code >= 97 && code <= 122) {
            if (code === 104) return "\u210e";
            return String.fromCodePoint(0x1d44e + code - 97);
          }
          return c;
        })
        .join("");
    },
  },
  {
    name: "𝕃𝕖𝕥𝕣𝕒𝕤 𝔻𝕦𝕡𝕝𝕒𝕤",
    transform: (text) => {
      return text
        .split("")
        .map((c) => {
          const code = c.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d538 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d552 + code - 97);
          return c;
        })
        .join("");
    },
  },
  {
    name: "𝔏𝔢𝔱𝔯𝔞𝔰 𝔊ó𝔱𝔦𝔠𝔞𝔰",
    transform: (text) => {
      return text
        .split("")
        .map((c) => {
          const code = c.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d504 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d51e + code - 97);
          return c;
        })
        .join("");
    },
  },
  {
    name: "Ⓒⓘⓡⓒⓛⓔⓓ",
    transform: (text) => {
      return text
        .split("")
        .map((c) => {
          const code = c.charCodeAt(0);
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x24b6 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x24d0 + code - 97);
          if (code >= 49 && code <= 57) return String.fromCodePoint(0x2460 + code - 49);
          if (code === 48) return "\u24ea";
          return c;
        })
        .join("");
    },
  },
  {
    name: "Sᴍᴀʟʟ Cᴀᴘs",
    transform: (text) => {
      const map: Record<string, string> = {
        a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ",
        i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ",
        q: "q", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x",
        y: "ʏ", z: "ᴢ",
      };
      return text.split("").map((c) => map[c.toLowerCase()] || c).join("");
    },
  },
];

export default function LetrasDiferentesTool() {
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
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-5 text-white">
            <h2 className="text-xl font-bold">Gerador de Letras Diferentes</h2>
            <p className="text-purple-100 text-sm mt-1">
              Digite seu texto e escolha um estilo
            </p>
          </div>

          <div className="p-6">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite seu texto aqui..."
              rows={3}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>
        </div>

        {input && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fontStyles.map((style) => {
              const transformed = style.transform(input);
              return (
                <div
                  key={style.name}
                  className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-3"
                >
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-500 mb-1">{style.name}</p>
                    <p className="text-gray-900 text-sm truncate">{transformed}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(transformed, style.name)}
                    className="shrink-0 text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium py-1.5 px-3 rounded-lg transition-colors"
                  >
                    {copied === style.name ? "✓" : "Copiar"}
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
