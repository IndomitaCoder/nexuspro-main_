import { useMode } from 'ModeContext';
import WhatAreNexusProToken from './WhatAreNexusProToken';
import Introduction from './Introduction';
import HowAreIssued from './HowAreIssued';
import Stability from './Stability';
import Disrupting from './Disrupting';
import { Suspense } from 'react';

const HowItWorks = () => {
  return (
    <div className={`bg-[#263238]  h-fit flex flex-col w-full pt-[90px]`}>
      <Suspense fallback={<div>Loading...</div>}>
        <WhatAreNexusProToken />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Introduction />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HowAreIssued />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Stability />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Disrupting />
      </Suspense>
    </div>
  );
};

export default HowItWorks;
