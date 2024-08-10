import Recommendation from '@/components/Recommendation';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SectionHeader from '@/components/SectionHeader';
import SectionProjects from '@/components/SectionProjects';

export default function Home() {
  return (
    <main>
      <SectionHeader />
      <SectionProjects />
      {/* <Recommendation /> */}
      <ScrollToTopButton />
    </main>
  );
}
