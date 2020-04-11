import React, { FC, useState } from 'react';
import { ScandiskCheck } from './components/ScandiskCheck';

type AppPhase = 'CHECKING' | 'SURFACE' | 'SUMMARY';

const App: FC = () => {
  const [phase, setPhase] = useState<AppPhase>('CHECKING');

  if (phase === 'CHECKING') {
    return <ScandiskCheck/>;
  }

  return null;
}

export default App;
