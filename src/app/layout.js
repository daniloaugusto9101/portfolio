import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Menu from "@/components/Menu ";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Danilo Augusto Pereira - Software Developer",
  description:
    "Bem-vindo ao portfólio de Danilo Augusto Pereira, um desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes. Explore meus projetos, conheça minhas habilidades e entre em contato.",
  author: {
    name: "Danilo Augusto Pereira",
    occupation: "Software Developer",
    location: "São Paulo, Brasil",
    email: "danilloagt@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniloaugusto9101/",
    github: "https://github.com/daniloaugusto9101",
    website: "https://daniloaugusto9101.github.io/portfolio/",
    bio: "Desenvolvedor de Software, comprometido com a entrega de resultados de alta qualidade e o aprimoramento contínuo das práticas de desenvolvimento.",
  },
  keywords:
    "portfólio, desenvolvedor, projetos, Front-end, React, HTML,CSS, JavaScript, Node.js, Tailwind CSS, Next.js, API RESTful, Bootstrap, SASS, WordPress, Git, Banco de dados, User Interface (UI), User Experience (UX), Responsividade, Single Page Applications (SPA), Test, Design Pattern",

  robots: "index, follow",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author.name} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta charSet={metadata.charset} />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body className={`overflow-x-hidden ${inter.className}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
