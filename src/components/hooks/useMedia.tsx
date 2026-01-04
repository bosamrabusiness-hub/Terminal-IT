//src/components/hooks/useMedia.tsx

import { useState, useEffect } from 'react';

const useMedia = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Function to update state based on whether the query matches
    const handleChange = () => setMatches(mediaQueryList.matches);

    // Set the initial state
    handleChange();

    // Add event listener to track changes in media query
    mediaQueryList.addEventListener('change', handleChange);

    // Handle window resizing by checking the media query
    const handleResize = () => {
      setMatches(mediaQueryList.matches);
    };

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup listeners on unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [query]); // Re-run effect if the query changes

  return matches;
};

export default useMedia;
