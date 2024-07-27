import Image from 'next/image';
import SmallText from './SmallText';

const hardSkillList = ['ReactJS', 'NextJS', 'NodeJS', 'API RESTful '];

export default function SectionHeader() {
  return (
    <section className="m-auto mb-40 flex max-w-7xl flex-col-reverse items-center justify-between gap-10 p-4 md:mt-20 md:flex-row">
      <div className="flex flex-col gap-4 md:w-2/3">
        <h1 className="text-center text-4xl font-bold text-customPurple-500 md:text-left md:text-6xl">
          Danilo Augusto
        </h1>
        <p className="text-md text-center md:text-left md:text-2xl">
          Olá, seja bem-vindo ao meu portfólio, eu me chamo Danilo, sou
          <strong className="font-semibold"> Software Developer </strong> e Pós Graduado em Desenvolvimento Full Stack
          na PUC-Minas.
        </p>
        <p className="text-center md:text-left">
          {hardSkillList.map((skill, index) => (
            <SmallText key={index} text={skill} />
          ))}
        </p>
      </div>
      <div className="flex justify-end md:w-1/3">
        <Image
          src="/images/person.webp"
          alt="Imagem do Autor"
          width={320}
          height={320}
          className="w-48 object-cover md:w-80"
        />
      </div>
    </section>
  );
}
