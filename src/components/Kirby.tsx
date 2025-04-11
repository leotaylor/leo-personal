import React, { useEffect, useState, useRef } from 'react';
import '../styles/Kirby.css';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const Kirby: React.FC = () => {
  const [activated, setActivated] = useState(false);
  const keySequence = useRef<string[]>([]); // using ref avoids re-renders and warnings

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      keySequence.current.push(e.key);
      keySequence.current = keySequence.current.slice(-KONAMI_CODE.length);

      if (keySequence.current.join('') === KONAMI_CODE.join('')) {
        setActivated(true);
        setTimeout(() => setActivated(false), 5000); // hide after 5s
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      {activated && (
        <img src="/assets/Kirbyflyingonstar.avif" alt="Kirby" className="kirby-fly" />
      )}
    </>
  );
};

export default Kirby;
