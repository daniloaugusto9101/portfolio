import SectionProjectsItens from './SectionProjectsItens';

const projects = [
  {
    title: 'Site institucional - ASSEM',
    description:
      'Descrição do Projeto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure possimus quos, natus deleniti esse voluptatibus numquam facilis fuga et cum! Est sint inventore doloribus vel harum illo temporibus et aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    hardSkillList: ['WordPress', 'PHP', 'HTML', 'SASS', 'JavaScript', 'API'],
    site: '',
    github: '',
    img: '/images/oncar.gif',
    imgAlt: 'Imagem teste',
    reverse: false,
  },
  {
    title: 'Site institucional - ASSEM',
    description:
      'Descrição do Projeto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure possimus quos, natus deleniti esse voluptatibus numquam facilis fuga et cum! Est sint inventore doloribus vel harum illo temporibus et aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    hardSkillList: ['WordPress', 'PHP', 'HTML', 'SASS', 'JavaScript', 'API'],
    site: '',
    github: '',
    img: '/images/oncar.gif',
    imgAlt: 'Imagem teste',
    reverse: true,
  },
];
export default function SectionProjects() {
  return (
    <section className="m-auto mb-44 max-w-7xl p-4">
      <div className="relative mb-28 inline-block w-full text-center">
        <h2 className="text-5xl uppercase">Projetos</h2>
        <span className="absolute left-1/2 mt-2 h-1.5 w-16 -translate-x-1/2 transform rounded-md bg-customPurple-500"></span>
      </div>
      <SectionProjectsItens projects={projects} />
    </section>
  );
}
