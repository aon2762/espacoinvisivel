import type { Metadata } from "next";

export const siteConfig = {
  name: "Espaço Invisível",
  description:
    "Copie e cole espaços invisíveis gratuitamente. Use caracteres invisíveis Unicode no WhatsApp, Discord, Instagram, Free Fire e muito mais.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://espacoinvisivel.com",
  locale: "pt_BR",
  twitterHandle: "@espacoinvisivel",
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title = overrides.title
    ? `${overrides.title} | ${siteConfig.name}`
    : `${siteConfig.name} - Copie Espaços Invisíveis`;
  const description =
    (overrides.description as string) || siteConfig.description;

  return {
    title,
    description,
    keywords: [
      "espaço invisível",
      "caractere invisível",
      "espaço em branco",
      "unicode invisível",
      "copiar espaço invisível",
      "espaço vazio",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: `${siteConfig.url}/Espaco-Invisivel.webp`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/Espaco-Invisivel.webp`],
    },
    alternates: {
      canonical: siteConfig.url,
    },
    ...overrides,
  };
}
