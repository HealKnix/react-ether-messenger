import { useEffect, useState } from 'react';

export const useResolution = () => {
  const [isDesktop, setDesktop] = useState(true);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 540) {
        setDesktop(true);
        setMobile(false);
      } else {
        setDesktop(false);
        setMobile(true);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return { isDesktop, isMobile };
};
