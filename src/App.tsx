import React, { useState } from 'react';
import { GiftBox } from './components/GiftBox';
import { ValentineCard } from './components/ValentineCard';
import { FinalMessage } from './components/FinalMessage';

function App() {
  const [stage, setStage] = useState<'gift' | 'question' | 'final'>('gift');

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      {stage === 'gift' && <GiftBox onOpen={() => setStage('question')} />}
      {stage === 'question' && <ValentineCard onAccept={() => setStage('final')} />}
      {stage === 'final' && <FinalMessage />}
    </div>
  );
}

export default App;