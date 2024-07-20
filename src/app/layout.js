import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfólio de Danilo Augusto Pereira - Software Developer",
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
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
