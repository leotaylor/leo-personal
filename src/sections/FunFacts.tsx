// import React, {useState} from 'react';
// import '../styles/FunFacts.css';

// // Define the type for a fun fact, including background image
// type FunFact = {
//   title: string;
//   description: string;
//   backgroundImage: string;
//   bgColor: string;
// };

// // Define the funFacts array with background images
// const funFacts: FunFact[] = [
//   {
//     title: 'Drummer',
//     description: 'I love music and have been playing drums for over 25 years!',
//     backgroundImage: 'drums',
//     bgColor: '#ff6b6b',
//   },
//   {
//     title: 'Pilot',
//     description: 'Having a Pilot for a father meant that I was required to learn to fly before I learned to drive.',
//     backgroundImage: 'plane',
//     bgColor: '#9d4edd',
//   },
//   {
//     title: 'Skills',
//     description: 'I am proficient in React, TypeScript, and Front-End Design.',
//     backgroundImage: 'leo-zodiac',
//     bgColor: '#ffca3a',
//   },
//   {
//     title: 'Achievements',
//     description: 'I earned a black belt in Taekwondo at 12 years old.',
//     backgroundImage: 'taekwondo',
//     bgColor: '#2ec4b6',
//   },
// ];


// const FunFacts: React.FC = () => {

//   const [hoverColor, setHoverColor] = useState<string | null>(null);

//   return (
//     <section
//       className="fun-facts-section"
//       id="funFacts"
//       style={{
//         backgroundColor: hoverColor || '#646cff',
//         transition: 'background-color 0.5s ease',
//       }}
//     >
//       <h2>Fun Facts About Me</h2>
//       <div className="flip-cards-container">
//         {funFacts.map((fact, index) => (
//           <div
//             className="flip-card"
//             key={index}
//             onMouseEnter={() => setHoverColor(fact.bgColor)}
//             onMouseLeave={() => setHoverColor(null)}
//           >
//             <div className="flip-card-inner">
//               <div className={`flip-card-front ${fact.backgroundImage}`}>
//                 <h3 className='flip-card-title'>{fact.title}</h3>
//               </div>
//               <div className="flip-card-back">
//                 <p>{fact.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


// export default FunFacts;

import React from 'react';
import '../styles/FunFacts.css';

type FunFact = {
  title: string;
  description: string;
  backgroundImage: string;
  bgColor: string;
};

const funFacts: FunFact[] = [
  {
    title: 'Drummer',
    description: 'I love music and have been playing drums for over 25 years!',
    backgroundImage: 'drums',
    bgColor: '#ff6b6b',
  },
  {
    title: 'Pilot',
    description: 'Having a Pilot for a father meant that I was required to learn to fly before I learned to drive.',
    backgroundImage: 'plane',
    bgColor: '#9d4edd',
  },
  {
    title: 'Skills',
    description: 'I am proficient in React, TypeScript, and Front-End Design.',
    backgroundImage: 'leo-zodiac',
    bgColor: '#ffca3a',
  },
  {
    title: 'Achievements',
    description: 'I earned a black belt in Taekwondo at 12 years old.',
    backgroundImage: 'taekwondo',
    bgColor: '#2ec4b6',
  },
];

interface FunFactsProps {
  setHoverColor: (color: string | null) => void;
  hoverColor: string | null;
}

const FunFacts: React.FC<FunFactsProps> = ({ setHoverColor, hoverColor }) => {
  return (
    <section
      className="fun-facts-section"
      id="funFacts"
      style={{
        backgroundColor: hoverColor || '#646cff',
        transition: 'background-color 0.5s ease',
      }}
    >
      <h2>Fun Facts About Me</h2>
      <div className="flip-cards-container">
        {funFacts.map((fact, index) => (
          <div
            className="flip-card"
            key={index}
            onMouseEnter={() => setHoverColor(fact.bgColor)}
            onMouseLeave={() => setHoverColor(null)}
          >
            <div className="flip-card-inner">
              <div className={`flip-card-front ${fact.backgroundImage}`}>
                <h3 className='flip-card-title'>{fact.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{fact.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
