import SectionProjectsItens from './SectionProjectsItens';

const projects = [
  {
    title: 'Site institucional - ASSEM',
    description:
      'Desenvolvi o site da empresa ASSEM com o objetivo de fornecer informações institucionais, destacar benefícios, atrair novos associados para o Clube e publicar matérias sobre os eventos. Para facilitar a gestão de conteúdo, utilizei o WordPress como plataforma de gerenciamento. Além disso, criei um tema exclusivo, utilizando HTML, CSS, PHP, JavaScript, SASS e design responsivo.',
    hardSkillList: [
      'WordPress',
      'MySQL',
      'PHP',
      'HTML',
      'SASS',
      'JavaScript',
      'API',
      'Responsive Design',
      'CI/CD',
      'DevOps',
    ],
    site: 'https:assem.com.br',
    github: '',
    img: '/images/site-assem.gif',
    imgAlt: 'Imagem teste',
    reverse: false,
  },
  {
    title: 'Landing Page',
    description:
      'Desenvolvi uma landing page em colaboração com uma web designer. Nossa parceria permitiu criar uma experiência visualmente atraente e altamente funcional. Fui responsável pelo desenvolvimento da página, utilizando HTML, SASS, e JavaScript para garantir um layout responsivo e carregamento rápido.',
    hardSkillList: ['HTML', 'SASS', 'JavaScript', 'Responsive Design', 'CI/CD'],
    site: 'https://daniloaugusto9101.github.io/LandingPageONG/',
    github: 'https://github.com/daniloaugusto9101/LandingPageONG',
    img: '/images/landing-page.gif',
    imgAlt: 'Imagem teste',
    reverse: true,
  },
  {
    title: 'Projeto Final da Pós-Graduação',
    description:
      'No meu projeto de conclusão de curso, desenvolvi uma plataforma web dedicada à venda de carros. Isto proporcionou a oportunidade de aplicar de forma prática os conhecimentos adquiridos ao longo do curso, abrangendo todas as etapas do desenvolvimento, desde o planejamento e design até publicação final.',
    hardSkillList: ['React.js', 'Node.js', 'Tailwind CSS', 'RESTful APIs', 'Responsive Design', 'NoSQL', 'Cypress'],
    site: 'https://daniloaugusto9101.github.io/oncar',
    github: 'https://github.com/daniloaugusto9101/oncar',
    img: '/images/oncar.gif',
    imgAlt: 'Imagem teste',
    reverse: false,
  },
  {
    title: 'Site de filmes',
    description:
      'Este projeto foi desenvolvido como parte de uma disciplina do curso de Pós-Graduação na PUC Minas. O desafio consistia em criar uma aplicação Single Page (SPA) que busca filmes da API The Movie DB e os lista usando React e React Router. Além disso, foi implementada uma funcionalidade com Redux, permitindo que os usuários marquem seus filmes favoritos diretamente na listagem dos conteúdos fornecidos pela API.',
    hardSkillList: ['React.js', 'Bootstrap ', 'RESTful APIs', 'Responsive Design'],
    site: 'https://daniloaugusto9101.github.io/api-movies/',
    github: 'https://github.com/daniloaugusto9101/api-movies',
    img: '/images/pagina-filmes.gif',
    imgAlt: 'Imagem teste',
    reverse: true,
  },
  // {
  //   title: 'API Node.Js',
  //   description:
  //     'Descrição do Projeto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure possimus quos, natus deleniti esse voluptatibus numquam facilis fuga et cum! Est sint inventore doloribus vel harum illo temporibus et aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   hardSkillList: ['Node.js', 'Express.js', 'Nodemon', 'RESTful APIs', 'JWT', 'PostgreSQL'],
  //   site: '',
  //   github: '',
  //   img: '/images/oncar.gif',
  //   imgAlt: 'Imagem teste',
  //   reverse: false,
  // },
];
export default function SectionProjects() {
  return (
    <section className="m-auto mb-44 max-w-7xl p-4" id="projetos">
      <div className="relative mb-28 inline-block w-full text-center">
        <h2 className="text-5xl">Projetos</h2>
        <span className="absolute left-1/2 mt-2 h-1.5 w-16 -translate-x-1/2 transform rounded-md bg-customPurple-500"></span>
      </div>
      <SectionProjectsItens projects={projects} />
    </section>
  );
}
