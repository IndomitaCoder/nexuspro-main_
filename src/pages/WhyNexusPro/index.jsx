import { useRef, useEffect, Suspense } from 'react';
import FAQ from './FAQ';
import Partners from './Partners';
import ProvideAccess from './Provide';
import NexusProToken from './Token';
import Transparency from './Transparency';
import HowToUsing from './Using';

function LandingPage({
  setSelectedPage,
  isMobileMenuOpen,
  setContactOpened,
  section
}) {
  const backgroundImageSmall = `url("${
    process.env.REACT_APP_PUBLIC_URL + 'assets/images/Mask group_sm.png'
  }")`;
  const backgroundImageMedium = `url("${
    process.env.REACT_APP_PUBLIC_URL + 'assets/images/Mask group_md.png'
  }")`;
  const backgroundImageLarge = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/Mask group-min.png")`;

  const faqRef = useRef(null);
  useEffect(() => {
    if (section === 'faqs' && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div
      className={`bg-[#263238]  h-fit flex flex-col  pt-48`}
      style={{
        backgroundImage:
          window.innerWidth <= 430
            ? backgroundImageSmall
            : window.innerWidth <= 1024
            ? backgroundImageMedium
            : backgroundImageLarge,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <NexusProToken setSelectedPage={setSelectedPage} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProvideAccess />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HowToUsing
          isMobileMenuOpen={isMobileMenuOpen}
          setSelectedPage={setSelectedPage}
          setContactOpened={setContactOpened}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Partners />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Transparency setSelectedPage={setSelectedPage} />
      </Suspense>

      <div ref={faqRef}>
        <Suspense fallback={<div>Loading...</div>}>
          <FAQ />
        </Suspense>
      </div>
    </div>
  );
}

export default LandingPage;
