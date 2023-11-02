import { Footer } from '@/_components/Footer/Footer';
import { FeaturesSection } from '@/_components/Landing/FeaturesSection';
import { Header } from '@/_components/Landing/Header';
import { HeroSection } from '@/_components/Landing/HeroSection';
import { LandingContainer } from '@/_components/Landing/LandingContainer';

export default function Page() {
  return (
    <LandingContainer>
      <Header
        links={[
          {
            link: '/Item1',
            label: 'MenuItem1',
          },
          {
            link: '/Item2',
            label: 'MenuItem2',
          },
          {
            link: '/Item3',
            label: 'MenuItem3',
          },
        ]}
      />
      <HeroSection />
      <FeaturesSection
        title='Features'
        description='This project provides a testing environment with a preliminary dashboard to examine modern features like Next.js 13 App Router API and static pages. As well as tailwind css and Mantine UI and Playwright. '
      />
      <Footer />
    </LandingContainer>
  );
}
