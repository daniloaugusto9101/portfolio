import Recommendation from '@/components/Recommendation';
import SectionHeader from '@/components/SectionHeader';
import SectionProjects from '@/components/SectionProjects';

export default function Home() {
  return (
    <main>
      <SectionHeader />
      <SectionProjects />
      <Recommendation />
    </main>
  );
}
