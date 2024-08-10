import RecommendationItem from './RecommendationItem';

const recommendations = [
  {
    name: 'Brenna Lopes',
    position: 'IBM Maximo Technical Consultant',
    comment:
      '"Estudei com o Danilo durante a pós na instituição PUC. Ele sempre foi proativo, empenhado e dominava as linguagens de programação. Além disso, demonstrou sempre uma enorme resiliência e era o primeiro a realizar e implementar soluções para qualquer problema."',
  },
  {
    name: 'Gabriel Capovila ',
    position: 'Software Tester',
    comment:
      '"Estudei com o Danilo na pós graduação, curso de Fullstack. Ele sempre apresentou soluções práticas, otimizadas e criativas para os projetos desenvolvidos em aula, sem abrir mão da qualidade"',
  },
];

export default function Recommendation() {
  return (
    <div>
      <RecommendationItem recommendations={recommendations} />
    </div>
  );
}
