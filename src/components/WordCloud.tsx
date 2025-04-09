import React, { useEffect, useState } from 'react';
import WordCloud, { Options } from 'react-wordcloud';

interface Word {
  text: string;
  value: number;
}

const words: Word[] = [
  { text: 'Dependable', value: 1000 },
  { text: 'Shape-Shifter', value: 850 },
  { text: 'Easy Going', value: 750 },
  { text: 'Humble', value: 850 },
  { text: 'Meticulous', value: 800 },
  { text: 'Life Saver', value: 850 },
  { text: 'Leader', value: 1000 },
  { text: 'Knowledgeable', value: 950 },
  { text: 'Funny', value: 750 },
  { text: 'Quick Study', value: 800 },
  { text: 'Smart', value: 800 },
  { text: 'Mentor', value: 700 },
  { text: 'Quick', value: 600 },
  { text: 'Problem Solver', value: 1000 },
  { text: 'Adaptable', value: 900 },
  { text: 'Proactive', value: 850 },
  { text: 'Strategic', value: 900 },
  { text: 'Resourceful', value: 800 },
  { text: 'Team Player', value: 650 },
  { text: 'Empathetic', value: 1000 },
  { text: 'Supportive', value: 900 },
  { text: 'Approachable', value: 800 },
  { text: 'Kind', value: 850 },
  { text: 'Patient', value: 800 },
  { text: 'Calm Under Pressure', value: 700 },
  { text: 'Chill', value: 750 },
  { text: 'Ninja', value: 700 },
];

const wordsToDisplay = window.innerWidth <= 768 ? words.slice(0, 16) : words;

const callbacks = {
  getWordTooltip: () => '',
};

const options: Options = {
  fontFamily: 'Arial, sans-serif',
  fontSizes: [20, 50],
  fontWeight: 'bold',
  scale: 'linear',
  spiral: 'archimedean',
  padding: 5,
  rotations: 3,
  rotationAngles: [0, 90],
  deterministic: false,
  enableTooltip: false,
  enableOptimizations: true,
  fontStyle: 'normal',
  svgAttributes: { fill: 'black' },
  textAttributes: { textAnchor: 'middle' },
  tooltipOptions: {},
  transitionDuration: 300,
  colors: ['#4A90E2', '#50E3C2', '#F5A623', '#B8E986'],
};

const WordCloudComponent: React.FC = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // change key to force re-render
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <WordCloud
        key={key}
        words={wordsToDisplay}
        callbacks={callbacks}
        options={options}
      />
    </div>
  );
};

export default WordCloudComponent;
