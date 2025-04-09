import React from 'react';
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


const callbacks = {
  getWordTooltip: () => '', // overrides tooltip content to nothing
};

const options: Options = {
  fontFamily: 'Arial, sans-serif',
  fontSizes: [25, 60], // Subtle range for better readability
  fontWeight: 'bold', // Bold words for emphasis
  scale: 'linear', // Linear scale for smoother size distribution
  spiral: 'archimedean', // Natural word placement
  padding: 5, // Moderate padding for better spacing between words
  rotations: 3, // Allow rotation to multiple angles
  rotationAngles: [0, 90], // Limit rotation to horizontal and vertical
  deterministic: false, // Allow randomness for more organic look
  enableTooltip: false, // Disabling tooltips

  // Additional required properties
  enableOptimizations: true,
  fontStyle: 'normal', // Normal font style
  svgAttributes: { fill: 'black' }, // Consistent color for text
  textAttributes: { textAnchor: 'middle' }, // Center the text
  tooltipOptions: {},
  transitionDuration: 300, // Faster, smoother transitions

  // Harmonious color options
  colors: ['#4A90E2', '#50E3C2', '#F5A623', '#B8E986'],
};

const WordCloudComponent: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <WordCloud words={words} callbacks={callbacks} options={options} />
    </div>
  );
};

export default WordCloudComponent;
