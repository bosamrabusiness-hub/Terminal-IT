//src/components/Preloader/PreLoaderText.tsx

'use client';

import { useAppContext } from '@/components/context/AppContext';

const PreLoaderText = () => {
  const { scrambleRef } = useAppContext();

  return (
    <div className="h-12 ">
      <h2
        className="section-heading ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem]
        mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem]"
        ref={scrambleRef as React.RefObject<HTMLHeadingElement>}
      />
    </div>
  );
};
export default PreLoaderText;
