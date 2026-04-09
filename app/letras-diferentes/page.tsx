import type { Metadata } from "next";
import LetrasDiferentesTool from "@/components/LetrasDiferentesTool";
import TextStyleTool from "@/components/TextStyleTool";
import { siteConfig } from "@/lib/metadata";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Letras Diferentes e Bonitas",
  description:
    "Gerador de letras diferentes e bonitas para WhatsApp, Instagram, Discord e muito mais. Letras especiais Unicode grátis.",
  keywords: [
    "letras diferentes",
    "letras bonitas",
    "letras especiais",
    "gerador de letras",
    "fontes unicode",
    "letras para instagram",
    "letras para whatsapp",
  ],
  alternates: {
    canonical: `${siteConfig.url}/letras-diferentes`,
  },
  openGraph: {
    title: "Letras Diferentes e Bonitas",
    description:
      "Gerador de letras diferentes e bonitas para WhatsApp, Instagram e Discord.",
    images: [{ url: "/Letras-Diferentes.webp" }],
  },
};

export default function LetrasDiferentesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Letras Diferentes e Bonitas
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Gere letras especiais e estilos únicos para usar no WhatsApp,
            Instagram, Discord e muito mais.
          </p>
        </div>
      </section>

      <LetrasDiferentesTool />
      <TextStyleTool />

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative aspect-video">
            <Image
              src="/Letras-Diferentes-e-Bonitas.webp"
              alt="Letras Diferentes e Bonitas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            O que são Letras Diferentes?
          </h2>
          <p className="text-gray-700">
            Letras diferentes são caracteres Unicode especiais que parecem
            variações estilizadas das letras normais. Elas podem ser usadas em
            qualquer lugar que aceite texto Unicode, como redes sociais,
            aplicativos de mensagens e muito mais.
          </p>
        </div>
      </section>
    </>
  );
}
