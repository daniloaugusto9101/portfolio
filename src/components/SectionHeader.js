import Image from 'next/image';
import SmallText from './SmallText';

const hardSkillList = ['ReactJS', 'NextJS', 'NodeJS', 'API RESTful '];

export default function SectionHeader() {
  return (
    <section className="mt-28 flex items-center justify-center px-4 md:h-screen">
      <div className="m-auto mb-40 flex max-w-7xl flex-col-reverse items-center justify-between gap-10 md:mt-20 md:flex-row">
        <div className="flex flex-col gap-4 md:w-2/3">
          <h1
            className="fade-in-left text-center text-4xl font-bold text-customPurple-500 md:text-left md:text-6xl"
            style={{ animationDelay: '0.2s' }}
          >
            Danilo Augusto
          </h1>
          <p className="fade-in-left text-md text-center md:text-left md:text-2xl" style={{ animationDelay: '0.3s' }}>
            Olá, seja bem-vindo ao meu portfólio, eu me chamo Danilo, sou
            <strong className="font-semibold"> Desenvolvedor Full Stack </strong> e Pós Graduado em Desenvolvimento Full
            Stack na <strong className="font-semibold">PUC-Minas.</strong>
          </p>

          <p className="fade-in-left text-center md:text-left" style={{ animationDelay: '0.4s' }}>
            {hardSkillList.map((skill, index) => (
              <SmallText key={index} text={skill} />
            ))}
          </p>
        </div>
        <div className="fade-in-right flex justify-end md:w-1/3" style={{ animationDelay: '0.4s' }}>
          <Image
            src="/images/person.webp"
            alt="Imagem do Autor"
            width={320}
            height={320}
            className="w-48 object-cover md:w-80"
          />
        </div>
      </div>
    </section>
  );
}
