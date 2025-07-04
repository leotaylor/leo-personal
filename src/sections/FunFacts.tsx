import React, {useCallback, useRef} from 'react';
import { useVisitedSections } from '../context/VisitedSectionsContext';
import { useInView } from '../hooks/useInView';

import '../styles/FunFacts.css';

type FunFact = {
  title: string;
  description: string;
  backgroundImage: string;
  bgColor: string;
  clue?: string;
  tooltip?: string;
  sectionBgImage?: string;
  titleColor?: string;
};

const funFacts: FunFact[] = [
  {
    title: 'Drummer',
    description: 'I love music and have been playing drums for over 25 years!',
    backgroundImage: 'drums',
    bgColor: '#ff6b6b',
    clue: "There are some hidden features on this site..."
  },
  {
    title: 'Pilot',
    description: 'Having a Pilot for a father meant that I was required to learn to fly before I learned to drive.',
    backgroundImage: 'plane',
    bgColor: '#9d4edd',
    clue: 'One requires your keyboard...'
  },
  {
    title: 'Astrologically Redundant',
    description: 'My Name is Leo, and yes I am also a Leo.',
    backgroundImage: 'leo-zodiac',
    bgColor: '#ffca3a',
    clue: 'Do you know the Konami code?',
    tooltip: 'up up down down left right left right b a',
    titleColor: '#242424',
  },
  {
    title: 'Fantasy Football',
    description: 'Frequent fantasy football league champion here! Draft day is my Super Bowl, and I approach it like I am writing code: no bugs, no mercy.',
    backgroundImage: 'fantasyfb',
    bgColor: '#116d01',
    clue: 'See More...',
    tooltip: " You may find me deep in spreadsheets, analyzing stats and trends, looking for that edge. I even made a draft day helper app just to get a competitive advantage. When it's time for the season to start, I'm ready to leave my competition in the dust.",
    sectionBgImage: '/assets/football-field.png',
    titleColor: '#242424',
  }
];

interface FunFactsProps {
  setHoverColor: (color: string | null) => void;
  hoverColor: string | null;
  setSectionBgImage: (img: string | null) => void;
  sectionBgImage: string | null;
  setTitleColor: (color: string | null) => void;
  titleColor: string | null;
}

const FunFacts: React.FC<FunFactsProps> = ({ setHoverColor, hoverColor, setSectionBgImage, sectionBgImage, setTitleColor, titleColor }) => {
  const { markVisited } = useVisitedSections();
  const ref = useRef<HTMLElement>(null);

  useInView(ref, () => markVisited('funFacts'));

  const handleMouseEnter = useCallback((fact: FunFact) => {
    setHoverColor(fact.bgColor);
    setSectionBgImage(fact.sectionBgImage || null);
    setTitleColor(fact.titleColor || null);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setHoverColor(null);
    setSectionBgImage(null);
    setTitleColor(null);
  }, []);

  return (
    <section
      className="fun-facts-section"
      id="funFacts"
      ref={ref}
      style={{
        background: sectionBgImage
          ? `${hoverColor || '#646cff'} url(${sectionBgImage}) center / cover no-repeat`
          : hoverColor || '#646cff'
      }}
    >
      <h2 style={titleColor ? { color: titleColor } : undefined}>
        Fun Facts About Me
      </h2>      <div className="flip-cards-container">
        {funFacts.map((fact, index) => (
          <div
            className="flip-card"
            key={index}
            onMouseEnter={() => handleMouseEnter(fact)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flip-card-inner">
              <div className={`flip-card-front ${fact.backgroundImage}`}>
                <h3 className='flip-card-title'>{fact.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{fact.description}</p>
                {fact.clue && (
                  <p className="clue">
                    <span className="tooltip-wrapper">
                      {fact.clue}
                      {fact.tooltip && (
                        <span className="tooltip">{fact.tooltip}</span>
                      )}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
