import React, { useState } from 'react';
import { GiftBox } from './components/GiftBox';
import { ValentineCard } from './components/ValentineCard';
import { FinalMessage } from './components/FinalMessage';
import { Confetti } from './components/Confetti';

function App() {
  const [stage, setStage] = useState('gift');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStageChange = (newStage) => {
    setShowConfetti(true);
    setTimeout(() => {
      setStage(newStage);
      setTimeout(() => setShowConfetti(false), 3000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      {showConfetti && <Confetti />}
      {stage === 'gift' && <GiftBox onOpen={() => handleStageChange('question')} />}
      {stage === 'question' && <ValentineCard onAccept={() => handleStageChange('final')} />}
      {stage === 'final' && <FinalMessage />}
    </div>
  );
}

export default App;