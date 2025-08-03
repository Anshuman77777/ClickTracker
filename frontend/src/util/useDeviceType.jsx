import { useEffect, useState } from 'react';

export function useDeviceType() {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setDevice(width <= 768 ? 'Mobile' : 'Desktop');
    };

    checkDevice(); // Check on mount
    window.addEventListener('resize', checkDevice); // Check on resize

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return device;
}
