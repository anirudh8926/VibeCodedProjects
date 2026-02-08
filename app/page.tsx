import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import OngoingSection from '@/components/OngoingSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="working">
        <OngoingSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
