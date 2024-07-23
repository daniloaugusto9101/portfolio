import Image from "next/image";

const hardSkillList = ["ReactJS", "NextJS", "NodeJS", "API RESTful "];

export default function SectionHeader() {
  return (
    <section className="max-w-7xl m-auto flex flex-col-reverse gap-10 md:flex-row justify-between p-4 items-center md:mt-20">
      <div className="md:w-2/3 flex flex-col gap-4">
        <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold text-customPurple-500 ">
          Danilo Augusto
        </h1>
        <p className="text-center md:text-left text-md md:text-2xl">
          Olá, seja bem-vindo ao meu portfólio, eu me chamo Danilo, sou
          <strong className="font-semibold"> Software Developer </strong> e Pós
          Graduado em Desenvolvimento Full Satack na PUC-Minas.
        </p>
        <p className="text-center md:text-left">
          {hardSkillList.map((skill, index) => (
            <small
              key={index}
              className="bg-customPurple-100 px-2 rounded-sm inline-block mr-2"
            >
              {skill}
            </small>
          ))}
        </p>
      </div>
      <div className="md:w-1/3 flex justify-end">
        <Image
          src="/images/person.webp"
          alt="Imagem do Autor"
          width={320}
          height={320}
          className="w-48 md:w-80 object-cover"
        />
      </div>
    </section>
  );
}
